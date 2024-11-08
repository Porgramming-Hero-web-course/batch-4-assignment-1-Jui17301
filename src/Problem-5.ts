{
    //

    const getProperty=<T,K extends keyof T>(object:T,key:K)=>{
     return object[key];
    }
    const person = { name: "Alice", age: 30 };
    const result = getProperty(person,"name");
    // console.log(result);



    //
}