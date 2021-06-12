import { Request, Response, NextFunction } from 'express';
import moment from 'moment';
import { holidays } from '../resources/init';
import logger from '../logger';
import { mapperFnMap } from '../util';

const getPredicate = (queryName: string, queryValue: any) => {
  switch (queryName) {
    case 'state':
      return (holiday: Holiday) => {
        return holiday.state?.toUpperCase() === queryValue.toUpperCase()
      }
    case 'month':
      return (holiday: Holiday) => {
        const date = moment(holiday.date)
        return date.month() === parseInt(queryValue, 10) - 1
      }
    case 'year':
      return (holiday: Holiday) => {
        const date = moment(holiday.date)
        logger.debug(date.year());
        return date.year() === parseInt(queryValue, 10)
      }
    case 'name':
      return (holiday: Holiday) => {
        const { name } = holiday;
        return name.toUpperCase().includes((queryValue as string).toUpperCase());
      }

    default:
      logger.error(`Unknown query name: ${queryName}`)
      return () => {
        return true
      }
  }
}

export function listMetaData(req: Request, res: Response) {
  const { attributeName } = req.query;

  let results: string[] = holidays.map(mapperFnMap[attributeName as string]);

  res.json([...new Set(results)]);
}

export function listHolidays(req: Request, res: Response) {
  const { query } = req;

  let results = holidays;

  for (const param of Object.keys(query)) {
    results = results.filter(getPredicate(param, query[param]))
  }

  results.sort((holiday1, holiday2) => {
    if (moment(holiday1.date).isSame(holiday2.date)) {
      return 0;
    }
    return moment(holiday1.date).isAfter(moment(holiday2.date)) ? 1 : -1
  })

  res.json(results);
}
