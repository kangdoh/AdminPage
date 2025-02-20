import { useState } from "react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';
import boardinput from 'styles/boardinput.module.css'
import Button from "../../components/common/Button";
import { useParams } from "react-router-dom";

function BoardInput() {
  const { category } = useParams();
  const categoryMap = {
    '1': "공지사항",
    '2': "문의하기",
    '3': "FAQ"
  };
  const categoryText = categoryMap[category]; 


  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const handleChange = (value) => {
    setValue(value);
  };

  // 데이터 통신한 부분
  const formSubmit = (a, b) => {
    alert(`제목 : ${a} / 내용: ${b}`)
  }

  // 툴바 옵션 커스터마이징
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      [{ color: [] }, { background: [] }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['link'],
      ['image'],
      ['clean']
    ]
  };

  return (
    <>
      <h1>{categoryText} 작성</h1>
      <section>
        <input className={boardinput.search} type="text" placeholder="제목을 입력해 주세요."
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          value={value} // 에디터에 보여질 값
          onChange={handleChange}
          theme="snow" // 툴바 스타일 (snow, bubble 등)
          modules={modules} // 커스터마이징된 툴바 적용
          style={{
            height: '500px',
            width: '100%',
          }}
        />
        <div>
          <h3>에디터 내용:</h3>
          <div>{value}</div> {/* 에디터의 내용을 출력 */}
        </div>
      </section>

      {/* 작성완료시 value의 값을 DB저장(태그까지 저장한다는 의미) */}
      {/* 추후에 태그까지 포함한 상태로 받아서 dangerouslySetInnerHTML로 게시글 생성 */}
      <div className={boardinput.submitbtn}>
        <Button onClick={() => { formSubmit(title, value) }} props="작성 완료"></Button>
      </div>
    </>
  )
}

export default BoardInput