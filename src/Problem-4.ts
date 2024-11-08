{
    //

 type TCircle = { 
    shape: "circle"; 
    radius: number
 }

type TRectangle = { 
    shape: "rectangle"; width: number; 
    height: number 
}
 type TShape = TCircle | TRectangle;


 const calculateShapeArea = (shape: TShape): number => {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.width * shape.height;
    }
};

const result = calculateShapeArea({ shape: "circle", radius: 5 })
const result1 = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 })

// console.log(result.toFixed(2));
// console.log(result1.toFixed(2));




    //
}