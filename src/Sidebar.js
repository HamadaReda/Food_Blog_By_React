import "./Sidebar.css";

function closeSidebar() {
  document.getElementById("sidebar").classList.add("hidden");
}

function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <ul>
        <li onClick={closeSidebar}>
          <a href="#">Close Menu</a>
        </li>
        <li>
          <a href="#food">Food</a>
        </li>
        <li>
          <a href="#about">About Menu</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
