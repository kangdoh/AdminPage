import 'styles/App.css'
import 'fonts/pretendard/pretendard.css'

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
// import Header from './components/layout/Header';
import SideNav from './components/layout/SideNav';
import AdminHome from './page/AdminHome';
import AdminUser from './page/AdminUser';
import AdminBoard from './page/AdminBoard';
import AdminPrice from './page/AdminPrice';
import BoardList from './page/board/BoardList';
import BoardView from './page/board/BoardView';
import BoardInput from './page/board/BoardInput';
import { SidebarProvider, useSidebar } from './context/sidebarContext';
import Login from './page/Login';


const MainContent = () => {
  const location = useLocation(); // 현재경로 가져오기
  const { sidebarOpen } = useSidebar();
  

  // 로그인 상태를 관리하는 훅 (예시)
  // const isAuthenticated = false; // 실제로는 상태 관리 (Context, Redux 등) 필요 
  // const PrivateRoute = ({ children }) => {
  //   return isAuthenticated ? children : <Navigate to="/login" />;
  // };

  
  return (
    <>
      {/* <Header></Header> */}
      <SideNav></SideNav>

      {/* 이곳 section의 css설정은 App.css에서 설정. */}
      <section className={`page_container ${sidebarOpen ? "open" : "close"} ${location.pathname.replace("/", "") || "home"} `}>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path='/' element={<AdminHome />}></Route>
          <Route path='/adminuser' element={<AdminUser />}></Route>

          <Route path='/adminboard/*' element={<AdminBoard />}>
            <Route path="" element={<Navigate to="boardlist" />}></Route>
            <Route path='boardlist/:category' element={<BoardList />}></Route>
            <Route path='boardview/:category/:idx' element={<BoardView />}></Route>
            <Route path='boardinput/:category' element={<BoardInput />}></Route>
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
