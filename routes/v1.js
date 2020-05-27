const express = require('express');
const router = express.Router();

const AuthorizationService = require('../services/AuthorizationService');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({
        status:"success",
        message:"Welcome to this snazzy shop project!!",
        data: {
            "version_number": "v1.0.0"
        }
    });
});


module.exports = router;
