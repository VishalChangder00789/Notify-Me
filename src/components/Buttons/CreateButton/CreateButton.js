import React from "react";
import "./CreateButton.css";

const CreateButton = ({ title, handleButtonClick }) => {
  return (
    <button className="CreateNoteButtonContainer" onClick={handleButtonClick}>
      {title}
    </button>
  );
};

export default CreateButton;
