import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as sharp from 'sharp';
import * as fs from 'fs';
@Injectable()
export class UploadService {
  async uploadSingleImage(file: Express.Multer.File): Promise<string> {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    const fileNmae = this.generateFileName(file.originalname);
    await this.resizeAndSaveImage(file, fileNmae);
    return fileNmae;
  }

  async uploadMultipleImages(files: Express.Multer.File[]): Promise<string[]> {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files uploaded');
    }

    const uploadedFiles: string[] = [];
    for (const file of files) {
      const fileName = await this.uploadSingleImage(file);
      uploadedFiles.push(fileName);
    }

    return uploadedFiles;
  }

  private async resizeAndSaveImage(
    file: Express.Multer.File,
    fileName: string,
  ): Promise<void> {
    const filePath = `uploads/${fileName}`;

    await sharp(file.buffer).resize(300, 300).toFile(filePath);
  }

  private generateFileName(originalname: string): string {
    const uniqueSuffix = uuidv4();
    const fileExtension = originalname.split('.').pop();
    return `${uniqueSuffix}.${fileExtension}`;
  }
}
