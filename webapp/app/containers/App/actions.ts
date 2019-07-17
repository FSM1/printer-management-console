import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import ActionTypes from './constants';

export const refreshPrinters = createAsyncAction(
  ActionTypes.REFRESH_PRINTERS_REQUEST,
  ActionTypes.REFRESH_PRINTERS_SUCCESS,
  ActionTypes.REFRESH_PRINTERS_FAILURE)
  <undefined, Array<{
    id: number,
    name: string,
    ipAddress: string,
    isActive: boolean,
  }>, Error>();

export const addPrinter = createAsyncAction(
  ActionTypes.ADD_PRINTER_REQUEST,
  ActionTypes.ADD_PRINTER_SUCCESS,
  ActionTypes.ADD_PRINTER_FAILURE)
  <{
    id: number,
    name: string,
    ipAddress: string,
    isActive: boolean,
  }, {
    id: number,
    name: string,
    ipAddress: string,
    isActive: boolean,
  }, Error>();

export const updatePrinter = createAsyncAction(
  ActionTypes.UPDATE_PRINTER_REQUEST,
  ActionTypes.UPDATE_PRINTER_REQUEST,
  ActionTypes.UPDATE_PRINTER_REQUEST)
  <{
    id: number,
    name: string,
    ipAddress: string,
    isActive: boolean,
  }, {
    id: number,
    name: string,
    ipAddress: string,
    isActive: boolean,
  }, Error>();

export const deletePrinter = createAsyncAction(
  ActionTypes.DELETE_PRINTER_REQUEST,
  ActionTypes.DELETE_PRINTER_REQUEST,
  ActionTypes.DELETE_PRINTER_REQUEST)
  <number, undefined, string>();

export const selectPrinter = createStandardAction(ActionTypes.SELECT_PRINTER)<number>();