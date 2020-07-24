/**
 * @author manelcecs
 * @email manuelc.p.g@gmail.com
 * @create date 2020-07-24 19:05
 */

var myFiles = require('../lib/files');
var sinon = require('sinon');
var fs = require('fs');
var process = require('child_process');

describe('Testing write server file', () => {

    let serverName = 'server.js';
    let serverData = {
        localPort: 3030,
        distDir: 'myRootDir/dist/myApp',
        access: 'index.html'
    };

    sinon.stub(fs, 'writeFileSync').returns({});
    sinon.stub(process, 'execSync').returns({});

    it('Server file writed', () => {
        myFiles.writeServerFile(serverName, serverData);
    });

});