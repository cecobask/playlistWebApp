'use strict';

const logger = require('../utils/logger');
const playlistCollection = require('../models/playlist-store.js');
const playlistStore = require('../models/playlist-store');
const uuid = require('uuid');
const accounts = require ('./accounts.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    const viewData = {
      title: 'Playlist Dashboard',
      playlists: playlistStore.getUserPlaylists(loggedInUser.id),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    logger.info('about to render', playlistStore.getAllPlaylists());
    response.render('dashboard', viewData);
    }
    else response.redirect('/');
  },
  
  addPlaylist(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newPlayList = {
      id: uuid(),
      userid: loggedInUser.id,
      title: request.body.title,
      songs: [],
    };
    logger.debug('Creating a new Playlist', newPlayList, ' for user id: ', newPlayList.userid);
    playlistStore.addPlaylist(newPlayList);
    response.redirect('/dashboard');
  },
  
};

module.exports = dashboard;
