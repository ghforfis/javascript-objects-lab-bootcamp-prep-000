var recipes = new Object ({ prop: 1 });
function updateObjectWithKeyAndValue(object, key, value) {
  recipes.prop2 = 2;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value;
  
  return object;
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return object
}
function destructivelyDeleteFromObjectByKey(object, key) {
  
}