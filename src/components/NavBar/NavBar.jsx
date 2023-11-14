import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import logo from "/src/assets/logo.png";

export const NavBar = () => {
  return (
    <nav className={`d-flex justify-content-between align-items-center p-4 ${styles.navBar}`}>
      <Link to={"/"}>
      <img src={logo} alt="Logo" className={`${styles.logo}`} />
      </Link>
      <div className="d-flex justify-content-between align-items-center mx-5">
        <Link to={"/category/makeup"}>
          <button className={`${styles.navButton}`}>MAKEUP</button>
        </Link>
        <Link to={"/category/skincare"}>
          <button className={`${styles.navButton}`}>SKINCARE</button>
        </Link>
        <Link to={"/category/sale"}>
          <button className={`${styles.navButton}`}>SALE</button>
        </Link>
      </div>
      <div className={`d-flex align-items-center ${styles.cartContainer}`}></div>
      <CartWidget />
    </nav>
  );
};