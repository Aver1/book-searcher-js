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
      <form className="search__container" onSubmit={handleSubmit}>
        <h1 className="search__header">BOOK SEARCHER</h1>
        <div className="search__input__container">
          <input className="search__input search__input-alt" placeholder="Что ищем?" required="true" type="text" value={props.query} onChange={handleBookChange}/>
          <span className="search__input-border search__input-border-alt"></span>
        </div>
        {/* <input type="text" placeholder="Что ищем?" value={props.query} onChange={handleBookChange}/> */}
        <div className="search__dropbox-container">
          <DropDownMenu list={SORT_CATEGORIES} type={'subject'} 
          handleClick={props.setSubjectValue}
          />
          <DropDownMenu list={SORT_BY} type={'orderBy'}
          handleClick={props.setOrderByValue}
          />
        </div>
        <button className="search__submit-btn" type="submit">искать 🔍︎</button>
      </form>
    </section>
  );
}