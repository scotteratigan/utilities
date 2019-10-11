"use strict";

function deepFreeze(object) {
  // Recursively freeze an object.
  const keys = Object.keys(object);
  const newObj = {};
  keys.forEach(key => {
    const newVal = object[key];
    newObj[key] = typeof newVal === "object" ? deepFreeze(newVal) : newVal;
  });
  return Object.freeze(newObj);
}

module.exports = {
  deepFreeze
};
