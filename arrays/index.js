var carMakers = ['maruti', 'toyota'];
carMakers.push("BMW");
function flatten(nestedArray, res) {
    if (res === void 0) { res = []; }
    for (var _i = 0, nestedArray_1 = nestedArray; _i < nestedArray_1.length; _i++) {
        var ele = nestedArray_1[_i];
        if (Array.isArray(ele)) {
            flatten(ele, res);
        }
        else {
            res.push(ele);
        }
    }
    console.log(res);
}
var numbers = [1, 2, [2, 3, [2, 3, 4]]];
flatten(numbers);
// Mixed types 
var mixedArray = ['Hasan', 23, { street: 'Bholla', pin: 731224 }];
