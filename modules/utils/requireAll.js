export default (object) => {
    let template = ``;
    Object.keys(object).forEach((key) => {
        template += `import ${key} from '${object[key]}';\n`;
    });
    return template;
};