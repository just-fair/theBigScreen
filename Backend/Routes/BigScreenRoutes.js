const express= require('express');
const router= express.Router();
const {showReservation, addReservation, updateReservation, deleteReservation}= require('../Controllers/BigScreenControllers');



router.get('/slip', showReservation);

router.post('/addRes', addReservation);

router.patch('/reserve/:id', updateReservation);

router.delete('/reserve/:id', deleteReservation);


module.exports=router;



