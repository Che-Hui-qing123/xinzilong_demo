
const db = require('mongoose');
db.Promise = global.Promise;
db.connect("mongodb://localhost:27017/users", {
    useMongoClient: true,
    promiseLibrary: global.Promise
});

db.connection.on('open', function () {
    console.log('打开数据库成功')
})
db.connection.on('error', function (err) {
    console.log('打开数据库失败' + err)
})

var userSchema = new db.Schema({
    telNumber: {
        type: Number,
        default: ""
    }, verification: {
        psw: String,
        default:''
    },psw:{
        type:String
    }
})

module.exports.User = db.model('User', userSchema);
