
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  if (!matrix || matrix.length === 0) return array;  
  for (let i=0; i<matrix.length; i++) {
     if (i%2 === 0) {
         array = array.concat(matrix[i]);
     }
     else {
         reverseArray = matrix[i].reverse();
         array = array.concat(reverseArray);
     }     
    }
    return array;
}
