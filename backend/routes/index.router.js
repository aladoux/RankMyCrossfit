const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlWeightlifting = require('../controllers/weightlifting.controller');
const ctrlWod = require('../controllers/wod.controller');

const jwtHelper = require('../config/jwtHelper');

/**ROUTES USER */
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken , ctrlUser.userProfile);

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

module.exports = router;