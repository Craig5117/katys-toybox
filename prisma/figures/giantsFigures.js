const giantsFigures = [
    // giants
    {
        figName: "Bouncer",
        characterId: 37,
        elementId: 3,
        gameId: 2,
        type: "giant",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Crusher",
        characterId: 38,
        elementId: 4,
        gameId: 2,
        type: "giant",
        variation: "series 1",
        img: "",
        value: 5.00,
    },
    {
        figName: "Tree Rex",
        characterId: 39,
        elementId: 8,
        gameId: 2,
        type: "giant",
        variation: "series 1",
        img: "",
        value: 5.00,
    },
    {
        figName: "Hot Head",
        characterId: 40,
        elementId: 1,
        gameId: 2,
        type: "giant",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Swarm",
        characterId: 41,
        elementId: 5,
        gameId: 2,
        type: "giant",
        variation: "series 1",
        img: "",
        value: 5.00,
    },
    {
        figName: "Eye-Brawl",
        characterId: 42,
        elementId: 7,
        gameId: 2,
        type: "giant",
        variation: "series 1",
        img: "",
        value: 6.00,
    },
    {
        figName: "Thumpback",
        characterId: 43,
        elementId: 2,
        gameId: 2,
        type: "giant",
        variation: "series 1",
        img: "",
        value: 6.00,
    },
    {
        figName: "Ninjini",
        characterId: 44,
        elementId: 6,
        gameId: 2,
        type: "giant",
        variation: "series 1",
        img: "",
        value: 5.00,
    },
    // giants standard
    {
        figName: "Bash S-2",
        characterId: 1,
        elementId: 4,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 3.00,
    },
    {
        figName: "Chill",
        characterId: 50,
        elementId: 2,
        gameId: 2,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 4.00,
    },
    {
        figName: "LightCore Chill",
        characterId: 50,
        elementId: 2,
        gameId: 2,
        type: "standard",
        variation: "lightcore",
        img: "",
        rare: true,
        value: 15.00,
    },
    {
        figName: "Chop Chop S-2",
        characterId: 4,
        elementId: 7,
        gameId: 2,
        setId: 5,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 0.50,
    },
    {
        figName: "Cynder S-2",
        characterId: 5,
        elementId: 7,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 3.00,
    },
    {
        figName: "Double Trouble S-2",
        characterId: 7,
        elementId: 6,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 1.50,
    },
    {
        figName: "Drobot S-2",
        characterId: 9,
        elementId: 3,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        rare: true,
        value: 5.00,
    },
    {
        figName: "LightCore Drobot",
        characterId: 9,
        elementId: 3,
        gameId: 2,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 1.50,
    },
    {
        figName: "Eruptor S-2",
        characterId: 10,
        elementId: 1,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 0.50,
    },
    {
        figName: "LightCore Eruptor",
        characterId: 10,
        elementId: 1,
        gameId: 2,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 1.50,
    },
    {
        figName: "Flameslinger S-2",
        characterId: 11,
        elementId: 1,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 1.50,
    },
    {
        figName: "Flashwing",
        characterId: 49,
        elementId: 4,
        gameId: 2,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Fright Rider",
        characterId: 48,
        elementId: 7,
        gameId: 2,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 1.50,
    },
    {
        figName: "Gill Grunt S-2",
        characterId: 13,
        elementId: 2,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 1.50,
    },
    {
        figName: "Hex S-2",
        characterId: 14,
        elementId: 7,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 2.00,
    },
    {
        figName: "LightCore Hex",
        characterId: 14,
        elementId: 7,
        gameId: 2,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 0.50,
    },
    {
        figName: "Hot Dog",
        characterId: 52,
        elementId: 1,
        gameId: 2,
        setId: 6,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 4.00,
    },
    {
        figName: "Ignitor S-2",
        characterId: 15,
        elementId: 1,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 3.00,
    },
    {
        figName: "Jet-Vac",
        characterId: 46,
        elementId: 5,
        gameId: 2,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 2.00,
    },
    {
        figName: "LightCore Jet-Vac",
        characterId: 46,
        elementId: 5,
        gameId: 2,
        type: "standard",
        variation: "lightcore",
        img: "",
        rare: true,
        value: 5.00,
    },
    {
        figName: "Lightning Rod S-2",
        characterId: 16,
        elementId: 5,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 1.50,
    },
    {
        figName: "Pop Fizz",
        characterId: 47,
        elementId: 6,
        gameId: 2,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 2.00,
    },
    {
        figName: "LightCore Pop Fizz",
        characterId: 47,
        elementId: 6,
        gameId: 2,
        type: "standard",
        variation: "lightcore",
        img: "",
        rare: true,
        value: 20.00,
    },
    {
        figName: "Prism Break S-2",
        characterId: 17,
        elementId: 4,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 1.50,
    },
    {
        figName: "LightCore Prism Break",
        characterId: 17,
        elementId: 4,
        gameId: 2,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 0.50,
    },
    {
        figName: "Shroomboom",
        characterId: 45,
        elementId: 8,
        gameId: 2,
        setId: 5,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 5.00,
    },
    {
        figName: "LightCore Shroomboom",
        characterId: 45,
        elementId: 8,
        gameId: 2,
        type: "standard",
        variation: "lightcore",
        img: "",
        value: 1.00,
    },
    {
        figName: "Slam Bam S-2",
        characterId: 18,
        elementId: 2,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 3.00,
    },
    {
        figName: "Sonic Boom",
        characterId: 19,
        elementId: 5,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 0.50,
    },
    {
        figName: "Sprocket",
        characterId: 51,
        elementId: 3,
        gameId: 2,
        type: "standard",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Spyro S-2",
        characterId: 20,
        elementId: 6,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        rare: true,
        value: 8.00,
    },
    {
        figName: "Stealth Elf S-2",
        characterId: 21,
        elementId: 8,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 2.00,
    },
    {
        figName: "Stump Smash S-2",
        characterId: 22,
        elementId: 8,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 2.00,
    },
    {
        figName: "Terrafin S-2",
        characterId: 24,
        elementId: 4,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 3.00,
    },
    {
        figName: "Trigger Happy S-2",
        characterId: 25,
        elementId: 3,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 1.00,
    },
    {
        figName: "Whirlwind S-2",
        characterId: 29,
        elementId: 5,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 1.00,
    },
    {
        figName: "Wrecking Ball S-2",
        characterId: 30,
        elementId: 6,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 4.00,
    },
    {
        figName: "Zap S-2",
        characterId: 31,
        elementId: 2,
        gameId: 2,
        setId: 6,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 1.00,
    },
    {
        figName: "Zook S-2",
        characterId: 32,
        elementId: 8,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        value: 0.50,
    },
    // Giants sidekicks
    {
        figName: "Barkley",
        characterId: 53,
        elementId: 8,
        gameId: 2,
        type: "sidekick",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Eye Small",
        characterId: 54,
        elementId: 7,
        gameId: 2,
        type: "sidekick",
        variation: "series 1",
        img: "",
        value: 3.00,
    },
    {
        figName: "Mini Jini",
        characterId: 55,
        elementId: 6,
        gameId: 2,
        type: "sidekick",
        variation: "series 1",
        img: "",
        rare: true,
        value: 6.00
    },
    {
        figName: "Thumpling",
        characterId: 56,
        elementId: 2,
        gameId: 2,
        type: "sidekick",
        variation: "series 1",
        img: "",
        rare: true,
        value: 8.00
    },
    // Giants variants
    {
        figName: "Gnarly Tree Rex",
        characterId: 39,
        elementId: 8,
        gameId: 2,
        type: "giant",
        variation: "gnarly",
        img: "",
        rare: true,
        value: 8.00,
    },
    {
        figName: "Granite Crusher",
        characterId: 38,
        elementId: 4,
        gameId: 2,
        type: "giant",
        variation: "granite",
        img: "",
        rare: true,
        value: 12.00,
    },
    {
        figName: "Jade Flashwing",
        characterId: 49,
        elementId: 4,
        gameId: 2,
        type: "standard",
        variation: "jade",
        img: "",
        rare: true,
        value: 9.00,
    },
    {
        figName: "Legendary Bouncer",
        characterId: 37,
        elementId: 3,
        gameId: 2,
        type: "giant",
        variation: "legendary",
        img: "",
        value: 4.50,
    },  
    {
        figName: "Legendary LightCore Chill",
        characterId: 50,
        elementId: 2,
        gameId: 2,
        type: "standard",
        variation: "legendary",
        img: "",
        value: 2.00,
    },
    {
        figName: "Legendary Ignitor",
        characterId: 15,
        elementId: 1,
        gameId: 2,
        type: "standard",
        variation: "legendary",
        img: "",
        value: 1.50,
    },
    {
        figName: "Legendary Jet-Vac",
        characterId: 46,
        elementId: 5,
        gameId: 2,
        type: "standard",
        variation: "legendary",
        img: "",
        value: 3.00,
    },
    {
        figName: "Legendary Slam Bam",
        characterId: 18,
        elementId: 2,
        gameId: 2,
        type: "standard",
        variation: "legendary",
        img: "",
        value: 1.50,
    },
    {
        figName: "Legendary Stealth Elf",
        characterId: 21,
        elementId: 8,
        gameId: 2,
        type: "standard",
        variation: "legendary",
        img: "",
        value: 1.50,
    },
    {
        figName: "Molten Hot Dog",
        characterId: 52,
        elementId: 1,
        gameId: 2,
        type: "standard",
        variation: "molten",
        img: "",
        rare: true,
        value: 8.00,
    },
    {
        figName: "Polar Whirlwind",
        characterId: 29,
        elementId: 5,
        gameId: 2,
        type: "standard",
        variation: "polar",
        img: "",
        rare: true,
        value: 8.00,
    },
    {
        figName: "Punch Pop Fizz",
        characterId: 47,
        elementId: 6,
        gameId: 2,
        type: "standard",
        variation: "punch",
        img: "",
        value: 5.00,
    },
    {
        figName: "Royal Double Trouble",
        characterId: 7,
        elementId: 6,
        gameId: 2,
        type: "standard",
        variation: "royal",
        img: "",
        rare: true,
        value: 10.00,
    },
    {
        figName: "Scarlet Ninjini",
        characterId: 44,
        elementId: 6,
        gameId: 2,
        type: "giant",
        variation: "scarlet",
        img: "",
        rare: true,
        value: 8.00,
    },
    {
        figName: "Double Trouble 1.5",
        characterId: 7,
        elementId: 6,
        gameId: 2,
        type: "standard",
        variation: "series 2",
        img: "",
        rare: true,
        value: 8.00,
    },
    {
        figName: "Employee Holiday Prism Break",
        characterId: 17,
        elementId: 4,
        gameId: 2,
        type: "standard",
        variation: "holiday",
        img: "",
        rare: true,
        value: 140.00,
    },
    {
        figName: "Glow-in-the-Dark Cynder",
        characterId: 5,
        elementId: 7,
        gameId: 2,
        type: "standard",
        variation: "glow",
        img: "",
        value: 1.50,
    },
    {
        figName: "Glow-in-the-Dark Fright Rider",
        characterId: 48,
        elementId: 7,
        gameId: 2,
        type: "standard",
        variation: "glow",
        img: "",
        rare: true,
        value: 5.00,
    },
    {
        figName: "Glow-in-the-Dark Sonic Boom",
        characterId: 19,
        elementId: 5,
        gameId: 2,
        type: "standard",
        variation: "glow",
        img: "",
        value: 0.50,
    },
    {
        figName: "Golden Flameslinger",
        characterId: 11,
        elementId: 1,
        gameId: 2,
        type: "standard",
        variation: "gold",
        img: "",
        rare: true,
        value: 9.00,
    },
    {
        figName: "Halloween Fright Rider",
        characterId: 48,
        elementId: 7,
        gameId: 2,
        type: "standard",
        variation: "holiday",
        img: "",
        rare: true,
        value: 14.50,
    },
    {
        figName: "Metallic Blue Chop Chop",
        characterId: 4,
        elementId: 7,
        gameId: 2,
        type: "standard",
        variation: "metallic",
        img: "",
        rare: true,
        value: 30.00,
    },
    {
        figName: "Metallic Green Gill Grunt",
        characterId: 13,
        elementId: 2,
        gameId: 2,
        type: "standard",
        variation: "metallic",
        img: "",
        value: 2.00,
    },
    {
        figName: "Metallic Green Shroomboom",
        characterId: 45,
        elementId: 8,
        gameId: 2,
        type: "standard",
        variation: "metallic",
        img: "",
        rare: true,
        value: 10.00,
    },
    {
        figName: "Metallic Purple Eye-Brawl",
        characterId: 42,
        elementId: 7,
        gameId: 2,
        type: "giant",
        variation: "metallic",
        img: "",
        rare: true,
        value: 13.00,
    },
    {
        figName: "Metallic Purple Lightning Rod",
        characterId: 16,
        elementId: 5,
        gameId: 2,
        type: "standard",
        variation: "metallic",
        img: "",
        rare: true,
        value: 50.00,
    },
    {
        figName: "Metallic Purple Wrecking Ball",
        characterId: 30,
        elementId: 6,
        gameId: 2,
        type: "standard",
        variation: "metallic",
        img: "",
        rare: true,
        value: 60.00,
    },
    {
        figName: "Pumpkin Eye-Brawl",
        characterId: 42,
        elementId: 7,
        gameId: 2,
        type: "giant",
        variation: "holiday",
        img: "",
        rare: true,
        value: 10.00,
    },
    {
        figName: "Sparkle Hot Head",
        characterId: 40,
        elementId: 1,
        gameId: 2,
        type: "giant",
        variation: "sparkle",
        img: "",
        rare: true,
        value: 90.00,
    },
    {
        figName: "Sparkle Sonic Boom",
        characterId: 19,
        elementId: 5,
        gameId: 2,
        type: "standard",
        variation: "sparkle",
        img: "",
        rare: true,
        value: 90.00,
    },
    {
        figName: "Sparkle Sprocket",
        characterId: 51,
        elementId: 3,
        gameId: 2,
        type: "standard",
        variation: "sparkle",
        img: "",
        rare: true,
        value: 70.00,
    },
    {
        figName: "Bronze Hot Dog",
        characterId: 52,
        elementId: 1,
        gameId: 2,
        type: "standard",
        variation: "metallic",
        img: "",
        rare: true,
        value: 20.00,
    },
    {
        figName: "Stone Whirlwind",
        characterId: 29,
        elementId: 5,
        gameId: 2,
        type: "standard",
        variation: "stone",
        img: "",
        rare: true,
        value: 70.00,
    },
    {
        figName: "Stone Zook",
        characterId: 32,
        elementId: 8,
        gameId: 2,
        type: "standard",
        variation: "stone",
        img: "",
        rare: true,
        value: 50.00,
    },
    {
        figName: "White Flocked Eruptor",
        characterId: 10,
        elementId: 1,
        gameId: 2,
        type: "standard",
        variation: "flocked",
        img: "",
        rare: true,
        value: 45.00,
    },
    {
        figName: "White Flocked Prism Break",
        characterId: 17,
        elementId: 4,
        gameId: 2,
        type: "standard",
        variation: "flocked",
        img: "",
        rare: true,
        value: 65.00,
    },
    {
        figName: "White Flocked Stump Smash",
        characterId: 22,
        elementId: 8,
        gameId: 2,
        type: "standard",
        variation: "flocked",
        img: "",
        rare: true,
        value: 55.00,
    }
];

module.exports = giantsFigures;