/**
 * @author manelcecs
 * @email manuelc.p.g@gmail.com
 * @create date 2020-07-20 10:13
 * @modify date 2020-07-20 10:13
 * @desc User command interface
 */

const inquirer = require('inquirer');

module.exports = {

    /**
     * This prompt server file name
     */
    askServerFilename: () => {
        const serverQuestion = {
            name: 'name',
            type: 'input',
            message: '\tPlease, enter the server file name. \nBy default, node servers are like: `server.js`.\n',
            default: 'server.js'
        }

        return inquirer.prompt(serverQuestion);
    },
    /**
     * 
     * Gets filename and an extension file
     * 
     * Splits by `.` and if filename's extension is not the argument extension
     * Added it to force conversion
     * 
     * @param {String} value 
     * @param {String} ext 
     */
    validateExtension(value, ext, def) {
        if(value){
            var name = value.split('.');

            var extension = name[name.length - 1];
    
            if (ext.localeCompare(extension) != 0) {
                value = value + '.' + ext;
            }
        }else{
            return def;
        }

        return value;
    },
    /**
     * Ask user to prompt server config data
     */
    askServerConfigData: () => {
        const configQuestions = [
            {
                name: 'localPort',
                type: 'input',
                message: '\tInsert local server port. \nBy default, node + express servers listen on `3030`.\n',
                default: 3030,
                validate: function portValidation(input){
                    if(!(/^\d+$/.test(input))){
                        return 'Port must be a number between 1 and 65535.';
                    }else{

                        if(input > 65535 || input <  1){
                            return 'Please, set a valid port (1 - 65535).';
                        }else{
                            return true;
                        }
                    }
                }
            },
            {
                name: 'distDir',
                type: 'input',
                message: '\tPlease, insert compiled static SPA folder. \ni.e. In angular, this folder is: `<rootFolder>/dist/<appName>`\n',
                default: '<rootFolder>/dist/<appName>'
            },
            {
                name: 'access',
                type: 'input',
                message: '\tBy default, SPA access point is `index.html`\nIf you have change it, type down here.\n',
                default: 'index.html'
            }
        ];

        return inquirer.prompt(configQuestions);
    }

}

