const router = require('express').Router()
const eCommerceController = require('../controllers/eCommerceController')
const AccountController = require('../controllers/AccountController')
const ItemController = require('../controllers/ItemController')
const LoginController = require('../controllers/LoginController')

// Item Panel
router.get('/item', ItemController.getAllItem) // Admin
router.get('/item/customer', ItemController.getAllItemCustomer) // Customer
router.get('/item/:nama', ItemController.getOneItem)
router.post('/item/add_item', ItemController.addItem)
router.put('/update/item/:id', ItemController.updateItem)
router.delete('/delete/item/:id', ItemController.deleteItem)

// Account Panel
router.get('/account', AccountController.getAllAccount) //
router.get('/account/:status', AccountController.getOneAccount)
router.post('/account/add_account', AccountController.addAccount)
router.put('/update/account/:id', AccountController.updateAccount)
router.delete('/delete/account/:id', AccountController.deleteAccount)

router.get('/cart', eCommerceController.showCartsDetail)
router.get('/cart/:AccountId/:ItemId', eCommerceController.showAccountItem)
router.get('/cart/:AccountId', eCommerceController.showAccount)
router.post('/cart', eCommerceController.addCart)

// Login Panel
router.post('/api/login', LoginController.login)

module.exports = router