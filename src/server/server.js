const express = require('express');

const app = express();
const http = require('http').Server(app);
const attachIO = require('socket.io');
const cookieParser = require('socket.io-cookie-parser');
const cookie = require('cookie-parser');
const uuid = require('uuid/v4');
const { createReadStream, stat } = require('fs');

const { connect } = require('./database');
const attachController = require('./controller');

/**
 * @param {{}} serverConfig
 * @param {string} serverConfig.host Server host
 * @param {number} serverConfig.port Server port
 *
 * @param {MongoConfig} databaseConfig
 *
 * @return {Promise<void>}
 */
exports.createServer = function (serverConfig, databaseConfig) {
  return connect(databaseConfig).then(db => new Promise((resolve) => {
    app.use(express.static('build'));
    app.use(cookie());

    app.get('/api/auth', (req, res) => {
      if (!req.cookies.sid) {
        res.cookie('sid', uuid(), {
          httpOnly: true,
          path: '/',
          maxAge: 24 * 7 * 3600000, // 1 week
        });
      }

      res.json({});
    });

    const io = attachIO(http);

    io.use(cookieParser());

    attachController(db, io);

    app.use((req, res, next) => {
      const index = 'build/index.html';
      stat(index, (err, result) => {
        if (err) {
          next();
        } else {
          createReadStream(index).pipe(res);
        }
      });
    });

    http.listen(serverConfig.port, () => {
      console.log(`API server listen at http://${serverConfig.host}:${serverConfig.port}`);

      resolve();
    });
  }));
};
