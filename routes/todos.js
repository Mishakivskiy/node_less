const { Router } = require('express')
const Banks = require('../models/banks')
const router = Router()

router.get('/', async (req, res) => {
    const bank_list = await Banks.find({})

    res.render('index', {
        title: 'Banks info',
        isIndex: true,
        bank_list
    })
})

router.get('/calc', (req, res) => {
    res.render('calc', {
        title: 'Calculator',
        isCalc: true
    })
})

router.post('/', async (req, res) => {
    const bank = new Banks({
        bankname: req.body.bankname,
        interest_rate: req.body.interest_rate,
        max_mortgage: req.body.max_mortgage,
        advance_payment: req.body.advance_payment,
        morgage_term: req.body.morgage_term
    })
    await bank.save()
})

module.exports = router