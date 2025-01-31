import Logo1 from "../assets/images/logo1.png";
import LogoIDN from "../assets/images/LogoIDN.png";
import LogoGoogle from "../assets/images/LogoGoogle.png";
import { FaEyeSlash } from "react-icons/fa";
import "../styles/RegisterForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/userSlice";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    NoTelepon: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    navigate("/profil");
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="RegisterForm">
        <div className="Navbar-Login">
          <img src={Logo1} alt="" className="Logo-Login" />
        </div>
        <div className="Container-Register">
          <div className="Register-Head">
            <h1 className="Register-h1">Pendaftaran Akun</h1>
            <p className="Register-P">Yuk,daftarkan akunmu sekarang juga!</p>
          </div>
          <form action="" className="Register-Form" onSubmit={handleSubmit}>
            <label htmlFor="" className="Label-Register">
              Nama Lengkap<span className="Span-Login">*</span>
            </label>
            <input
              type="text"
              className="Input-Register"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="" className="Label-Register">
              E-mail<span className="Span-Login">*</span>
            </label>
            <input
              type="email"
              className="Input-Register"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="" className="Label-Register">
              No.Hp<span className="Span-Login">*</span>
            </label>
            <div className="Select-Phone">
              <img src={LogoIDN} alt="LogoIDN" className="Logo-IDN" />
              <select name="" id="" className="Phone">
                <option value="">+62</option>
              </select>
              <input
                type="phone"
                className="Phone-Input"
                name="NoTelepon"
                value={formData.NoTelepon}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="" className="Label-Register">
              Kata Sandi<span className="Span-Login">*</span>
            </label>
            <FaEyeSlash className="Icon-Eye1" />

            <input
              type="password"
              className="Input-Register"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="" className="Label-Register">
              Konfirmasi Kata Sandi<span className="Span-Login">*</span>
            </label>
            <FaEyeSlash className="Icon-Eye2" />
            <input type="password" className="Input-Register" />
            <span className="Link-LupaPassword">Lupa Password?</span>
            <button className="Button-Login">Daftar</button>
            <button className="Button-LoginDaftar">Masuk</button>
            <div className="Span-HorisontalRegister">
              <hr className="HRS-KiriRegister"></hr>
              <span className="Span-AtauRegister">atau</span>
              <hr className="HRS-KananRegister"></hr>
            </div>
            <button className="Button-LoginGoogle">
              <img src={LogoGoogle} alt="" className="Logo-Google" />
              <span className="Span-Google">Masuk dengan Google</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default RegisterForm;
