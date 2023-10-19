import "./App.scss";
import { Button } from "../../UI-KIT/Button/Button";

function App() {
  const style = {
    borderRadius: "0px 10px 10px 0px",
  };
  return (
    <div>
      <Button type="submit" onClick={() => console.log("atatat")} fill size="medium" style={style}>
        Testtt
      </Button>
    </div>
  );
}

export default App;
