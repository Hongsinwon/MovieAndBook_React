import styled from "styled-components";

/*   <Item>
        <Image src="https://www.wevity.com/upload/contest/20200926101901_bee9fb76.jpg" />
        <Title>책제목입니다.</Title>
        <Pubdate>년도</Pubdate> / <Publisher>평점</Publisher>
      </Item> */

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(({ link, image, title, pubdate, publisher }) => (
        <a key={link} href={link} target="_blank" rel="noreferrer">
          <Item>
            <Image src={image} />
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <Pubdate>{pubdate}</Pubdate> / <Publisher>{publisher}</Publisher>
          </Item>
        </a>
      ))}
    </List>
  );
};

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;
const Item = styled.li``;
const Image = styled.img`
  width: 100%;
  height: 360px;
`;
const Title = styled.h3`
  font-weight: normal;
`;
const Pubdate = styled.span``;
const Publisher = styled.span``;

export default BookList;
