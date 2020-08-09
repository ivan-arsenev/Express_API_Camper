"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("./config"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { signup, signin, protect } from './utils/auth'
// import { connect } from './utils/db'
// import userRouter from './resources/user/user.router'
// import itemRouter from './resources/item/item.router'
// import listRouter from './resources/list/list.router'
const app = (0, _express.default)();
exports.app = app;
app.disable('x-powered-by');
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)('dev')); // app.post('/signup', signup)
// app.post('/signin', signin)
// app.use('/api', protect)
// app.use('/api/user', userRouter)
// app.use('/api/item', itemRouter)
// app.use('/api/list', listRouter)

const start = async () => {
  try {
    //await connect()
    app.listen(_config.default.port, () => {
      console.log(`REST API on http://localhost:${_config.default.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;