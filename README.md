# Daily.co/metrics

Frontend of the project [Daily.co-server](https://github.com/mikelRumayor/daily.co-server).
Dashboard that shows Daily.co based video calls metrics.

## Features

- Room creation
- Public and private live calls creation
- Live calls metrics ingestion
- Rooms statistics per participants

## Requirements

- Node >= 12.13.0
- Npm >= 6.12.0

## Installing

```bash
$ npm install
```

## Local development environment

Set up environment variables:

```
  API_URL : //URL of the backend that provides se metrics service
  APP_URL : //URL of the domain where the project is going to be deployed
```

By default the project is configured to inject `API_URL` and `APP_URL` environment variables making use of `webpack.EnvironmentPlugin`. See `webpack.common.js` to modify default values for development.

## Running

```bash
$ API_URL={...} APP_URL{...} npm start
```

## Building

```bash
$ API_URL={...} APP_URL{...} npm run build
```
