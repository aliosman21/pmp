import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePatientDto, Patient } from './dto/patient';

@Controller('patients')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async addPatient(@Body() createPatientDto: CreatePatientDto): Promise<Patient> {
    return this.appService.addPatient(createPatientDto);
  }

  @Get(':id')
  async getPatientById(@Param('id') id: string): Promise<Patient | undefined> {
    return this.appService.getPatientById(id);
  }
}