const express = require('express');

const app = express();

const {connect} = require('./connections/connection');

connect();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});