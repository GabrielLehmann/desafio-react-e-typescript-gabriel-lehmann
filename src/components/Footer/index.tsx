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
import facebookSvg from "../../assets/svg/Facebooklogo.svg";
import instagramSvg from "../../assets/svg/Instagramlogo.svg";
import twitterSvg from "../../assets/svg/Twitterlogo.svg";
import youtubeSvg from "../../assets/svg/Youtubelogo.svg";
import linkedinSvg from "../../assets/svg/Linkedinlogo.svg";

export default function Footer() {
  return (
    <footer>
      <div className={styles.news_letter}>
        <div className={styles.first_div_news}>
          <div className={styles.container_news}>
            <h2>assine nossa newsletter</h2>
            <div className={styles.second_div_news}>
              <input
                type="email"
                placeholder="E-mail"
                className={styles.news_input}
              />
              <button className={styles.news_button}>enviar</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_top}>
        <div className={styles.menu_list}>
          <div>
            <h2>INSTITUCIONAL</h2>
            <a>Quem Somos</a>
            <a>Política de Privacidade</a>
            <a>Segurança</a>
            <a>Seja um Revendedor</a>
          </div>
          <div>
            <h2>DÚVIDAS</h2>
            <a>Entrega</a>
            <a>Pagamento</a>
            <a>Troca e Devoluções</a>
            <a>Dúvidas Frequentes</a>
          </div>
          <div>
            <h2>FALE CONOSCO</h2>
            <a>Atendimento Ao Consumidor</a>
            <a>(11) 4159 9504</a>
            <a>Atendimento Online</a>
            <a>(11) 99433-8825</a>
          </div>
        </div>
        <div className={styles.redes_sociais}>
          <div className={styles.redes_sociais_svg}>
            <img src={facebookSvg} alt="logo do facebook" />
            <img src={instagramSvg} alt="logo do instagram" />
            <img src={twitterSvg} alt="logo do twitter" />
            <img src={youtubeSvg} alt="logo do youtube" />
            <img src={linkedinSvg} alt="logo do linkedin" />
          </div>
          <div>
            <p>www.loremipsum.com</p>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing <br /> Elit, Sed Do
          Eiusmod Tempor
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
      </div>
    </footer>
  );
}
