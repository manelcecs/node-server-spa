/**
 * @author manelcecs
 * @email manuelc.p.g@gmail.com
 * @create date 2020-07-24 19:05
 */

var assert = require('assert');
var myFiles = require('../lib/files');
var sinon = require('sinon');
var fs = require('fs');
var expect = require('chai').expect;

describe('Testing write server file', () => {

    let serverName = 'server.js';
    let serverData = {
        localPort: 3030,
        distDir: 'myRootDir/dist/myApp',
        access: 'index.html'
    };

    let readFileSync = sinon.stub(fs, 'writeFileSync').returns({});

    it('Server file writed', () => {
        myFiles.writeServerFile(serverName, serverData);
    });

});