const express = require('express');

const app = express();

const port = 3555;

const  FriendRouter = require('./routes/friends.routes')
const messageRouter =require('./routes/messages.routes')

app.use((req, res, next)=>{
    const now = Date.now();
    next();
    const delta = Date.now() - now;
    console.log(`${delta}ms ${req.method} ${req.url}`);
})

app.use(express.json());
app.use('/friends', FriendRouter);

app.use('/messages', messageRouter);




app.listen(port, () => {
    console.log(`listening to ${port}`);
})