import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalEditorSelector } from '../../../redux/modal/selectors';
import {listSelector} from '../../../redux/notes/selectors';
import { updateData } from '../../../redux/notes/actions';
import { closeEditor } from '../../../redux/modal/actions';

const ModalEdit = () => {
  const dispatch = useDispatch();
  const { noteId, isOpen } = useSelector(modalEditorSelector);
  const { data } = useSelector(listSelector);

  const changeDate = (e) => {
    e.preventDefault();
    if(e.target.name.value===''){
    }
    else{
    const title=e.target.name.value;
    const context=e.target.context.value;
    data.forEach((note) => {
      if (note.id === noteId) {
        note.name=title;
        note.context=context;
      }
    });
    }
    dispatch(updateData(data));
    dispatch(closeEditor());
  };
  if (!isOpen) {
    return null;
  } else {
    return (
      <div id="Change_modal" className={'modal'}>
        <div className={'modal-content'}>
        <form onSubmit={changeDate}>
              <p className={'title-create'}>Change your data</p>
              <div className={'form-cont'}>
                <p>Title</p>
                <input name={'name'} type={'text'}></input>
              </div>
              <div className={'form-cont form-textarea'}>
                <p>Context</p>
                <input name={'context'} type={'textarea'}></input>
              </div>
              <input
                id={'form-submit-button'}
                type="submit"
                value="Sent"
              ></input>
            </form>
          <span
            onClick={() => dispatch(closeEditor())}
            id="closeChangeMenu"
            className={'close'}
          >
            &times;
          </span>
        </div>
      </div>
    );
  }
};
export default ModalEdit;
