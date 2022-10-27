/*Interfaces are similar to type aliases,
 except they only apply to object types.*/

const Interface = () => {

    interface Trial {
        height: number,
        width: number
      }
      
      const knorr: Trial = {
        height: 20,
        width: 10
      };
      console.log(knorr);

  return (
    <div>Interface</div>
  );
};

export default Interface;