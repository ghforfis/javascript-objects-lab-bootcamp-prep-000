var recipes = new Object ({ prop: 1 });
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return 
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}