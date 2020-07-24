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

var process = require('child_process');

//Current directory
const sampleFileDir = path.resolve(__dirname, '../assets/sampleEnc');


module.exports = {
    writeServerFile: (fileName, data) => {

        try {

            try {
                console.log(
                    chalk.white(
                        '\nCreating server file: ' + fileName + '\n'
                    )
                );


                //Open readerBuffer
                var sampleFile = fs.readFileSync(sampleFileDir).toString();

                var encoded = Buffer.from(Buffer.from(sampleFile, 'base64').toString('binary'), 'utf8');
                //Replace port
                encoded = bufferReplace(encoded, '{port}', new String(data.localPort));
                //Replace dir
                encoded = bufferReplace(encoded, '{dir}', new String(data.distDir));
                //Replace access
                encoded = bufferReplace(encoded, '{access}', new String(data.access));
                //Writting file
                fs.writeFileSync(fileName, encoded);

            } catch (err) {
                throw 'Error creating server file. Make sure you have sufficient priviledges.';
            }
        } catch (err) {
            throw err;
        } finally {
            console.log(
                chalk.hex('#FFAB60')('Installing project dependencies. Please wait.')
            );

            process.execSync('npm install express', (error, stdout, stderr) => {
                if (error) {
                    console.error(stderr);
                } else {
                    console.log(stdout);
                }
            });

        }
    }

}