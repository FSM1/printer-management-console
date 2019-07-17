/*
 * These are the variables that determine what our central data store (`../reducers/index.js`)
 * changes in our state.
 */

export enum ActionTypes {
  REFRESH_PRINTERS_REQUEST = 'app/PrinterManagement/REFRESH_PRINTERS_REQUEST',
  REFRESH_PRINTERS_SUCCESS = 'app/PrinterManagement/REFRESH_PRINTERS_SUCCESS',
  REFRESH_PRINTERS_FAILURE = 'app/PrinterManagement/REFRESH_PRINTERS_FAILURE',

  ADD_PRINTER_REQUEST = 'app/PrinterManagement/ADD_PRINTER_REQUEST',
  ADD_PRINTER_SUCCESS = 'app/PrinterManagement/ADD_PRINTER_SUCCESS',
  ADD_PRINTER_FAILURE = 'app/PrinterManagement/ADD_PRINTER_FAILURE',

  UPDATE_PRINTER_REQUEST = 'app/PrinterManagement/UPDATE_PRINTER_REQUEST',
  UPDATE_PRINTER_SUCCESS = 'app/PrinterManagement/UPDATE_PRINTER_SUCCESS',
  UPDATE_PRINTER_FAILURE = 'app/PrinterManagement/UPDATE_PRINTER_FAILURE',

  DELETE_PRINTER_REQUEST = 'app/PrinterManagement/DELETE_PRINTER_REQUEST',
  DELETE_PRINTER_SUCCESS = 'app/PrinterManagement/DELETE_PRINTER_SUCCESS',
  DELETE_PRINTER_FAILURE = 'app/PrinterManagement/DELETE_PRINTER_FAILURE',

  SELECT_PRINTER = 'app/PrinterManagement/DELETE_PRINTER_FAILURE',
}

export default ActionTypes;
