import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

export interface Printer {
  id?: number,
  name: string,
  ipAddress: string,
  isActive: boolean,
}

interface AppState { 
  printers: Array<Printer>,
  selectedPrinter?: number 
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AppState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
