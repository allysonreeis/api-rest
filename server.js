import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`Listening port ${port}`);
  console.log(`Press CTRL and Click http://localhost:${port}`);
});
