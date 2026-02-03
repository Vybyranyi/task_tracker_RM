import styles from "./Button.module.scss";

const Button = ({ children, color, disabled, onClick }) => {
  const buttonClass = color === "error" ? styles.error : "";

  return (
    <button
      className={`type14 ${styles.button} ${buttonClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
