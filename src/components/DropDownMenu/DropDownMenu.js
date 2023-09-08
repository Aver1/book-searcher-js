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
    setValue(value);
    handleClick(value);
    setOpen(false);
  };

  return (
    <div className="dropDownMenu">
      <button onClick={handleOpen}>{value}</button>
      {open ? (
        <ul className="dropDownMenumenu">
          {list.map((content) => (
            <li>
              <input name={content} type='button' onClick={() => handleButtonClick(content)} value={content} />
            </li>
          ))}
        </ul>) : null}
    </div>
  );
};