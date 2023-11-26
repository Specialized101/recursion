
function fibs(n) {

    let arr = [0, 1]

    if (n < 0) return []
    if (n === 0) return [arr[0]]
    if (n === 1) return arr


    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1]


    }

    return arr

}

function fibsRec(n, arr = [0, 1]) {

    if (arr.length === n) return arr

    let currentIndex = arr.length

    arr[currentIndex] = arr[currentIndex - 2] + arr[currentIndex - 1]

    return fibsRec(n, arr)
}

console.log(fibs(10))
console.log(fibsRec(10))

