function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item,index) => item === arr2[index])
}

console.log(compareArrays([8, 1, 2], [8, 1, 2]))

function advancedFilter(arr) {
    return arr.filter((arr) => arr > 0).filter((arr) => arr % 3 === 0).map((arr) => arr * 10)
}

console.log(advancedFilter([-1,6,-9,3,]))
