import Abstract from "./components/Abstract";
import Aliases from "./components/Aliases-interface";
import Casting from "./components/Casting";
import Classes from "./components/Classes";
import Generics from "./components/Generics";
import Inheritance from "./components/Inheritance";
import KeyOf from "./components/KeyOf";
import NullUndefined from "./components/NullUndefined";
import Utility from "./components/Utility";

function App() {

  return (
    <>
      <div><h1>Check Console</h1></div>
      <Casting />
      <Classes />
      <Inheritance />
      <Abstract />
      <Utility />
      <Generics />
      <Aliases />
      <KeyOf />
      <NullUndefined />
    </>
  );
};

export default App;
