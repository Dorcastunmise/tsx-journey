const Inheritance = () => {
    /*Interfaces (covered here) can be used to define the type a 
class must follow through the "implements" keyword.
*/
interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
const myRect = new Rectangle(10,20);

console.log(myRect.getArea());

/*Inheritance: Extends
Classes can extend each other through the extends keyword.
 A class can only extends one other class. */
 interface Shape {
    getArea: () => number;
  }
  
  class Rectangular implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangular {
    public constructor(width: number) {
      super(width, width);
    }
  
    // getArea gets inherited from Rectangular
  }
  const mySq = new Square(20);

  console.log(mySq.getArea());
  return (
    <div>Inheritance</div>
  )
}

export default Inheritance