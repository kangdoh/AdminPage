import { Outlet } from "react-router-dom"
import styled from "styled-components";

// styled-components로 파일내 css 설정
const TITLE = styled.h2`
  font-family: var(--font-family-pretendard-light);
  font-size: 2.8rem;
  padding : 0 2.5%;
  margin : 60px 0 20px 0;
`
const SECTION = styled.section`
  width : 95%;
  margin : 0 auto;
`;

function AdminBoard() {
  return (
    <>
      <TITLE>게시판 통합 관리</TITLE>

      <SECTION>
        <Outlet/>
      </SECTION>
    </>
  )
}

export default AdminBoard