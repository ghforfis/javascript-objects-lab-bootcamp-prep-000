var recipes = new Object ({ prop: 1 });
function updateObjectWithKeyAndValue(object, key, value) {
  recipes.prop2 = 2;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object = {
    prop: 1,
    prop2:2
  };
  return object;
}