import header from "styles/header.module.css";

function Header() {
  return (
    <>
        <section className={header.section}>
            <h2 className={header.logo}>LOGO</h2>
            <div className={header.sign}>
                <p>로그인</p>
            </div>
        </section>
    </>
)
}

export default Header