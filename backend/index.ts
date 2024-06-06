// ./index.ts

import express from 'express';
//import statusCodes from './statusCodes';

const app = express();

app.use(express.json());

const PORT = 8080;

// A utilização do underline antes de um parâmetro é uma boa prática quando não estamos fazendo o uso do mesmo.
app.get('/', (_req, res) => {
  res.status(200).send('Express + TypeScript');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});