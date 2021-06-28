
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import CartButton from './components/Cart/CartButton';
import Modal from './UI/Modal/Modal';
import CartItems from './components/Cart/CartItems';
import { useState } from 'react';
import CartContextProvider from './contexts/CartContextProvider';
function App() {
  const [showModal, setShowModal] = useState(false)
  
  const toggleModal = () => {
    setShowModal(prev=>!prev)
  }
  return (
    <CartContextProvider>
      <div className="App">
        {showModal && <Modal onClose={toggleModal}><CartItems /></Modal>}
        <Header />
        <Menu />
        <CartButton onClick={toggleModal}/>
      </div>
    </CartContextProvider>
    
  );
}

export default App;
