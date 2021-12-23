import validate from 'deep-email-validator'

module.exports = async (req, res) => { 
    res.json(await validate('fsebaste@gmail.com'))
  }