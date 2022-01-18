import {useCallback, useEffect, useState} from "react"
import { getBookDetail } from "../../apis/book";
import { useParams } from "react-router-dom";
import styled from "styled-components"

const BookDetail = () =>{
  const [book, setBook] = useState({});
  const {image, title,pubdate, author, publisher, price, discount, description } = book;
  const { isbn } = useParams();

  const searchBookDetail = useCallback (async () => {
    const params = {
      d_isbn :isbn,
    };
    const { items } = await getBookDetail(params);
    setBook(items[0]);
  }, [isbn])

  useEffect(() => {
    searchBookDetail();
  }, [searchBookDetail]);


  return (
  <div>
    <Image src={image} />
    <Title>{title}</Title>
    <Author>저자 : {author}</Author>
    <Pubdate>출간일 : {pubdate}</Pubdate>
    <Publisher>출판사 : {publisher}</Publisher>
    <Price>가격 : {(+price).toLocaleString()} / 할인가격 {(+discount).toLocaleString()}</Price>
    <Desctiption>{description}</Desctiption>
  </div>
  )
}

const Image =styled.img ``;
const Title =styled.h3 ``;
const Author =styled.p ``;
const Pubdate =styled.p ``;
const Publisher =styled.p ``;
const Price =styled.p ``;
const Desctiption =styled.p ``;


export default BookDetail;