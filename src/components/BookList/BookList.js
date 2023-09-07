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

  if (!props.list.length) {
    return null;
  }

  return (
    <section className="BookList">
      {props.list.map((book) => (<BookCard book={book} key={book.id}/>))}
    </section>
  );
}