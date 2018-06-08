Package.describe({
  summary: 'Keymetrics connector for Meteor',
  name: 'forwarder:keymetrics',
  version: '0.0.1',
});

Package.onUse(function (api) {
  Npm.depends({
    'pidusage': '2.0.7',
    'pmx': '1.6.3'
  })

  api.use([
    'ecmascript'
  ]);

  api.mainModule('lib/main.js', 'server');
});
