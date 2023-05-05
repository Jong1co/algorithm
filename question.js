const fs = require("fs");
const path = require("path");

const folder = process.argv[2];
const workingDir = path.join(__dirname, "programmers", folder);

if (!folder || fs.existsSync(workingDir)) {
  console.log("폴더 이름을 확인하시오");
  return;
}

fs.mkdirSync(workingDir);

fs.writeFile(path.join(workingDir, folder, ".js"), console.error);
fs.writeFile(path.join(workingDir, folder, ".test", ".js"), console.error);
