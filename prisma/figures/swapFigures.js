const swapFigures = [
    // swap force
    {
        figName: "Hoot Loop",
        characterId: 57,
        elementId: 6,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 4.00,
    },
    {
        figName: "Trap Shadow",
        characterId: 58,
        elementId: 6,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 6.00,
    },
    {
        figName: "Magna Charge",
        characterId: 59,
        elementId: 3,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 9.00,
    },
    {
        figName: "Spy Rise",
        characterId: 60,
        elementId: 3,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 6.50,
    },
    {
        figName: "Wash Buckler",
        characterId: 61,
        elementId: 2,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Freeze Blade",
        characterId: 62,
        elementId: 2,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 5.50,
    },
    {
        figName: "Blast Zone",
        characterId: 63,
        elementId: 1,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 2.00,
    },
    {
        figName: "Fire Kraken",
        characterId: 64,
        elementId: 1,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 5.00,
    },
    {
        figName: "Night Shift",
        characterId: 65,
        elementId: 7,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 5.50,
    },
    {
        figName: "Rattle Shake",
        characterId: 66,
        elementId: 7,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 7.00,
    },
    {
        figName: "Stink Bomb",
        characterId: 67,
        elementId: 8,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 7.00,
    },
    {
        figName: "Grilla Drilla",
        characterId: 68,
        elementId: 8,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 6.00,
    },
    {
        figName: "Free Ranger",
        characterId: 69,
        elementId: 5,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 5.00,
    },
    {
        figName: "Boom Jet",
        characterId: 70,
        elementId: 5,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 4.00,
    },
    {
        figName: "Rubble Rouser",
        characterId: 71,
        elementId: 4,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        value: 5.50,
    },
    {
        figName: "Doom Stone",
        characterId: 72,
        elementId: 4,
        gameId: 3,
        type: "swap",
        variation: "series 1",
        img: "",
        rare: true,
        value: 30.00,
    },
    // standard sf figures
    {
        figName: "Bumble Blast",
        characterId: 73,
        elementId: 8,
        gameId: 3,
        setId: 9,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 2.50,
    },
    {
        figName: "LightCore Bumble Blast",
        characterId: 73,
        elementId:8 ,
        gameId: 3,
        type: "standard",
        variation: "lightcore",
        img: "",
        rare: true,
        value: 7.00,
    },
    {
        figName: "Thorn Horn Camo",
        characterId: 3,
        elementId: 8,
        gameId: 3,
        setId: 10,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 6.00,
    },
    {
        figName: "Blizzard Chill",
        characterId: 50,
        elementId: 2,
        gameId: 3,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 2.50,
    },
    {
        figName: "Twin Blade Chop Chop",
        characterId: 4,
        elementId: 7,
        gameId: 3,
        type: "standard",
        variation: "series 3",
        img: "",
        value: 0.50,
    },
    {
        figName: "Countdown",
        characterId: 74,
        elementId: 3,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 2.50,
    },
    {
        figName: "LightCore Countdown",
        characterId: 74,
        elementId: 3,
        gameId: 3,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 2.50,
    },
    {
        figName: "Phantom Cynder",
        characterId: 5,
        elementId: 7,
        gameId: 3,
        type: "standard",
        variation: "series 3",
        img: "",
        value: 1.00,
    },
    {
        figName: "Dune Bug",
        characterId: 75,
        elementId: 6,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 0.50,
    },
    {
        figName: "Lava Barf Eruptor",
        characterId: 10,
        elementId: 1,
        gameId: 3,
        type: "standard",
        variation: "series 3",
        img: "",
        value: 1.00,
    },
    {
        figName: "LightCore Flashwing",
        characterId: 49,
        elementId: 4,
        gameId: 3,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 5.00,
    },
    {
        figName: "Fryno",
        characterId: 76,
        elementId: 1,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 1.50,
    },
    {
        figName: "Anchors Away Gill Grunt",
        characterId: 13,
        elementId: 2,
        gameId: 3,
        type: "standard",
        variation: "series 3",
        img: "",
        value: 2.50,
    },
    {
        figName: "Grim Creeper",
        characterId: 77,
        elementId: 7,
        gameId: 3,
        setId: 10,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 4.50,
    },
    {
        figName: "LightCore Grim Creeper",
        characterId: 77,
        elementId: 7,
        gameId: 3,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 2.50,
    },
    {
        figName: "Fire Bone Hot Dog",
        characterId: 52,
        elementId: 1,
        gameId: 3,
        type: "standard",
        variation: "series 2",
        img: "",
        rare: true,
        value: 7.00,
    },
    {
        figName: "Turbo Jet-Vac",
        characterId: 46,
        elementId: 5,
        gameId: 3,
        type: "standard",
        variation: "series 2",
        img: "",
        rare: true,
        value: 8.00,
    },
    {
        figName: "Super Gulp Pop Fizz",
        characterId: 47,
        elementId: 6,
        gameId: 3,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 3.50,
    },
    {
        figName: "Pop Thorn",
        characterId: 78,
        elementId: 5,
        gameId: 3,
        setId: 7,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Hyper Beam Prism Break",
        characterId: 17,
        elementId: 4,
        gameId: 3,
        type: "standard",
        variation: "series 3",
        img: "",
        value: 2.00,
    },
    {
        figName: "Punk Shock",
        characterId: 79,
        elementId: 2,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 9.00,
    },
    {
        figName: "Rip Tide",
        characterId: 80,
        elementId: 2,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 3.50,
    },
    {
        figName: "Roller Brawl",
        characterId: 81,
        elementId: 7,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 4.50,
    },
    {
        figName: "Scorp",
        characterId: 82,
        elementId: 4,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 2.50,
    },
    {
        figName: "Scratch",
        characterId: 83,
        elementId: 5,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        rare: true,
        value: 20.00,
    },
    {
        figName: "Slobber Tooth",
        characterId: 84,
        elementId: 4,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Smolderdash",
        characterId: 85,
        elementId: 1,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "LightCore Smolderdash",
        characterId: 85,
        elementId: 1,
        gameId: 3,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 1.50,
    },
    {
        figName: "Heavy Duty Sprocket",
        characterId: 51,
        elementId: 3,
        gameId: 3,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 3.50,
    },
    {
        figName: "Mega Ram Spyro",
        characterId: 20,
        elementId: 6,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 0.50,
    },
    {
        figName: "Star Strike",
        characterId: 86,
        elementId: 6,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 4.00,
    },
    {
        figName: "LightCore Star Strike",
        characterId: 86,
        elementId: 6,
        gameId: 3,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 1.00,
    },
    {
        figName: "Ninja Stealth Elf",
        characterId: 21,
        elementId: 8,
        gameId: 3,
        type: "standard",
        variation: "series 3",
        img: "",
        value: 1.00,
    },
    {
        figName: "Knockout Terrafin",
        characterId: 24,
        elementId: 4,
        gameId: 3,
        setId: 9,
        type: "standard",
        variation: "series 3",
        img: "",
        value: 1.00,
    },
    {
        figName: "Big Bang Trigger Happy",
        characterId: 25,
        elementId: 3,
        gameId: 3,
        type: "standard",
        variation: "series 3",
        img: "",
        value: 1.50,
    },
    {
        figName: "LightCore Warnado",
        characterId: 27,
        elementId: 5,
        gameId: 3,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 0.50,
    },
    {
        figName: "LightCore Wham Shell",
        characterId: 28,
        elementId: 2,
        gameId: 3,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 0.50,
    },
    {
        figName: "Horn Blast Whirlwind",
        characterId: 29,
        elementId: 5,
        gameId: 3,
        type: "standard",
        variation: "series 3",
        img: "",
        value: 1.00,
    },
    {
        figName: "Wind Up",
        characterId: 87,
        elementId: 3,
        gameId: 3,
        setId: 8,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 4.00,
    },
    {
        figName: "Zoo Lou",
        characterId: 88,
        elementId: 8,
        gameId: 3,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 2.00,
    },
    // swap variants
    {
        figName: "Dark Blast Zone",
        characterId: 63,
        elementId: 1,
        gameId: 3,
        type: "swap",
        variation: "dark",
        img: "",
        value: 6.00,
    },
    {
        figName: "Dark Slobber Tooth",
        characterId: 84,
        elementId: 4,
        gameId: 3,
        type: "standard",
        variation: "dark",
        img: "",
        value: 1.00,
    },
    {
        figName: "Dark Mega Ram Spyro",
        characterId: 20,
        elementId: 6,
        gameId: 3,
        type: "standard",
        variation: "dark",
        img: "",
        value: 2.00,
    },
    {
        figName: "Dark Ninja Stealth Elf",
        characterId: 21,
        elementId: 8,
        gameId: 3,
        type: "standard",
        variation: "dark",
        img: "",
        value: 1.50,
    },
    {
        figName: "Dark Wash Buckler",
        characterId: 61,
        elementId: 2,
        gameId: 3,
        type: "swap",
        variation: "dark",
        img: "",
        value: 6.00,
    },
    {
        figName: "Enchanted Hoot Loop",
        characterId: 57,
        elementId: 6,
        gameId: 3,
        type: "swap",
        variation: "dark",
        img: "",
        value: 6.00,
    },
    {
        figName: "Enchanted Star Strike",
        characterId: 86,
        elementId: 6,
        gameId: 3,
        type: "standard",
        variation: "dark",
        img: "",
        value: 6.00,
    },
    {
        figName: "Jade Fire Kraken",
        characterId: 64,
        elementId: 1,
        gameId: 3,
        type: "swap",
        variation: "jade",
        img: "",
        value: 6.00,
    },
    {
        figName: "Jolly Bumble Blast",
        characterId: 73,
        elementId: 8,
        gameId: 3,
        type: "standard",
        variation: "holiday",
        img: "",
        value: 4.00,
    },
    {
        figName: "Kickoff Countdown",
        characterId: 74,
        elementId: 3,
        gameId: 3,
        type: "standard",
        variation: "sport",
        img: "",
        value: 1.00,
    },
    {
        figName: "Legendary Free Ranger",
        characterId: 69,
        elementId: 5,
        gameId: 3,
        type: "swap",
        variation: "legendary",
        img: "",
        value: 6.00,
    },
    {
        figName: "Legendary Grim Creeper",
        characterId: 77,
        elementId: 7,
        gameId: 3,
        type: "standard",
        variation: "legendary",
        img: "",
        value: 1.75,
    },
    {
        figName: "Legendary Night Shift",
        characterId: 65,
        elementId: 7,
        gameId: 3,
        type: "swap",
        variation: "legendary",
        img: "",
        rare: true,
        value: 8.00,
    },
    {
        figName: "Legendary Zoo Lou",
        characterId: 88,
        elementId: 8,
        gameId: 3,
        type: "standard",
        variation: "legendary",
        img: "",
        value: 1.00,
    },
    {
        figName: "Nitro Freeze Blade",
        characterId: 62,
        elementId: 2,
        gameId: 3,
        type: "swap",
        variation: "nitro",
        img: "",
        value: 1.50,
    },
    {
        figName: "Nitro Magna Charge",
        characterId: 59,
        elementId: 3,
        gameId: 3,
        type: "swap",
        variation: "nitro",
        img: "",
        rare: true,
        value: 10.00,
    },
    {
        figName: "Quickdraw Rattle Shake",
        characterId: 66,
        elementId: 7,
        gameId: 3,
        type: "swap",
        variation: "glow",
        img: "",
        value: 1.50,
    },
    {
        figName: "Springtime Trigger Happy",
        characterId: 25,
        elementId: 3,
        gameId: 3,
        type: "standard",
        variation: "holiday",
        img: "",
        value: 1.00,
    },
    {
        figName: "Volcanic Lava Barf Eruptor",
        characterId: 10,
        elementId: 1,
        gameId: 3,
        type: "standard",
        variation: "dark",
        img: "",
        value: 2.00,
    },
    {
        figName: "Bronze & Silver Trap Shadow",
        characterId: 58,
        elementId: 6,
        gameId: 3,
        type: "swap",
        variation: "metallic",
        rare: true,
        img: "",
        value: 110.00,
    },
    {
        figName: "Flocked Springtime Trigger Happy",
        characterId: 25,
        elementId: 3,
        gameId: 3,
        type: "standard",
        variation: "flocked",
        img: "",
        rare: true,
        value: 110.00,
    },
    {
        figName: "Frito-Lay Fire Bone Hot Dog (Green)",
        characterId: 52,
        elementId: 1,
        gameId: 3,
        type: "standard",
        variation: "clear",
        img: "",
        rare: true,
        value: 100.00,
    },
    {
        figName: "Frito-Lay Fire Bone Hot Dog (Purple)",
        characterId: 52,
        elementId: 1,
        gameId: 3,
        type: "standard",
        variation: "clear",
        img: "",
        rare: true,
        value: 100.00,
    },
    {
        figName: "Frito-Lay Fire Bone Hot Dog (Red)",
        characterId: 52,
        elementId: 1,
        gameId: 3,
        type: "standard",
        variation: "clear",
        img: "",
        rare: true,
        value: 100.00,
    },
    {
        figName: "Gold & Bronze Doom Stone",
        characterId: 72,
        elementId: 4,
        gameId: 3,
        type: "swap",
        variation: "metallic",
        img: "",
        rare: true,
        value: 320.00,
    },
    {
        figName: "Gold Fire Kraken",
        characterId: 64,
        elementId: 1,
        gameId: 3,
        type: "swap",
        variation: "metallic",
        img: "",
        rare: true,
        value: 8.00,
    },
    {
        figName: "Gold Wash Buckler",
        characterId: 61,
        elementId: 2,
        gameId: 3,
        type: "swap",
        variation: "metallic",
        img: "",
        rare: true,
        value: 10.00,
    },
    {
        figName: "Green Chop Chop",
        characterId: 4,
        elementId: 7,
        gameId: 3,
        type: "standard",
        variation: "green",
        img: "",
        rare: true,
        value: 25.00,
    },
    {
        figName: "Green Rip Tide",
        characterId: 80,
        elementId: 2,
        gameId: 3,
        type: "standard",
        variation: "green",
        img: "",
        rare: true,
        value: 100.00,
    },
    {
        figName: "Green Scorp",
        characterId: 82,
        elementId: 4,
        gameId: 3,
        type: "standard",
        variation: "green",
        img: "",
        rare: true,
        value: 45.00,
    },
    {
        figName: "Heavy Metal Sprocket",
        characterId: 51,
        elementId: 3,
        gameId: 3,
        type: "standard",
        variation: "metallic",
        img: "",
        rare: true,
        value: 12.00,
    },
    {
        figName: "Metallic Red Dune Bug",
        characterId: 75,
        elementId: 6,
        gameId: 3,
        type: "standard",
        variation: "metallic",
        img: "",
        rare: true,
        value: 75.00,
    },
    {
        figName: "Silver & Gold Stink Bomb",
        characterId: 67,
        elementId: 8,
        gameId: 3,
        type: "swap",
        variation: "metallic",
        img: "",
        rare: true,
        value: 95.00,
    },
    {
        figName: "Snowderdash",
        characterId: 85,
        elementId: 1,
        gameId: 3,
        type: "standard",
        variation: "sparkle",
        img: "",
        rare: true,
        value: 75.00,
    },
];

module.exports = swapFigures;