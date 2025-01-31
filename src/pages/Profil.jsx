import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../assets/images/Avatar.png";
import "../styles/Profil.css";
import { FaUser, FaBook, FaBriefcase } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { updateUser, deleteUser } from "../redux/userSlice";
import { useLoaderData } from "react-router-dom";
const Profil = () => {
  const { users } = useSelector((state) => state.user);
  console.log("data pengguna", users);

  const dispatch = useDispatch();
  const [editData, setEditData] = useState({ id: "", name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: editData.id,
        updatedData: { name: editData.name, email: editData.email },
      })
    );
    setEditData({ id: "", name: "", email: "" });
  };
  const handleDeleteUser = (userId) => {
    if (window.confirm("Apakah Anda Yakin Akan Menghapus Profil Ini?")) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <>
      <Navbar />

      <div className="ProfilPage">
        <div className="Box-ProfilKiri">
          <div>
            <label className="Label-Profil">Ubah Profil</label>
            <p className="Pesan-Profil">Ubah data diri anda</p>
          </div>
          <ul className="Kategori-Profil">
            <li className="Link-Profil">
              <FaUser />
              <a href="" className="Link-ProfilSaya">
                Profil Saya
              </a>
            </li>
            <li className="Link-Profil">
              <FaBook />
              <a href="" className="Link-Kelas">
                Kelas Saya
              </a>
            </li>
            <li className="Link-Profil">
              <FaBriefcase />
              <a href="" className="Link-Pesanan">
                Pesanan Saya
              </a>
            </li>
          </ul>
        </div>
        {users.map((user) => (
          <div className="Box-ProfilKanan" key={user.id}>
            <img src={Avatar} alt="" className="Image-Profil" />
            <ul className="Data-Profil">
              <li> {user.name}</li>
              <li>{user.email}</li>
              <li>
                <button
                  onClick={() =>
                    setEditData({
                      id: user.id,
                      name: user.name,
                      email: user.email,
                    })
                  }
                  className="Btn-Edit"
                >
                  Edit Profil
                </button>
              </li>

              <button
                onClick={() => handleDeleteUser(user.id)}
                className="Btn-Hapus"
              >
                Hapus Profil
              </button>
            </ul>

            <hr className="Garis-HrProfil" />
            {editData.id && (
              <div className="Box-InputProfil">
                <form className="InputProfil" onSubmit={handleSubmit}>
                  <div className="InputProfil-Name">
                    <label htmlFor="" className="Label-Input">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      // name="name"
                      className="Input-NameProfil"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="InputProfil-Name">
                    <label htmlFor="" className="Label-InputEmail">
                      E-mail
                    </label>
                    <input
                      type="email"
                      // name="email"
                      className="Input-NameProfil"
                      value={editData.email}
                      onChange={(e) =>
                        setEditData({ ...editData, email: e.target.value })
                      }
                    />
                  </div>

                  <select name="" id="" className="Select-PhoneProfil">
                    <option value="">+62</option>
                    <option value="">+62</option>
                    <option value="">+62</option>
                    <option value="">+62</option>
                  </select>
                  <div className="InputProfil-Name">
                    <label htmlFor="" className="Label-InputPhone">
                      No.Hp
                    </label>
                    <input type="text" className="Input-NameProfil" />
                  </div>

                  <button type="submit" className="Button-SimpanProfil">
                    simpan
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Profil;
