const express = require('express');
router=express.Router();
const fetch = require('node-fetch');
const axios = require('axios');
const tokenVault = require('../vault/abdmSessionToken');
const publicKeyVault = require('../vault/publicKey');
const uuidv4 = require('uuid').v4;

class BatchJobs{
    getAccessToken(){
        
    }
}