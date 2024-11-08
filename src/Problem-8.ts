{
    //



    function validateKeys(obj: any, keys: string[]): boolean {
        for (let key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }
    
    const personObj = { name: "Alice", age: 25, email: "alice@example.com" };
    const result = validateKeys(personObj, ["name", "age"])
    // console.log(result);
    





    //
}