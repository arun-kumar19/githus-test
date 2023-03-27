const arr=[1,4,5,7,9,15];

let max1=Number.MIN_VALUE;
let max2=Number.MIN_VALUE;

for(let i=0;i<arr.length;i++){

    if(arr[i]>max1){
        max2=max1;
        max1=arr[i];
    }

}

console.log(max2);