// import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import boardlist from 'styles/boardlist.module.css'

const boardData = [
  {
    id : 1,
    category : '공지사항',
    title : '업데이트 안내1',
    content : '금일부터...',
    user : '운영진',
    viewCount : 1,
    creaDate : '2025.02.01',
    state: '삭제',
    deleteDate : '2025.02.15'
  },
  {
    id : 2,
    category : '공지사항',
    title : '업데이트 안내2',
    content : '금일부터...',
    user : '운영진',
    viewCount : 1,
    creaDate : '2025-02.01',
    state: '게시중',
    deleteDate : ' - '
  },{
    id : 3,
    category : '공지사항',
    title : '업데이트 안내3',
    content : '금일부터...',
    user : '운영진',
    viewCount : 1,
    creaDate : '2025-02.01',
    state: '삭제',
    deleteDate : '2025.02.15'
  },{
    id : 4,
    category : '공지사항',
    title : '업데이트 안내4',
    content : '금일부터...',
    user : '운영진',
    viewCount : 1,
    creaDate : '2025-02.01',
    state: '게시중',
    deleteDate : ' - '
  },{
    id : 5,
    category : '공지사항',
    title : '업데이트 안내5',
    content : '금일부터...',
    user : '운영진',
    viewCount : 1,
    creaDate : '2025-02.01',
    state: '게시중',
    deleteDate : ' - '
  },{
    id : 6,
    category : '공지사항',
    title : '업데이트 안내6',
    content : '금일부터...',
    user : '운영진',
    viewCount : 1,
    creaDate : '2025-02.01',
    state: '게시중',
    deleteDate : ' - '
  },{
    id : 7,
    category : '공지사항',
    title : '업데이트 안내7',
    content : '금일부터...',
    user : '운영진',
    viewCount : 1,
    creaDate : '2025-02.01',
    state: '게시중',
    deleteDate : ' - '
  },{
    id : 8,
    category : '공지사항',
    title : '업데이트 안내8',
    content : '금일부터...',
    user : '운영진',
    viewCount : 1,
    creaDate : '2025-02.01',
    state: '게시중',
    deleteDate : ' - '
  },{
    id : 9,
    category : '공지사항',
    title : '업데이트 안내9',
    content : '금일부터...',
    user : '운영진',
    viewCount : 1,
    creaDate : '2025-02.01',
    state: '삭제',
    deleteDate : '2025.02.15'
  },{
    id : 10,
    category : '공지사항',
    title : '업데이트 안내10',
    content : '금일부터...',
    user : '운영진',
    viewCount : 1,
    creaDate : '2025-02.01',
    state: '삭제',
    deleteDate : '2025.02.15'
  },{
    id : 11,
    category : '공지사항',
    title : '업데이트 안내11',
    content : '금일부터...',
    user : '운영진',
    viewCount : 1,
    creaDate : '2025-02.01',
    state: '게시중',
    deleteDate : ' - '
  },
]

// 통신으로 대체
// const boardData = async()=>{
//   try{
//     const res = await axios.get('주소주소주소주소', {
//       headers : {
//         'Content-Type' : 'application/json'
//       },
//     })
//     return res;
//   }
//   catch(err){
//     console.error(err);
//   }
// }

function BoardList() {
  // 게시글 보기 navigater
  const navigate = useNavigate();
  const listview=(e, idx, state)=>{
    if (e.target.type !== 'checkbox') {
      if(state == "삭제"){
        alert('삭제된 게시물 입니다.')
        return
      }
      navigate(`/adminboard/boardview/${idx}`)
    }
    return
  }
  
  const [selectAll, setSelectAll] = useState(false);
  const [checkedItem, setCheckedItem] = useState({});
  // 체크박스 전체선택
  const checkAll=(e)=>{
    const isChecked = e.target.checked;
    setSelectAll(isChecked)

    const newCheckedItems = {};
    boardData.forEach((item) => {
      newCheckedItems[item.id] = isChecked; 
    });
    setCheckedItem(newCheckedItems);
  }
  // 체크박스 개별선택
  const checkItem=(id)=>{
    setCheckedItem((checklist) => {
      const newCheckItem = { ...checklist, [id]:!checklist[id]} 
      
      const allChecked = Object.values(newCheckItem).every(Boolean);
      setSelectAll(allChecked);
      return newCheckItem
    })
  }

  return (
  <>
    <section className={boardlist.topContainer}>
      <article className={boardlist.filter}>
        필터
      </article>

      <article className={boardlist.search}>
        <label htmlFor='search'>검색어</label>

        <select name="filter" id="filter">
          <option value="all">전체</option>
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="title_content">제목+내용</option>
          <option value="user">작성자</option>
        </select>
        <input id='search' name='search' type="search" />
        <button>검색</button>
      </article>
    </section>

    <p className={boardlist.listcount}>전체 11건</p>
    <table className={boardlist.table}>
      <thead>
        <tr>
          <th><input type="checkbox" checked={selectAll} onChange={(e)=>{checkAll(e)}} /></th>
          <th>No.</th>
          <th>카테고리</th>
          <th>제목</th>
          <th>내용</th>
          <th>작성자</th>
          <th>조회수</th>
          <th>작성일자</th>
          <th>상태</th>
          <th>삭제일자</th>
        </tr>
      </thead>
      <tbody>
        {boardData.map((item, index)=>(
          <tr key={item.id} onClick={(e)=>listview(e, item.id, item.state)}>
            <td><input type="checkbox" checked={checkedItem[item.id] || false} onChange={()=>{checkItem(item.id)}}/></td>
            <td>{index+1}</td>
            <td>{item.category}</td>
            <td>{item.title}</td>
            <td>{item.content}</td>
            <td>{item.user}</td>
            <td>{item.viewCount}</td>
            <td>{item.creaDate}</td>
            <td>{item.state}</td>
            <td>{item.deleteDate}</td>
          </tr>
        ))}
      </tbody>
    </table>


    {/* 페이지네이션 수정예정 */}
    <div className={boardlist.btn}>
      <button className={boardlist.numberBtn}>이전</button>
      <button className={boardlist.numberBtn}>1</button>
      <button className={boardlist.numberBtn}>2</button>
      <button className={boardlist.numberBtn}>3</button>
      <button className={boardlist.numberBtn}>4</button>
      <button className={boardlist.numberBtn}>5</button>
      <button className={boardlist.numberBtn}>다음</button>
    </div>
  </>
  )
}

export default BoardList

