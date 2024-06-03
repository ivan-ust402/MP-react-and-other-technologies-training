// Контейнер написанный через HOC connect
/* Минусы использования connect: 
  1. Вызывается после каждого диспатча экшена, в то время как в функциональных хуках только в случае, если поменялся результат хотя бы одного из селекторов
  2. При использовании mapStateToProps, mapDispatchToProps могут создаваться массивы, объекты. Это значит, что в компоненты попадает новая ссылка и у нас происходит перерисовка. В функциональном компоненте такие ситуации отследить проще, плюс ко всему мы можем использовать useCallback, useMemo. Также в контейнере используются ownProps и если опять же там что-то меняется - у нас все ссылки перезатираются, а в функциональном компоненте мы можем использовать useCallback и следить за изменением только чего-то одного, соответственно, все дочерние компоненты перерисовываться не будут.
*/

const mapStateToProps = (state, ownProps) => {
  const value1 = state.field.value1
  const someValue2 = state.otherField.value1
  return {
    value1,
    someValue2,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)

// Контейнер написанный через функциональный стиль
// Такие контейнеры проще писать
const ComponentContainer = () => {
  const value1 = useSelector((state) => state.field.value1)
  const someValue2 = useSelector((state) => state.otherField.value1)

  const increment = useCallback(() => {
    dispatch({ type: "INCREMENT" })
  }, [])
  const decrement = useCallback(() => {
    dispatch({ type: "DECREMENT" })
  }, [])
  const reset = useCallback(() => {
    dispatch({ type: "RESET" })
  }, [])

  return (
    <Component 
      value1={value1}
      someValue2={someValue2}
      increment={increment}
      decrement={decrement}
      reset={reset}
    />
  )
}
