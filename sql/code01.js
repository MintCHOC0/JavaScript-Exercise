const mysql = require("mysql");

const conn = {
    host: 'localhost',
    port: '3306',
    user: '--------',
    password: '------------',
    database: '--------------'
};

let table_name = '-------------';

function sendQuery(conn, table_name, post_count) {
    let connection = mysql.createConnection(conn);
    connection.connect();

    connection.query(`SELECT * FROM ${table_name} limit ${post_count}`, function(error, topics) {
        connection.end();
        if(error) { throw error; }
        console.log(topics);
    });
}

sendQuery(conn, table_name, 10);