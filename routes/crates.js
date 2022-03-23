var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let items = [
    {
        "id": "crate1",
        "image": "https://cdn.discordapp.com/attachments/704295130777124904/956153936249749544/latest.png",
        "name": "SR. SPECIAL CRATE",
        "price": "Rp10.000,00/key",
        "description": "##### **Preview of Crate Rewards:**\n\n\n ![Preview](https://cdn.discordapp.com/attachments/704295130777124904/956215141437931560/Screenshot_4.png)",
        "goto": "kosongin aja",
    }
];
  res.render('crates', { items });
});

module.exports = router;
