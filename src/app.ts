import * as express from 'express';
import { HolidayRouter } from './routes';
import init from './resources/init'


// Create Express server
const app = express();

app.set('port', process.env.PORT || 3000);

init();

app.use('/holidays', HolidayRouter);

export default app;