import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { Income_expenses } from './components/income_expenses';
import { Transaction_list } from './components/transaction_list';
import { Add_transaction } from './components/Add_transaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    
    <>
    <GlobalProvider>
      <Header /> 
      <div className='container'>
        <Balance/>
        <Income_expenses/>
        <Transaction_list/>
        <Add_transaction/>
      </div>
    </GlobalProvider>
    </>
          
  );
}

export default App;
