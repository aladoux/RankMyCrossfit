const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlWeightlifting = require('../controllers/weightlifting.controller');
const ctrlWod = require('../controllers/wod.controller');
const ctrlRecordWei = require('../controllers/recordWei.controller');
const ctrlRecordWod = require('../controllers/recordWod.controller');

const jwtHelper = require('../config/jwtHelper');

/**ROUTES USER */
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken , ctrlUser.userProfile);
router.get('/user/:id', ctrlUser.displayId);

/**ROUTES WEIGHTLIFTING */
router.get('/weightliftings', ctrlWeightlifting.display);
router.get('/weightliftings/:id', ctrlWeightlifting.displayId);
router.post('/weightliftings/add', ctrlWeightlifting.add);
router.get('/weightliftings/remove/:id', ctrlWeightlifting.remove);
router.post('/weightliftings/update/:id', ctrlWeightlifting.update);

/**ROUTES WOD */
router.get('/wods', ctrlWod.display);
router.get('/wods/:id', ctrlWod.displayId);
router.post('/wods/add', ctrlWod.add);
router.get('/wods/remove/:id', ctrlWod.remove);
router.post('/wods/update/:id', ctrlWod.update);

/**ROUTES RECORDWEI */
router.get('/myRecordsWei/:id', ctrlRecordWei.displayUserId); //get all weightlifting records of the user connected
router.get('/recordWei/:id', ctrlRecordWei.displayId); //get a weightlifting record with his id
//router.get('/recordWei/weightlifting/:id', ctrlRecordWei.displayByWeiId); //get records for a weightlifting id passed
//router.get('/recordWei/user/:id', ctrlRecordWei.displayByUserId); //get records of an user is passed in parameter
router.post('/recordWei/add', ctrlRecordWei.add);
router.get('/recordWei/remove/:id', ctrlRecordWei.remove);
//router.post('/recordWei/update/:id', ctrlRecordWei.update);

/**ROUTES RECORDWOD */
router.get('/myRecordsWod/:id', ctrlRecordWod.displayUserId); //get all wod records
router.get('/recordWod/:id', ctrlRecordWod.displayId); //get a wod record with his id
//router.get('/recordWod/wod/:id', ctrlRecordWod.displayByWodId); //get records for a wod id passed
//router.get('/recordWod/user/:id', ctrlRecordWod.displayByUserId); //get records of an user is passed in parameter
router.post('/recordWod/add', ctrlRecordWod.add);
router.get('/recordWod/remove/:id', ctrlRecordWod.remove);
//router.post('/recordWod/update/:id', ctrlRecordWod.update);

module.exports = router;