import { IsNumber, IsString, IsIP, IsBoolean, IsOptional } from "class-validator";

export class PrinterDTO {
    @IsOptional()
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly name: string;

    @IsIP('4')
    readonly ipAddress: string;

    @IsBoolean()
    readonly isActive: boolean;
}