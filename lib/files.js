/**
 * @author manelcecs
 * @email manuelc.p.g@gmail.com
 * @create date 2020-07-20 10:13
 * @modify date 2020-07-20 10:13
 * @desc File handling utility
 */

//Requires
const fs = require('fs');
const bufferReplace = require('buffer-replace');
const path = require('path');
const chalk = require('chalk');
const figlet = require('figlet');

//Current directory
const baseDir = path.basename(process.cwd());

module.exports = {
    writeServerFile: (fileName, data) => {
       
        try{

            try {
                console.log(
                    chalk.white(
                        '\nCreating server file: ' + fileName + '\n'
                    )
                );
                
                //Open readerBuffer
                var sampleFile = fs.readFileSync('./assets/sampleFile'); //, {encoding: 'base64'}

                //Replace port
                sampleFile = bufferReplace(sampleFile, '{port}', new String(data.localPort));
                //Replace dir
                sampleFile = bufferReplace(sampleFile, '{dir}', new String(data.distDir));
                //Replace access
                sampleFile = bufferReplace(sampleFile, '{access}', new String(data.access));
                //Writting file
                fs.writeFileSync(fileName, sampleFile);

                //Modify Package.json
                //To add Dependences
                //TODO: in future release

    
            } catch (err) {
                throw 'Error creating server file. Make sure you have sufficient priviledges. \n' + err;
            }
        }catch(err){
            throw err;
        }finally{
            console.log(
                chalk.redBright(
                    figlet.textSync("Do no forget to run: \n npm install express")
                )
            );
        }
    }

}