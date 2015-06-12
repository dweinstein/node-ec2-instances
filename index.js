/*jshint esnext: true*/
const config = require('./config');
const AWS = require('aws-sdk');
const ec2 = new AWS.EC2(config.aws);
const instances = require('./instances');

module.exports = instances.bind(null, ec2);
