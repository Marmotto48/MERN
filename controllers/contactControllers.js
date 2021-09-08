const Contact = require ('../models/Contact')

module.exports = {
    postContact : async (req, res)=>{
        try {
            const user = await Contact.findOne({email: req.body.email});
            if (user){
                res.send({msg : "Contact already exists"});
                return;
            }
            const newContact = new Contact ({...req.body});
            const result = await newContact.save();
            res.send({response:result, msg : "Contact saved"})
        }catch (error) {
            res.status(400).send({msg : 'Can not save'})
        }
    },
    getAllContacts : async (req, res)=>{
        try {
            const result = await Contact.find()
            res.send({response: result, msg: "All contacts"})
        }catch (error){
            res.status(400).send({msg: "Can no get contacts"})
        }
    },
    
    getById :  async(req, res)=>{
        try {
            const result = await Contact.findOne({_id: req.params.id})
            res.send({response : result, msg: "Contact by id is"})
        }catch(error){
            res.status(400).send({msg: "Can not get contact, id not found"})
        }
    },
    
    deleteById : async(req, res)=>{
        try{
            const result = await Contact.deleteOne({_id: req.params.id})
            res.send({response: result, msg: "Contact deleted"});
        }catch (error){
            res.status(400).send({msg:"Can not delete contact, id not found"})
        }
    },
    
    updateById : async(req, res)=>{
        try {
            const result = await Contact.updateOne({_id: req.params.id},{$set: {...req.body }})
            result.nModified
                ?res.send({response: result, msg: "Contact by id updated"})
                :res.send({msg: "Contact by id already updated"})
        } catch (error) {
            res.status(400).send({msg:"Can not update contact, id not found"})
        }
    }
}


