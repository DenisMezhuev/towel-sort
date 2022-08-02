
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if(matrix === undefined ) return [];
  let arr= []
  matrix.forEach((element, index) => {
        if(index % 2 !== 0){
            arr.push(element.reverse())
        }else{
          arr.push(element)
        }
       
  });
  return arr.flat();

}
