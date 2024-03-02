const axios = require('axios')
callRoutes()

async function callRoutes() {
    try {
        await axios.post('https://api.vufi.app/plaid/update')
        await axios.post('https://api.vufi.app/currencies/update')
        process.exit()
    }
    catch {
        process.exit()
    }
}