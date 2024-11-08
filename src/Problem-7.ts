{
    //

    class Car {
        constructor(
            public make: string, 
            public model: string, 
            public year: number) {}
    
            getCarAge(): number {
                const currentYear = new Date().getFullYear();
                return currentYear - this.year;
            }
        
    }
    
    const carResult = new Car("Honda", "Civic", 2019);
    const result = carResult.getCarAge();

    // console.log(result);
    




    //
}