const { destination, rating, category, destinationcategories,users ,sequelize } = require('../models')

class DestinationController {

    static async getListDestination(req, res) {
        try {
            let destinations = {}
             destinations = await rating.findAll({
                include: [
                    {model: destination},
                    {model: users},                    
                ],
                attributes: [
                    [sequelize.fn('AVG', sequelize.col('rate')), 'averageRating']
                  ],
                  group: ['destination.id','user.id'] 
            })
           
            res.status(200).json(destinations)
            
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async destinyInformation(req, res) {
        const id = req.params.id
        try {
            const destiny = await rating.findOne({
                include: [destination, category]
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
        const categoryId = req.params.id
        const { destination_name, description, region, city, transport_recomendation} = req.body
        if(!req.file) return res.status(400).json({message: 'Please add image file'})
        try {
            
            const file_path = req.file.path

           let destiny = await destination.create({
                destination_name,
                description,
                region,
                city,                
                transport_recomendation,
                picture: file_path,
                categoryId
            })

            await destinationcategories.create({
                destinationId: destiny.id,
                categoryId: categoryId
            })

            res.status(201).json({ message: 'destination successfully addeted' })

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async rateDestination(req, res) {
        const userId = req.userData.id
        const id = req.params.id
        const { rate, review } = req.body
        try {
            let success = await rating.create({
                rate: rate,
                review: review,
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
            let destinations = await rating.findAll({
                include: [{
                    model: destination,
                    attributes: ['destination_name','description', 'region','transport_recomendation','picture'],
                }],
                attributes: [[sequelize.fn('AVG', sequelize.col('rating.rate')), 'averageRating']],
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

    static async editDestination(req, res){
        try{

            const { destination_name, description, region, city, rating, transport_recomendation, picture } = req.body
            
            const updated = await destination.update({
                destination_name, 
                description, 
                region, 
                city, 
                rating, 
                transport_recomendation, 
                picture 
            },{
                where: {
                    id: req.params.id
                }
            })

            updated[0] === 1 ?
            res.status(200).json({message: 'destination successfully updated'}):
            res.status(404).json({message: 'destination not found'})

        }catch(e){
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