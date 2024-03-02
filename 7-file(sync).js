const {readFileSync, writeFileSync}=require('fs');

const first= readFileSync('./content/file1.txt','utf-8');
const second= readFileSync('./content/subfolder/file2.txt','utf-8');
console.log(first,second);
writeFileSync('./content/result.txt', `Here is the concat of 2 file : ${first} ${second}`,{flag:'a'});