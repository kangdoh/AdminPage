import { NavLink } from "react-router-dom"
import sidenav from "styles/sidenav.module.css"
import { useSidebar } from "../../context/sidebarContext";
import { memo } from "react";

function navSelect(isActive) {
  return isActive ? sidenav.activeLink : "";
}
const toLink = [
  { to: '/', icon : '🏠', text: '홈' },
  { to: '/adminuser', icon : '👨‍💼', text: '회원 관리' },
  { to: '/adminboard', icon : '🔔', text: '공지사항 관리' },
  // { to: '/adminboard', text: '문의하기 관리' },
  // { to: '/adminboard', text: 'FAQ 관리' },
  { to: '/adminprice', icon : '📈', text: '공시가 관리' },
]

function SideNav() {
  const { sidebarOpen, toggleSidebar } = useSidebar();
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
              className={({ isActive }) => navSelect(isActive)}
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