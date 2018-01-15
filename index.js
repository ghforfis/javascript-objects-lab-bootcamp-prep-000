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
      
  object.key = value;
  console.log (object)
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}

function deleteFromObjectByKey(obj, key){
      var obj = { prop: 1 }
      var newObj = {prop: 2}
  
} 
  
  
function deleteFromObjectByKey(obj, key){
 
var newObj = Object.assign({}, obj)
 
 
delete newObj.key
 
return newObj
}

