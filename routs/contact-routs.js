const express = require('express');
const getContacts = require('../controllers/contacts-controller')
const router = express.Router();

router.get('/contacts', getContacts)
    
    // const contacts= [
    //     {name: 'Youtube', link: 'https://www.youtube.com/watch?v=mxv8ykwaWEw&list=PLNkWIWHIRwMFtsaJ4b_wwkJDHKJeuAkP0&index=15'},
    //     {name: 'Twitter', link: 'https://www.youtube.com/watch?v=mxv8ykwaWEw&list=PLNkWIWHIRwMFtsaJ4b_wwkJDHKJeuAkP0&index=15'},
    //     {name: 'Github', link: 'https://www.youtube.com/watch?v=mxv8ykwaWEw&list=PLNkWIWHIRwMFtsaJ4b_wwkJDHKJeuAkP0&index=15'},
    // ]

module.exports =router;