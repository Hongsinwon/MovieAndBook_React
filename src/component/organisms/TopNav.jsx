import styled from "styled-components";
import {useLocation, NavLink } from "react-router-dom";
// useLocation => 현재 페이지 정보
// NavLink => 현재 페이지와 to가 같으면 a의 active가 붙는다.

const linkList = [
  {
    link : "/",
    name: "메인",
  },
  {
    link : "/movie",
    name: "영화",
  },
  {
    link : "/book",
    name: "책",
  },
]

const TopNav = () => {
  //useLocation() => hash , key, pathname="/", search, state
   const {pathname} = useLocation();
   //pathname ==  "/" 이면  <Nav> 내용이 <></>이 되도록한다.
   if (pathname === "/") {
     return <></>;
   }
   
  return (
    <Container>
      <Nav>
        {linkList.map(({link, name}) => (
          <CutomLink to={link} key={link}>
          <LinkItem>{name}</LinkItem>
        </CutomLink>
        ))}
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const LinkItem = styled.div`
  margin: 0 10px;
  padding: 10px;
`;

const CutomLink =styled(NavLink)`
  &.active {
    background: black;
    color: #fff
  }
`

export default TopNav;
