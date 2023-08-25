const { User, UserCocktails, Locations } = require('../models/cocktailModels')

module.exports = {
    addPost: async (req, res) => {
        try {
            const {address, notes, latitude, longitude, userId } = req.body
            const post = await UserCocktails.create({
                location_address: address,
                notes: notes,
                lat: latitude,
                long: longitude,
                user_id: userId
                // the foreign key is named user_id so this is the reason for the name difference
            })
            res.status(200).send(post)
            console.log('line 12', post)
        } catch (err) {
            console.log('post not added')
            console.log(err)
            res.sendStatus(400)
        }
    },

    getLocations: async (req, res) => {
        try {
            
            const {userId} = req.params

            const locations = await UserCocktails.findAll({
                where: {user_id: userId},
            })
            console.log('getLocations', locations)
            res.status(200).send(locations)
        } catch (error) {
            console.log('error in getLocations', error)
            res.sendStatus(400)
        }
    },
    // Here I am grabbing all the locations/all info from the UserCocktails where the userId (from the session/context) matches the user_id (which the foreign key from the User table).
    // This will allow me access to the just the lat, long, and notes from the UserCocktail table.

    getUserPost: async (req, res) => {
        try {

            const {userId} = req.params

            const all = await UserCocktails.findAll({
                where: {user_id: userId},
                include: User
            })
            console.log('getUserPost', all)
            res.status(200).send(all)
        } catch (error) {
            console.log('error in getUserPost', error)
            res.sendStatus(400)
        }
    },
    // Similar action as above, but here I am including all the info from the User table in order to grab the first and last name for displpay purposes on the front end

    editUserPost: async (req, res) => {
        try {
            
            const {id} = req.params

            const {notes} = req.body

            const newNotes = await UserCocktails.update({notes: notes}, {where: {cocktail_id: id} })
            console.log('editUserPost', newNotes)
            res.sendStatus(200)
        } catch (error) {
            console.log('error in editUserPost', error)
        }
    },

    deleteUserPost: async (req, res) => {
        try {
            
            const {id} = req.params

            const deleteUserPost = await UserCocktails.delete({where: {cocktail_id: id}})
            res.sendStatus(200)
        } catch (error) {
            console.log('error in deleteUserPost', error)
            res.sendStatus(400)
        }
    }
}
