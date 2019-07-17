import { getType } from 'typesafe-actions';

import * as actions from './actions'
import { ContainerState, ContainerActions} from './types';

/*
 *
 * App reducer
 *
 */

export const initialState: ContainerState = {
  printers: [],
  selectedPrinter: undefined,
};

function appReducer(state = initialState, action: ContainerActions) {
  switch (action.type) {
    case getType(actions.refreshPrinters.success):
      return {
        ...state,
        printers: action.payload,
      }
    case getType(actions.selectPrinter):
      return {
        ...state,
        selectPrinter: action.payload,
      }
    default:
      return state;
  }
}

export default appReducer;
