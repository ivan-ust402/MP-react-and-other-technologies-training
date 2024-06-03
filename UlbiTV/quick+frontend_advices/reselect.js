const selectShopItems = state => state.shop.items
const selectTaxPercent = state => state.shop.taxPercent 

// В данном случаем, если не измениться массив items, перерасчитываться данный селектор не будет (мемоизировали это значение)
const selectSubtotal = createSelector(selectShopItems, items => items.reduce((subtotal, item) => subtotal + item.value, 0))


// Подсчитываем какой процент мы должны будем заплатить от общей суммы налогов
// Если бы мы не использовали реселект, то у нас каждый раз значение бы пересчитывалось, каждый раз вызывался бы селектор, но в данном случае функция createSelector все мемоизирует и будет пересчитывать только когда измениться какое-то из используемых полей
const selectTax = createSelector(
  selectSubtotal,
  selectTaxPercent,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)