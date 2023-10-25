const { users, profile } = require('../models')
class UserController {

    static async getAllUsers(req, res) {

        try {
            const role = req.userData.role
            if (role !== "admin") return res.status(403).json({ message: 'Premission denied' })

            let listUsers = await users.findAll({
                include: [{
                    model: profile
                }],
                attributes: ['username', 'email']
            })

            res.status(200).json(listUsers)

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async register(req, res) {
        try {

        } catch (e) {

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
            const admin = req.userData.role
            const id = req.params.id
            const role = req.body
            if (admin !== 'admin') return res.status(403).json({ message: 'Premission denied' })

            const updated = await users.update({
                role
            }, {
                where: {
                    id
                }
            })


            updated[0] === 1 ?
            res.status(200).json({message: 'role has been updated'}):
            res.status(404).json({message: 'user not found'})

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

}
module.exports = UserController