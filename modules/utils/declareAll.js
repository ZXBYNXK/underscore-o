module.exports = (object) => {
  let template = ``;
  Object.keys(object).forEach((key) => {
    template += `const ${key} = ${object[key]};\n`;
  });
  return template;
}