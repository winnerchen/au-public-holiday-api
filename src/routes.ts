import { Router } from 'express';
import { listHolidays } from './controller/holiday.ctrl'

const HolidayRouter = Router();
HolidayRouter.get('/', listHolidays);
export { HolidayRouter };

const SwaggerAPIRouter = Router();
export { SwaggerAPIRouter };