import React from "react";
import "./NotesView.css";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import Notes from "../Notes/Notes";

const NotesView = ({
  myNotes,
  setMyNotes,
  searchedNotes,
  setSearchedNotes,
}) => {
  return (
    <div className="NotesViewContainer">
      <div className="HeaderContainer">
        <Navbar />
        <SearchBar
          searchedNotes={searchedNotes}
          setSearchedNotes={setSearchedNotes}
        />
      </div>

      <div className="NotesContainer_Super">
        <div className="NotesContainer">
          {myNotes
            ? myNotes.map((note) => {
                return (
                  <Notes
                    key={note.id}
                    title={note.title}
                    description={note.description}
                    color={note.color}
                    createdOn={note.createdOn}
                  />
                );
              })
            : "No Notes to Display"}
        </div>
      </div>
    </div>
  );
};

export default NotesView;
