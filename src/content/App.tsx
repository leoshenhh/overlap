import { useState, useEffect, useRef } from "react";
import './app.scss'

const App = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const [moveable, setMoveable] = useState(false);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setMouseX(e.pageX);
    setMouseY(e.pageY);
    setMoveable(true);
  };

  const handleMouseMove = (e: MouseEvent) => {

    if (moveable) {
      const x = e.pageX - mouseX;
      const y = e.pageY - mouseY;

      setTop(top + y);
      setLeft(left + x);
      setMouseX(e.pageX);
      setMouseY(e.pageY);
    }
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    setMoveable(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [moveable]);


  return (
    <div
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
      className="overlap"
      style={{
        width: "100px",
        height: "100px",
        position: "fixed",
        top: top + "px",
        left: left + "px",
        color: "white",
      }}
    >
      <div>{mouseX}</div>
      <div>{mouseY}</div>
    </div>
  );
};
export default App;
