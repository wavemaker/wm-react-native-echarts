const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const root = process.cwd();
const componentsDir = path.join(root, 'components');
const destWmxDir = path.join(root, 'dist', 'wmx');

const findWmxPackageJson = (dir, handleFile) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findWmxPackageJson(filePath, handleFile);
    } else if (file === 'wmx.package.json') {
      handleFile(filePath);
    }
  });
};

const log = (msg, ...args) => console.log(`[generate-wmx] ${msg}`, ...args);

const generateWMXZip = (wmxPackageJsonPath) => {
  log('Reading %s', wmxPackageJsonPath);
  const wmxSrcDir = path.dirname(wmxPackageJsonPath);
  const wmxPackageJson = fs.readFileSync(wmxPackageJsonPath, 'utf8');
  const packageJSON = JSON.parse(wmxPackageJson);
  const wmxJSON = packageJSON.wmx;
  delete packageJSON.wmx;
  wmxJSON.name = packageJSON.name;
  wmxJSON.version = packageJSON.version;
  wmxJSON.displayName = packageJSON.displayName;
  wmxJSON.description = packageJSON.description;
  wmxJSON.iconUrl = packageJSON.iconUrl;
  wmxJSON.webSupport = packageJSON.webSupport !== false;
  wmxJSON.preview = packageJSON.preview;
  delete packageJSON.preview;
  wmxJSON.requires = packageJSON.requires;
  delete packageJSON.requires;
  wmxJSON.component = packageJSON.component;
  delete packageJSON.component;
  const destWmxDir = path.join(root, 'dist', 'wmx', packageJSON.name);
  fs.mkdirSync(destWmxDir, { recursive: true });
  fs.writeFileSync(path.join(destWmxDir, 'package.json'), JSON.stringify(packageJSON, null, 2));
  fs.copyFileSync(path.join(wmxSrcDir, packageJSON.iconUrl), path.join(destWmxDir, 'icon.svg'));
  fs.writeFileSync(path.join(destWmxDir, 'wmx.json'), JSON.stringify(wmxJSON, null, 2));
  wmxJSON.preview?.forEach(preview => {
    fs.copyFileSync(path.join(wmxSrcDir, preview), path.join(destWmxDir, preview));
  });
  const wmxZipPath = path.join(root, 'dist', 'wmx', packageJSON.name + '.zip');
  fs.mkdirSync(path.dirname(wmxZipPath), { recursive: true });
  const zip = new AdmZip();
  zip.addLocalFolder(destWmxDir);
  zip.writeZip(wmxZipPath);
  log('Built %s (%s) -> %s', packageJSON.name, packageJSON.version, wmxZipPath);
};

const generateWMX = () => {
  log('Starting WMX generation (components: %s, output: %s)', componentsDir, destWmxDir);
  if (fs.existsSync(destWmxDir)) {
    log('Cleaning existing output directory');
    fs.rmSync(destWmxDir, { recursive: true });
  }
  fs.mkdirSync(destWmxDir, { recursive: true });
  let count = 0;
  findWmxPackageJson(componentsDir, (filePath) => {
    generateWMXZip(filePath);
    count++;
  });
  log('Done. Generated %d WMX package(s)', count);
};

generateWMX();