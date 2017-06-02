console.log('hello from preload');

const { remote } = require('electron');

window.api = {
    Test: remote.require('./Test.js'),
}
