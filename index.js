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

function jsonToCSV(data) {
  /*
  Takes a JSON array and converts it to a csv string
  
  input:
  {[
  {id: 1, name: "Jim"},
  {id: 2, name: "Joe"},
  {id: 3, name: "Jaime"}
  ]}
  
  output:
  id,name
  1,Jim
  2,Joe
  3,Jaime
  
  Note: does not currently escape commas in data.
  */
  
  return (
    Object.keys(data[0]).join(",") +
    "\n" +
    data.map(obj => Object.values(obj).join(",")).join("\n")
  );
}

module.exports = {
  deepFreeze
};
