import styles from "./control-button.module.css";

type TControlButtonProps = {
  buttonName: string;
};

export const ControlButton = ({ buttonName }: TControlButtonProps) => {
  return (
    <div className={styles.controlButton}>
      <p>{buttonName}</p>
    </div>
  );
};
