import { useEffect, useState } from "react";
import { getBooks } from "../../Api/GetData";
import { BookCard } from "../BookCard/BookCard";

export const BookList = (props) => {

  // const [list , setlist] = useState([]); 

  // useEffect(() => {
  //   setlist(props.list);
  // }, []);

  // const requestData = async () => {
  //   const res = await getBooks();
  //   setlist(res.items);
  // }

  // if (!props.list.length) {
  //   return null;
  // }

  return (
    <section className="BookList">
      <div className="BookList__items">Книг найденно: {props.totalItems}</div>
      <div className="BookList__container">
        {props.list.map((book) => (<BookCard book={book} key={book.id}/>))}
      </div>
      <div className={`BookList__error ${!props.list.length ? 'BookList__error_visible' : ''}`}>Ничего не найденно. Попробуйте использовать другое ключевое слово</div>
      <button type="button" className="BookList__more-btn" onClick={props.handleMoreStep}>Загрузить еще</button>
      {/* <button data-text="Awesome" className="BookList__more-btn" onClick={props.handleMoreStep}>
        <span className="BookList__more-btn-actual-text">&nbsp;More&nbsp;</span>
        <span className="BookList__more-btn-hover-text" aria-hidden="true">&nbsp;More&nbsp;</span>
      </button> */}
    </section>
  );
}