#!/usr/bin/env node

/**
 * @author manelcecs
 * @email manuelc.p.g@gmail.com
 * @create date 2020-07-20 10:13
 * @modify date 2020-07-20 10:13
 * @desc main file for NSSPA-CLI
 */

//Require libs
const chalk = require('chalk'),
    clear = require('clear'),
    figlet = require('figlet');

const version = require('./package.json').version;

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');

//Shared variables
var serverFileName = '';

/**
 * Step 1
 * 
 * Start CLI
 */
greetings();

/**
 * Step 2
 * 
 * Basic info CLI
 */
basicInfo();

/**
 * Step 3
 * 
 * Request data and write file
 */
requestData();

//Private methods

//Greetings
function greetings() {

    //Clear console
    clear();

    //CLI name
    console.log(
        chalk.green(
            figlet.textSync('NSSPA - CLI', { horizontalLayout: 'full' })
        )
    );

    //Description & author
    console.log(
        chalk.yellow(
            '\t Simple Express Server for SPA. '
            +
            'v' + version
            +
            '\n'
            +
            '\t Author: @manelcecs'
        )
    );
}

//BasicInfo
function basicInfo() {

    console.log(
        chalk.magenta(
            '\n\t Please, be conscient of your inputs.\n'
            +
            '\t Besides all prompted input will be validated,\n'
            +
            '\t I cannot ensure if your dir paths, variables or scripts\n'
            +
            '\t are correct. Thanks for using me.\n'
        )
    );
}

//Request Data
function requestData(){
    getServerName().then( (serverName) => {
        //We have the server file
        serverFileName = serverName;
        //Lets get the config data
        getServerConfigData().then((data)=>{
            writeServerFile(serverFileName, data);
        }).finally(() => {
                goodBye();
        });

    });
}

async function getServerName() {
    
    let name = await inquirer.askServerFilename();

    if(name) {
        name = inquirer.validateExtension(name.name, 'js', 'server.js');
    }
    return name;

};

async function getServerConfigData() {

    var data = await inquirer.askServerConfigData();

    if(data){
        data.access = inquirer.validateExtension(data.access, 'html', 'index.js');
        data.localPort = (data.localPort == '')? '3030' : data.localPort;
        data.distDir = (data.distDir == '')? '<rootFolder>/dist/<appName>' : data.distDir;
    }


    return data;

}

function writeServerFile(serverFileName, data) {
    files.writeServerFile(serverFileName, data);
}

//GoodBye
function goodBye(){
    console.log(
        chalk.yellow(
            "\nThanks for using NSSPA-CLi"+
            "\nDo no forget to run: npm install express."+
            "\nCheck if the server file was correclty creadted."+
            "\nIf not, don't hesitate to contact me to solve the error."+
            "\nSincerely, @manelececs"
        )
    );
}