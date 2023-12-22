import React, { useState, useEffect } from "react";
import "./NotesView.css";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import Notes from "../Notes/Notes";
import CreateNote from "../CreateNote/CreateNotes";

const NotesView = ({
  myNotes,
  setMyNotes,
  setSearchedNotes,
  setNotesToDisplay,
  notesToDisplay,
}) => {
  const handleNotes = (id) => {
    let newNotesObject = myNotes.filter((item) => item.id !== id);
    setMyNotes(newNotesObject);
    setNotesToDisplay(myNotes);
  };

  return (
    <div className="NotesViewContainer">
      <div className="HeaderContainer">
        <Navbar />
        <SearchBar setSearchedNotes={setSearchedNotes} />
      </div>

      <div className="NotesContainer_Super">
        <div className="NotesContainer">
          {notesToDisplay
            ? notesToDisplay.map((note, index) => {
                return (
                  <Notes
                    key={note.id}
                    title={note.title}
                    description={note.description}
                    color={note.color}
                    createdOn={note.createdOn}
                    handleClick={handleNotes}
                    id={note.id}
                    myNotes={myNotes}
                    setMyNotes={setMyNotes}
                  />
                );
              })
            : ""}

          <CreateNote myNotes={myNotes} setMyNotes={setMyNotes} />
        </div>
      </div>
    </div>
  );
};

export default NotesView;
