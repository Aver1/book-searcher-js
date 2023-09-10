import { DropDownMenu } from "../DropDownMenu/DropDownMenu";
import React from "react";
import { useSearchParams } from "react-router-dom";

const SORT_BY = ['Relevance', 'Newest'];
const SORT_CATEGORIES = ['all', 'Art', 'Biography', 'Computers', 'History', 'Medical', 'Poetry'];

export const Search = (props) => {

  // React.useEffect(() => {
  //   props.setQuery(serchParam.get('q'))
  // }, []);

  function handleBookChange (e) {
    props.setQuery(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault();
    props.onSubmit();
  }

  return(
    <section className="search">
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <input type="text" placeholder="Что ищем?" value={props.query} onChange={handleBookChange}/>
          <input type="submit" />
          <DropDownMenu list={SORT_CATEGORIES} type={'subject'} 
          handleClick={props.setSubjectValue}
          />
          <DropDownMenu list={SORT_BY} type={'orderBy'}
          handleClick={props.setOrderByValue}
          />
        </div>
      </form>
    </section>
  );
}