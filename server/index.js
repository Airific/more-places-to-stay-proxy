const express = require('express');
const path = require('path');
const app = express();
const port = 3005;

app.use('/:id', express.static(path.join(__dirname, '/../public')));

app.listen(port, () => {
  console.log(`Airific listening at http://localhost:${port}`);
});

