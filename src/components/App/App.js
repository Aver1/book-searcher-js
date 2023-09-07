import './App.css';
import { BookList } from '../BookList/BookList';
import { Search } from '../Search/Search';
import { getBooks } from '../../Api/GetData';
import { useSearchParams } from "react-router-dom";
import React from 'react';

function App() {

  const [list, setList] = React.useState([]);
  const [query, setQuery] = React.useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(query);

  const searchQuery = searchParams.get('q') || '';
  console.log(searchQuery);

  React.useEffect(() => {
    requestData();
    console.log(list);
  }, [searchQuery]);

  const requestData = async () => {
    const res = await getBooks(searchQuery);
    setList(res.items, ...list);
  }

  function handleSubmit() {
    setSearchParams({q: query});
    // getBooks(searchQuery);
  }

  return (
    <>
      <Search onSubmit={handleSubmit} setQuery={setQuery} query={query}/>
      <BookList list={list}/>
    </>
  );
}

export default App;
