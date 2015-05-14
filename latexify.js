var fs = require('fs');

var header = fs.readFileSync('header', 'utf8');
var input = fs.readFileSync('paper-tex.txt', 'utf8');
var output = input;
var k;

var fixes = [];

// fixes.push({push: '\'\'(.+)"', replacement: SERVIREBBE UNA FUNZIONE});
// fixes.push({ key: "''", replacement: '``' });
// fixes.push({ key: '"', replacement: "''" });
// fixes.push({ key: "”", replacement: "\"" });
// fixes.push({ key: "%", replacement: "\\%" });
// fixes.push({ key: "$", replacement: "\\$" });
// fixes.push({ key: /(.*\n)+\\documentclass\{sig-alternate\}/m, replacement: "\\documentclass{sig-alternate}" });
fixes.push({ key: /_________+/g, replacement: '' });
// fixes.push({ key: '\\documentclass{sig-alternate}', replacement: header });
// fixes.push({ key: '\\end\{document\}(.*\n)+', replacement: ''});

fixes.forEach(function (obj) {
  output = output.replace(obj.key, obj.replacement);
});

fs.writeFileSync('test.tex', output, 'utf8');
