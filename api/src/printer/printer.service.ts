import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Printer } from './printer.entity';
import { PrinterDTO } from './dto/printer.dto';

@Injectable()
export class PrinterService {
  constructor(@InjectRepository(Printer) private readonly printerRepository: Repository<Printer>) {}
  
  async create(printerDto: PrinterDTO): Promise<Printer> {
    const result = await this.printerRepository.create(printerDto);
    return await this.printerRepository.save(result);
  }
  async findAll(): Promise<Printer[]> {
    const result = await this.printerRepository.find();
    return result;
  }
  async update(printerDto: PrinterDTO): Promise<Printer> {
    const printer = await this.printerRepository.findOne(printerDto.id);
    const result = await this.printerRepository.merge(printer, printerDto)
    await this.printerRepository.update(result.id, result);
    return await this.printerRepository.findOne(printerDto.id)
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.printerRepository.delete(id);
  }
}
