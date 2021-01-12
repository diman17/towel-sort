
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length == 0 || matrix.length == 0) {
        return []
    }
    let newMatrix = matrix.map(function(item, index) {
        if (index % 2 === 1) {
            return item.reverse()
        }
        return item
    })
    let result = []
    for (let i = 0; i < newMatrix.length; i++) {
        for (let j = 0; j < newMatrix[i].length; j++) {
            result.push(newMatrix[i][j])
        }
        
    }
  return result
}
