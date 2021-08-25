import Note from "../Note/Note";
import "./Notes.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorFiltredData } from "../../redux/notes/selectors";
import { openCreator } from "../../redux/modal/actions";

const Notes = () => {
  const [searchValue,setValue]=useState('')
  let filteredData = useSelector(selectorFiltredData(searchValue));
  console.log(filteredData);
  const dispatch = useDispatch();
  const search = (e) => {
    e.preventDefault();
    const searchData = e.target.searchInput.value;
     setValue(searchData);
  };
  const renderNotes = (status) => {
    try {
        return filteredData.map((note) => <Note key={note.id} note={note} />);
    } catch (error) {
      return null;
    }
  
  };
  return (
    <>
      <div className={"todo-wrapper"}>
        <div className={"todo-list-wrapper"}>
          <div>
            <form onSubmit={search}>
              <input type={"text"} name={"searchInput"}></input>{" "}
              <input type="submit" value="Sent"></input>
            </form>
          </div>
          <div className={"todo-list"}>{renderNotes(false)}</div>
          <div className={"button-create-wraper"}>
            <button
              id="todo-button-create"
              onClick={() => dispatch(openCreator())}
            >
              Add new announcement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
