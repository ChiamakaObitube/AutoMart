import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Routes from './routes/index';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(Routes);

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to AutoMart',
  });
});

app.get('/documentation', (req, res) => {
  res.redirect('https://documenter.getpostman.com/view/7769522/SVSKMUY1');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`AutoMart started on port ${port}`);
});

export default app;
