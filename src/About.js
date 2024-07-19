import "./About.css";

function About() {
  return (
    <div className="about-content" id="about">
      <h3 className="title">About Me, The Food Man</h3>
      <div className="image">
        <img src={require("./imgs/chef.jpg")} alt="" />
      </div>
      <div className="text">
        <h3>I am Who I Am!</h3>
        <i>With Passion For Real, Good Food</i>
        <p>
          Just me, myself and I, exploring the universe of unknownment. I have a
          heart of love and an interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you. Praesent tincidunt sed tellus
          ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
          rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla.
        </p>
      </div>
    </div>
  );
}

export default About;
