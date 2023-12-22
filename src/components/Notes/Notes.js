import React, { useState } from "react";
import "./Notes.css";
import pencil from "./../../assets/pencil.png";
import CreateButton from "../Buttons/CreateButton/CreateButton";

const Notes = ({
  title,
  description,
  color,
  createdOn,
  handleClick,
  id,
  myNotes,
  setMyNotes,
}) => {
  // Checks if the Note is in edit mode or not
  const [isEdit, setIsEdit] = useState(false);

  // Use state to handle edited Inputs
  const [editInputTitle, setEditInputTitle] = useState("");
  const [editInputDescription, setEditInputDescription] = useState("");

  // Handles when the user clicks on the edit button at the bottom left corner of each note
  const handleEdit = () => {
    setIsEdit(true);
    setEditInputTitle(title);
    setEditInputDescription(description);
  };

  // If user decides to cancel from the edit mode
  const handleCancel = () => {
    setIsEdit(false);
  };

  // Invokes when the user clicks on Update Note Button
  const handleUpdateNote = () => {
    const dateData = new Date();
    const dateObject = {
      date: dateData.getDate(),
      month: dateData.getMonth() + 1,
      year: dateData.getFullYear(),
    };

    const obj = {
      id,
      title: editInputTitle,
      description: editInputDescription,
      color: color,
      createdOn: `${dateObject.date}/${dateObject.month}/${dateObject.year}`,
    };
    let index = 0;
    for (let i = 0; i < myNotes.length; i++) {
      if (myNotes[i].id === id) {
        index = i;
      }
    }

    myNotes[index] = obj;
    setMyNotes([...myNotes]);
    handleCancel();
  };

  const handleTitleChange = (e) => {
    setEditInputTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setEditInputDescription(e.target.value);
  };

  return !isEdit ? (
    <div
      className="NotesTabContainer"
      style={{ background: `rgba(255,255,255,0.85)` }}
    >
      <div
        className="NotesTabContainer_Title"
        style={{ background: `${color}` }}
      >
        {title}
      </div>
      <div
        className="NotesTabContainer_Description"
        style={{ background: `${color}` }}
      >
        {description}
      </div>
      <div
        className="NotesTabContainer_Date"
        style={{ background: `${color}` }}
      >
        {createdOn}
      </div>
      <div onClick={handleEdit} className="NotesTabContainer_Edit">
        <img src={pencil} />
      </div>
      <div
        onClick={() => handleClick(id)}
        className="NotesTabContainer_Date_Delete"
      >
        X
      </div>
    </div>
  ) : (
    <div className="NotesTabContainer" style={{ background: `${color}` }}>
      <input
        className="NotesTabContainer_Title"
        value={editInputTitle}
        onChange={(e) => handleTitleChange(e)}
      />
      <textarea
        className="NotesTabContainer_Description"
        value={editInputDescription}
        onChange={(e) => handleDescriptionChange(e)}
      />
      <div className="NotesTabContainer_UpdateButton">
        <CreateButton
          title="Update Note"
          handleButtonClick={handleUpdateNote}
        />
      </div>

      <div onClick={handleCancel} className="NotesTabContainer_Cancel">
        Cancel
      </div>
    </div>
  );
};

export default Notes;
