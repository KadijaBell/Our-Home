const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000; 
const taskRoutes = require ('./Routes/taskRouter');


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use ('/', taskRoutes);

//require db connections
require('./Configurations/mongodb')
require('./Configurations/passports')



//MiddleWare
//Views
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');



//Port
app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})