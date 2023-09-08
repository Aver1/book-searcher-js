import './App.css';
import { BookList } from '../BookList/BookList';
import { Search } from '../Search/Search';
import { getBooks } from '../../Api/GetData';
import { useSearchParams } from "react-router-dom";
import React from 'react';

function App() {

  const [list, setList] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [subjectValue, setSubjectValue] = React.useState('');
  const [orderByValue, setOrderByValue] = React.useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(query);

  const searchQuery = searchParams.get('q') || '';
  console.log(searchQuery);

  const str = `q=книга${query}+subject:`+subjectValue+`&orderBy=${orderByValue}`;

  React.useEffect(() => {
    requestData();
    console.log(list);
  }, []);

  const requestData = async () => {
    const res = await getBooks(str);
    setList(res.items, ...list);
  }

  function handleSubmit() {
    debugger;
    // setSearchParams({q: str, orderBy: orderByValue});
    // getBooks(searchQuery);
  }

  return (
    <>
      <Search onSubmit={handleSubmit} 
      setQuery={setQuery} 
      query={query} 
      subjectValue={subjectValue} 
      setSubjectValue={setSubjectValue}
      orderByValue={orderByValue}
      setOrderByValue={setOrderByValue}/>
      <BookList list={list}/>
    </>
  );
}

export default App;
