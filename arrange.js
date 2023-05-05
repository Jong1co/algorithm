const path = require("path");
const fs = require("fs");

const folder = process.argv[2];
const workingDir = path.join(__dirname, "programmers");

if (!folder) {
  console.log("폴더 이름을 입력해주세요.");
  return;
}

function move(file) {
  const questionId = file.match(/\d+/g)[0];
  if (!fs.existsSync(path.join(workingDir, questionId))) {
    fs.mkdirSync(path.join(workingDir, questionId));
  }
  fs.rename(
    path.join(workingDir, file),
    path.join(workingDir, questionId, file),
    console.error
  );
}

fs.readdir(workingDir, (error, filelist) => {
  filelist.forEach((file) => move(file));
});
