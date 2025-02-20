import { Outlet } from "react-router-dom"
import styled from "styled-components";

// styled-components로 파일내 css 설정
const SECTION = styled.section`
  width : 95%;
  margin : 0 auto;
`;

function AdminBoard() {
  return (
    <>
      <SECTION>
        <Outlet/>
      </SECTION>
    </>
  )
}

export default AdminBoard