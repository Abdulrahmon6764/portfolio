const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'images')));

app.use(userRouter);
app.listen(2000);