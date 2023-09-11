import React from 'react';
import { useSearchParams, Link } from "react-router-dom";
import { getSearchWith } from "../../utils/SearchHelper"

export const DropDownMenu = ({ list, handleClick }) => {
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState(list[0]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleButtonClick = (value) => {
    debugger;
    setValue(value);
    handleClick(value);
    setOpen(false);
  };

  return (
    <div className="dropDownMenu">
      <button className="dropDownMenu__open-btn" onClick={handleOpen} type='button'>{value}</button>
      {open ? (
        <ul className="dropDownMenu__menu">
          {list.map((content) => (
            <li key={content}>
              <input name={content} type='button' onClick={() => handleButtonClick(content)} value={content} />
            </li>
          ))}
        </ul>) : null}
    </div>
  );
};