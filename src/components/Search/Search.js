import { DropDownMenu } from "../DropDownMenu/DropDownMenu";

const SORT_BY = ['Newest', 'Relevance'];
const SORT_CATEGORIES = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];

export const Search = (props) => {

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
          <DropDownMenu list={SORT_CATEGORIES} type={'subject'}/>
          <DropDownMenu list={SORT_BY} type={'orderBy'}/>
        </div>
      </form>
    </section>
  );
}