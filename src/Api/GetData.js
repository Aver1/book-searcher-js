import { booksApi } from "../components/utils/FetchClient";

export const getBooks = async (url) => {
  return booksApi.getBooks(url || '');
 };