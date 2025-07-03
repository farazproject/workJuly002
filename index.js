const express = require('express');


const app = express();

const {connect} = require('./connections/connection');

connect();
app.use(express.json());

const createUserRoute = require('./routes/createUserRoute');
app.use('/api/createuser', createUserRoute); 



const updateUserRoute = require('./routes/createUserRoute');
app.use('/api/updateuser', updateUserRoute);


const getUserByIdRoute = require('./routes/createUserRoute');
app.use('/api/getuser', getUserByIdRoute);



const getallUsersRoute = require('./routes/createUserRoute');
app.use('/api/getallusers', getallUsersRoute);

const deleteUserRoute = require('./routes/createUserRoute');
app.use('/api/deleteuser', deleteUserRoute);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });














app.listen(3000, () => {
    console.log('Server is running on port 3000');
});