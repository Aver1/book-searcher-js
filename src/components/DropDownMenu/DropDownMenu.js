import React from 'react';
import { useSearchParams, Link } from "react-router-dom";
import { getSearchWith } from "../../utils/SearchHelper"

export const DropDownMenu = ({ list, type }) => {
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState(list[0]);

  const [searchParams, setParams] = useSearchParams();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleButtonClick = (value) => {
    setValue(value);
    setOpen(false);
    setParams({orderBy: value})
  };

  return (
    <div className="dropDownMenu">
      <button onClick={handleOpen}>{value}</button>
      {open ? (
        <ul className="dropDownMenumenu">
          {list.map((content) => (
            <li>
              <Link 
              to={{search: getSearchWith(searchParams, { [type]: `${content}` }),}} 
              onClick={() => handleButtonClick(content)}>{content}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  );
};