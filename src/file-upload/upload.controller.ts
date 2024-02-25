import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Post('single')
  @UseInterceptors(FileInterceptor('image'))
  async uploadSingle(@UploadedFile() file: Express.Multer.File) {
    return await this.uploadService.uploadSingleImage(file);
  }

  @Post('multiple')
  @UseInterceptors(FilesInterceptor('images'))
  async uploadMultiple(@UploadedFiles() files: Express.Multer.File[]) {
    return await this.uploadService.uploadMultipleImages(files);
  }
}
