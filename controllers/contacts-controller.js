const createPath = require('../helpers/create-path');
const Contact = require('../modals/contacts')

const getContacts = (req, res) => {
    const title = 'Contacts';
    Contact
        .find()
        .then((contacts)=> res.render(createPath('contacts'), {contacts, title}))
        .catch((error)=> {
            console.log(error);
            res.render(createPath('error'), {title: 'ERROR'});
        });
};

module.exports = getContacts;