import { useNavigate } from "react-router-dom";
import header from "styles/header.module.css";

import whitelogo from "images/shibagrow_LOGO_white.png"

function Header() {
    const navigate = useNavigate()
    const heyYouGoHome =()=>{
        navigate('/')
    }
    return (
        <>
            <section className={header.section}>
                <h2 onClick={()=>{heyYouGoHome()}} className={header.logo}>
                    <img src={whitelogo} alt="" />
                </h2>
                <div className={header.sign}>
                    <p>로그인</p>
                </div>
            </section>
        </>
    )
}

export default Header