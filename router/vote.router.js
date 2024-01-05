const express = require('express');
const router = express.Router();
const VoteController = require("../controller/vote.controller.js");

//reouters 

//Vote router 
router.get('/candidates',VoteController.getVoteDetails);
router.post('/createcandidate',VoteController.createCandidate);
router.delete('/:name',VoteController.deleteCadidate);
router.put('/updatecandidate',VoteController.updateCandidate);
module.exports = router;