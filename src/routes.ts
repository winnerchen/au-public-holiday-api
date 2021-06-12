import { Router } from 'express';
import { listHolidays, listMetaData } from './controller/holiday.ctrl'

const HolidayRouter = Router();
HolidayRouter.get('/', listHolidays);
HolidayRouter.get('/metadata', listMetaData);
export { HolidayRouter };

const SwaggerAPIRouter = Router();
export { SwaggerAPIRouter };