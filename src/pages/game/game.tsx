import { Link } from "react-router-dom";
import { GameField } from "../../components/game-field/game-field";
import styles from "./game.module.css"

export function GamePage() {
  return (
    <div className={styles.main}>
      <Link className={styles.link} to="/">На главную</Link>
      <h1>Тут будет GamePage</h1>
      <GameField />
    </div>
  );
}
