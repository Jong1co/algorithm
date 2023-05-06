const fs = require('fs');
const path = require('path');
const { testForm } = require('./form');

const [code, filename] = process.argv[2].split('/');

const platform = {
    p: 'programmers',
    l: 'leetcode',
};

const workingDir = path.join(__dirname, platform[code], filename);

if (!filename) {
    console.log('폴더 이름을 확인하시오');
    return;
}

if (!fs.existsSync(workingDir)) {
    fs.promises.mkdir(workingDir);
}

if (!fs.existsSync(workingDir)) {
    fs.writeFile(path.join(workingDir, `${filename}.js`), '//솔루션을 함수를 복붙해주세요', console.error);
    fs.writeFile(path.join(workingDir, `${filename}.test.js`), testForm(filename), console.error);
} else {
    fs.readdir(path.join(workingDir), (err, data) => {
        const copyNumber = Math.ceil(data.length / 2) + 1;
        const duplicatedFilename = `${filename}-${copyNumber}`;

        fs.writeFile(path.join(workingDir, `${duplicatedFilename}.js`), '//솔루션을 함수를 복붙해주세요', console.error);
        fs.writeFile(path.join(workingDir, `${duplicatedFilename}.test.js`), testForm(duplicatedFilename), console.error);
    });
}
