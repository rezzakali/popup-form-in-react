import React, { useState } from 'react';
import './App.css';
import Arrow from './Arrow';
import Close from './Close';

function App() {
  const [popupActive, setPopupActive] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [title, setTitle] = useState('');

  const handleClick = () => {
    setPopupActive(true);
    setShowButton(false);
  };
  const closeButton = () => {
    setPopupActive(false);
    setShowButton(true);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    setTitle('');
    setPopupActive(false);
    setShowButton(true);
  };

  return (
    <div>
      {popupActive ? (
        <form onSubmit={onSubmitHandler}>
          <div onClick={closeButton}>
            <Close />
          </div>
          <div className="mb-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </div>
        </form>
      ) : (
        ''
      )}
      {showButton ? (
        <span onClick={handleClick}>
          <Arrow />
        </span>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
