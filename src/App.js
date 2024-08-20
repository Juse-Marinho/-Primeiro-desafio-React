import './App.css';
//npm start

function App() {
  return (
    <div className="App">
      
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"></link>
      
      
      <header className='logo'>
        <img src = './[LOGO] GD.png' alt='GourmetDelight'/>
      </header>

      <nav className="cabeçalho">
        <a href='App'>Página Inicial</a>
        <a href='pag.sobre'>Sobre Nós</a>
        <a href='pag.cardapio'>Cardápio</a>
        <a href='pag.contato'>Contato</a>
      </nav>

      <div className='img'>
        <img src = './IMG1.png' alt='GourmetDelight'/>
        <div className='texto'>
          <h4>Descubra o sabor da Excelência!</h4>
          <h1>GourmetDelight</h1>
        </div>
      </div>

      
      <section className='comidas'>
      <h2>Explore Nossas Delícias</h2>
      <div className='cardapio'>
          <div className='comidas1'>
            <img src='./IMG2.png' alt='Bolos e tortas'/>
          </div>
          <div className='comidas2'>
            <img src='./IMG3.png' alt='Doces Finos'/>
            <img src='./IMG4.png' alt='Comidas geladas'/>
          </div>
        </div>
      </section>

      <section className='depoimentos'>
        <img src='./IMG5.png' alt=""/>
        <h2>Depoimentos</h2>
      </section>


    </div>
  );
}
 
export default App;
