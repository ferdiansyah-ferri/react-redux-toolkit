import Logo1 from "../assets/images/logo1.png";
import "../styles/LoginForm.css";
import { FaRegEyeSlash } from "react-icons/fa";
import LogoGoogle from "../assets/images/LogoGoogle.png";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="LoginForm">
        <div className="Navbar-Login">
          <img src={Logo1} alt="" className="Logo-Login" />
        </div>
        <div className="Container-Login">
          <div className="Container-LoginHead">
            <h1 className="Login-h1">Masuk ke Akun</h1>
            <p className="Login-P">Yuk,lanjutin belajarmu di Videobelajar</p>
          </div>
          <form className="Form-Login">
            <label htmlFor="" className="Label-Login">
              E-mail<span className="Span-Login">*</span>
            </label>
            <input className="Input-Login" type="email" />
            <label htmlFor="password" className="Label-Login">
              Kata Sandi<span className="Span-Login">*</span>
            </label>
            <input className="Input-Login" type="password" />
            <FaRegEyeSlash className="Icon-Eye" />
            <a href="" className="Link-LupaPassword">
              Lupa Password?
            </a>
            <button className="Button-Login" type="submit">
              Masuk
            </button>
            <button className="Button-LoginDaftar" type="submit">
              Daftar
            </button>
            <div className="Span-Horisontal">
              <hr className="Horisontal-Kiri"></hr>
              <span className="Span-AtauLogin">atau</span>
              <hr className="Horisontal-Kanan"></hr>
            </div>

            <button className="Button-LoginGoogle" type="submit">
              <img src={LogoGoogle} alt="Logogoggle" className="Logo-Google" />
              <span className="Span-Google">Masuk dengan Google</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
