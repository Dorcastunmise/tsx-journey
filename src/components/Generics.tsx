/*Generics allow creating 'type variables' which can be used to 
create classes, functions & type aliases that don't need to 
explicitly define the types that they use.
Generics makes it easier to write reusable code.
*/

/*Generics with functions help make more generalized methods 
which more accurately represent the types used and returned.*/

const Generics = () => {
    function createPair<S, T>(v1: S, v2: T): [S, T] {
        return [v1, v2];
    }
    console.log(createPair<string, number>('hello', 42));

//Generics can be used to create generalized classes, like Map.
    class NamedCeramic<T> {
        private _value: T | undefined;
      
        constructor(private name: string) {}
      
        public setValue(value: T) {
          this._value = value;
        }
      
        public getValue(): T | undefined {
          return this._value;
        }
      
        public toString(): string {
          return `${this.name}: ${this._value}`;
        }
      }
            
      const sectors = new NamedCeramic<number>('myNumber');
      
      sectors.setValue(10);
      
      console.log(sectors.toString()); 

/*Generics in type aliases allow creating types that are more 
reusable.*/
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };


/* Generics can be assigned default 
values which apply if no other value is specified or inferred.*/
class NamedValue<T = string> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue('myNumber');
  value.setValue('myValue');
  console.log(value.toString());


/* Extends
Constraints can be added to generics to limit what's allowed.
The constraints make it possible to rely on a more specific 
type when using the generic type.
 */
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
  }
  return (
    <div>Generics</div>
  )
}

export default Generics