const fs = require('fs'); //вбудований модуль
const fse = require('fs-extra'); //модуль з npm, який враховує й fs також

function fileHandler(){

    fse.readFile('test.txt', 'utf8', (err, data) => {
        if(err) throw err;

        console.log('--------- [File Data] ---------');
        console.log(data);
        console.log('--------- [File Data] ---------');

    });

}

fileHandler();