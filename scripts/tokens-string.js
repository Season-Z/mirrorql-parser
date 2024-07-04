const fs = require('fs');
const path = require('path');

const tokens = fs
    .readFileSync(path.join(__dirname, '../src/antlr/MirrorQL.tokens'))
    .toString()

function rsplit(data, value) {
    const index = data.lastIndexOf(value)
    return [data.substring(0, index), data.substring(index + 1, data.length)]
}


function normalizeTokenType(value) {
  if (value.endsWith("'")) {
    value = value.substring(0, value.length - 1)
  }
  if (value.startsWith("'")) {
    value = value.substring(1, value.length)
  }
  return value
}

function getTokenTypeMap() {
  return tokens
    .split('\n')
    .map((line) => rsplit(line, '='))
    .reduce((acum, [value, key]) => {
      const keyNumber = parseInt(key, 10)
      if (!isNaN(keyNumber)) acum[keyNumber] = normalizeTokenType(value)
      return acum
    }, {})
}

fs.writeFileSync(
  `${__dirname}/../src/antlr/MirrorQLTokens.ts`,
  `export const tokens: Record<string, string> = ${JSON.stringify(getTokenTypeMap(), null, 2)}`
)
