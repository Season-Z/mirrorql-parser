const fs = require("node:fs");
const parser = require(".");
const tokenize = require(".");
const path = require('node:path')

if (!process.argv[2]) {
  console.error("No filename given");
  process.exit(1);
}

const fileName = process.argv[2];

// const content = fs.readFileSync(fileName).toString()
const content = fs.readFileSync(path.resolve(__dirname, fileName), 'utf-8');
const ast = parser.parse(fileName, content, { loc: true, tokens: true, comments: true });
console.log('ast', ast)

// const token = tokenize.tokenize(content);
// console.log(token)
// const ast =parser.parse(content, { loc: true , tokens: true})
// const ast = parser.parse(fileName, { loc: true, tokens: true, comments: true });

// try {
//   // console.log(JSON.stringify(ast, null, 2))
//   fs.writeFileSync(fileName + ".ast.json", JSON.stringify(ast, null, 2));
// } catch (e) {
//   console.error(e);
// }
