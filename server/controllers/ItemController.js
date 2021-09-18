const { Item } = require('../models/index')
const { Op } = require("sequelize");

class ItemController {
    static getAllItem(req, res) {
        Item.findAll({
            order: [
                ['stock', 'DESC']
            ]
        })
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

    static getAllItemCustomer(req, res) {
        const { Op } = require("sequelize");
        Item.findAll({
            where: {
                stock: { [Op.ne]: '0' }
            },
            order: [
                ['stock', 'ASC']
            ]
        })
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

    static getOneItem(req, res) {
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
}

module.exports = ItemController