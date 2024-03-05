import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import * as path from 'path';

// Get the absolute path to the file
const filePath = path.resolve(__dirname, '../../../../../../.././example.txt');
@Injectable()
export class EmailService {
    constructor(private readonly mailService: MailerService) {}
    async sendEmail() {
        const bccRecipients = ['aminul@atilimited.net'];
        const emailOptions = {
            to: 'aminul@atilimited.net',
            subject: 'Test Email with Attachments',
            text: 'This is a test email with attachments sent from NestJS using Mailgun.',
            context: {
                name: 'Recipient Name',
            },
            bcc: bccRecipients
        };
        try {
            await this.mailService.sendMail(emailOptions);
            console.log('Email send successfully');
        } catch (error) {
            console.error('Error send successfully', error);
        }
    }
}

//@roadTosiDe#Ts64*321@P9@B
//42M1AXDE7WM8WMSCKZQBZ8H8