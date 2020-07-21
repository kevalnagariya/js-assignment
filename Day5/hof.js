var arr = [];
var size = 5; //Maximum Array size
for(var i=0; i<size; i++) {
    //Taking Input from user
	arr[i] = prompt('Enter Element ' + (i+1));
}

//Print the array in the console.
console.log(arr);

let odd = arr.filter(el=>el%2!=0);

let oddCubes = odd.filter(el=>el%2!=0).map(el=>el**3);


console.log(odd);
console.log(oddCubes);