import { Test, TestingModule } from '@nestjs/testing';
import { PrinterController } from './printer.controller';

describe('Printer Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PrinterController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PrinterController = module.get<PrinterController>(PrinterController);
    expect(controller).toBeDefined();
  });
});
