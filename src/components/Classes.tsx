const Classes = () => {
    class Person {
        private name: string;
      
        public constructor(name: string) {
          this.name = name;
        }
      
        public getName(): string {
          return this.name;
        }
      }
// person.name isn't accessible from outside the class since it's private
      const person = new Person("Jane");
      console.log(person.getName()); 


      class Security {
// name is a private member variable
        public constructor(private name: string) {}
      
        public getName(): string {
          return this.name;
        }
      }
      
      const security = new Security("Jane");
      console.log(security.getName());

      class Staff {
        private readonly name: string;
      
        public constructor(name: string) {
          // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
          this.name = name;
        }
      
        public getName(): string {
          return this.name;
        }
      }
      
      const staff = new Staff("Jane");
      console.log(staff.getName());
  return (
    <div>Classes</div>
  );
};

export default Classes;