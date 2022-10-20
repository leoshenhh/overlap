import { useState, useEffect, useRef } from "react";
import Control from "./Control";
import "./app.scss";

const App = () => {
  const controlList: Array<string> = ["left", "top", "bottom", "right"];

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const [moveable, setMoveable] = useState(false);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

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
        width: width + "px",
        height: height + "px",
        top: top + "px",
        left: left + "px",
      }}
    >
      {controlList.map((item) => (
        <Control
          key={item}
          position={item}
          width={width}
          setWidth={setWidth}
          left={left}
          setLeft={setLeft}
          height={height}
          setHeight={setHeight}
          top={top}
          setTop={setTop}
        ></Control>
      ))}
    </div>
  );
};
export default App;
