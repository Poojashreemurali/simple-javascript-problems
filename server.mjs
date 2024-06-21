import {readFile } from 'node:fs';

readFile ('./files/start.txt' , 'utf8' , (err , data) => {
    if (err) throw err;
    console.log(data);

 }) ;

 //exit on uncaught errors
 process.on('uncaughtExceptions', err=>{
    console.error('There was an uncaught error:${err}')
    process.exit(1)
 })
 
 
 