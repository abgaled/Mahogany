var express = require('express');
var router = express.Router();
var authMiddleware = require('../../auth/middlewares/auth');
var db = require('../../../lib/database')();


router.get('/',(req, res) => {
    var queryString ='SELECT * FROM tbl_announcement JOIN tbl_user ON tbl_announcement.int_userID=tbl_user.int_userID'

    db.query(queryString, (err, results1, fields) => {
        if (err) console.log(err);
        console.log(results1);

        console.log('=================================');
        console.log('STAFF: Announcements');
        console.log('=================================');

        res.render('staff/announcements/views/index', {tbl_announcement:results1,user:req.session.user});
    });
});

router.post('/', (req, res)=>{
    var queryString1 = ` INSERT INTO tbl_announcement(
    \`date_announceDate\`,
    \`varchar_announceTitle\`,
    \`varchar_announceContent\`,
    \`int_userID\`) 
    
    
    VALUES(
    "${req.body.date_announcementDate}",
    "${req.body.title}",
    "${req.body.post}",
    "${req.body.userid}")`;

   
    db.query(queryString1, (err, results1, fields) => {        
        if (err) throw err;    
        res.redirect('/staff/announcements');
    });
}); 


module.exports = router;