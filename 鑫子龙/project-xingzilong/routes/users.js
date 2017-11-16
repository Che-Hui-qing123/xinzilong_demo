var express = require('express');
var router = express.Router();
var User = require('../db').User;


router.post('/register', function (req, res) {
  var user = new User(req.body)
  user.save(req.body).then(function () {
    res.json({
      code: "success",
      message: "注册成功"
    })
  })
});

router.post('/login', function (req, res) {
  User.find().then(function (data) {
    var dat = data.findIndex(function (item) {
      if (item.telNumber == req.body.telNumber && item.psw == req.body.psw) {
        return item;
      }
    })
    if(dat==-1){
      res.json({
        code:"error"
      })
    }else{
      res.json({
        code:"y"
      })
    }
  })
})

module.exports = router;
