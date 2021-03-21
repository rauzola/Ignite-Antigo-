import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransaction] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransaction(true);
  }

  function handelCloseNewTransactionModal() {
      setIsNewTransaction(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handelCloseNewTransactionModal}
      />      

      <GlobalStyle />
    </>
  );
}
