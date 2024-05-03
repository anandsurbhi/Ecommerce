const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

mongoose.connect('mongodb+srv://surbhianand2012:FtJEd2ER4434IUYG@cluster0.gjxtccy.mongodb.net/ecommerceSchema')
    .then(() => console.log('E-Com connected'))
    .catch(err => console.log(err))

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('home')
})

const productRoutes = require('./routes/product.route');
const reviewRoutes=require('./routes/review.route');
app.use(productRoutes);
app.use(reviewRoutes);
const userRoutes=require('./routes/User.route');
app.use(userRoutes);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is up at \nhttp://localhost:${PORT}`)
})