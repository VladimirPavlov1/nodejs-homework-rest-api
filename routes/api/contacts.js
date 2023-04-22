const express = require('express')

const router = express.Router();

const ctrl = require("../../controllers/contacts");

// const { validateBody } = require("../../middlewars");


// const schema = require("../../schema");


router.get('/', ctrl.getAll);

// router.get('/:contactId', ctrl.getById)

// router.post('/', validateBody(schema.addSchema), ctrl.add)

// router.delete('/:contactId', ctrl.deleteById);

// router.put('/:contactId', validateBody(schema.updateSchema), ctrl.updateById)



module.exports = router
