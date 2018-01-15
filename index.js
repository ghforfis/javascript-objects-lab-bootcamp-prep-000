var recipes = new Object ({ prop: 1 });
function updateObjectWithKeyAndValue(object, key, value) {
  recipes.prop2 = 2;
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  var object = Object.assign({}, {});
  delete [key];
}