import { Router } from 'express';
import { listHolidays, listHolidayByMonth } from './controller/holiday.ctrl'

const HolidayRouter = Router();
HolidayRouter.get('/', listHolidays);
HolidayRouter.get('/:month', listHolidayByMonth);
export { HolidayRouter };

const SwaggerAPIRouter = Router();
export { SwaggerAPIRouter };