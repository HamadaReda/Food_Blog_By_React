import "./App.css";
import Food from "./Food";
import Header from "./Header";
import { foodData } from "./FoodData";
import About from "./About";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function App() {
  const data = foodData.map((element) => (
    <Food
      foodImage={element.foodImage}
      foodName={element.foodName}
      foodDescription={element.foodDescription}
    />
  ));
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <div className="food-content">{data}</div>
      <hr />
      <About />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
