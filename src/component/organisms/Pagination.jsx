import styled, { css } from "styled-components";

const Pagination = ({ total, onPageChange, nowPage }) => {
  const lastPage = Math.ceil(total / 10);

  const startPage =Math.ceil(nowPage/10) * 10 - 9; 
  //lastPage가 startPage + 9 보다 작으면 lastPage로 하고 아니면  startPage + 9로 한다.
  const endPage = (startPage + 9) > lastPage ? lastPage : startPage + 9;
  const pageList = [];

  //console.log(lastPage, nowPage)
  for(let i = startPage; i <= endPage; i++){
    pageList.push(i)
  }

  return (
    <List>
      {nowPage > 1 && (
        <Item onClick={() => {onPageChange(nowPage - 1)}}>◀</Item>
        )}
      {pageList.map((page)=>(
        <Item 
        isActive={nowPage === page}
        onClick={() => {onPageChange(page)}} 
        key={page}
        >
        {page}
      </Item>
      ))}
      {nowPage < lastPage && (
      <Item onClick={() => {onPageChange(nowPage + 1)}}>▶</Item>
        )}
    </List>
  );
};

const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  :hover {
    background: #000;
    color: #fff;
  }
  /* //1번째 방법
  background: ${({isActive})=> (isActive && "#000")};
  color: ${({isActive})=> (isActive && "#fff")}; */

  //2번째방법
  ${({isActive}) =>
  isActive && 
  css`
   background:#000;
   color : #fff;
  `}

  ${({next}) =>
  next && 
  css`
   display: none;
  `}

  ${({prev}) =>
  prev && 
  css`
   display: none;
  `}
`;
export default Pagination;
