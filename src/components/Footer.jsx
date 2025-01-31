import Logo1 from "../assets/images/logo1.png";
import "../styles/Footer.css";
import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section>
        <div className="Section-Footer">
          <div className="Container-Footer">
            <ul>
              <img src={Logo1} alt="" className="Logo-Login" />
              <li className="Footer-HeadTwo">
                Gali Potensi Anda Melalui Pembelajaran <br></br> Video di
                Hariesok.id!
              </li>
              <li className="Footer-Addres">
                Jl.Usman Effendi No.50 Lowokwaru Malang
              </li>
              <li className="Footer-Phone">+62-877-7123-1234</li>
            </ul>
            <ul>
              <label htmlFor="" className="Footer-Label">
                Kategori
              </label>
              <li>
                <a href="" className="Footer-Link">
                  Digital & Teknologi
                </a>
              </li>
              <li>
                <a href="" className="Footer-Link">
                  Pemasaran
                </a>
              </li>
              <li>
                <a href="" className="Footer-Link">
                  Manajemen Bisnis
                </a>
              </li>
              <li>
                <a href="" className="Footer-Link">
                  Pengembangan Diri
                </a>
              </li>
              <li>
                <a href="" className="Footer-Link">
                  Desain
                </a>
              </li>
            </ul>
            <ul>
              <label htmlFor="" className="Footer-Label">
                Perusahaan
              </label>
              <li>
                <a href="" className="Footer-Link">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="" className="Footer-Link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="" className="Footer-Link">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="" className="Footer-Link">
                  Ketentuan Layanan
                </a>
              </li>
              <li>
                <a href="" className="Footer-Link">
                  Bantuan
                </a>
              </li>
            </ul>
            <ul>
              <label htmlFor="" className="Footer-Label">
                Komunitas
              </label>
              <li>
                <a href="" className="Footer-Link">
                  Tips Sukses
                </a>
              </li>
              <li>
                <a href="" className="Footer-Link">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer-Icons">
            <hr className="Footer-Horisontal" />
            <span className="Footer-CopyRight">
              @2023 Gerobak Sayur All Right Reserved.
            </span>
            <div className="Icons-Footer">
              <a href="" className="Link-FooterIcon">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="" className="Link-FooterIcon">
                <FaFacebook></FaFacebook>
              </a>
              <a href="" className="Link-FooterIcon">
                <FaInstagram></FaInstagram>
              </a>
              <a href="" className="Link-FooterIcon">
                <FaTwitter></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
