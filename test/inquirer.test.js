/**
 * @author manelcecs
 * @email manuelc.p.g@gmail.com
 * @create date 2020-07-24 18:04
 */

var myInquirer = require('../lib/inquirer');
var inquirer = require('inquirer');
var assert = require('assert');
const { validateExtension } = require('../lib/inquirer');

describe('Validate Extension', function () {

    //Validate default value if input is blank
    it('should return def if value == "" ', () => {
        var value = '';
        var ext = 'js';
        var def = 'server.js';

        var returnedVal = validateExtension(value, ext, def);
        assert.equal(returnedVal, def);
    });

    //validate value not modify if its extensions equals ext
    it('should return value if value extension is equals ext', () => {
        var value = 'myServer.js';
        var ext = 'js';
        var def = 'server.js';

        var returnedVal = validateExtension(value, ext, def);
        assert.equal(returnedVal, value);
    });

    //Validate returned value ends with same pattern that ext
    it('should return a value ending with ext', () => {
        var value = 'myServer.php';
        var ext = 'js';
        var def = 'server.js';

        var expectedReturn = 'myServer.php.js';

        var returnedVal = validateExtension(value, ext, def);
        assert.equal(returnedVal, expectedReturn);
    });
});

describe('Validate Ask Server File Name', () => {

    describe('Validating correct Data', () => {
        let restore;

        //SetUp test
        before(() => {
            restore = inquirer.prompt;

            inquirer.prompt = (question) => Promise.resolve({ name: 'server.js' });
        });

        //Validate something
        it('Should return the prompted data', () => {
            myInquirer.askServerFilename().then((answers) => {
                assert.equal(answers.name, 'server.js');
            });
        });

        //Clean and restore inquirer
        after(() => {
            inquirer.prompt = restore;
        });


    });

    describe('Validating blank Data', () => {
        let restore;

        //SetUp test
        before(() => {
            restore = inquirer.prompt;

            inquirer.prompt = (question) => Promise.resolve({ name: '' });
        });

        //Validate something
        it('Should return the prompted data', () => {
            myInquirer.askServerFilename().then((answers) => {
                assert.equal(answers.name, '');
            });
        });

        //Clean and restore inquirer
        after(() => {
            inquirer.prompt = restore;
        });


    });

});

describe('Validate Ask Server Config Info', () => {

    describe('Validating correct Data', () => {
        let restore;

        //SetUp test
        before(() => {
            restore = inquirer.prompt;

            inquirer.prompt = (question) => Promise.resolve(
                { 
                    localPort: 3030,
                    distDir: 'myRootDir/dist/myApp',
                    access: 'index.html'
                     }
                );
        });

        //Validate something
        it('Should return the prompted data', () => {
            myInquirer.askServerFilename().then((answers) => {
                assert.equal(answers.localPort, 3030);
                assert.equal(answers.distDir, 'myRootDir/dist/myApp');
                assert.equal(answers.access, 'index.html');
            });
        });

        //Clean and restore inquirer
        after(() => {
            inquirer.prompt = restore;
        });


    });

    describe('Validating blank Data', () => {
        let restore;

        //SetUp test
        before(() => {
            restore = inquirer.prompt;

            inquirer.prompt = (question) => Promise.resolve(
                { 
                    localPort: '',
                    distDir: '',
                    access: ''
                     }
                );
        });

        //Validate something
        it('Should return the prompted data', () => {
            myInquirer.askServerFilename().then((answers) => {
                assert.equal(answers.localPort, '');
                assert.equal(answers.distDir, '');
                assert.equal(answers.access, '');
            });
        });

        //Clean and restore inquirer
        after(() => {
            inquirer.prompt = restore;
        });


    });

});