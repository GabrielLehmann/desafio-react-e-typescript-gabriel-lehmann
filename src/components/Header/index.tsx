import styles from "./styles.module.scss";
import M3Logo from "../../assets/svg/M3logo.svg";
import Lupa from "../../assets/svg/lupa.svg";
import Cart from "../../assets/svg/cart.svg";

export default function Header() {
  return (
    <>
      <header>
        <div className={styles.header_top}>
          <div className={styles.first_div}>
            <img className={styles.m3_logo} src={M3Logo} alt="logo m3" />
            <div className={styles.search}>
              <input type="text" placeholder="Buscar..."></input>
              <img src={Lupa} alt="lupa" />
            </div>
            <div className={styles.header_button}>
              <button className={styles.button_entrar}>Entrar</button>
              <button className={styles.cart_button}>
                <img src={Cart} alt="carrinho de compra" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.header_bottom}>
          <button className={styles.header_bottom_button}>cursos</button>
          <button className={styles.header_bottom_button}>saiba mais</button>
          <button className={styles.header_bottom_button}>
            institucionais
          </button>
        </div>
      </header>
    </>
  );
}
