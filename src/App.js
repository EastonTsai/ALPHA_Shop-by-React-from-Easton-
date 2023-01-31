
// import "./reset200802.css" //初始化 reset.css
// import './style/main.css'

//Header-jsx
import Header from './components/header/header';

//Main-jsx
import Main from './components/main/main';

//Footer-jsx
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="App">
      <div id="svg-icons-container" style={{disPlay: 'none'}}></div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
