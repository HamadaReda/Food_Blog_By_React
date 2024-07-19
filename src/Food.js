import "./Food.css";
function Food(props) {
  return (
    <div className="food-card" id="food">
      <div className="image">
        <img src={props.foodImage} alt="" />
      </div>
      <div className="title">
        <h3 className="food-name">{props.foodName}</h3>
        <p className="food-description">{props.foodDescription}</p>
      </div>
    </div>
  );
}

export default Food;
