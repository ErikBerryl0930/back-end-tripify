const { destination, rating, category, sequelize } = require('../models')

class DestinationController {

    static async getListDestination(req, res) {
        try {
            let destinations = await destination.findAll({
                include: [rating, category]
            })

            res.status(200).json(destinations)

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async destinyInformation(req, res) {
        const id = req.params.id
        try {
            const destiny = await destination.findOne({
                include: [rating, category]
            }, {
                where: {
                    id
                }
            })
            if (!destiny) return res.status(404).json({ message: 'please select correct destination' })

            res.status(200).json(destiny)
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async addDestination(req, res) {
        const isAdmin = req.userData.role
        const { destination_name, description, region, city, rating, transport_recomendation, picture } = req.body
        try {
            if (isAdmin !== 'admin') return res.status(403).json({ message: 'Premission denied' })

            await destination.create({
                destination_name,
                description,
                region,
                city,
                rating,
                transport_recomendation,
                picture
            })

            res.status(201).json({ message: 'destination successfully addeted' })

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async rateDestination(req, res) {
        const userId = req.userData.id
        const id = req.params.id
        const { rate } = req.body
        try {
            let success = await rating.create({
                rate: rate,
                userId: userId,
                destinationId: id
            })

            res.status(201).json({ message: 'rate successfully addeted' })

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async recomendation(req, res) {
        try {
            let destinations = await destination.findAll({
                include: [{
                    model: rating,
                    attributes: [[sequelize.fn('AVG', sequelize.col(rate.value)), 'averageRating']],
                }],
                group: ['destination.id'],
                order: [[sequelize.col('averageRating'), 'desc']]
            })

            res.status(200).json(destinations)
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async remove(req, res) {
        const id = req.params.id
        try {
            let result = await destination.destroy({
                where: {
                    id
                }
            })

            result === 1 ?
                res.status(200).json({ message: 'destination successfully removed' }) :
                res.status(404).json({ message: 'destination not found' })
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async pagination(req, res) {
        try {
            const page = req.query.page || 1
            const itemsPerPage = req.query.itemsPerPage || 10

            const offset = (page - 1) * itemsPerPage
            let destinations = await destination.finAndCountAll({
                limit: itemsPerPage,
                offset
            })

            res.status(200).json(destinations)
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

}

module.exports = DestinationController

// contoh penggunaan ======= >

// const Destinations = () => {
//     const [destinations, setDestinations] = useState([]);
//     const [page, setPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(10);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch(`/destinations?page=${page}&itemsPerPage=${itemsPerPage}`);
//           const data = await response.json();
//           setDestinations(data.rows);
//         } catch (error) {
//           console.error('Error fetching data', error);
//         }
//       };
  
//       fetchData();
//     }, [page, itemsPerPage]);
  
//     return (
//       <div>
//         <ul>
//           {destinations.map(destination => (
//             <li key={destination.id}>{destination.name}</li>
//           ))}
//         </ul>
//         <button onClick={() => setPage(page - 1)}>Previous Page</button>
//         <button onClick={() => setPage(page + 1)}>Next Page</button>
//       </div>
//     );
//   };