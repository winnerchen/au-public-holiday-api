import * as express from 'express';
import { HolidayRouter } from './routes';
import * as csv from 'csv-parser';
import * as fs from 'fs';

// Create Express server
const app = express();

app.set('port', process.env.PORT || 3000);

export const holidays: Holiday[] = [];

fs.createReadStream('assets/australian_public_holidays_2019.csv')
  .pipe(csv())
  .on('data', (data) => {
    const holiday: Holiday = {
      rawDate: data['Raw Date'],
      date: data.Date,
      holidayName: data['Holiday Name'],
      information: data.Information,
      moreInformation: data['More Information'],
      jurisdiction: data.Jurisdiction
    }
    holidays.push(holiday);
  })
  .on('end', () => {
    console.log('Successfully read csv file');
  });

app.use('/holidays', HolidayRouter);

export default app;