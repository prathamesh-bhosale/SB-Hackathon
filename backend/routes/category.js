const express = require('express')
const utils = require('../utils')
const database = require('../database')

const router = express.Router()

router.post('/', (req, res) => 
{
    const{ctitle, description} = req.body
    const query = `insert into category (ctitle, description) values(?, ?);`
    database.pool.execute(query, [ctitle, description], (error, result) => 
    {
        res.send(utils.createResult(error, result))
    })
})

router.get('/', (req, res) => 
{
    const {} = req.body
    const query = `select cid , ctitle, description from category;`
    database.pool.execute(query, (error, category) =>
{
    res.send(utils.createResult(error, category))
})
})
router.put('/', (req, res) => 
    {
        const{ctitle, description , cid } = req.body;
        const query = `update category set ctitle = ? , description = ? where cid = ? ;`
        database.pool.execute(query, [ctitle, description , cid ], (error, result) => 
        {
            res.send(utils.createResult(error, result))
        })
    })

router.delete('/', (req, res) =>
    {
        const { cid } = req.body
        const query = `delete from category where cid = ?;`
        database.pool.execute(query, [cid], (error, result) => 
        {
            res.send(utils.createResult(error, result))
        })
    })

module.exports = router