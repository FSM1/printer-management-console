import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PrinterService } from './printer.service';
import { Printer } from './printer.entity';
import { PrinterDTO } from './dto/printer.dto';

@Controller('printers')
export class PrinterController {
  constructor(private readonly printerService: PrinterService) {}

  @Get()
  async getAll(): Promise<Printer[]> {
    return await this.printerService.findAll();
  }

  @Post()
  async create(@Body() printerDto: PrinterDTO): Promise<Printer> {
    return await this.printerService.create(printerDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body(new ValidationPipe()) printerDto: PrinterDTO): Promise<Printer> {
    return await this.printerService.update({id: id, ...printerDto})
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    return await this.printerService.delete(id);
  }
}
