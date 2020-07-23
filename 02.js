class Combine {
    
    arrayJoin(first, second, third) {
        const combineStr = first.concat(second).concat(third)
        return combineStr.join(' ')
    }

}

const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

const combine = new Combine()
console.log(combine.arrayJoin(first, second, third))
