import { NavLink, useLocation } from "react-router-dom"
import sidenav from "styles/sidenav.module.css"
import { useSidebar } from "../../context/sidebarContext";
import { memo } from "react";

function navSelect(isActive, currentPath, itemCategory) {
    // 현재 URL이 boardlist, boardview, boardinput 중 하나인지 확인
    const isBoardPage = currentPath.includes(`/adminboard/boardlist/${itemCategory}`)
    || currentPath.includes(`/adminboard/boardview/${itemCategory}`)
    || currentPath.includes(`/adminboard/boardinput/${itemCategory}`);
  return isActive || isBoardPage ? sidenav.activeLink : "";
}

const toLink = [
  { to: '/', icon : '🏠', text: '홈' },
  { to: '/adminuser', icon : '👨‍💼', text: '회원 관리' },
  { to: '/adminboard/boardlist/1', icon : '🔔', text: '공지사항 관리', category: "1" },
  { to: '/adminboard/boardlist/2', icon : '❓', text: '문의하기 관리', category: "2" },
  { to: '/adminboard/boardlist/3', icon : '❔', text: 'FAQ 관리', category: "3" },
  { to: '/adminprice', icon : '📈', text: '공시가 관리' },
]

function SideNav() {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const location = useLocation();

  return (
  <>
    <nav className={`${sidenav.wrapper} ${sidebarOpen ? sidenav.open : sidenav.close}`}>
      <p className={sidenav.btn} onClick={()=>toggleSidebar()}>
        {sidebarOpen ? '◀◀':'▶▶'}
      </p>
      <ul>
        {toLink.map((item) => (
          <li key={item.to}>
            <NavLink 
              className={({ isActive }) => navSelect(isActive, location.pathname, item.category)}
              to={item.to}>{item.icon} <span className={`${sidenav.menutext} ${sidebarOpen ? sidenav.open : sidenav.close}`}>{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </>
  )
}

export default memo(SideNav);