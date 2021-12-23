import validate from 'deep-email-validator'

module.exports = async (req, res) => { 
     validate({
        email: 'fsebaste@gmail.com',
        sender: 'fsebaste@gmail.com',
        validateRegex: true,
        validateMx: true,
        validateTypo: true,
        validateDisposable: true,
        validateSMTP: true,
      }).then(console.log)
    res.send('validating...')
  }