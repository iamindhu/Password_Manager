const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/authRoutes');
const passwordRoutes = require('./routes/passwordRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); // 
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(process.env.PORT))
  .catch((err) => console.log(err));

// routes

app.use(authRoutes);
app.use(passwordRoutes);
app.get('*' , checkUser);
app.get('/', (req, res) => res.redirect('/login'));
