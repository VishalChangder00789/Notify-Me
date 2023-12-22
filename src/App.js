import { useEffect, useState } from "react";
import "./App.css";
import NotesView from "./components/NotesView/NotesView";
import { nanoid } from "nanoid";

function App() {
  // Storing and changing the data for single Data
  const [myNotes, setMyNotes] = useState([
    {
      id: nanoid(),
      title: "Bishal Changdeer",
      description:
        "I am a Full Stack Web Developer, I have completed my B.Tech from University of Petroleum and Energy Studies.",
      color: "#000000",
      createdOn: "04/06/1999",
    },
  ]);

  // Notes which are getting displayed
  const [notesToDisplay, setNotesToDisplay] = useState([]);

  // The searchTerm which is getting updated after debouncing occurs
  const [searchedNotes, setSearchedNotes] = useState("");

  // Getting and filtering the searched notes
  const getSearchedNotes = (searchedNotes) => {
    if (searchedNotes.trim() === "") {
      setNotesToDisplay(myNotes);
    } else {
      const filteredNotes = myNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchedNotes.toLowerCase()) ||
          note.description.toLowerCase().includes(searchedNotes.toLowerCase())
      );

      setNotesToDisplay(filteredNotes);
    }
  };

  // When the component is mounted for the first time : Component Did Mount
  useEffect(() => {
    if (localStorage.getItem("data")) {
      setMyNotes(JSON.parse(localStorage.getItem("data")));
      setNotesToDisplay(myNotes);
    }
    setNotesToDisplay(myNotes);
  }, []);

  // Whenever mynotes are updated : Component didUpdate
  useEffect(() => {
    if (myNotes.length !== 0) {
      localStorage.setItem("data", JSON.stringify(myNotes));
    } else {
      localStorage.setItem("data", "");
    }
    setNotesToDisplay(myNotes);
    setSearchedNotes("");
  }, [myNotes]);

  // SideEffects whenver the searchTerm is changed
  useEffect(() => {
    getSearchedNotes(searchedNotes);
  }, [searchedNotes]);

  return (
    <div className="App">
      <NotesView
        myNotes={myNotes}
        notesToDisplay={notesToDisplay}
        setMyNotes={setMyNotes}
        searchedNotes={searchedNotes}
        setSearchedNotes={setSearchedNotes}
        setNotesToDisplay={setNotesToDisplay}
      />
    </div>
  );
}

export default App;
