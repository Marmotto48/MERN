const express = require ("express");
const router = express.Router();
const Contact = require ('../models/Contact')
const Controller = require ("../controllers/contactControllers");



//router test
router.get ("/test", (req, res)=> {
    res.send ("tesst : is it working ???? yaaaay");
});


//post contact
router.post('/', Controller.postContact)
//router get all contacts
router.get("/get", Controller.getAllContacts)
//get contact by id
router.get("/:id", Controller.getById)
//delete contact by id
router.delete("/delete/:id", Controller.deleteById)
//update contact by id
router.put("/update/:id", Controller.updateById)

module.exports = router;
