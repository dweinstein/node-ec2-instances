/*jshint node: true, esnext: true */

'use strict';
const _ = require('lodash');
const debug = require('debug')('ec2-instances');
const assert = require('assert');

module.exports = function instances(ec2, opts, cb) {

  assert(ec2, 'ec2 instance');
  debug('opts: %j', opts);

  ec2.describeInstances(opts, function(err, data) {
    if (err) {
      return cb(err);
    }
    debug('%j', data);

    let ret = _.chain(data.Reservations)
      .pluck('Instances')
      .flatten()
      .map(function (instance) {
        let tags = _.chain(instance).get('Tags');
        return {
          ip: _.get(instance, 'PrivateIpAddress'),
          name: tags.find({"Key": "Name"})
            .result('Value')
            .value(),
          environment: tags.find({"Key": "Environment"})
            .result('Value')
            .value()
        };
      })
      .groupBy('environment')
      .value();

    return cb(null, ret);
  });
};

