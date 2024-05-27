import { put, takeEvery } from "redux-saga/effects"
import { ASYNC_INCREASE_COUNT, ASYNC_DECREASE_COUNT, decreaseCountAction, increaseCountAction } from "../store/countReducer"

// Функция для создания искусственной задержки для появления асинхронности
const delay = (ms) =>
  new Promise((res) => {
    setTimeout(res, ms)
  })

function* incrementWorker() {
  yield delay(1000)
  yield put(increaseCountAction())
}

function* decrementWorker() {
  yield delay(1000)
  yield put(decreaseCountAction())
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREASE_COUNT, incrementWorker)
  yield takeEvery(ASYNC_DECREASE_COUNT, decrementWorker)
}

