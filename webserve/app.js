import express from 'express';
import onDeath from 'death';
import fs from 'fs';
import path from 'path';
import config from 'cog.config';
import logging from 'cog.logging';

const log = logging('index');
log.setLevel(config.get('log:level'));
const app = express();

app.use((req, res, next) => {
  log.debug(`STARTED: ${req.method} ${req.originalUrl}`);
  const started = new Date();
  res.on('finish', () => {
    const duration = new Date().getTime() - started.getTime();
    log.debug(`COMPLETED in ${duration}ms: ${req.method} ${req.originalUrl}`);
  });
  return next();
});

app.get('/healthcheck', (req, res) => res.status(200).send('OK'));
app.use(express.static(path.join(__dirname, '../public')));

app.use((err, req, res, next) => {
  log.error('ERROR: Unhandled error in rest router', err);
  return res.status(500).end(err.toString());
});

const port = config.get('server:port') || 3000;
const server = app.listen(port, () => {
  log.debug(`Healthinote public web site app listening on port ${port}`);
});
server.setTimeout(config.get('server:timeout') || 300000);

const gracefulShutdown = () => {
  log.info('Shutdown request received - shutting down');
  // if after
  setTimeout(() => {
    log.info('Could not close connections in time, forcefully shutting down');
    process.exit();
  }, 10 * 1000);

  return server.close(() => {
    log.info('Shut down express-js server successfully');
    return process.exit();
  });
};

// listen for TERM signal .e.g. kill
onDeath(gracefulShutdown);

module.exports = app;
