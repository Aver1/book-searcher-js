import { useEffect, useState } from "react";
import { getBooks } from "../../Api/GetData";
import { BookCard } from "../BookCard/BookCard";

export const BookList = () => {

  const [list , setlist] = useState([]); 

  useEffect(() => {
    requestData('');
  }, []);

  const requestData = async () => {
    const res = await getBooks();
    setlist(res.items);
  }

  return (
    <section>
      {list.map((book) => (<BookCard book={book} key={book.id}/>))}
    </section>
  );
}