import express from 'express';
import routes from './routes';

export const app = express();

const port = 3000;
app.use(express.json());

//route
app.use('/api', routes);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req, res, next) => {
  res.status(404).send('API NOT FOUND');
});

app.listen(port, () => {
  console.log(`App listen on port: ${port}`);
});
