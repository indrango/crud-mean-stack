var User = require('../models/user');

module.exports = function(app) {

  //data from '/api/users'
  app.route('/api/users')
    //get data
    .get(function(req, res) {
      User.find(function(err, users) {
        if (err)
          res.send(err);
        res.json(users);
      });
    })

    //post data
    .post(function(req, res) {
      var user = new User();
      user.npm = req.body.npm;
      user.nama = req.body.nama;
      user.kelas = req.body.kelas;

      //save user
      user.save(function(err, users) {
        if (err)
          res.send(err);
        res.json(users);
      });
    });

  //data from ('/api/user/:user_id')
  app.route('/api/users/:user_id')
    //get data from user_id
    .get(function(req, res) {
      User.findById(req.params.user_id, function(err, users) {
        if(err)
          res.send(err);
        res.json(users);
      });
    })

    //update data from user_id
    .put(function(req, res) {
      User.findById(req.params.user_id, function(err, user) {
        if(err)
          res.send(err);

        //set the new user information
        if (req.body.npm) user.npm = req.body.npm;
        if (req.body.nama) user.nama = req.body.nama;
        if (req.body.kelas) user.kelas = req.body.kelas;

        user.save(function(err, users) {
          if(err)
            res.send(err);
          res.json(users);
        });
      });
    })

    //delete data from user_id
    .delete(function(req, res) {
      User.findByIdAndRemove({_id : req.params.user_id}, function(err, users) {
        if(err)
          res.send(err);
        res.json(users);
      });
    });
};
