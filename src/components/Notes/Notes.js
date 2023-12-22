import React from "react";
import "./Notes.css";

const Notes = ({ title, description, color, createdOn }) => {
  const dateObject = {
    date: createdOn.getDate(),
    month: createdOn.getMonth() + 1,
    year: createdOn.getFullYear(),
  };

  console.log(dateObject);
  return (
    <div className="NotesTabContainer" style={{ background: `${color}` }}>
      <div className="NotesTabContainer_Title">{title}</div>
      <div className="NotesTabContainer_Description">{description}</div>
      <div className="NotesTabContainer_Date">
        {dateObject.date}/{dateObject.month}/{dateObject.year}
      </div>
    </div>
  );
};

export default Notes;
