import { type } from "os";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GameField } from "../../components/game-field/game-field";
import { Numpad } from "../../components/numpad/numpad";
import { GET_GAME_FIELD } from "../../services/constants";
import { useDispatch } from "../../services/hooks";
import styles from "./game.module.css";

export function GamePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_GAME_FIELD });
  }, []);
  return (
    <div className={styles.main}>
      <Link className={styles.link} to="/">
        На главную
      </Link>
      <h1>Тут будет GamePage</h1>
      <div className={styles.gameSection}>
        <GameField />
        <Numpad />
      </div>
    </div>
  );
}
