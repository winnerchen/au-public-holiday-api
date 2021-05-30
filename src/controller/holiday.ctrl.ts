import { Request, Response, NextFunction } from 'express';
import * as moment from 'moment';
import { holidays } from '../app';

export function listHolidayByMonth(req: Request, res: Response) {
  const month = parseInt(req.params.month, 10);
  const results = holidays.filter(e => {
    const date = moment(e.date)
    return date.month() === month - 1
  })
  res.json(results);
}

export function listHolidays(req: Request, res: Response) {
  res.json(holidays);
}
