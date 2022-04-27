

function toggler(arr){

    arr = arguments;
    var i = 1;

    return function(){
        i = i + 1;
        if(i >= arr.length){
            i = 0;
        }
        return arr[i]
    }
}

const toggle1 = toggler([1, 2, 3, 4, 5]);

console.log(toggle1())
console.log(toggle1())
console.log(toggle1())
console.log(toggle1())
console.log(toggle1())

const toggle2 = toggler(['On', 'Off']);

console.log(toggle2())
console.log(toggle2())
console.log(toggle2())
console.log(toggle2())
console.log(toggle2())