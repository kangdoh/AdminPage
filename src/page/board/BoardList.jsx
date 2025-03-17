// import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import boardlist from 'styles/boardlist.module.css'
import Button from '../../components/common/Button';

import IconImages from 'images/icon/iconimages.jsx';

// styled-components ########################################
const TITLE = styled.div`
  font-family: var(--font-family-pretendard-bold);
  font-size: 2.8rem;
  margin : 43px 0 18px 0;
  display : flex;
  align-items: center;

  & img {
    filter: brightness(0) saturate(100%) invert(0%) sepia(71%) saturate(7467%) hue-rotate(180deg) brightness(113%) contrast(97%);
    width: 30px;
    height: auto;
    margin-right: 10px;
  }
`
// ##########################################################


// 임시 데이터
const boardData1 = [
  {
    id: 1,
    category: '공지사항',
    title: '업데이트 안내1',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025.02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  },
  {
    id: 2,
    category: '공지사항',
    title: '업데이트 안내2',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 3,
    category: '공지사항',
    title: '업데이트 안내3',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  }, {
    id: 4,
    category: '공지사항',
    title: '업데이트 안내4',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 5,
    category: '공지사항',
    title: '업데이트 안내5',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 6,
    category: '공지사항',
    title: '업데이트 안내6',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 7,
    category: '공지사항',
    title: '업데이트 안내7',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 8,
    category: '공지사항',
    title: '업데이트 안내8',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 9,
    category: '공지사항',
    title: '업데이트 안내9',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  }, {
    id: 10,
    category: '공지사항',
    title: '업데이트 안내10',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  }, {
    id: 11,
    category: '공지사항',
    title: '업데이트 안내11',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  },
]
const boardData2 = [
  {
    id: 1,
    category: '문의사항',
    title: '업데이트 안내1',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025.02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  },
  {
    id: 2,
    category: '문의사항',
    title: '업데이트 안내2',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 3,
    category: '문의사항',
    title: '업데이트 안내3',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  }, {
    id: 4,
    category: '문의사항',
    title: '업데이트 안내4',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 5,
    category: '문의사항',
    title: '업데이트 안내5',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 6,
    category: '문의사항',
    title: '업데이트 안내6',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 7,
    category: '문의사항',
    title: '업데이트 안내7',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 8,
    category: '문의사항',
    title: '업데이트 안내8',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 9,
    category: '문의사항',
    title: '업데이트 안내9',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  }, {
    id: 10,
    category: '문의사항',
    title: '업데이트 안내10',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  }, {
    id: 11,
    category: '문의사항',
    title: '업데이트 안내11',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  },
]
const boardData3 = [
  {
    id: 1,
    category: 'FAQ',
    title: '업데이트 안내1',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025.02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  },
  {
    id: 2,
    category: 'FAQ',
    title: '업데이트 안내2',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 3,
    category: 'FAQ',
    title: '업데이트 안내3',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  }, {
    id: 4,
    category: 'FAQ',
    title: '업데이트 안내4',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 5,
    category: 'FAQ',
    title: '업데이트 안내5',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 6,
    category: 'FAQ',
    title: '업데이트 안내6',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 7,
    category: 'FAQ',
    title: '업데이트 안내7',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 8,
    category: 'FAQ',
    title: '업데이트 안내8',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  }, {
    id: 9,
    category: 'FAQ',
    title: '업데이트 안내9',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  }, {
    id: 10,
    category: 'FAQ',
    title: '업데이트 안내10',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '삭제',
    deleteDate: '2025.02.15'
  }, {
    id: 11,
    category: 'FAQ',
    title: '업데이트 안내11',
    content: '금일부터...',
    user: '운영진',
    viewCount: 1,
    creaDate: '2025-02.01',
    state: '게시중',
    deleteDate: ' - '
  },
]


function BoardList() {
  // 통신으로 대체
  const { category } = useParams();
  // useEffect(()=>{
  //   const boardData = async()=>{
  //     try{
  //       const res = await axios.get('주소주소주소주소', {
  //         headers : {
  //           'Content-Type' : 'application/json'
  //         },
  //       })
  //       return res;
  //     }
  //     catch(err){
  //       console.error(err);
  //     }
  //   }
  // },[category])

  let boardData = [{}]; // 임시 더미설정
  let boardTitle = (undefined);
  let boardImage = (undefined);
  if (category === '1') { boardData = boardData1, boardTitle = '공지사항', boardImage = IconImages.noticeicon; }
  else if (category === '2') { boardData = boardData3, boardTitle = 'FAQ', boardImage = IconImages.faqicon; }
  else if (category === '3') { boardData = boardData2, boardTitle = '문의 답변', boardImage = IconImages.inquiries; }


  // @-게시글 보기 navigater
  const navigate = useNavigate();
  const BoardView = (e, idx, state) => {
    if (e.target.type !== 'checkbox') {
      if (state == "삭제") {
        alert('삭제된 게시물 입니다.')
        return
      }
      navigate(`/adminboard/boardview/${category}/${idx}`)
    }
    return
  }
  // 게시글 작성 navigater
  const BoardInput = () => {
    navigate(`/adminboard/boardinput/${category}`)
  }


  // @-체크박스 선택
  const [selectAll, setSelectAll] = useState(false);
  const [checkedItem, setCheckedItem] = useState({});
  // 전체선택
  const checkAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked)

    const newCheckedItems = {};
    boardData.forEach((item) => {
      newCheckedItems[item.id] = isChecked;
    });
    setCheckedItem(newCheckedItems);
  }
  // 개별선택
  const checkItem = (id) => {
    setCheckedItem((checklist) => {
      const newCheckItem = { ...checklist, [id]: !checklist[id] }
      const allChecked = Object.values(newCheckItem).every(Boolean);
      setSelectAll(allChecked);
      return newCheckItem
    })
  }


  // @-체그된 리스트 id 출력(배열의 형태로)
  // eslint-disable-next-line no-unused-vars
  const checkTureList = Object.entries(checkedItem || {}).filter(([key, value]) => value === true).map(([key]) => key);



  // @-게시글 삭제
  const DeleteList = () => {
    if (checkTureList.length === 0) {
      alert('선택된 항목이 없습니다.')
    }
    else {
      const result = confirm(`선택한 게시글을 삭제 하시겠습니까? (${checkTureList}번)`);
      if (result) {
        alert("삭제가 완료 되었습니다.");
      } else {
        alert("삭제가 취소 되었습니다.");
      }
    }
  }


  // @-게시판 검색기능
  let callCount = 0;
  const keywordSearch = (text) => {
    callCount++;
    if (callCount === 1) {
      alert(`"${text}" 검색어를 찾아주고 싶지 않습니다.`)
    }
    else if (callCount === 2) {
      alert(`"${text}"는 저도 사실 모르겠어요.`)
    }
    else if (callCount === 3) {
      alert("구글에 검색해 보시는 게 어떨까요?")
    }
    else if (callCount === 4) {
      callCount = 0;
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      keywordSearch(event.target.value);
    }
  };


  return (
    <>
      <TITLE>
        <img src={boardImage} alt="" />
        {boardTitle} 게시판
      </TITLE>
      <section className={boardlist.topContainer}>
        {category === '3' ?
          <article className={boardlist.filter}>
            <p>필터</p>
            <div>
              <div>
                <input type="checkbox" name="" id="Transaction" /><label htmlFor="Transaction">Transaction Inquiry</label>
                <input type="checkbox" name="" id="Report" /><label htmlFor="Report">Report an Issue</label>
                <input type="checkbox" name="" id="Feature" /><label htmlFor="Feature">Feature Request</label>
                <input type="checkbox" name="" id="Feedback" /><label htmlFor="Feedback">Other Feedback</label>
                <input type="checkbox" name="" id="General" /><label htmlFor="General">General Inquiry</label>
              </div>
              <div>
                <input type="checkbox" name="" id="wait" /><label htmlFor="wait">답변 대기중</label>
                <input type="checkbox" name="" id="complete" /><label htmlFor="complete">답변 완료</label>
              </div>
            </div>
          </article>
          : ""}

        <article className={boardlist.search}>
          <label htmlFor='search'>검색어</label>

          <select name="filter" id="filter">
            <option value="all">전체</option>
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="title_content">제목+내용</option>
            <option value="user">작성자</option>
          </select>
          <input id='search' name='search' type="search" placeholder='검색어를 입력해주세요.' onKeyDown={(e) => { handleKeyDown(e) }} />
          <button onClick={() => { keywordSearch() }}>검색</button>
        </article>
      </section>

      <p className={boardlist.listcount}>전체 11건</p>
      <table className={boardlist.table}>
        <thead>
          <tr>
            <th><input type="checkbox" checked={selectAll} onChange={(e) => { checkAll(e) }} /></th>
            <th>No.</th>
            <th>카테고리</th>
            <th className={boardlist.leftAlign}>제목</th>
            <th className={boardlist.leftAlign}>내용</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>작성일자</th>
            <th>상태</th>
            <th>삭제일자</th>
          </tr>
        </thead>
        <tbody>
          {boardData.map((item, index) => (
            <tr key={item.id} onClick={(e) => BoardView(e, item.id, item.state)}>
              <td>
                <input type="checkbox" checked={checkedItem[item.id] || false} onChange={() => { checkItem(item.id) }} />
              </td>
              <td>{index + 1}</td>
              <td>{item.category}</td>
              <td className={boardlist.leftAlign}>{item.title}</td>
              <td className={boardlist.leftAlign}>{item.content}</td>
              <td>{item.user}</td>
              <td>{item.viewCount}</td>
              <td>{item.creaDate}</td>
              <td>{item.state}</td>
              <td>{item.deleteDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 게시물 생성 || 삭제 */}
      <div className={boardlist.cdBtn}>
        <Button props="게시글 작성" onClick={() => BoardInput()}></Button>
        <Button props="선택 삭제" onClick={() => DeleteList()}></Button>
      </div>


      {/* 페이지네이션 수정 예정(임시) */}
      <div className={boardlist.page}>
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

