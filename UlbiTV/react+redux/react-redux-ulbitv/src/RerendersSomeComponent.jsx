import React from 'react';



export const RerendersSomeComponent =
React.memo(({list}) => {
  console.log("Rerender Child Component")
  return (
    <h1>
      Дочерний компонент
      {list.map(item => <div key={item}>{item}</div>)}
    </h1>
  )
}) 



