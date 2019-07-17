import apiRequest from './apiRequest';
import apiUrlBuilder from './apiUrlBuilder';
import { Printer } from 'containers/App/types';
// import formDataHelper from './formDataHelper';

export function refreshPrinters(): Promise<any> {
  return apiRequest('GET', apiUrlBuilder.refreshPrinters);
}

export function createPrinter(printer: Printer): Promise<any> {
  const body = JSON.stringify(printer);
  return apiRequest('POST', apiUrlBuilder.createPrinter, body, 'application/json');
}

export function updatePrinter(printer: Printer): Promise<any> {
  const body = JSON.stringify(printer);
  return apiRequest('PUT', apiUrlBuilder.updatePrinter(printer.id), body, 'application/json');
}
export function deletePrinter(id: number): Promise<any> {
  return apiRequest('DELETE', apiUrlBuilder.deletePrinter(id));
}