var recipes = new Object ({ prop: 1 });
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(obj, key, value) {
  var obj = { prop: 1 };
  obj = {
        prop: 1,
        prop2: 2
      };
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return object
}


function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}



function deleteFromObjectByKey(obj, key){
 
var newObj = Object.assign({}, recipes)
 
newObj 
 
delete newObj.key
 
newObj
}