const path=require('path');
const filename =path.join(__filename);
const basename=path.basename(filename);
const ex=path.extname(basename);
console.log(filename);
console.log(basename);
console.log(ex);
