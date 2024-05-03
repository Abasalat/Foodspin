import "./App.css";
import FoodspinWheel from "./Component/FoodspinWheel";

function App() {
  const foodOptions = [
    "Pizza",
    "Burger",
    "Sushi",
    "Taco",
    "Salad",
    "Patato",
    "Palak",
    "Laddy finger",
  ];
  return (
    <>
      <FoodspinWheel options={foodOptions} />
    </>
  );
}

export default App;
