import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { mockData } from "../assets/mockData/";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);
  return (
    <>
      <div className="Home-Page">
        <Navbar />
        <div className="Container-Box">
          <div className="Box-Judul">
            <h1 className="Home-HeadOne">
              Revolusi Pembelajaran:Temukan Ilmu Baru Melalui Platfrom Video
              Interaktif!
            </h1>
            <p className="Home-P">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi.Tidak hanya itu anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman anda.
            </p>
            <a href="" className="Link-HomeCta">
              Temukan Video Course Untuk Dipelajari!
            </a>
          </div>
        </div>
        <div className="Home-Section1">
          <h2 className="Home-JudulTwo">Koleksi Video Pembelajaran Unggulan</h2>
          <p className="Home-P2">
            Jelajahi dunia pengetahuan melalui pilihan kami!
          </p>
        </div>
        <div className="Home-Categories">
          <a href="" className="Link-Categories">
            Semua Kelas
          </a>
          <a href="" className="Link-Categories">
            Pemasaran
          </a>
          <a href="" className="Link-Categories">
            Desain
          </a>
          <a href="" className="Link-Categories">
            Pengembangan Diri
          </a>
          <a href="" className="Link-Categories">
            Bisnis
          </a>
        </div>
        <div className="Section-Cart">
          {products.products.slice(0, 9).map((product) => (
            <div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="Container-CTA">
          <div className="Box-CTA">
            <h4 className="Cta-Head">NEWSLETTER</h4>
            <h3 className="Cta-HeadTwo">Mau Belajar Lebih Banyak?</h3>
            <p className="Cta-P">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>
            <input
              type="text"
              placeholder="Masukan Emailmu"
              className="Cta-Input"
            />
            <button className="Cta-Button">Subscribe</button>
          </div>
        </div>
        <div className="Section-FooterHome">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
