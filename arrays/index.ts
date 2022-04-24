const carMakers: string[] = ['maruti', 'toyota'];
carMakers.push("BMW");


function flatten(nestedArray, res = []) {
  for (let ele of nestedArray) {
    if (Array.isArray(ele)) {
      flatten(ele, res)
    } else {
      res.push(ele)
    }
  }
  console.log(res)
}

const numbers = [1, 2, [2, 3, [2, 3, 4]]]
flatten(numbers)

// Mixed types 
const mixedArray: (string | number | { street: string, pin: number })[] = ['Hasan', 23, { street: 'Bholla', pin: 731224 }]


