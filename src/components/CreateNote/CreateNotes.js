import React, { useEffect, useState } from "react";
import "./CreateNote.css";
import CreateButton from "../Buttons/CreateButton/CreateButton";
import ColorDropDown from "../ColorDropDown/ColorDropDown";

const CreateNote = ({ myNotes, setMyNotes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pickColor, setPickColor] = useState("");

  const colors = ["#802B5B", "#AA405B", "#510A32", "#801336"];

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleAddNotes = () => {
    if (!title || !description) {
      console.log("Enter Title or Description");
      return;
    }
    const dateData = new Date();
    const dateObject = {
      date: dateData.getDate(),
      month: dateData.getMonth() + 1,
      year: dateData.getFullYear(),
    };

    const obj = {
      id: myNotes.length + 1,
      title: title,
      description: description,
      color: pickColor,
      createdOn: `${dateObject.date}/${dateObject.month}/${dateObject.year}`,
    };

    setMyNotes([obj, ...myNotes]);
    setTitle("");
    setDescription("");
    setPickColor("");
  };

  return (
    <div className="CreateNoteContainer">
      <input
        className="CreateNoteContainer_Title"
        placeholder="Enter Notes Title"
        value={title}
        onChange={(e) => handleTitleChange(e)}
      />
      <textarea
        className="CreateNoteConatner_AddDescription"
        placeholder="Add Description"
        value={description}
        onChange={(e) => handleDescriptionChange(e)}
      />

      <ColorDropDown
        colors={colors}
        setPickColor={setPickColor}
        pickColor={pickColor}
      />

      <div className="CreateNoteConatner_AddNote">
        <CreateButton title="Add Note" handleButtonClick={handleAddNotes} />
      </div>
    </div>
  );
};

export default CreateNote;
