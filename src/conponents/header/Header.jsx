import { useEffect, useState } from "react";
import "./Header.css";


const Header = () => {
  const [showMoldel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className=" flex">
      <div />
      <button
        className="menu icon-menu flex"
        onClick={() => {
          setShowModel(true);
        }}
      />
      <nav>
        <ul className="flex">
          <li>
            <a href="#">Home</a>
          </li>
          
          <li>
            <a href="#Main">Projects</a>
          </li>
   
          <li>
            <a href="#Contact">Contact</a>
          </li>
             <li>
            <a href="#Footer">Footer</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showMoldel && (
        <div className=" fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModel(false);
                }}
              />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            
            <li>
              <a href="#Main">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#Footer">Footer</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
