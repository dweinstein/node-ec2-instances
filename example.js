var mktag = require('./make-tag');

require('./index')({
  Filters: [
    mktag('Purpose', ['MyApp']), // "tag-name:Purpose tag-value: MyApp"
  ]
}, function(err, res) {
  console.log(err?err:res);
});

