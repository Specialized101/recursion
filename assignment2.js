
function merge(leftArray, rightArray){

    const res = []

    let leftIndex = 0
    let rightIndex = 0

    // comparing left values with right values
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        leftArray[leftIndex] < rightArray[rightIndex] ? res.push(leftArray[leftIndex++]) : res.push(rightArray[rightIndex++])
    }

    // push the leftover left values if right side finished first

    while (leftIndex < leftArray.length) res.push(leftArray[leftIndex++])

    // push the leftover right values if left side finished first

    while (rightIndex < rightArray.length) res.push(rightArray[rightIndex++])
    
    return res

}

function mergeSort(array) {
    if (array.length === 1) return array

    let mid = Math.floor(array.length / 2)
    let leftArray = array.slice(0, mid)
    let rightArray = array.slice(mid)


    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const array = [0, 45, 12, 5, 3, 784, 55, 25, 100, 2]

console.log(mergeSort(array))