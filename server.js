const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers')

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(_dirname, 'public')));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
})