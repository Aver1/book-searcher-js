import { booksApi } from "../components/utils/FetchClient";

export const getBooks = async () => {
  return booksApi.getBooks('');
 };