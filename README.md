# meteor-keymetrics
Keymetrics connector for Meteor

## Installation

```bash
meteor add forwarder:keymetrics
```

## Configuration

```
import { cpu, mem } from 'meteor/forwarder:keymetrics';

Meteor.startup(function() {
  const conf = { small_interval: 10 };
  cpu.init(conf);
  mem.init(conf);
});
```

## Running in production

### Scalingo

Procfile
```
web: cd .app-build/bundle && exec pm2 start main.js
```

### Heroku 

Procfile
```
web: cd .app-build/bundle && exec pm2-runtime main.js
```