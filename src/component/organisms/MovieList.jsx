import styled from "styled-components";

const MovieList = () => {
  return (
    <>
      <List>
        <Item>
          <Image src="https://upload.wikimedia.org/wikipedia/ko/9/92/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4_%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8B%B0_%EC%9B%8C.jpg" />
          <Title>어벤저스</Title>
          <PubDate>2020</PubDate> / <UserRating>4.5</UserRating>
        </Item>

        <Item>
          <Image src="https://upload.wikimedia.org/wikipedia/ko/9/92/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4_%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8B%B0_%EC%9B%8C.jpg" />
          <Title>어벤저스</Title>
          <PubDate>2020</PubDate> / <UserRating>4.5</UserRating>
        </Item>
      </List>
    </>
  );
};

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Item = styled.li``;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.p``;
const PubDate = styled.span``;
const UserRating = styled.span``;

export default MovieList;
