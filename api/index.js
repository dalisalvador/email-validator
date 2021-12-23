
import { getBestMx } from '../utils/dns'
import { checkSMTP } from '../utils/smtp'

module.exports = async (req, res) => { 
    console.log("Started")
    const email = "fsebaste@gmail.com"
    const domain = email.split('@')[1]
    const mx = await getBestMx(domain)

    console.log("mx is", mx)

      const smtp =  await checkSMTP(email, email, mx.exchange)

    console.log("smtp", smtp)
    res.send('done...')
  }