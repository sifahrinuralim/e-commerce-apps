const { Account } = require('../models/index')

class AccountController {
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

    static addAccount(req, res) {
        const { name, email, password, status_user } = req.body

        if (!name || !email || !password || !status_user) {
            // let obj = { pesan: "Data belum lengkap", linkUrl: "http://localhost:8000/add-user" }
            res.send("error")
        } else {
            Account.create({ name, email, password, status_user })
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

    static updateAccount(req, res) {
        const AccountId = req.params.id

        Account.update(req.body, { where: { id: AccountId } })
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
}

module.exports = AccountController