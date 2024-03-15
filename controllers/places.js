const router = require('express').Router()

app.get('/', (req, res) => {
    res.render('places/index')
  })
  
module.exports = router
