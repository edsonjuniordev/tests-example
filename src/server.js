const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ ok: true })
});

module.exports = app;