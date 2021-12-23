import dns from 'dns'

export const getMx = async (domain) => {
  return new Promise(r =>
    dns.resolveMx(domain, (err, addresses) => {
      if (err || !addresses) return r
      r(addresses)
    })
  )
}

export const getBestMx = async (domain) => {
  const addresses = await getMx(domain)
  let bestIndex = 0

  for (let i = 0; i < addresses.length; i++) {
    if (addresses[i].priority < addresses[bestIndex].priority) {
      bestIndex = i
    }
  }

  return addresses[bestIndex]
}