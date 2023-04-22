
const Contact = require("../models/contact")
console.log(Contact)
// const { HttpError } = require("../helpers");

const { ctrlWrapper } = require("../helpers")





const getAll = async (req, res) => {

    const result = await Contact.find();
    res.json(result)


}

// const getById = async (req, res) => {

//     const { contactId } = req.params;
//     const result = await contacts.getContactById(contactId);
//     if (!result) {
//         throw HttpError(404, "Not found")
//     }
//     res.json(result)

// }

// const add = async (req, res) => {

//     const { name, email, phone } = req.body;
//     const result = await contacts.addContact(name, email, phone);
//     res.status(201).json(result)

// }

// const deleteById = async (req, res) => {

//     const { contactId } = req.params;
//     const result = await contacts.removeContact(contactId);
//     if (!result) {
//         throw HttpError(404, "Not found")
//     }
//     res.json({ message: "Delete success" })

// }

// const updateById = async (req, res) => {


//     const { contactId } = req.params;
//     const body = req.body
//     const result = await contacts.updateContact(contactId, body);
//     res.json(result)

// }

module.exports = {
    getAll: ctrlWrapper(getAll),
    // getById: ctrlWrapper(getById),
    // add: ctrlWrapper(add),
    // deleteById: ctrlWrapper(deleteById),
    // updateById: ctrlWrapper(updateById)
}