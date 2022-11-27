import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Здесь будет HomePage</h1>
      <Link to="/game">Новая игра</Link>
    </div>
  );
}
