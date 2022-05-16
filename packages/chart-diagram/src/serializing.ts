export let reviver = (key, value) => {
  if (typeof value === 'string' && value.indexOf('function') !== -1) {
    let functionTemplate = `(${value})`;
    return eval(functionTemplate);
  }
  return value;
};

export let replacer = (key, value) => {
  // if we get a function, give us the code for that function
  if (typeof value === 'function') {
    return value.toString();
  }
  return value;
};
