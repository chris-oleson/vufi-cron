const axios = require('axios')
axios.post('https://api.vufi.app/plaid/update').then(() => {
    process.exit()
})