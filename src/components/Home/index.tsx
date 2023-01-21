import styles from "./styles.module.scss";
import Homelogo from "../../assets/svg/Home.svg";
import Arrowright from "../../assets/svg/Arrowright.svg";
import { useState } from "react";
import ContactForm from "../ContactForm";

export default function Home() {
  const [tabValue, setTabValue] = useState(0);
  return (
    <main>
      <div className={styles.bread_crumb}>
        <img
          className={styles.bread_crumb_home}
          src={Homelogo}
          alt="home logo"
        />
        <img
          className={styles.bread_crumb_arrow}
          src={Arrowright}
          alt="arrow point to right"
        />
        <h2>INSTITUCIONAL</h2>
      </div>
      <div className={styles.tab_title}>
        <h2>INSTITUCIONAL</h2>
      </div>
      <div className={styles.tab_layout}>
        <div className={styles.tabs}>
          <button
            className={tabValue === 0 ? styles.tab_active : ""}
            onClick={() => {
              setTabValue(0);
            }}
          >
            Sobre
          </button>
          <button
            className={tabValue === 1 ? styles.tab_active : ""}
            onClick={() => {
              setTabValue(1);
            }}
          >
            Forma de Pagamento
          </button>
          <button
            className={tabValue === 2 ? styles.tab_active : ""}
            onClick={() => {
              setTabValue(2);
            }}
          >
            Entrega
          </button>
          <button
            className={tabValue === 3 ? styles.tab_active : ""}
            onClick={() => {
              setTabValue(3);
            }}
          >
            Troca e Devolução
          </button>
          <button
            className={tabValue === 4 ? styles.tab_active : ""}
            onClick={() => {
              setTabValue(4);
            }}
          >
            Segurança e Privacidade
          </button>
          <button
            className={tabValue === 5 ? styles.tab_active : ""}
            onClick={() => {
              setTabValue(5);
            }}
          >
            Contato
          </button>
        </div>
        <div className={styles.tab_content}>
          {(tabValue === 0 ||
            tabValue === 1 ||
            tabValue === 2 ||
            tabValue === 3 ||
            tabValue === 4) && (
            <>
              <h2>Sobre</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </>
          )}
          {tabValue === 5 && <ContactForm />}
        </div>
      </div>
    </main>
  );
}
