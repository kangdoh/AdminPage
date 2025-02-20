import { useParams } from "react-router-dom";

function BoardView() {
  const { idx } = useParams();

  return (
    <>
      <div>BoardView</div>
      <p style={{ fontSize: '50px' }}>게시물 번호 : {idx}</p>

    </>
  )

}

export default BoardView