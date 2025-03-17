import { useParams } from "react-router-dom";
// import DOMPurify from "dompurify";


function BoardView() {
  // category는 게시판을 구분하기 위한 번호, idx는 게시글을 구분하기 위한 번호이다.
  const { category, idx } = useParams();
  const categoryMap = {
    '1': "공지사항",
    '2': "FAQ",
    '3': "문의 답변"
  };
  const categoryText = categoryMap[category]; 

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:4000/posts").then((response) => {
  //     setPosts(response.data);
  //   });
  // }, []);

  // DOMPurify 필터링
  // const puriContent = DOMPurify.sanitize(post.content, {
  //   ALLOWED_TAGS: ["p", "br", "strong", "em", "a", "span", "img"],
  //   ALLOWED_ATTR: ["href", "style", "src", "alt"]
  // });

  return (
    <>
      <div style={{ fontSize: '30px' }}>{categoryText} BoardView</div>
      <p style={{ fontSize: '20px' }}>게시물 번호 : {idx}</p>

      {/* dangerouslySetInnerHTML 가 태그를 적용시켜 출력하는 방법 */}
      {/* {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content || puriContent }} />
        </div>
      ))} */}

      

    </>
  )

}

export default BoardView