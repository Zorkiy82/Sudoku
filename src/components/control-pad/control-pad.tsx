import { clearSelectedCell } from "../../services/actions/game-field/game-field";
import { TOGGLE_NOTES_MODE } from "../../services/constants";
import { useDispatch } from "../../services/hooks";
import { ControlButton } from "../control-button/control-button";
import { NotesModeIndicator } from "../notes-mode-indicator/notes-mode-indicator";
import styles from "./control-pad.module.css";

export const Controlpad = () => {
  const dispath = useDispatch();
  function handlePressButton(value: string) {
    switch (value) {
      case "clear":
        dispath(clearSelectedCell())
        break;
      case "notes":
        dispath({type: TOGGLE_NOTES_MODE});
        break;
      case "help":
        console.log("Помоги заполнить ячейку");
        break;

      default:
        console.log(
          "Ничего не делай. Поведение этой кнопки еще не определено."
        );
        break;
    }
  }
  return (
    <div className={styles.controlpad}>
      <ControlButton
        name="Очистить"
        value="clear"
        handlerPress={handlePressButton}
      />
      <ControlButton
        name="Заметки"
        value="notes"
        handlerPress={handlePressButton}
      > <NotesModeIndicator/> </ControlButton>
      <ControlButton
        name="Подсказка"
        value="help"
        handlerPress={handlePressButton}
      />
      
    </div>
  );
};
