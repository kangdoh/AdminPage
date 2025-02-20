import { useNavigate } from "react-router-dom";
import header from "styles/header.module.css";


function Header() {
    const navigate = useNavigate()
    const heyYouGoHome =()=>{
        navigate('/')
    }
    return (
        <>
            <section className={header.section}>
                <h2 onClick={()=>{heyYouGoHome()}} className={header.logo}>LOGO</h2>
                <div className={header.sign}>
                    <p>로그인</p>
                </div>
            </section>
        </>
    )
}

export default Header