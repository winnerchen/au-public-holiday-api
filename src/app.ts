import express from 'express';
import { HolidayRouter } from './routes';
import init from './resources/init'
import cors from 'cors';


// Create Express server
const app = express();

app.set('port', process.env.PORT || 8080);

init();
app.use(cors());
app.use('/holidays', HolidayRouter);

export default app;