const decoder = (code) => {
  let decoded = [];
  for (let i = 0; i < code.length; i += Number(code[i]) + 2) {
    decoded.push(code[Number(code[i]) + i + 1]);
  }
  return decoded.join("");
};

console.log(decoder("0h2xce5ngbrdy"), "should be `hey`");
console.log(decoder("3vdfn"), "should be `n`");
console.log(decoder("0r"), "should be `r`");
console.log(decoder("2bna0p1mp2osl0e"), "should be `apple`");
console.log(decoder("0y4akjfe0s"), "should be `yes`");
