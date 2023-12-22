import React from "react";
import "./CreateButton.css";

/**
 *
 * @param {title,clickHandlerMethod} param0
 * @returns A Button component which allows user to enter title and a click handler method
 */
const CreateButton = ({ title, handleButtonClick }) => {
  return (
    <button className="CreateNoteButtonContainer" onClick={handleButtonClick}>
      {title}
    </button>
  );
};

export default CreateButton;
