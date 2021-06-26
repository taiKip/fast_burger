
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import CartButton from './components/Cart/CartButton';
import Modal from './UI/Modal/Modal';
import CartItems from './components/Cart/CartItems';
function App() {
  return (
    <div className="App">
     <Modal><CartItems/></Modal>
     <Header/>
      <Menu/>
     <CartButton/>
    </div>
  );
}

export default App;
