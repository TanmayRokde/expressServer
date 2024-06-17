const express = require('express');

const friendController = require('../controllers/friends.controller')

const FriendRouter = express.Router();

FriendRouter.post('/', friendController.postFriend);
FriendRouter.get('/', friendController.getFriends);
FriendRouter.get('/:friendId', friendController.getFriend);

module.exports = FriendRouter;