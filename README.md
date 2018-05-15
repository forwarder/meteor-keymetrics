# meteor-keymetrics
Keymetrics connector for Meteor

## Installation

```bash
meteor add forwarder:keymetrics
```

## Configuration

## Running in production

### Heroku / Scalingo

Procfile
```
web: cd .app-build/bundle && exec pm2 main.js
```
