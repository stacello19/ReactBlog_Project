require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const mongoose = require('mongoose');
const session = require('koa-session');

const {
    PORT: port=4000,
    MONGO_URI: mongoURI,
    COOKIE_SIGN_KEY: signKey
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true}).then(
    console.log('conneted to mongodb')
).catch((e) => {
    console.error(e);
});

const app = new Koa;
const router = new Router();
const sessionConfig = {
    maxAge: 86400000
}; 

app.use(bodyParser());
router.use('/api', api.routes());


app.use(session(sessionConfig, app));
app.keys=[signKey];

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('listening to port', port);
});