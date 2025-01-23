const express= require('express');
const {summaryHandler,chatHandler,paraHandler,checkLogin} =require('../controllers/openAi_controller');



const router=express.Router();

router.use(checkLogin);
router.post('/summary',summaryHandler);
router.post('/para',paraHandler);
router.post('/chatbot',chatHandler);

module.exports = router;
