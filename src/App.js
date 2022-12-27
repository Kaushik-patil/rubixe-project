import './App.css';
import Header from './components/Header';
import Bannerdiv from './components/Bannerdiv';
import Maindiv1 from './components/Maindiv1';
import Maindiv2 from './components/Maindiv2';
import Footer from './components/Footer';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <Header/>
      <Bannerdiv/>
      <Maindiv1/>
      <Maindiv2/>
      <Register/>
      <Footer/>

    </div>
  );
}

export default App;
