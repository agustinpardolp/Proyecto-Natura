const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require("express-session");
const path = require('path');
// const db = require('./db/index');
const indexRouter = require('./src/routes/index')
const passport = require("./config/passport");

// MIDDLEWARES

app.use('/assets', express.static(path.join(__dirname + '/src/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Passport middleware
app.use(session({ secret: "magazine", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.user = req.user;
    next()  
})
app.use('/api', indexRouter)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/public', 'index.html'))
})


// db.sync({ force: false })
//     .then(() => {
        app.listen(8000)
        console.log('Your server available at http://localhost:8000')
    // })