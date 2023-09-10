import zaglushka from "../../images/bookImgZ.jpg"

export const BookCard = (props) => {
  console.log(props.book.volumeInfo);
  const srcImg = props.book.volumeInfo.hasOwnProperty('imageLinks') ? props.book.volumeInfo.imageLinks.smallThumbnail : zaglushka;
  const category = props.book.volumeInfo.categories || '';
  const title = props.book.volumeInfo.title;
  const author = props.book.volumeInfo.authors;
  return (
    <div className="bookCard">
      <img src={srcImg} alt="Карточка" className="bookCard__image"/>
      <p className="bookCard__category">{category || 'No Data'}</p>
      <h3 className="bookCard__title">{title}</h3>
      <p className="bookCard__authors">{author || "No Data"}</p>
    </div>
  );
}