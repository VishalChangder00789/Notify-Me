import React, { useEffect, useState } from "react";
import "./CreateNote.css";
import CreateButton from "../Buttons/CreateButton/CreateButton";
import ColorDropDown from "../ColorDropDown/ColorDropDown";

const CreateNote = ({ myNotes, setMyNotes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pickColor, setPickColor] = useState("");

  const colors = [
    "#D44A2C",
    "#F38733",
    "#F3B329",
    "#F3E429",
    "#C8F329",
    "#85F329",
    "#38F329",
    "#29F388",
    "#29F3D1",
    "#29D4F3",
    "#2972F3",
    "#7629F3",
    "#AD29F3",
    "#F029F3",
    "#F329B3",
    "#F32960",
    "#F32929",
  ];

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
