import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listSelector} from '../../redux/notes/selectors';
import { updateData } from '../../redux/notes/actions';
import { openEditor } from '../../redux/modal/actions';
import {selectorsimilardData} from '../../redux/notes/selectors';
import './Note.css';

const Note = ({ note }) => {
  const [details,setDetailVisible]=useState(false);
  const { id, name, context, dateCreated } = note;
  const dispatch = useDispatch();
  const { data } = useSelector(listSelector);
  const similarData=useSelector(selectorsimilardData(name,context)).slice(0,3);
  const deleteNote = () => {
    const list = data.filter((element) => element.id !== id);
    dispatch(updateData(list));
  };

  return (
    <div className="todo-note">
    <div className="todo-note-wrapper">
      <ul className={'header-line note-line '}>
        <li className="note-name">{name} </li>
        <li>{dateCreated}</li>
      </ul>

      <ul className="header-line-buttons">
        <li>
          <button
          onClick={()=>{setDetailVisible(!details)}}
          className={'organise-but'}>
              <img
              className="image-wrapper"
              src={details?'./media/images/up.png':'./media/images/down.png'}
              alt=""
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => dispatch(openEditor(id))}
            className={'organise-but'}
          >
            <img
              className="image-wrapper"
              id="change-data"
              src={'./media/images/Pen.png'}
              alt=""
            />
          </button>
        </li>
        <li>
          <button onClick={deleteNote} className="organise-but">
            <img
              className="image-wrapper"
              src="./media/images/garbageBlack.png"
              alt=""
            />
          </button>
        </li>
      </ul>
      
    </div>
    <div className={details?'note-details':'note-details-hidden'}>
      <p>{context}</p>
      <div className={'top-notes'}>
        {similarData.map(i=>{return <div className={'similar-note'}>
          <p className="header-similar">{i.name}</p>
          <p className="context-similare">{i.context}</p>
          <p className="data-similar">{i.dateCreated}</p>
          </div>})}
      </div>
    </div>
    </div>
  );
};
export default Note;
