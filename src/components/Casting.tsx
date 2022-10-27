const Casting = () => {
//casting overrides a type
// using "as" keyword
    let x: unknown = "hello";
    console.log((x as string).length);

// using "<>" 
/* let b: unknown = 'sabi';
 console.log((<string>b).length); */
//does not work with tsx

//Force casting
/*To override type errors that TypeScript may throw when casting,
 first cast to unknown, then to the target type.*/
 let z = "hello";
 console.log(((z as unknown) as number).length);

 
  return (
    <div>Casting</div>
  );
};

export default Casting;