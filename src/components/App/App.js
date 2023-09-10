import './App.css';
import { BookList } from '../BookList/BookList';
import { Search } from '../Search/Search';
import { getBooks } from '../../Api/GetData';
import { useSearchParams } from "react-router-dom";
import React from 'react';

function App() {

  const [list, setList] = React.useState([]);
  const [listItems, setListItems] = React.useState(0);
  const [query, setQuery] = React.useState('js');
  const [subjectValue, setSubjectValue] = React.useState('all');
  const [orderByValue, setOrderByValue] = React.useState('relevance');
  const [moreStep, setMoreStep] = React.useState(12);

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(query);

  const searchQuery = searchParams.get('q') || '';
  console.log(searchQuery);

  // `&q=${query ? query : ''}+subject:`+subjectValue+`&orderBy=${orderByValue}`;

  function queryMaker() {
    let str = `&orderBy=${orderByValue}`+'&q=';
    if (query.length > 0) str += `${query}`;
    if (subjectValue !== 'all') str +=`+subject:${subjectValue}`;
    return str;
  }

  React.useEffect(() => {
    requestData();
  }, []);

  console.log(list);

  const requestData = async () => {
    if (query.length > 0) {
      const string = queryMaker();
      const res = await getBooks(string);
      if (res.totalItems > 0) {
        setListItems(res.totalItems);
        setList([]);
        setList(res.items);
        setMoreStep(12);
      }
      else {
        setListItems(0);
        setMoreStep(12);
        setList([]);
      } 
    } 
    else {
      const res = await getBooks('&q=книга');
      setListItems(res.totalItems);
      setMoreStep(12);
      setList(res.items);
    } 
  }

  const requestMoreData = async (url) => {
    const res = await getBooks(url);
    if (res.totalItems > 0) {
      debugger;
      setListItems(res.totalItems);
      setList((prev) => [...prev, ...res.items]);
      setMoreStep(moreStep+12);
    }
  }

  function handleMoreStep () {
    const string = queryMaker();
    let url = string+'&startIndex='+moreStep;
    requestMoreData(url);
  }

  function handleSubmit() {
    requestData();
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
      <BookList handleMoreStep={handleMoreStep} totalItems={listItems} list={list}/>
    </>
  );
}

export default App;
