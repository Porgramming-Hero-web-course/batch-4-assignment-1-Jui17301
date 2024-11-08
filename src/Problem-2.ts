{
    //

const removeDuplicates=(arr:number[]):number[]=> {
   return arr.filter((item,index)=>

        arr.indexOf(item)===index
    )  
}
const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// console.log(result);
//
}