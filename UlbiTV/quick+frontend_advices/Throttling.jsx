import React, { useCallback, useEffect, useRef, useState } from "react"
import axios from "axios";

// ВАРИАНТ БЕЗ Throttling
// При таком раскладе событие отслеживается каждую миллисекунду
// Это очень сильно подгружает приложение. Допустим у нас навешаны 
// на приложение какие-то метрики, и, когда пользователь активен, 
// мы отправляем их на сервер. Как только пользовател отошел и
// мышкой не двигает - мы ничего не отправляем на сервер. И нам 
// нужно следить за движением мыши. Если мы в классическом случае
// без тротлинга будем за ней следить, у нас каждую миллисекунду 
// будет отрабатывать коллбэк. Выход - использование тротлинга. 

// export const Throttling = () => {
//   const callback =  useCallback(
//     () => {
//       console.log("Движение мыши")
//     },
//     [],
//   );

//   useEffect(() => {
//     document.addEventListener('mousemove', callback)

//     return () => document.removeEventListener('mousemove', callback)
//   }, [])

//   return (
//     <div>
//       <h1>Отслеживаем движение мыши</h1>
//     </div>
//   )
// }


// ВАРИАНТ С Throttling
// Create throttling hook
export function useThrottle(callback, delay) {
  const isTrottled = useRef(null)

  const throttlingCallback = useCallback((...args) => {
    if (isTrottled.current) {
      return
    }
    callback(...args)
    isTrottled.current = true 
    setTimeout(() => {
      isTrottled.current = false
    }, delay)
  }, [callback, delay])

  return throttlingCallback;
}

export const Throttling = () => {
  const callback =  useCallback(
    () => {
      console.log("Движение мыши")
    },
    [],
  );

  const throttleMouseMove = useThrottle(callback, 1000)

  useEffect(() => {
    document.addEventListener('mousemove', throttleMouseMove)

    return () => document.removeEventListener('mousemove', throttleMouseMove)
  }, [])

  return (
    <div>
      <h1>Отслеживаем движение мыши</h1>
    </div>
  )
}