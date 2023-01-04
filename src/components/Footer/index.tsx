import styles from "./styles.module.scss";
import masterCardImg from "../../assets/img/masterCardM3Academy.png";
import visaImg from "../../assets/img/visaM3Academy.png";
import amexImg from "../../assets/img/amexM3Academy.png";
import eloImg from "../../assets/img/eloM3Academy.png";
import hiperCardImg from "../../assets/img/hiperCardM3Academy.png";
import payPalImg from "../../assets/img/payPalM3Academy.png";
import boletoImg from "../../assets/img/boletoM3Academy.png";
import vtexPCI from "../../assets/img/vtexPCIM3Academy.png";
import vtexSvg from "../../assets/svg/Vtexwhitelogo.svg";
import M3Svg from "../../assets/svg/M3whitelogo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <div className={styles.pagamentos}>
        <div className={styles.bandeiras}>
          <img src={masterCardImg} alt="Bandeira MasterCard" />
          <img src={visaImg} alt="Bandeira Visa" />
          <img src={amexImg} alt="Bandeira AmericanExpress" />
          <img src={eloImg} alt="Bandeira Elo" />
          <img src={hiperCardImg} alt="Bandeira HiperCard" />
          <img src={payPalImg} alt="Bandeira PayPal" />
          <img src={boletoImg} alt="Bandeira Boleto" />
        </div>
        <span className={styles.traço}></span>
        <div className={styles.certificado}>
          <img src={vtexPCI} alt="Certificado Vtex" />
        </div>
      </div>
      <div className={styles.logos}>
        <p>Powered By</p>
        <img src={vtexSvg} alt="vtex logo" />
        <p>Developed By</p>
        <img src={M3Svg} alt="M3 logo" />
      </div>
    </footer>
  );
}
