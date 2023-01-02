const express = require('express');
const app = express();

const port = process.env.PORT || 5090;

app.listen(port, () => console.log(`Listening on port ${port}`));
