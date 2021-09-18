const { Cart, Item, Account } = require('../models/index')

class ECommerceController {
    static homepageCart(req, res) {
        Cart.findAll()
            .then((data) => {
                res.status(200).json({
                    message: "Homepage Cart Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    err
                })
            })
    }

    static getAllItem(req, res) {

        // getAll
        Item.findAll()
            .then((data) => {
                res.status(200).json({
                    message: "Homepage Item Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    err
                })
            })
    }

    static getAllAccount(req, res) {
        Account.findAll()
            .then((data) => {
                res.status(200).json({
                    message: "Homepage Account Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    err
                })
            })
    }

    static SearchGetOneItem(req, res) {
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op;
        const namaItem = req.params.nama

        Item.findAll({
            where: {
                nama: { [Op.iLike]: `%${namaItem}%` }
            }
        })
            .then((data) => {
                res.status(200).json({
                    message: "Get One Item Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    err
                })
            })
    }

    static getOneItem(req, res) {

        const idItem = req.params.id

        Item.findAll({ where: { id: idItem } })
            .then((data) => {
                res.status(200).json({
                    message: "Get One Item Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    err
                })
            })
    }

    static getOneAccount(req, res) {
        const statusAcc = req.params.status

        Account.findOne({ where: { status: statusAcc } })
            .then((data) => {
                res.status(200).json({
                    message: "Get One Acc Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    err
                })
            })
    }

    static addItem(req, res) {
        const { nama, harga, stock } = req.body

        if (!nama || !harga || !stock) {
            let obj = { pesan: "Data belum lengkap", linkUrl: "http://localhost:8000/add-user" }
        } else {
            Item.create({ nama, harga, stock })
                .then((data) => {
                    res.status(201).json({
                        message: "Add Item Success",
                        data
                    })
                })
                .catch((err) => {
                    res.status(404).json({
                        message: "error",
                        err
                    })
                })
        }
    }

    static addAccount(req, res) {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            let obj = { pesan: "Data belum lengkap", linkUrl: "http://localhost:8000/add-user" }
        } else {
            Account.create({ name, email, password })
                .then((data) => {
                    res.status(201).json({
                        message: "Add Account Success",
                        data
                    })
                })
                .catch((err) => {
                    res.status(404).json({
                        message: "error",
                        err
                    })
                })
        }
    }

    static updateItem(req, res) {
        const idItem = req.params.id

        Item.update(req.body, { where: { id: idItem } })
            .then((data) => {
                res.status(201).json({
                    message: "Update Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    err
                })
            })
    }

    static deleteItem(req, res) {
        const idItem = req.params.id

        if (!idItem) {
            res.status(422).json({
                message: "ID Tidak Ditemukan"
            })
        } else {
            Item.destroy({ where: { id: idItem } })
                .then((data) => {
                    res.status(200).json({
                        message: "Delete Success",
                        data
                    })
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "Internal Server Error",
                        err
                    })
                })
        }
    }

    static showCartsDetail(req, res) {

        Cart.findAll()
            .then((data) => {
                res.status(200).json({
                    message: "Get All Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "err",
                    err
                })
            })
    }

    static showAccountItem(req, res) {
        Cart.findAll({
            where: {
                AccountId: req.params.AccountId,
                ItemId: req.params.ItemId
            },

            attributes: ['jumlah_barang'],

            include: [
                {
                    model: Account,
                    attributes: [
                        'name'
                    ],

                    model: Item,
                    attributes: [
                        'nama'
                    ]
                }
            ],

        })
            .then((data) => {
                res.status(200).json({
                    message: "Get All Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "err",
                    err
                })
            })
    }

    static showAccount(req, res) {
        Cart.findAll({
            where: {
                AccountId: req.params.AccountId
            },
            include: [
                {
                    model: Account
                }
            ]
        })
            .then((data) => {
                res.status(200).json({
                    message: "showAccount Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "err",
                    err
                })
            })
    }

    static updateAccount(req, res) {
        const AccountId = req.params.id

        Account.update(req.body, { where: { id: AccountId} })
            .then((data) => {
                res.status(201).json({
                    message: "Update Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    err
                })
            })
    }

    static deleteAccount(req, res) {
        const AccountId = req.params.id

        if (!AccountId) {
            res.status(422).json({
                message: "Gagal Get ID"
            })
        } else {
            Account.destroy({ where: { id: AccountId } })
                .then((data) => {
                    res.status(200).json({
                        message: "Delete Success",
                        data
                    })
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "Internal Server Error",
                        err
                    })
                })
        }
    }

    static addCart(req, res) {
        const { ItemId, AccountId, jumlah_barang, total_harga } = req.body

        Cart.create({ ItemId, AccountId, jumlah_barang, total_harga })
            .then((data) => {
                res.status(200).json({
                    message: "Add Carts Success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Error",
                    err
                })
            })
    }
}

module.exports = ECommerceController