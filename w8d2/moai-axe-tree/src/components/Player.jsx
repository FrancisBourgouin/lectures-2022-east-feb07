export default function Player(props) {
  return (
    <section className="player" data-testid="player">
      <span role="img" aria-label="player">
        👩‍💻
      </span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">
          <button
            data-testid="moai"
            type="button"
            value="Moai"
            onClick={() => props.setPlayerChoice("🗿")}
          >
            <span role="img" aria-label="moai">
              🗿
            </span>
          </button>
          <button
            data-testid="axe"
            type="button"
            value="Axe"
            onClick={() => props.setPlayerChoice("🪓")}
          >
            <span role="img" aria-label="axe">
              🪓
            </span>
          </button>
          <button
            data-testid="tree"
            type="button"
            value="Tree"
            onClick={() => props.setPlayerChoice("🌳")}
          >
            <span role="img" aria-label="tree">
              🌳
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
