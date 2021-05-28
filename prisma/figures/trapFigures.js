const trapFigures = [
    // trap masters
    {
        figName: "Blastermind",
        characterId: 89,
        elementId: 6,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 6.00,
    },
    {
        figName: "Bushwhack",
        characterId: 90,
        elementId: 8,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 4.00,
    },
    {
        figName: "Enigma",
        characterId: 91,
        elementId: 6,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 15.00,
    },
    {
        figName: "Gearshift",
        characterId: 92,
        elementId: 3,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 10.00,
    },
    {
        figName: "Gusto",
        characterId: 93,
        elementId: 5,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Head Rush",
        characterId: 94,
        elementId: 4,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 5.00,
    },
    {
        figName: "Jawbreaker",
        characterId: 95,
        elementId: 3,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 5.00,
    },
    {
        figName: "Ka-Boom",
        characterId: 96,
        elementId: 1,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 7.00,
    },
    {
        figName: "Knight Light",
        characterId: 97,
        elementId: 9,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 20.00,
    },
    {
        figName: "Knight Mare",
        characterId: 98,
        elementId: 10,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 30.00,
    },
    {
        figName: "Krypt King",
        characterId: 99,
        elementId: 7,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 10.00,
    },
    {
        figName: "Lob-Star",
        characterId: 100,
        elementId: 2,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 6.00,
    },
    {
        figName: "Short Cut",
        characterId: 101,
        elementId: 7,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 10.00,
    },
    {
        figName: "Snap Shot",
        characterId: 102,
        elementId: 2,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 2.00,
    },
    {
        figName: "Thunderbolt",
        characterId: 103,
        elementId: 5,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 2.50,
    },
    {
        figName: "Tuff Luck",
        characterId: 104,
        elementId: 8,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 6.00,
    },
    {
        figName: "Wallop",
        characterId: 105,
        elementId: 4,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 10.00,
    },
    {
        figName: "Wildfire",
        characterId: 106,
        elementId: 1,
        gameId: 4,
        type: "master",
        variation: "series 1",
        img: "",
        value: 10.00,
    },
    // traps
    {
        figName: "Tempest Timer",
        characterId: 107,
        elementId: 5,
        gameId: 4,
        type: "trap",
        variation: "hourglass",
        img: "",
        value: 6.00,
    },
    {
        figName: "Drafty Decanter",
        characterId: 108,
        elementId: 5,
        gameId: 4,
        type: "trap",
        variation: "jughead",
        img: "",
        value: 6.00,
    },
    {
        figName: "Storm Warning",
        characterId: 109,
        elementId: 5,
        gameId: 4,
        type: "trap",
        variation: "screamer",
        img: "",
        value: 6.00,
    },
    {
        figName: "Cloudy Cobra",
        characterId: 110,
        elementId: 5,
        gameId: 4,
        type: "trap",
        variation: "snake",
        img: "",
        value: 6.00,
    },
    {
        figName: "Cyclone Sabre",
        characterId: 111,
        elementId: 5,
        gameId: 4,
        type: "trap",
        variation: "sword",
        img: "",
        value: 6.00,
    },
    {
        figName: "Breezy Bird",
        characterId: 112,
        elementId: 5,
        gameId: 4,
        type: "trap",
        variation: "toucan",
        img: "",
        value: 6.00,
    },
    {
        figName: "Ghastly Grimace",
        characterId: 113,
        elementId: 10,
        gameId: 4,
        type: "trap",
        variation: "handstand",
        img: "",
        value: 25.00,
    },
    {
        figName: "Shadow Spider",
        characterId: 114,
        elementId: 10,
        gameId: 4,
        type: "trap",
        variation: "spider",
        img: "",
        value: 25.00,
    },
    {
        figName: "Dark Dagger",
        characterId: 115,
        elementId: 10,
        gameId: 4,
        type: "trap",
        variation: "sword",
        img: "",
        value: 25.00,
    },
    {
        figName: "Slag Hammer",
        characterId: 116,
        elementId: 4,
        gameId: 4,
        type: "trap",
        variation: "hammer",
        img: "",
        value: 4.00,
    },
    {
        figName: "Rubble Trouble",
        characterId: 117,
        elementId: 4,
        gameId: 4,
        type: "trap",
        variation: "handstand",
        img: "",
        value: 4.00,
    },
    {
        figName: "Dust of Time",
        characterId: 118,
        elementId: 4,
        gameId: 4,
        type: "trap",
        variation: "hourglass",
        img: "",
        value: 4.00,
    },
    {
        figName: "Banded Boulder",
        characterId: 119,
        elementId: 4,
        gameId: 4,
        type: "trap",
        variation: "orb",
        img: "",
        value: 4.00,
    },
    {
        figName: "Spinning Sandstorm",
        characterId: 120,
        elementId: 4,
        gameId: 4,
        type: "trap",
        variation: "totem",
        img: "",
        value: 4.00,
    },
    {
        figName: "Rock Hawk",
        characterId: 121,
        elementId: 4,
        gameId: 4,
        type: "trap",
        variation: "toucan",
        img: "",
        value: 4.00,
    },
    {
        figName: "Spark Spear",
        characterId: 122,
        elementId: 1,
        gameId: 4,
        type: "trap",
        variation: "hat",
        img: "",
        value: 6.00,
    },
    {
        figName: "Fire Flower",
        characterId: 123,
        elementId: 1,
        gameId: 4,
        type: "trap",
        variation: "scepter",
        img: "",
        value: 6.00,
    },
    {
        figName: "Scorching Stopper",
        characterId: 124,
        elementId: 1,
        gameId: 4,
        type: "trap",
        variation: "screamer",
        img: "",
        value: 6.00,
    },
    {
        figName: "Eternal Flame",
        characterId: 125,
        elementId: 1,
        gameId: 4,
        type: "trap",
        variation: "torch",
        img: "",
        value: 6.00,
    },
    {
        figName: "Searing Spinner",
        characterId: 126,
        elementId: 1,
        gameId: 4,
        type: "trap",
        variation: "totem",
        img: "",
        value: 6.00,
    },
    {
        figName: "Blazing Belch",
        characterId: 127,
        elementId: 1,
        gameId: 4,
        type: "trap",
        variation: "yawn",
        img: "",
        rare: true,
        value: 130.00,
    },
    {
        figName: "Kaos Trap",
        characterId: 128,
        elementId: 10,
        gameId: 4,
        type: "trap",
        variation: "kaos",
        img: "",
        value: 14.00,
    },
    {
        figName: "Weed Whacker",
        characterId: 129,
        elementId: 8,
        gameId: 4,
        type: "trap",
        variation: "hammer",
        img: "",
        value: 3.00,
    },
    {
        figName: "Seed Serpent",
        characterId: 130,
        elementId: 8,
        gameId: 4,
        type: "trap",
        variation: "snake",
        img: "",
        value: 3.00,
    },
    {
        figName: "Jade Blade",
        characterId: 131,
        elementId: 8,
        gameId: 4,
        type: "trap",
        variation: "sword",
        img: "",
        value: 3.00,
    },
    {
        figName: "Emerald Energy",
        characterId: 132,
        elementId: 8,
        gameId: 4,
        type: "trap",
        variation: "torch",
        img: "",
        value: 3.00,
    },
    {
        figName: "Oak Eagle",
        characterId: 133,
        elementId: 8,
        gameId: 4,
        type: "trap",
        variation: "toucan",
        img: "",
        value: 3.00,
    },
    {
        figName: "Shrub Shrieker",
        characterId: 134,
        elementId: 8,
        gameId: 4,
        type: "trap",
        variation: "yawn",
        img: "",
        rare: true,
        value: 225.00,
    },
    {
        figName: "Heavenly Hawk",
        characterId: 135,
        elementId: 9,
        gameId: 4,
        type: "trap",
        variation: "owl",
        img: "",
        rare: true,
        value: 30.00,
    },
    {
        figName: "Shining Ship",
        characterId: 136,
        elementId: 9,
        gameId: 4,
        type: "trap",
        variation: "rocket",
        img: "",
        rare: true,
        value: 30.00,
    },
    {
        figName: "Beam Scream",
        characterId: 137,
        elementId: 9,
        gameId: 4,
        type: "trap",
        variation: "yawn",
        img: "",
        rare: true,
        value: 100.00,
    },
    {
        figName: "Axe of Illusion",
        characterId: 138,
        elementId: 6,
        gameId: 4,
        type: "trap",
        variation: "axe",
        img: "",
        value: 7.00,
    },
    {
        figName: "Arcane Hourglass",
        characterId: 139,
        elementId: 6,
        gameId: 4,
        type: "trap",
        variation: "hourglass",
        img: "",
        value: 7.00,
    },
    {
        figName: "Biter's Bane",
        characterId: 140,
        elementId: 6,
        gameId: 4,
        type: "trap",
        variation: "log",
        img: "",
        value: 7.00,
    },
    {
        figName: "Rune Rocket",
        characterId: 141,
        elementId: 6,
        gameId: 4,
        type: "trap",
        variation: "rocket",
        img: "",
        value: 7.00,
    },
    {
        figName: "Sorcerous Skull",
        characterId: 142,
        elementId: 6,
        gameId: 4,
        type: "trap",
        variation: "skull",
        img: "",
        value: 7.00,
    },
    {
        figName: "Spell Slapper",
        characterId: 143,
        elementId: 6,
        gameId: 4,
        type: "trap",
        variation: "totem",
        img: "",
        value: 7.00,
    },
    {
        figName: "Automatic Angel",
        characterId: 144,
        elementId: 3,
        gameId: 4,
        type: "trap",
        variation: "angel",
        img: "",
        value: 10.00,
    },
    {
        figName: "Makers Mana",
        characterId: 145,
        elementId: 3,
        gameId: 4,
        type: "trap",
        variation: "helmet",
        img: "",
        value: 10.00,
    },
    {
        figName: "Grabbing Gadget",
        characterId: 146,
        elementId: 3,
        gameId: 4,
        type: "trap",
        variation: "hand",
        img: "",
        value: 10.00,
    },
    {
        figName: "Topsy Techy",
        characterId: 147,
        elementId: 3,
        gameId: 4,
        type: "trap",
        variation: "handstand",
        img: "",
        value: 10.00,
    },
    {
        figName: "Factory Flower",
        characterId: 148,
        elementId: 3,
        gameId: 4,
        type: "trap",
        variation: "scepter",
        img: "",
        value: 10.00,
    },
    {
        figName: "Tech Totem",
        characterId: 149,
        elementId: 3,
        gameId: 4,
        type: "trap",
        variation: "tiki",
        img: "",
        value: 10.00,
    },
    {
        figName: "Haunted Hatchet",
        characterId: 150,
        elementId: 7,
        gameId: 4,
        type: "trap",
        variation: "axe",
        img: "",
        value: 9.00,
    },
    {
        figName: "Dream Piercer",
        characterId: 151,
        elementId: 7,
        gameId: 4,
        type: "trap",
        variation: "hat",
        img: "",
        value: 9.00,
    },
    {
        figName: "Grim Gripper",
        characterId: 152,
        elementId: 7,
        gameId: 4,
        type: "trap",
        variation: "hand",
        img: "",
        value: 9.00,
    },
    {
        figName: "Spirit Sphere",
        characterId: 153,
        elementId: 7,
        gameId: 4,
        type: "trap",
        variation: "orb",
        img: "",
        value: 9.00,
    },
    {
        figName: "Spectral Skull",
        characterId: 154,
        elementId: 7,
        gameId: 4,
        type: "trap",
        variation: "skull",
        img: "",
        value: 9.00,
    },
    {
        figName: "Spooky Snake",
        characterId: 155,
        elementId: 7,
        gameId: 4,
        type: "trap",
        variation: "snake",
        img: "",
        value: 9.00,
    },
    {
        figName: "Soaking Staff",
        characterId: 156,
        elementId: 2,
        gameId: 4,
        type: "trap",
        variation: "angel",
        img: "",
        value: 2.00,
    },
    {
        figName: "Aqua Axe",
        characterId: 157,
        elementId: 2,
        gameId: 4,
        type: "trap",
        variation: "axe",
        img: "",
        value: 2.00,
    },
    {
        figName: "Frost Helm",
        characterId: 158,
        elementId: 2,
        gameId: 4,
        type: "trap",
        variation: "helmet",
        img: "",
        value: 2.00,
    },
    {
        figName: "Flood Flask",
        characterId: 159,
        elementId: 2,
        gameId: 4,
        type: "trap",
        variation: "jughead",
        img: "",
        value: 2.00,
    },
    {
        figName: "Wet Walter",
        characterId: 160,
        elementId: 2,
        gameId: 4,
        type: "trap",
        variation: "log",
        img: "",
        value: 2.00,
    },
    {
        figName: "Tidal Tiki",
        characterId: 161,
        elementId: 2,
        gameId: 4,
        type: "trap",
        variation: "tiki",
        img: "",
        value: 2.00,
    },
    // standard figures
    {
        figName: "Bat Spin",
        characterId: 162,
        elementId: 7,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        rare: true,
        value: 15.00,
    },
    {
        figName: "Blackout",
        characterId: 163,
        elementId: 10,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        rare: true,
        value: 35.00,
    },
    {
        figName: "Blades",
        characterId: 164,
        elementId: 10,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 4.00,
    },
    {
        figName: "Chopper",
        characterId: 165,
        elementId: 3,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 4.00,
    },
    {
        figName: "Cobra Cadabra",
        characterId: 166,
        elementId: 6,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 8.00,
    },
    {
        figName: "Deja Vu",
        characterId: 167,
        elementId: 6,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 2.00,
    },
    {
        figName: "Echo",
        characterId: 168,
        elementId: 2,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 20.00,
    },
    {
        figName: "Fist Bump",
        characterId: 169,
        elementId: 4,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Fling Kong",
        characterId: 170,
        elementId: 5,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 13.00,
    },
    {
        figName: "Flip Wreck",
        characterId: 171,
        elementId: 2,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 14.00,
    },
    {
        figName: "Food Fight",
        characterId: 172,
        elementId: 8,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 2.00,
    },
    {
        figName: "Fryno S-2",
        characterId: 76,
        elementId: 1,
        gameId: 4,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 1.50,
    },
    {
        figName: "Funny Bone",
        characterId: 173,
        elementId: 7,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 2.50,
    },
    {
        figName: "Gill Grunt S-4",
        characterId: 13,
        elementId: 2,
        gameId: 4,
        type: "standard",
        variation: "series 4",
        img: "",
        value: 0.50,
    },
    {
        figName: "High Five",
        characterId: 174,
        elementId: 8,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 10.00,
    },
    {
        figName: "Jet Vac S-3",
        characterId: 46,
        elementId: 5,
        gameId: 4,
        type: "standard",
        variation: "series 3",
        img: "",
        value: 0.50,
    },
    {
        figName: "Pop Fizz S-3",
        characterId: 47,
        elementId: 6,
        gameId: 4,
        type: "standard",
        variation: "series 3",
        img: "",
        value: 1.50,
    },
    {
        figName: "Rocky Roll",
        characterId: 175,
        elementId: 4,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 20.00,
    },
    {
        figName: "Shroomboom S-2",
        characterId: 45,
        elementId: 8,
        gameId: 4,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 0.50,
    },
    {
        figName: "Spotlight",
        characterId: 176,
        elementId: 9,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 35.00,
    },
    {
        figName: "Torch",
        characterId: 177,
        elementId: 1,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 2.50,
    },
    {
        figName: "Trail Blazer",
        characterId: 178,
        elementId: 1,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 10.00,
    },
    {
        figName: "Tread Head",
        characterId: 179,
        elementId: 3,
        gameId: 4,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 5.00,
    },
    // sidekicks
    {
        figName: "Barkley S-2",
        characterId: 53,
        elementId: 8,
        gameId: 4,
        type: "sidekick",
        variation: "series 2",
        img: "",
        value: 10.00,
    },
    {
        figName: "Bop",
        characterId: 180,
        elementId: 4,
        gameId: 4,
        type: "sidekick",
        variation: "series 1",
        img: "",
        value: 4.00,
    },
    {
        figName: "Breeze",
        characterId: 181,
        elementId: 5,
        gameId: 4,
        type: "sidekick",
        variation: "series 1",
        img: "",
        rare: true,
        value: 70.00,
    },
    {
        figName: "Drobit",
        characterId: 182,
        elementId: 3,
        gameId: 4,
        type: "sidekick",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Eye Small S-2",
        characterId: 54,
        elementId: 7,
        gameId: 4,
        type: "sidekick",
        variation: "series 2",
        img: "",
        value: 5.00,
    },
    {
        figName: "Gill Runt S-2",
        characterId: 33,
        elementId: 2,
        gameId: 4,
        type: "sidekick",
        variation: "series 2",
        img: "",
        value: 4.00,
    },
    {
        figName: "Hijinx",
        characterId: 183,
        elementId: 7,
        gameId: 4,
        type: "sidekick",
        variation: "series 1",
        img: "",
        value: 0.50,
    },
    {
        figName: "Mini Jini",
        characterId: 55,
        elementId: 6,
        gameId: 4,
        type: "sidekick",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Pet Vac",
        characterId: 184,
        elementId: 5,
        gameId: 4,
        type: "sidekick",
        variation: "series 1",
        img: "",
        value: 10.00,
    },
    {
        figName: "Small Fry",
        characterId: 185,
        elementId: 1,
        gameId: 4,
        type: "sidekick",
        variation: "series 1",
        img: "",
        value: 4.00,
    },
    {
        figName: "Spry",
        characterId: 186,
        elementId: 6,
        gameId: 4,
        type: "sidekick",
        variation: "series 1",
        img: "",
        value: 2.00,
    },
    {
        figName: "Terrabite S-2",
        characterId: 34,
        elementId: 4,
        gameId: 4,
        type: "sidekick",
        variation: "series 2",
        img: "",
        value: 2.50,
    },
    {
        figName: "Thumpling S-2",
        characterId: 56,
        elementId: 2,
        gameId: 4,
        type: "sidekick",
        variation: "series 2",
        img: "",
        value: 7.00,
    },
    {
        figName: "Trigger Snappy S-2",
        characterId: 35,
        elementId: 3,
        gameId: 4,
        type: "sidekick",
        variation: "series 2",
        img: "",
        value: 4.00,
    },
    {
        figName: "Weeruptor",
        characterId: 187,
        elementId: 1,
        gameId: 4,
        type: "sidekick",
        variation: "series 1",
        img: "",
        value: 10.00,
    },
    {
        figName: "Whisper Elf S-2",
        characterId: 36,
        elementId: 8,
        gameId: 4,
        type: "sidekick",
        variation: "series 2",
        img: "",
        value: 15.00,
    },
    
];

module.exports = trapFigures;