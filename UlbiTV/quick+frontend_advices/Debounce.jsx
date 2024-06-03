import React, { useCallback, useRef, useState } from "react"
import axios from "axios";

// ВАРИАНТ БЕЗ DEBOUNCE


/* 
export const Debounce = () => {
  const [value, setValue] = useState("")
  const remoteUsers = [{ name: "Гаврюша" }, { name: "Хрюша" }]
  const [users, setUsers] = useState([])

  async function searchUsers(value) {
    setUsers([])
    await new Promise((res) => setTimeout(res, 1000))
    setUsers(remoteUsers)
  }

  const changeHandler = useCallback(async (e) => {
    setValue(e.target.value)
    searchUsers(e.target.value)
  }, [])

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Поиск..."
        onChange={changeHandler}
      />
      {users &&
        users.map((user, index) => (
          <div key={index}>
            {index}. {user.name}
          </div>
        ))}
    </div>
  )
}
*/

// ВАРИАНТ С DEBOUNCE


// В React хук useRef используется для доступа к DOM узлам или для сохранения любых мутабельных значения между рендерами.

  /*
  Вот несколько основных причин, почему мы используем useRef в React:

  1. **Доступ к DOM элементам**: Используя useRef, мы можем получить доступ к DOM элементам напрямую, без необходимости использования document.getElementById или других DOM-манипуляций.

  2. **Сохранение состояния между рендерами**: При использовании useRef мы можем сохранять и обновлять значения, которые не вызывают повторный рендер компонента, в отличие от состояния, управляемого useState.

  3. **Анимация и фокус**: useRef может быть использован для управления анимацией или фокусом элементов, так как он позволяет сохранять ссылки на DOM узлы и обращаться к ним в любое время.

  4. **Взаимодействие с библиотеками сторонних разработчиков**: Некоторые библиотеки требуют использования useRef для инициализации или управления определенными компонентами.
  При инициализации хука useRef в React, мы можем передать любое значение в качестве начального значения, не только null. 

Вот несколько вариантов инициализации хука useRef:

1. **Инициализация с null:** Это может быть полезно, если нам нужно иметь ссылку, которую мы можем позже установить на какой-то DOM элемент или другое значение.

const myRef = useRef(null);


2. **Инициализация с DOM элементом:**
const myRef = useRef(document.createElement('div'));

Мы можем инициализировать useRef существующим DOM элементом, если нам нужно иметь ссылку на него сразу.

3. **Инициализация с другим значением:**
const myRef = useRef('initial value');

Мы также можем инициализировать useRef с другими значениями, например строкой, числом или объектом, в зависимости от наших потребностей.

Инициализация значения в useRef полезна, когда нам нужно иметь начальное значение для этой ссылки. Например, это может быть полезно для сохранения предыдущего значения в хуке эффекта или для сохранения какого-то начального состояния компонента.
  */

// Create debounce hook
export function useDebounce(callback, delay) {
  const timer = useRef(null)

  const debouncedCallback = useCallback((...args) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])

  return debouncedCallback;
}


export const Debounce = () => {
  const [value, setValue] = useState("")
  const [users, setUsers] = useState([])

  const searchUsers = useDebounce(async (value) => {
    console.log("11")
    setUsers([])
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
  }, 500)

  const changeHandler = useCallback(async (e) => {
    setValue(e.target.value)
    searchUsers(e.target.value)
  }, [])

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Поиск..."
        onChange={changeHandler}
      />
      {users &&
        users.map((user, index) => (
          <div key={index}>
            {index}. {user.name}
          </div>
        ))}
    </div>
  )
}
