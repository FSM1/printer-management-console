const apiHost = process.env.API_HOST || 'localhost:3001';
const apiSchema = process.env.API_SCHEMA || 'http';

const generateUri = (path: string) => `${apiSchema}://${apiHost}/${path}`;

const apiUrlBuilder = {
  refreshPrinters: generateUri('printers/'),
  createPrinter: generateUri('printers/'),
  updatePrinter: (id) => generateUri(`printers/${id}`),
  deletePrinter: (id) => generateUri(`printers/${id}`),
}

export default apiUrlBuilder;
