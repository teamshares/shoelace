import fs from 'fs';
import path from 'path';

function copyTsFiles(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const fullPath = path.join(dir, dirent.name);

    if (dirent.isDirectory()) {
      copyTsFiles(fullPath);
    } else if (
      dirent.isFile() &&
      path.extname(dirent.name) === '.ts' &&
      !dirent.name.endsWith('.styles.ts') &&
      !dirent.name.endsWith('test.ts')
    ) {
      const newFileName = path.basename(dirent.name, '.ts') + '.component.ts';
      const newFilePath = path.join(dir, newFileName);
      fs.copyFileSync(fullPath, newFilePath);
    }
  });
}

copyTsFiles('./src/components'); // replace './src/components' with your directory path
