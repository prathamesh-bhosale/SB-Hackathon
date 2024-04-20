const express = require('express')
const utils = require('../utils')
const database = require('../database')

const router = express.Router()


    // bid  
    // btitle 
    // bcontent 
    // uid 
    // cid  
    // isDeleted 
    // createdTimestamp 


router.post('/', (req, res) => 
{
    const{ 
        btitle ,
        bcontent ,
        uid ,
        cid  
        
         } = req.body
    const query = `insert into blog ( 
        btitle ,
        bcontent ,
        uid ,
        cid 
        
        ) values( ?, ? , ? , ?  );`
    database.pool.execute(query, [btitle ,
        bcontent ,
        uid ,
        cid ], (error, result) => 
    {
        res.send(utils.createResult(error, result))
    })
})

router.get('/', (req, res) => 
{
    const {} = req.body
    const query = `select bid ,
    btitle ,
    bcontent ,
    uid ,
    cid  ,
    isDeleted from blog;`
    database.pool.execute(query, (error, blog) =>
{
    res.send(utils.createResult(error, blog))
})
})
router.put('/', (req, res) => 
    {
        const{bid ,
            btitle ,
            bcontent ,
            
            cid  ,
            } = req.body;
        const query = `update blog set 
        btitle = ? ,
        bcontent = ? ,
        cid  = ? 
          where bid = ? ;`;

        database.pool.execute(query, [
            btitle ,
            bcontent ,
           
            cid  ,
            bid ], (error, result) => 
        {
            res.send(utils.createResult(error, result))
        })
    })

router.delete('/', (req, res) =>
    {
        const { bid } = req.body
        const query = `delete from blog where bid = ?;`
        database.pool.execute(query, [bid], (error, result) => 
        {
            res.send(utils.createResult(error, result))
        })
    })

    router.post('/search', (req, res) =>
    {
        const { btitle } = req.body
        const query = `select bid , btitle , bcontent , uid , cid  , isDeleted from blog where btitle like "%${ btitle }%" ;`
        database.pool.execute(query, (error, result) => 
        {
            console.log(result);
            res.send(utils.createResult(error, result));
        })
    })
module.exports = router