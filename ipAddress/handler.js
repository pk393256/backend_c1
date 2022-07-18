const dns = require('node:dns');

function getIpAddress(req,res){
    let website=req.body;
    console.log(website)
    dns.lookup(website.website_name, (err, address, family) => {
        console.log('address', address);
        return res.send(address)
      });
}
module.exports = {
    getIpAddress,
}