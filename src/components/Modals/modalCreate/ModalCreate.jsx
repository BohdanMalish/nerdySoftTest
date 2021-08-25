import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ModalCreate.css';
import nextId from 'react-id-generator';
import {listSelector} from '../../../redux/notes/selectors';
import { updateData } from '../../../redux/notes/actions';
import { closeCreator } from '../../../redux/modal/actions';
import { modalCreatorSelector } from '../../../redux/modal/selectors';

const ModalCreate = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(listSelector);
  const active = useSelector(modalCreatorSelector);
  const submitData = (e) => {
    e.preventDefault();
    const datenow = new Date();
    const note = {
      id: nextId(),
      name: e.target.name.value,
      context:e.target.context.value,
      dateCreated: datenow.toLocaleDateString()
    };

    data.push(note);
    dispatch(updateData(data));
    dispatch(closeCreator);
  };
  if (active === false) {
    return null;
  } else {
    return (
      <div>
        <div className={'modal'}>
          <div className={'modal-content'}>
            <form onSubmit={submitData}>
              <p className={'title-create'}>Input new Data</p>
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

            <span onClick={() => dispatch(closeCreator())} className={'close'}>
              &times;
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalCreate;
