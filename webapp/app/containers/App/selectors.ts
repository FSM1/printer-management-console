import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the printerManagement state domain
 */

const selectPrinterManagementDomain = (state: ApplicationRootState) => {
  return state ? state.app.printers : initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by PrinterManagement
 */

const selectPrinterManagement = () =>
  createSelector(
    selectPrinterManagementDomain,
    substate => {
      return substate;
    },
  );

export default selectPrinterManagement;
export { selectPrinterManagementDomain };