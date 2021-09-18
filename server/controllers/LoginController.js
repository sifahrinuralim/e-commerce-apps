const { Account } = require('../models/index')
const jwt = require('jsonwebtoken')
var bcrypt = require("bcrypt")

class LoginController {
    static login(req, res) {
        const { email, password, from } = req.body

        if (!email || !password || !from) {
            res.send('Data tidak Lengkap')
        } else {
            if (from === "admin_panel") {
                Account.findOne({
                    where: {
                        email: email,
                        status_user: 'Admin'
                    }
                }).then((data) => {
                    if (!data) {
                        res.status(404).json({ message: "Bukan Admin" })
                    } else {
                        bcrypt.compare(password, data.password, (err, result) => {
                            if (err) {
                                res.send(err)
                            } else if (result === true && data.email === email) {
                                jwt.sign({ name: data.name, email: data.email, status_user: 'Admin' }, process.env.SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
                                    if (err) {
                                        res.send(err)
                                    } else {
                                        console.log("Login Berhasil Sebagai Admin")
                                        // res.status(200).json({ message: "Login Admin!", token });
                                        res.send({
                                            token: token
                                        })
                                    }
                                })
                            }

                        })
                    }
                })
            } else {
                Account.findOne({
                    where: {
                        email: email,
                        status_user: 'Customer'
                    }
                }).then((data) => {
                    if (!data) {
                        res.status(404).json({ message: "Username atau Password Salah" })
                    } else {
                        bcrypt.compare(password, data.password, (err, result) => {
                            if (err) {
                                res.send(err)
                            } else if (result === true && data.email === email) {
                                jwt.sign({ name: data.name, email: data.email }, process.env.SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
                                    // idUser: data.idUser  ambil id dari token 
                                    if (err) {
                                        res.send(err)
                                    } else {
                                        console.log("Login Berhasil Sebagai Customer")
                                        res.status(200).json({ message: "Login Customer!", token })
                                    }
                                })
                            } else {
                                console.log("eh salah")
                                res.status(404).json({ message: "Username atau Password Salah" })
                            }
                        })
                    }
                }).catch((err) => {
                    res.send("error: " + err)
                })
            }
        }
    }
}

module.exports = LoginController