const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.render('users/new')
})

router.post('/', (req, res) => {
    const isValid = true
    if(isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error');
        res.render('users/new', { firstName: req.body.firstName })
    }


    console.log(req.body.firstName);
    res.send('Hi')
})

router
    .route('/:id')
    .get((req, res) => {
        //req.params.id
        console.log(req.user);
        res.send(`User Get With ID ${req.params.id}`)
    })
    .put((req, res) => {
        req.params.id
        res.send(`User Update With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        req.params.id
        res.send(`User Deleted With ID ${req.params.id}`)
    })

const users = [{ name: 'kyle' }, { name: 'sally' }]
router.param('id', (req, res, next, id) =>{
    req.user = users[id]
    next()
})


// router.get('/:id', (req, res) => {
//     req.params.id
//     res.send(`User Get With ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     req.params.id
//     res.send(`User Update With ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     req.params.id
//     res.send(`User Deleted With ID ${req.params.id}`)
// })

module.exports = router