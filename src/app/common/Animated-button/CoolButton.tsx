"use client";
import styles from './Button.module.css';

const CoolButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={styles.coolBeans} onClick={onClick}>
      Cool Beans
    </button>
  );
};

export default CoolButton;