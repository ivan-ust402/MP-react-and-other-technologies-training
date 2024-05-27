import './App.css';
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  
  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  return (
    <div className="App center">
      <div style={{fontSize: '3rem'}}>{cash}</div>
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px'
      }}>
        <button onClick={() => addCash(Number(prompt('Введите сумму пополнения счета:')))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt('Введите сумму, которую хотели бы снять:')))}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
