module.exports = function countCats(matrix) {
  const cat = "^^";
  let count = 0;
  let arr = matrix.flat();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]===cat) {
      count++;
    }
  }
  return count;
};
