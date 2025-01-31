import logo1 from "../assets/images/logo1.png";
import Avatar from "../assets/images/Avatar.png";
import "../styles/Navbar.css";
import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="Container-Navbar">
        <div className="Navbar">
          <img src={logo1} alt="VideobelajarLogo" className="Logo-Navbar" />
          <a href="" className="Link-Kategori">
            Kategori
          </a>
        </div>
        <img
          src={Avatar}
          alt=""
          className="Image-Navbar"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="Dropdown">
            <a href="/profile" className="Link-Navbar">
              Profil Saya
            </a>
            <a href="" className="Link-Navbar">
              Kelas Saya
            </a>
            <a href="" className="Link-Navbar">
              Pesanan Saya
            </a>
            <a href="" className="Link-Navbar">
              Keluar <FaSignOutAlt className="Icons-Out" />
            </a>
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
