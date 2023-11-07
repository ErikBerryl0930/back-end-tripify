const { users, profile } = require('../models')
const { decryptPwd, encryptPwd } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jsonwebtoken')
class UserController {

    static async getAllUsers(req, res) {

        try {
            const role = req.userData.role
            if (role !== "admin") return res.status(403).json({ message: 'Premission denied' })

            let listUsers = await users.findAll({
                include: [{
                    model: profile,
                    attributes: ['fullname', 'address', 'country', 'phone', 'profile_image']
                }],
                attributes: ['username', 'email']
            })

            listUsers && listUsers.length === 0 ?
                res.status(200).json({ message: "User is empty" }) :

                res.status(200).json(listUsers)

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async register(req, res) {
        try {

            const {
                username,
                email,
                password,
                confPassword,
                role
            } = req.body

            if (password !== confPassword) return res.status(400).json({ message: 'please enter the right password' })

            const exist = await users.findOne({
                where: {
                    email: email
                }
            })

            if (exist) return res.status(400).json({ message: 'user already exist' })

            const user = await users.create({
                username,
                email,
                password,
                role
            })

            await profile.create({
                userId: user.id
            })

            res.status(201).json({ message: 'user successfully created' })
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body

            let exist = await users.findOne({
                where: {
                    email: email
                },
                attributes: ['username', 'email']

            })

            if (!exist) return res.status(404).json({ message: 'user not found' })

            const match = decryptPwd(password, exist.password)
            if (!match) return res.status(400).json({ message: 'please enter the right email and password!' })

            let userData = await profile.findOne({
                where: {
                    userId: exist.id
                },
                attributes: ['fullname', 'address', 'country', 'phone', 'profile_image']
            })

            let data = {
                ...exist.dataValues,
                profile: userData.dataValues
            }

            const token = generateToken(data)

            res.status(200).json({ token_secret: token })

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async update(req, res) {
        const id = req.userData.id
        const { username, email, fullname, address, country, phone } = req.body
        try {
            if (!req.file) return res.status(400).json({ message: 'Please add image file' })
            const file_path = req.file.path

            await users.update({
                username,
                email
            }, {
                where: {
                    id
                }
            })

            await profile.update({
                fullname,
                address,
                country,
                phone,
                profile_image: file_path
            }, {
                where: {
                    userId: id
                }
            })

            res.status(200).json({ message: 'user successfully updated' })

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async delete(req, res) {
        try {
            const id = req.userData.id
            let result = await users.destroy({
                where: {
                    id
                }
            })

            await profile.destroy({
                where: {
                    userId: id
                }
            })

            result === 1 ?
                res.status(200).json({ message: 'user successfully deleted' }) :
                res.status(404).json({ message: 'user not found' })
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async getUserById(req, res) {
        try {

            const id = req.userData.id
            let user = await users.findByPk(id, {
                include: [
                    {
                        model: profile,
                        attributes: ['fullname', 'address', 'country', 'phone', 'profile_image']
                    }
                ]
            })

            res.status(200).json(user)

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async updateRoleUser(req, res) {
        try {
            const id = req.params.id
            const role = req.body

            const updated = await users.update({
                role
            }, {
                where: {
                    id
                }
            })

            updated[0] === 1 ?
                res.status(200).json({ message: 'role has been updated' }) :
                res.status(404).json({ message: 'user not found' })

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async changePassword(req, res) {
        try {

            const { oldPassword, newPassword, confNewPassword } = req.body
            const match = decryptPwd(oldPassword, req.userData.password)
            if (!match) return res.status(400).json({ message: 'please type the right old password' })

            if (newPassword !== confNewPassword) return res.status(400).json({ message: 'new password and confirm new password is wrong' })

            const hashNewPWD = encryptPwd(newPassword)
            await users.update({
                password: hashNewPWD,
            }, {
                where: {
                    id: req.userData.id
                }
            })

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

}
module.exports = UserController