const friendList = require('./models')

function getFriend(req, res) {
    const numberID = Number(req.params.friendId);
    const friend = friendList.friends[numberID];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            Error :'no friend found'
        })
    }
}
 
 function getFriends(req, res){
    res.json(friendList.friends)
 }

 function postFriend(req, res)  {
    if (!req.body.name) {
        return res.status(400).json(
            {
                Error:'no name entered'
            }
        )
    }
    const newfriend = {
        name: req.body.name,
        id : friends.length
    };
    friends.push(newfriend);
    res.status(200).json(newfriend)
}

module.exports = {
    getFriend,
    getFriends,
    postFriend,
 }