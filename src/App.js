import { useEffect, useState } from "react";
import "./App.css";
import NotesView from "./components/NotesView/NotesView";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  // Storing and changing the data
  const [myNotes, setMyNotes] = useState([
    {
      id: 1,
      title: "Dummy",
      description: "A dummy desciption",
      color: "red",
      createdOn: "04/06/1999",
    },
  ]);

  const [notesToDisplay, setNotesToDisplay] = useState([]);
  const [searchedNotes, setSearchedNotes] = useState("");

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
      console.log(myNotes);
    }
  };

  // UseEffects
  useEffect(() => {
    if (localStorage.getItem("data")) {
      setMyNotes(JSON.parse(localStorage.getItem("data")));
      setNotesToDisplay(myNotes);
    }
    setNotesToDisplay(myNotes);
  }, []);

  useEffect(() => {
    if (myNotes.length !== 0) {
      localStorage.setItem("data", JSON.stringify(myNotes));
    } else {
      localStorage.setItem("data", "");
    }
    setNotesToDisplay(myNotes);
  }, [myNotes]);

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

// [{"id":1,"title":"Dummy","description":"A dummy desciption","color":"red","createdOn":"04/06/1999"}]
