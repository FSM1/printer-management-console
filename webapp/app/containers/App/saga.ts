import { call, put, all, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as ApiActions from '../../api'
import { getType } from 'typesafe-actions';

function* refreshPrinters() {
  try {
    const result = yield call(ApiActions.refreshPrinters);
    yield put(actions.refreshPrinters.success(result.data));
  } catch (error) {
    yield put(actions.refreshPrinters.failure(error));
  }
}

function* addPrinter(action) {
  try {
    yield call(ApiActions.createPrinter, action.payload);
    // yield put(actions.addPrinter.success(result));
    yield put(action.refreshPrinters)
  } catch (error) {
    yield put(actions.addPrinter.failure(error));
  }
}

function* updatePrinter(action) {
  try {
    const result = yield call(ApiActions.updatePrinter, action.payload);
    yield put(actions.updatePrinter.success(result));
    yield put(action.refreshPrinters)
  } catch (error) {
    yield put(actions.updatePrinter.failure(error));
  }
}

function* deletePrinter(action) {
  try {
    yield call(ApiActions.deletePrinter, action.payload);
    yield put(actions.deletePrinter.success());
    yield put(action.refreshPrinters)
  } catch (error) {
    yield put(actions.deletePrinter.failure(error));
  }
}

export default function * root() {
  yield call(refreshPrinters)
  yield all([
    takeEvery(getType(actions.refreshPrinters.request), refreshPrinters),
    takeEvery(getType(actions.addPrinter.request), addPrinter),
    takeEvery(getType(actions.updatePrinter.request), updatePrinter),
    takeEvery(getType(actions.deletePrinter.request), deletePrinter),
  ])
  // Add other global DAEMON sagas here.
  // To prevent performance bottlenecks add sagas with caution.
}
