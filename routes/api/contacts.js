const express = require('express')

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewars");

const {isValidId} = require("../../middlewars")


const {schema} = require("../../models/contact")


router.get('/', ctrl.getAll);

router.get('/:contactId',isValidId, ctrl.getById)

router.post('/', validateBody(schema.addSchema), ctrl.add)

router.delete('/:contactId',isValidId,ctrl.deleteById);

router.put('/:contactId',isValidId, validateBody(schema.updateSchema), ctrl.updateById);

router.patch('/:contactId/favorite',isValidId, validateBody(schema.updateFavoriteSchema), ctrl.updateFavorite)



module.exports = router
