import "./App.css";
import BreakFast from "./Component/BreakFast";
import FoodspinWheel from "./Component/FoodspinWheel";
import Navbar from "./Component/Navbar";

function App() {
  // const foodOptions = [
  //   "Pizza",
  //   "Burger",
  //   "Sushi",
  //   "Taco",
  //   "Salad",
  //   "Patato",
  //   "Palak",
  //   "Laddy finger",
  // ];
  return (
    <>
      <Navbar></Navbar>
      <BreakFast></BreakFast>
    </>
  );
}

export default App;
