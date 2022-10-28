//Utility types help with type manipulation
const Utility = () => {
/*Partial
Partial changes all the properties in an object to be optional.
*/
interface Point {
    x: number;
    y: number;
  }
  // `Partial` allows x and y to be optional
  let pointPart: Partial<Point> = {}; 
  pointPart.x = 10;
  console.log(pointPart);

/* Required 
Required changes all the properties in an object to be 
required. */
  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
  
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };
  console.log(myCar);

/*Record
Record is a shortcut to defining an object type with a 
specific key type and value type. 
Record<string, number> is equivalent to { [key: string]: number }
*/

const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};
  
console.log(nameAgeMap);

/*Omit
Omit removes keys from an object type. */
interface Person {
    name: string;
    age: number;
    location?: string;
}
      
const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
/* `Omit` has removed age and location from the 
type and they can't be defined here
*/
};
console.log(bob);

/*Pick
Pick removes all but the specified keys from an object type. */
interface Staff {
    name: string;
    age: number;
    location?: string;
  }
  
  const fadeke: Pick<Staff, 'name'> = {
    name: 'Fadeke'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };
  console.log(fadeke);

/*Exclude
Exclude removes types from a union. */

type Primitive = string | number | boolean;

const value: Exclude<Primitive, string> = true;
// a string cannot be used here since Exclude removed it from the type.

console.log(typeof value);

/*
ReturnType
ReturnType extracts the return type of a function type. */
type PointGenerator = () => { x: number; y: number; };

const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};
console.log(point);
/*Parameters
Parameters extracts the parameter types of a function type
 as an array. */
 type PointPrinter = (p: { x: number; y: number; }) => void;

const points: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};
console.log(points);

  return (
    <div>Utility</div>
  );
};

export default Utility;