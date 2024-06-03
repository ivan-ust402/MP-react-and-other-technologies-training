import React, { useState, useMemo } from "react"
import { RerendersSomeComponent } from "./RerendersSomeComponent"

// Необходимо кэширование (мемоизация)
const getList = () => [1, 2, 3]
export const RerendersMainComponent = () => {
  const [count, setCount] = useState(0)
  // const [list, setList] = useState([1, 2, 3])
  // В таком случае необходимо кэширование (мемоизация)
  const list = useMemo(() => getList(), [])

  console.log("Rerender Main Component")

  const increment = () => setCount(count + 1)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <RerendersSomeComponent list={list}/>
    </div>
  )
}
