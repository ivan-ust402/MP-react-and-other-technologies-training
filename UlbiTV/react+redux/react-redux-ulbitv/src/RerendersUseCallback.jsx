import React, { useState, useMemo, useCallback } from "react"

export const SomeComponent = React.memo(({ increment }) => {
  console.log("Rerender Child Component")
  return (
    <>
      <h1>Дочерний компонент</h1>
      <button onClick={increment}>INCREMENT</button>
    </>
  )
})

export const RerendersUseCallback = () => {
  const [count, setCount] = useState(0)

  console.log("Rerender Main Component")

  const increment = useCallback(() => setCount((prev) => prev + 1), [])

  return (
    <div>
      <h1>{count}</h1>
      <SomeComponent increment={increment} />
    </div>
  )
}
