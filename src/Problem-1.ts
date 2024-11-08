
const sumArray=(arr:number[]):number=>{
    let sum:number =0;
    arr.map(i=>{
        sum = sum+i;       
    })
    return sum
}
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);