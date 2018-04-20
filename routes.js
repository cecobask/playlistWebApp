'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const playlist = require('./controllers/playlist.js');
const accounts = require ('./controllers/accounts.js');

router.get('/start', start.index);

router.get('/dashboard', dashboard.index);
router.post('/dashboard/addplaylist', dashboard.addPlaylist);
router.get('/about', about.index);
router.get('/playlist/:id', playlist.index);
router.get('/playlist/:id/deletesong/:songid', playlist.deleteSong);
router.get('/playlist/deleteplaylist/:id', playlist.deletePlaylist);
router.post('/playlist/:id/addsong', playlist.addSong);

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);
router.post('/dashboard/uploadpicture', dashboard.uploadPicture);
router.get('/dashboard/deleteallpictures', dashboard.deleteAllPictures);
router.get('/dashboard/deletepicture', dashboard.deletePicture);

module.exports = router;
