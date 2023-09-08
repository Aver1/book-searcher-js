import { booksApi } from "../utils/FetchClient";

export const getBooks = async (url) => {
  return booksApi.getBooks(url || '');
 };