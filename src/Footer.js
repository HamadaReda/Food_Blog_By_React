import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-content">
      <div className="footer">
        <h3>Footer</h3>
        <p>
          Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
          porta lectus vitae, ultricies congue gravida diam non fringilla.
        </p>
        <p>Powered by w3.css</p>
      </div>
      <div className="blog">
        <h3>BLOG POSTS</h3>
        <ul>
          <li>
            <div className="image">
              <img src={require("./imgs/workshop.jpg")} alt="" />
            </div>
            <div className="text">
              <h4>Lorem</h4>
              <p>Sed mattis nunc</p>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={require("./imgs/gondol.jpg")} alt="" />
            </div>
            <div className="text">
              <h4>Ipsum</h4>
              <p>Praes tinci sed</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="popular">
        <h3>POPULAR TAGS</h3>
        <p>
          <span>Travel</span>
          <span>New York</span>
          <span>Dinner</span>
          <span>Salmon</span>
          <span>France</span>
          <span>Drinks</span>
          <span>Ideas</span>
          <span>Flavors</span>
          <span>Cuisine</span>
          <span>Chicken</span>
          <span>Dressing</span>
          <span>Fried</span>
          <span>Fish</span>
          <span>Duck</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
