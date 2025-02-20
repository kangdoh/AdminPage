import 'styles/App.css'
import 'fonts/pretendard/pretendard.css'

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import SideNav from './components/layout/SideNav';
import AdminHome from './page/AdminHome';
import AdminUser from './page/AdminUser';
import AdminBoard from './page/AdminBoard';
import AdminPrice from './page/AdminPrice';
import BoardList from './page/board/BoardList';
import BoardView from './page/board/BoardView';
import BoardInput from './page/board/BoardInput';
import { SidebarProvider, useSidebar } from './context/sidebarContext';


const MainContent = () => {
  const location = useLocation(); // 현재경로 가져오기
  const { sidebarOpen } = useSidebar();
  return (
    <>
      <Header></Header>
      <SideNav></SideNav>

      {/* 이곳 section의 css설정은 App.css에서 설정. */}
      <section className={`page_container ${sidebarOpen ? "open" : "close"} ${location.pathname.replace("/", "") || "home"} `}>
        <Routes>
          <Route path='/' element={<AdminHome />}></Route>
          <Route path='/adminuser' element={<AdminUser />}></Route>

          <Route path='/adminboard/*' element={<AdminBoard />}>
            <Route path="" element={<Navigate to="boardlist" />}></Route>
            <Route path='boardlist' element={<BoardList />}></Route>
            <Route path='boardview/:idx' element={<BoardView />}></Route>
            <Route path='boardinput' element={<BoardInput />}></Route>
          </Route>

          <Route path='/adminprice' element={<AdminPrice />}></Route>
        </Routes>
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <SidebarProvider>
        <MainContent></MainContent>
      </SidebarProvider>
    </>
  )
}

export default App
