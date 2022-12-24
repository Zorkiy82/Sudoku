import { useSelector } from "../../services/hooks";
import styles from "./notes-mode-indicator.module.css";

export const NotesModeIndicator = () => {
  const isNotesMode = useSelector((store) => store.gameField.notesMode);
  return (
    <div
      className={styles.indicator + (isNotesMode ? " " + styles.active : "")}
    ></div>
  );
};
