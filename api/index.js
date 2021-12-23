
import { getBestMx } from '../utils/dns'
import { checkSMTP } from '../utils/smtp'
const net = require('net');

module.exports = async (req, res) => { 


    const ps = new Promise(r => {
    const socket = net.createConnection(25, 'gmail-smtp-in.l.google.com')

        socket.setTimeout(1000 * 20)

        socket.on('timeout', () => {
          r('Time out')
          socket.emit('fail', 'Timeout')
        })
  
        socket.on('connect', () => {
            console.log('connected')
            r('connected!!!!!!!!!!!!!!!!!!!!!!')
            socket.on('data', msg => {
              receivedData = true
              console.log('data', msg)
            })
        })
  
        socket.once('fail', msg => {
          if (socket.writable && !socket.destroyed) {
            socket.write(`quit\r\n`)
            socket.end()
            socket.destroy()
          }
          r('Failed')
        })
    })
    
    // console.log("Started")
    // const email = "fsebaste@gmail.com"
    // const domain = email.split('@')[1]
    // const mx = await getBestMx(domain)

    // console.log("mx is", mx)

    //   const smtp =  await checkSMTP(email, email, mx.exchange)

    // console.log("smtp", smtp)

    const msg = await ps

    console.log({msg})

    res.send('done')
  }