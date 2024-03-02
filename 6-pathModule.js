const path= require('path')

console.log(path.sep);
const filePath= path.join('/content/','subdir','test.txt')
console.log(filePath)
console.log(path.basename(filePath))

//Absolute path
const absolutePath=path.resolve(__dirname,'content/subfolder','test.txt' );
console.log(absolutePath)