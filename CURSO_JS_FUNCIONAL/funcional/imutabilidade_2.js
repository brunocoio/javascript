const nums = [4, 8, 3, 2, 9, 1, 9, 3]

function somarArr(array, total = 0) {
    if (array.length === 0) {
        return total
    }
    return somarArr(array.slice(1), total + array[0])
}

const total = somarArr(nums)
console.log(total)