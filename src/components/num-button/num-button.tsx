import { handleNumPadClick } from "../../services/actions/game-field/game-field";
import { useDispatch } from "../../services/hooks";
import styles from "./num-button.module.css";

type TNumButtonProps = {
  value: number;
};

export const NumButton = ({ value }: TNumButtonProps) => {
    const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(handleNumPadClick(value))
  };
  return (
    <div className={styles.numButton} onClick={handleOnClick}>
      <p className={styles.numButtonText}>{value}</p>
    </div>
  );
};
