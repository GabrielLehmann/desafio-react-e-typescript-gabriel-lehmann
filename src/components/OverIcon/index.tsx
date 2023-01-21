import styles from "./styles.module.scss";

interface OverIconProps {
  imgUrl: string;
  action: () => void;
}

export default function OverIcon({ icons }: { icons: OverIconProps[] }) {
  return (
    <div className={styles.overIcon}>
      {icons.map((icon) => {
        return (
          <button onClick={icon.action}>
            <img src={icon.imgUrl} alt="" />
          </button>
        );
      })}
    </div>
  );
}
