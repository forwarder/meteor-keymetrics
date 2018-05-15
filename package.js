Package.describe({
  summary: 'Keymetrics connector for Meteor',
  name: 'forwarder:keymetrics'
});

Package.onUse(function (api) {
  Npm.depends({
    'pidusage': '2.0.6',
    'pmx': '1.6.3'
  })

  api.use([
    'ecmascript'
  ]);

  api.mainModule('lib/main.js', 'server');
});
