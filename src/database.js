
import { HOST,USER,PASSWORD,PORT_MYSQL,DATABASE } from './config'

import { createPool } from "mysql2/promise";

export const pool =  createPool({
    host:HOST,
    user:USER,
    password:PASSWORD,
    port:PORT_MYSQL,
    database:DATABASE
});
console.log('DB connected to ', DATABASE)




/*
(async () => {
    try {
        export const pool = await createPool({
            host:HOST,
            user:USER,
            password:PASSWORD,
            port:PORT_MYSQL,
            database:DATABASE
        });
        console.log('DB connected to ', DATABASE)
    } catch (error) {
        console.error(error)
    }

})()

 */

/*

import {connect} from "mongoose";
import { MONGODB_URI } from './config'


(async () => {

    try {
        const db = await connect(MONGODB_URI)
        console.log('DB connected to ', db.connection.name)
    } catch (error) {
        console.error(error)
    }

})()


/*
const db = await connect("mongodb://localhost/crud_mongo")
console.log('DB connected', db.connect.name)
*/


/*
import mysql from 'mysql'
import myConnection from 'express-myconnection'
const db = await myConnection( mysql,
    {
        host:'localhost',
        user:'root',
        password:'Gatos123456FC',
        port:3306,
        database:'crud_mysql_test'
    },'Single'
)
*/