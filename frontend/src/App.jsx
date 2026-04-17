import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faUserAstronaut, faKeyboard } from '@fortawesome/free-solid-svg-icons'

const BASE = import.meta.env.BASE_URL

export default function App() {
  return (
    <div className="page">
      <header>
        <h1>Jeux VideoPS</h1>
      </header>

      <main>

        <div className="card">
          <div className="card-banner" style={{ background: 'linear-gradient(135deg, #0a0a1a, #1a1a4a)' }}>
            <FontAwesomeIcon icon={faUserAstronaut} />
          </div>
          <div className="card-body">
            <h2>Space Invaders</h2>
            <p>Protégez le cœur de la carte face à des vagues d’ennemis venus de l’espace.</p>
            <a className="btn" href={`${BASE}games/space-invaders/index.html`}>Jouer</a>
          </div>
        </div>

        <div className="card">
          <div className="card-banner" style={{ background: 'linear-gradient(135deg, #0a0a1a, #1a3a1a)' }}>
            <FontAwesomeIcon icon={faKeyboard} />
          </div>
          <div className="card-body">
            <h2>SpaceWord</h2>
            <p>Un jeu de plateforme dans l’espace, vous devez bondir de plateforme en plateforme tout en esquivant les obstacles.</p>
            <a className="btn" href={`${BASE}games/spaceword/index.html`}>Jouer</a>
          </div>
        </div>

      </main>

      <footer>
        Jeux VideoPS - 2026
      </footer>
    </div>
  )
}
