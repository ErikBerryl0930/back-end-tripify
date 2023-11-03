const { users, profile } = require('../models')
const { decryptPwd } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jsonwebtoken')
class UserController {

    static async getAllUsers(req, res) {

        try {
            // const role = req.userData.role
            // if (role !== "admin") return res.status(403).json({ message: 'Premission denied' })

            let listUsers = await users.findAll({
                include: [{
                    model: profile
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
                confPassword
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
                password
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
                }
            })

            if (!exist) return res.status(404).json({ message: 'user not found' })

            const match = decryptPwd(password, exist.password)
            if (!match) return res.status(400).json({ message: 'please enter the right password' })

            let userData = await profile.findOne({
                where: {
                    userId: exist.id
                }
            })

            let data = {
                ...exist.dataValues,
                profile: userData.dataValues
            }

            const token = generateToken(data)

            res.status(200).json(token)

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async update(req, res) {
        const id = req.userData.id
        const { username, email, fullname, address, country, phone, profile_image } = req.body
        try {

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
                profile_image
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

}
module.exports = UserController