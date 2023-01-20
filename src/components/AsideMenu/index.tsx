import styles from "./styles.module.scss";
import Exit from "../../assets/svg/Exit.svg";
import { useAside } from "../../contexts/asideMenuContext";

export default function AsideMenu() {
  const { setAsideMenuOpen, isAsideMenuOpen } = useAside();
  return (
    <div
      className={`${styles.blackout} ${
        isAsideMenuOpen ? "" : styles.invisible
      }`}
    >
      <div
        className={`${styles.container} ${
          isAsideMenuOpen ? "" : styles.closed
        }`}
      >
        <div className={styles.in_out}>
          <button className={styles.in_button}>ENTRAR</button>
          <button
            onClick={() => {
              setAsideMenuOpen(false);
            }}
            className={styles.out_button}
          >
            <img src={Exit} alt="botão de sair" />
          </button>
        </div>
        <div className={styles.aside_buttons_div}>
          <button className={styles.aside_buttons}>CURSOS</button>
          <button className={styles.aside_buttons}>SAIBA MAIS</button>
          <button className={styles.aside_buttons}>INSTITUCIONAIS</button>
        </div>
      </div>
    </div>
  );
}
