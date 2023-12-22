import { useState } from "react";
import "./App.css";
import NotesView from "./components/NotesView/NotesView";

function App() {
  // Storing and changing the data
  const [myNotes, setMyNotes] = useState([
    {
      id: 1,
      title: "Dummy",
      description: "A dummy desciption",
      color: "red",
      createdOn: new Date(),
    },
    {
      id: 2,
      title: "Dummy2",
      description: "A2 dummy desciption",
      color: "blue",
      createdOn: new Date(),
    },
    {
      id: 3,
      title: "Dummy2",
      description: "A2 dummy desciption",
      color: "green",
      createdOn: new Date(),
    },
    {
      id: 4,
      title: "Dummy2",
      description: "A2 dummy desciption",
      color: "lime",
      createdOn: new Date(),
    },
    {
      id: 4,
      title: "Dummy2",
      description: "A2 dummy desciption",
      color: "brown",
      createdOn: new Date(),
    },
  ]);

  const [searchedNotes, setSearchedNotes] = useState([]);

  return (
    <div className="App">
      <NotesView
        myNotes={myNotes}
        searchedNotes={searchedNotes}
        setSearchedNotes={setSearchedNotes}
        setMyNotes={setMyNotes}
      />
    </div>
  );
}

export default App;
