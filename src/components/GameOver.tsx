export default function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h2>Game Over !!!</h2>
      {winner && <p>{winner} WON</p>}
      {!winner && <p>It's a Draw!</p>}
      <p>
        <button type="button" onClick={onRematch}>
          Rematch
        </button>
      </p>
    </div>
  );
}
