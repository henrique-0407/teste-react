import './index.scss';

export default function App() {
  return (
    <div className="App">
      <div className='nave'>
        <nav>
          <img className='frei' src="/assets/images/icone-frei.png" alt="" />
          <h1>React Frei</h1>
          <ul>
            <a href="">Inicio</a>
            <a href="">Sobre</a>
          </ul>
        </nav>
      </div>

      <div className='home'>
        <h1>Escolha um treino</h1>
        <div className='seleciona'>
          <div className='amarelo'>
            <a href=""><img src="/assets/images/AMARELO.svg" alt="" /></a>
            <a href=""><img src="/assets/images/VERDE.svg" alt="" /></a>
            <a href=""><img src="/assets/images/CIANO.svg" alt="" /></a>
          </div>
          <div className='verde'></div>
          <div className='ciano'></div>
        </div>
      </div>


    </div>
  );
}


