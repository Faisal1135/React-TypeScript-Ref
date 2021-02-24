import React from "react";

const EventComponent: React.FC = () => {
  const onSumit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event);
  };

  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("I am dragging");
  };

  return (
    <div>
      <button onClick={onSumit}>Click Me</button>

      <div draggable onDragStart={onDrag}>
        Drag Me
      </div>
    </div>
  );
};

export default EventComponent;
