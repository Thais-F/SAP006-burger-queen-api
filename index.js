const express = require('express');
const cors = require('cors');
const routes = require('./server/routes/index');
const { sequelize } = require('./server/db/models/index')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

// sequelize.sync().then(() => {
//   console.log('deu certoo???')
// })

app.get('*', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
