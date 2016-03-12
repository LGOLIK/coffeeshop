/* Converts arrays to objects */
/* Created this utility function because we'll frequently be converting arrays->objects */
Array.prototype.indexByKey = function(keyName) {
  return this.reduce( (obj, el) => {
    obj[ el[keyName] ] = el;
    return obj;
  }, {});
};



var a = [{
  id: 1,
  val: 'some string'
},
{
  id: 2,
  val: 'some string 2'
},
{
  id: 3,
  val: 'some string 3'
}]

a.indexByKey('id');

// {
//   1: {
//     id: 1,
//     val: 'some string'
//   },
//   2: {}
// }
