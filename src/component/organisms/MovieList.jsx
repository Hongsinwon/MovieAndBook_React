import styled from "styled-components";

const MovieList = ({ data }) => {
  return (
    <>
      <List>
        {data.map(({ image, title, pubDate, userRating, link }) => (
          <a key={link} href={link} target="_blank" rel="noreferrer">
          <Item>
            <Image src={image} />
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <PubDate>{pubDate}</PubDate> /{" "}
            <UserRating>{userRating}</UserRating>
          </Item>
        </a>
        ))}
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
  height: 320px;
`;
const Title = styled.p``;
const PubDate = styled.span``;
const UserRating = styled.span``;

export default MovieList;
