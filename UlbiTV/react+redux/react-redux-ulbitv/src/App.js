import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "nanoid"
import { addCustomerAction, removeAllCustomersAction, removeCustomerAction } from "./store/customerReducer"
import { addCashAction, getCashAction } from "./store/cashReducer"
import { fetchCustomers } from "./asyncActions/customers"
import { useEffect, useState } from "react"

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cash.cash)
  const customers = useSelector((state) => state.customers.customers)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    if (customers.length === 0) {
      setIsLoaded(false)
    }
  }, [customers])

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }
  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }
  const addCustomersFromDB = () => {
    if (!isLoaded) {
      setIsLoaded(true)
      dispatch(fetchCustomers())
    }
  }
  const addCustomer = (name) => {
    const customer = {
      id: nanoid(),
      name,
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  const removeCustomers = () => {
    dispatch(removeAllCustomersAction())
  }

  return (
    <div className="App center">
      <div style={{ fontSize: "3rem" }}>Баланс: {cash}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px",
          gap: "10px",
        }}
      >
        <button
          className="control"
          onClick={() =>
            addCash(Number(prompt("Введите сумму пополнения счета:")))
          }
        >
          Пополнить счет
        </button>
        <button
          className="control"
          onClick={() =>
            getCash(Number(prompt("Введите сумму, которую хотели бы снять:")))
          }
        >
          Снять со счета
        </button>
      </div>
      {customers.length > 0 ? (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            listStyle: "none",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            margin: "5px",
          }}
        >
          {customers.map((customer, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                paddingLeft: "30px",
                alignText: "start",
              }}
              onClick={() => removeCustomer(customer)}
            >
              {index + 1}. {customer.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>Список клиентов пуст</div>
      )}
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
          gap: "10px",
        }}
      >
        <button
          className="control"
          onClick={() => addCustomer(prompt("Введите имя клиента:"))}
        >
          Добавить клиента
        </button>
        <button
          className="control"
          onClick={() => {
            addCustomersFromDB()
          }}
        >
          Добавить клиентов из базы
        </button>
        <button
          className="control"
          onClick={() => {
            removeCustomers()
          }
          }
        >
          Удалить всех клиентов
        </button>
      </div>
    </div>
  )
}

export default App
