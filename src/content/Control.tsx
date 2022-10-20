import { useState, useEffect, useRef } from "react";

interface Props {
  width: number;
  height: number;
  top: number;
  left: number;
  position: string;
  setWidth: (value: number) => void;
  setLeft: (value: number) => void;
  setHeight: (value: number) => void;
  setTop: (value: number) => void;
}

const Control = (props: Props) => {
  const [draggable, setDraggable] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const controlMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setMouseX(e.clientX);
    setMouseY(e.clientY);
    setDraggable(true);
  };
  const controlMouseMove = (e: MouseEvent) => {
    if (draggable) {
      switch (props.position) {
        case "right":
          const rightX = e.clientX - mouseX;
          setMouseX(e.clientX);
          props.setWidth(props.width + rightX);
          break;
        case "left":
          const leftX = mouseX - e.clientX;
          setMouseX(e.clientX);
          props.setWidth(props.width + leftX);
          props.setLeft(props.left - leftX);
          break;
        case "bottom":
          const bottomY = e.clientY - mouseY;
          setMouseY(e.clientY);
          props.setHeight(props.height + bottomY);
          break;
        case "top":
          const topY = mouseY - e.clientY;
          setMouseY(e.clientY);
          props.setHeight(props.height + topY);
          props.setTop(props.top - topY);
          break;
        default:
          break;
      }
    }
  };
  const controlMouseUp = () => {
    setDraggable(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", controlMouseMove);
    window.addEventListener("mouseup", controlMouseUp);
    return () => {
      window.removeEventListener("mousemove", controlMouseMove);
      window.removeEventListener("mouseup", controlMouseUp);
    };
  }, [draggable]);

  return (
    <div
      onMouseDown={(e) => controlMouseDown(e)}
      className={"control " + props.position}
    ></div>
  );
};
export default Control;
