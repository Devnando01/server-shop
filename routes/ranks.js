var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let items = [
    {
        "id": "vip",
        "image": "https://cdn.discordapp.com/attachments/704295130777124904/956201116981424138/Raw_Iron_JE3_BE2.webp",
        "name": "VIP",
        "price": "Rp25.000,00",
        "description": "##### **Perks:**\n\n\n✦ Priority Queue\n\n✦ Increased vault (/pv) amount to 3.\n\n✦ Player Warps Amount Increased to 3\n\n✦ Access to [item] in chat. This will display your item in global chat!\n\n\n##### **Commands:**\n\n♦ Permission to do /hat\n\n♦ Permission to 3x /sethome.\n\n♦ Permission to do /enderchest\n\n♦ Permission to do /workbench\n\n♦ Permission to do /feed\n\n\n\n##### **Items:**\n\n♦ +100 Coins",
        "goto": "kosongin aja"
    },
    {
        "id": "vip2",
        "image": "https://cdn.discordapp.com/attachments/704295130777124904/956201502555406336/Raw_Gold_JE3_BE2.webp",
        "name": "VIP+",
        "price": "Rp55.000,00",
        "description": "##### **Perks:**\n\n\n✦ Priority Queue\n\n✦ Increased vault (/pv) amount to 5\n\n✦ Player Warps Amount Increased to 5\n\n✦ Access to [item] in chat. This will display your item in global chat!\n\n\n\n##### **Commands:**\n\n✦ Permission to do /hat\n\n✦ Permission to 5x /sethome\n\n✦ Permission to /enderchest\n\n✦ Permission to /workbench\n\n✦ Permission to /ci (clears inventory)\n\n✦ Permission to /anvil\n\n✦ Permission to /stonecutter\n\n✦ Permission to /grindstone\n\n\n\n##### **Items:**\n\n✦ +250 Coins",
        "goto": "kosongin aja"
    },
    {
        "id": "mvp",
        "image": "https://cdn.discordapp.com/attachments/704295130777124904/956206459652276304/Diamond_JE3_BE3.webp",
        "name": "MVP",
        "price": "Rp100.000,00",
        "description": "##### **Perks:**\n\n\n✦ Priority Queue\n\n✦ Increased vault (/pv) amount to 7.\n\n✦ Player Warps Amount Increased to 7\n\n✦ Ability to Silk Touch Spawners\n\n✦ Access to [item] in chat. This will display your item in global chat!\n\n✦ Access to change nickname color.\n\n\n\n##### **Commands:**\n\n✦ Permission to do /hat\n\n✦ Permission to do /nick\n\n✦ Permission to do /feed\n\n✦ Permission to do /repair\n\n✦ Permission to do /getpos\n\n✦ Permission to do /disposal\n\n✦ Permission to do /workbench.\n\n✦ Permission to do /enderchest.\n\n✦ Permission to have 15x /sethome.\n\n✦ Permission to /ci (clears inventory)\n\n✦ Permission to /anvil\n\n✦ Permission to /stonecutter\n\n✦ Permission to /grindstone\n\n\n\n##### **Items:**\n\n✦ + 300 Coins",
        "goto": "kosongin aja"
    },
    {
        "id": "mvp2",
        "image": "https://cdn.discordapp.com/attachments/704295130777124904/956206466946195566/Netherite_Scrap_JE2_BE1.webp",
        "name": "MVP+",
        "price": "Rp155.000,00",
        "description": "##### **Perks:**\n\n\n✦ Priority Queue\n\n✦ Increased vault (/pv) amount to 9.\n\n✦ Player Warps Amount Increased to 10\n\n✦ Ability to Silk Touch Spawners\n\n✦ Access to infinite flight (/fly)\n\n✦ Access to [item] in chat. This will display your item in global chat!\n\n✦ Access to change nickname color.\n\n\n\n##### **Commands:**\n\n✦ Permission to /near\n\n✦ Permission to /ptime\n\n✦ Permission to /depth\n\n✦ Permission to do /hat\n\n✦ Permission to do /nick\n\n✦ Permission to do /feed\n\n✦ Permission to do /repair\n\n✦ Permission to /compass\n\n✦ Permission to /repair all\n\n✦ Permission to do /getpos\n\n✦ Permission to do /disposal\n\n✦ Permission to do /workbench\n\n✦ Permission to do /enderchest\n\n✦ Permission to have 20x /sethome\n\n✦ Permission to /ci (clears inventory)\n\n✦ Permission to /anvil\n\n✦ Permission to /stonecutter\n\n✦ Permission to /grindstone\n\n\n\n##### **Items:**\n\n✦ +500 Coins ",
        "goto": "kosongin aja"
    }
];
  res.render('ranks', { items });
});

module.exports = router;
