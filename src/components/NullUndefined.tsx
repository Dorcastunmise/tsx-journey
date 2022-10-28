/*By default null and undefined handling is disabled,
and can be enabled by setting strictNullChecks to true.
When strictNullChecks is enabled, TypeScript requires values
to be set unless undefined is explicitly added to the type. */
const NullUndefined = () => {
    let value: string | undefined | null = null;
    console.log(typeof value);
    
    value = 'hello';
    console.log(typeof value);
    
    value = undefined;
    console.log(typeof value);

    /* Optional Chaining
    Optional Chaining is a JavaScript feature that works well 
    with TypeScript's null handling. It allows accessing 
    properties on an object, that may or may not exist, 
    with a compact syntax. 
    It can be used with the ?. operator when accessing 
    properties.*/
    interface House {
        sqft: number;
        yard?: {
          sqft: number;
        };
      }
      function printYardSize(house: House) {
        const yardSize = house.yard?.sqft;
        if (yardSize === undefined) {
          console.log('No yard');
        } else {
          console.log(`Yard is ${yardSize} sqft`);
        }
      }
      
      let home: House = {
        sqft: 500
      };
      
      printYardSize(home); 
    /*Nullish Coalescence
Nullish Coalescence is another JavaScript feature that 
also works well with TypeScript's null handling. 
It allows writing expressions that have a fallback specifically 
when dealing with null or undefined. 
This is useful when other falsy values can occur in the
expression but are still valid. It can be used with the ?? 
operator in an expression, similar to using the && operator. */
function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
  }
  
  printMileage(null); // Prints 'Mileage: Not Available'
  printMileage(0); // Prints 'Mileage: 0'
  
  /*Null Assertion
TypeScript's inference system isn't perfect, there are times 
when it makes sense to ignore a value's possibility of being 
null or undefined. An easy way to do this is to use casting, 
but TypeScript also provides the ! operator as a convenient 
shortcut. */
function getValue(): string | undefined {
    return 'hello';
  }
              
  let sector = getValue();
  console.log('value length: ' + sector!.length);

/*Array bounds handling
Even with strictNullChecks enabled, by default TypeScript 
will assume array access will never return undefined 
(unless undefined is part of the array type).
The config noUncheckedIndexedAccess can be used to change 
this behavior. */
  let array: number[] = [1, 2, 3];

let example = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`
console.log(example);
return (
    <div>NullUndefined</div>
  );
};

export default NullUndefined;