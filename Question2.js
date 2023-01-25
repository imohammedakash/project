const integer = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const targetNumber = 5

const array = []

for (i = 0; i < integer.length - 1; i++) {

    for (j = 1; j < targetNumber.length; j++) {

        if (integer[i] + integer[j] !== targetNumber) {
            
            continue
        } else {
            array.push(integer[i])
        }


    }
}

console.log(array)