import { useParams } from "react-router-dom";

function BoardView() {
  const { category, idx } = useParams();
  const categoryMap = {
    '1': "공지사항",
    '2': "문의하기",
    '3': "FAQ"
  };
  const categoryText = categoryMap[category]; 

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:4000/posts").then((response) => {
  //     setPosts(response.data);
  //   });
  // }, []);


  return (
    <>
      <div style={{ fontSize: '30px' }}>{categoryText} BoardView</div>
      <p style={{ fontSize: '20px' }}>게시물 번호 : {idx}</p>

      {/* dangerouslySetInnerHTML 가 태그를 적용시켜 출력하는 방법 */}
      {/* {posts.map((post) => (
        <div key={post.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))} */}

    </>
  )

}

export default BoardView