import './App.css';
//npm start
//cd .\meu-projeto

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
        <a href='sobre'>Sobre Nós</a>
        <a href='cardapio'>Cardápio</a>
        <a href='contato'>Contato</a>
      </nav>

      <div className='img'>
        <img src = './IMG1.png' alt='GourmetDelight'/>        
        <h4>Descubra o sabor da Excelência!</h4>
        <h1>GourmetDelight</h1>       
      </div>

      
      <section className='comidas'>
      <h2>Explore Nossas Delícias</h2>
      <div className='cardapio'>
          <div className='comidas2'>
            <img src='./IMG3.png' alt='Doces Finos'/>
            <button>Doces Finos</button>
          </div>
          <div className='comidas1'>
            <img src='./IMG2.png' alt='Bolos e tortas'/>
            <button>Bolos e tortas</button>
          </div>
          <div className='comidas3'>
            <img src='./IMG4.png' alt='Comidas geladas'/>
            <button>Delícias geladas</button>
          </div>
        </div>
      </section>

      <div className='depoimentos'>
        <img src='./IMG5.png' alt=""/>
        <h2>Depoimentos</h2>
      </div>

      <container className='criticas'>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, nulla non tincidunt vulputate, ipsum diam tempus urna, at condimentum lorem tellus id magna.</p>
           <h3>Fulano</h3>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, nulla non tincidunt vulputate, ipsum diam tempus urna, at condimentum lorem tellus id magna.</p>
          <h3>Cicrano</h3>
         </div>
         <div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, nulla non tincidunt vulputate, ipsum diam tempus urna, at condimentum lorem tellus id magna.</p>
           <h3>Beltrano</h3>
         </div>
      </container>

      <div className='pa'><p>Explore nosso menu de confeitaria gourmet e experimente a fusão perfeita de sabor e elegância.
      Faça sua encomenda agora para uma experiência de doce requinte que você e seus convidados nunca esquecerão!</p></div>

      <div className='mapa'>
        <h2>Visite a nossa loja ou faça<br></br>sua encomenda online!</h2>
        <img src='./IMG6.png' alt=""/>
      </div>

      <footer>
        <section className='rodape1'>
          <img src = './[LOGO] GD.png' alt='GourmetDelight'/>
          <ul>
            <li>'(81) 90000-0000'</li>
            <li>'gourmetdelight@confeitaria.com'</li>
            <li>'Rua dos bobos, n° 0'</li>
          </ul>
        </section>

        <div className='rodape2'>
          <p>Copyright 2024</p>

          <div className='icon'>
            <a href='instagram'>
              <img src = './icon_insta.png' alt='Instagram'/>
            </a>
            <a href='whatsapp'>
              <img src = './icon_whats.png' alt='Whatsapp'/>
            </a>
            <a href='twitter'>
              <img src = './icon_twitter.png' alt='Twitter'/>
            </a>
            <a href='linkedin'>
              <img src = './icon_lkdin.png' alt='LinkedIn'/>
            </a>
          </div>

          <div className='pj'>
            <p>Desenvolvido por</p>
            <img src = './PJ.png' alt=""/>
          </div>
        </div>
      </footer>

    </div>
  );
}
 
export default App;
