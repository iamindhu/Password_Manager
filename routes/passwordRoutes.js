const { Router } = require('express');
const passwordController = require('../controllers/passwordController');

const router = Router();

router.get('/addpassword', passwordController.addpassword_get);
router.post('/addpassword', passwordController.addpassword_post);
router.get('/accesspassword', passwordController.accesspassword_get);
router.get('/passwordstrength', passwordController.passwordstrength_get);
router.post('/delpassword', passwordController.delpassword_post);
router.get('/settings',passwordController.settings_get);
router.get('/userprofile', passwordController.userprofile_get);
// router.post('/delhistory', passwordController.delhistory_post);
router.post('/checkuser', passwordController.checkuser_post);
router.post('/update', passwordController.update_post);
router.post('/displaydeets', passwordController.displaydeets_post);

module.exports = router;