import { NavLink, useLocation } from "react-router-dom"
import sidenav from "styles/sidenav.module.css"
import { useSidebar } from "../../context/sidebarContext";
import { memo } from "react";
import IconImages from 'images/icon/iconimages.jsx'

function navSelect(isActive, currentPath, itemCategory) {
  // 현재 URL이 boardlist, boardview, boardinput 중 하나인지 확인
  const isBoardPage = currentPath.includes(`/adminboard/boardlist/${itemCategory}`)
    || currentPath.includes(`/adminboard/boardview/${itemCategory}`)
    || currentPath.includes(`/adminboard/boardinput/${itemCategory}`);
  return isActive || isBoardPage ? sidenav.activeLink : "";
}

const toLink = [
  { to: '/', icon: `${IconImages.iconChart01}`, icon02: `${IconImages.iconChart02}`, text: '통dddddddddd계' },
  { to: '/adminuser', icon: `${IconImages.iconUser01}`, icon02: `${IconImages.iconUser02}`, text: '회원 정보' },
  { to: '/admintransact', icon: `${IconImages.iconTransact01}`, icon02: `${IconImages.iconTransact02}`, text: '입출금' },
  { to: '/adminboard/boardlist/1', icon: `${IconImages.iconNotice01}`, icon02: `${IconImages.iconNotice02}`, text: '공지사항', category: "1" },
  { to: '/adminboard/boardlist/2', icon: `${IconImages.iconFaq01}`, icon02: `${IconImages.iconFaq02}`, text: 'FAQ', category: "2" },
  { to: '/adminboard/boardlist/3', icon: `${IconImages.iconInquiry01}`, icon02: `${IconImages.iconInquiry02}`, text: '문의 답변', category: "3" },
  { to: '/adminprice', icon: `${IconImages.iconPrice01}`, icon02: `${IconImages.iconPrice02}`, text: '공시가' },
]

function SideNav() {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const location = useLocation();

  return (
    <>
      <nav className={`${sidenav.wrapper} ${sidebarOpen ? sidenav.open : sidenav.close}`}>
        <p className={sidenav.btn} onClick={() => toggleSidebar()}>
          <img src={IconImages.iconMenu} alt="" />
        </p>
        <ul>
          {toLink.map((item) => (
            <li key={item.to}>
              <NavLink className={({ isActive }) => navSelect(isActive, location.pathname, item.category)} to={item.to}>
                {({ isActive }) => (<>
                  <img src={isActive ? item.icon02 : item.icon} alt="" />
                  <span className={`${sidenav.menutext} ${sidebarOpen ? sidenav.open : sidenav.close}`}>{item.text}</span>
                </>)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default memo(SideNav);