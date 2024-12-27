import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GameProvider } from './contexts/GameContext'


function App() {

  return (
    <GameProvider>
      <Header />
      <Main />
    </GameProvider>
  )
}

export default App
