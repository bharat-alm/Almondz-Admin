import mysql from 'mysql2';
// import config from '../config/index.mjs';

const connection = mysql.createConnection({
    host: '159.89.174.171',
    user: "dev",
    password: "password",
    database: "DDPI"
});


function sqlw(query) {
    connection.connect( function(err, result) {
        if (err) throw err;
        connection.query(query, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
        console.log(result);
    })
}

console.log(sqlw("CALL getddpireport();"))