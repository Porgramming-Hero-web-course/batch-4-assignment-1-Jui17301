{
    //


interface IProfile {
       name:string;
       age:number;
       email:string;
}

const profile=(profile:IProfile,updates:Partial<IProfile>):IProfile=>{
return {...profile,...updates}
}


const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
const result = profile(myProfile, { age: 26 })
// console.log(result);

    //
}