const mongoose = require('mongoose');

exports.connect = async () => {
    mongoose.connect ( 'mongodb+srv://faraz:V66xuwhbSvliM5YP@cluster0.dtsaijf.mongodb.net/',
        {
            dbName: "WorkJuly02"
        }

    ).then((conn) => {
        console.log(`Database connected with host: ${conn.connection.host}`)
    }).catch((err) => {
        console.error("error in connection", err)
    })
}

