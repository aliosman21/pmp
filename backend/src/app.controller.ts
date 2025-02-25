import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, Res, Patch } from '@nestjs/common';
import { Response } from 'express';
import { Multer } from 'multer';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { createReadStream } from 'fs';

@Controller('patients')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async addPatient(@Body() createPatientDto) {
    await this.appService.addPatient(createPatientDto);

    return { message: 'Patient added successfully' }
  }
  @Patch(':id')
  async editPatientById(@Param('id') id: string, @Body() updatePatientDto) {
    const patient = await this.appService.editPatientById(id, updatePatientDto);
    return { message: 'Patient updated' }
  }

  @Get('')
  async listPatients() {
    const patients = await this.appService.listPatients();
    return { message: 'Patients list', data: patients }
  }
  @Get(':id')
  async getPatientById(@Param('id') id: string) {
    const patient = await this.appService.getPatientById(id);
    return { message: 'Patient details', data: patient }

  }


  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads', // Directory where files will be saved
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }))
  async uploadFile(@UploadedFile() file: Multer.File) {
    const fileUrl = `http://localhost:3000/patients/file/${file.filename}`;

    return { message: 'File uploaded successfully', filePath: fileUrl };
  }

  @Get('file/:filename')
  async getFile(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(process.cwd(), 'uploads', filename);
    const fileStream = createReadStream(filePath);
    fileStream.pipe(res);
  }
}