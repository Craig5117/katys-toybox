const trapCharacters = [
    // trap masters
    {
        name: "Blastermind",
        gender: "m"
    },
    {
        name: "Bushwhack",
        gender: "m"
    },
    {
        name: "Enigma",
        gender: "m"
    },
    {
        name: "Gearshift",
        gender: "f"
    },
    {
        name: "Gusto",
        gender: "m"
    },
    {
        name: "Head Rush",
        gender: "f"
    },
    {
        name: "Jawbreaker",
        gender: "m"
    },
    {
        name: "Ka-Boom",
        gender: "m"
    },
    {
        name: "Knight Light",
        gender: "m"
    },
    {
        name: "Knight Mare",
        gender: "f"
    },
    {
        name: "Krypt King",
        gender: "m"
    },
    {
        name: "Lob-Star",
        gender: "m"
    },
    {
        name: "Short Cut",
        gender: "m"
    },
    {
        name: "Snap Shot",
        gender: "m"
    },
    {
        name: "Thunderbolt",
        gender: "m"
    },
    {
        name: "Tuff Luck",
        gender: "f"
    },
    {
        name: "Wallop",
        gender: "m"
    },
    {
        name: "Wildfire",
        gender: "m"
    },
    // traps
    {
        name: "Air Hourglass",
        gender: "n"
    },
    {
        name: "Air Jughead",
        gender: "n"
    },
    {
        name: "Air Screamer",
        gender: "n"
    },
    {
        name: "Air Snake",
        gender: "n"
    },
    {
        name: "Air Sword",
        gender: "n"
    },
    {
        name: "Air Toucan",
        gender: "n"
    },
    {
        name: "Dark Handstand",
        gender: "n"
    },
    {
        name: "Dark Spider",
        gender: "n"
    },
    {
        name: "Dark Sword",
        gender: "n"
    },
    {
        name: "Earth Hammer",
        gender: "n"
    },
    {
        name: "Earth Handstand",
        gender: "n"
    },
    {
        name: "Earth Hourglass",
        gender: "n"
    },
    {
        name: "Earth Orb",
        gender: "n"
    },
    {
        name: "Earth Totem",
        gender: "n"
    },
    {
        name: "Earth Toucan",
        gender: "n"
    },
    {
        name: "Fire Captain's Hat",
        gender: "n"
    },
    {
        name: "Fire Scepter",
        gender: "n"
    },
    {
        name: "Fire Screamer",
        gender: "n"
    },
    {
        name: "Fire Torch",
        gender: "n"
    },
    {
        name: "Fire Totem",
        gender: "n"
    },
    {
        name: "Fire Yawn",
        gender: "n"
    },
    {
        name: "Kaos Trap",
        gender: "n"
    },
    {
        name: "Life Hammer",
        gender: "n"
    },
    {
        name: "Life Snake",
        gender: "n"
    },
    {
        name: "Life Sword",
        gender: "n"
    },
    {
        name: "Life Torch",
        gender: "n"
    },
    {
        name: "Life Toucan",
        gender: "n"
    },
    {
        name: "Life Yawn",
        gender: "n"
    },
    {
        name: "Light Owl",
        gender: "n"
    },
    {
        name: "Light Rocket",
        gender: "n"
    },
    {
        name: "Light Yawn",
        gender: "n"
    },
    {
        name: "Magic Axe",
        gender: "n"
    },
    {
        name: "Magic Hourglass",
        gender: "n"
    },
    {
        name: "Magic Log Holder",
        gender: "n"
    },
    {
        name: "Magic Rocket",
        gender: "n"
    },
    {
        name: "Magic Skull",
        gender: "n"
    },
    {
        name: "Magic Totem",
        gender: "n"
    },
    {
        name: "Tech Angel",
        gender: "n"
    },
    {
        name: "Tech Flying Helmet",
        gender: "n"
    },
    {
        name: "Tech Hand",
        gender: "n"
    },
    {
        name: "Tech Handstand",
        gender: "n"
    },
    {
        name: "Tech Scepter",
        gender: "n"
    },
    {
        name: "Tech Tiki",
        gender: "n"
    },
    {
        name: "Undead Axe",
        gender: "n"
    },
    {
        name: "Undead Captain's Hat",
        gender: "n"
    },
    {
        name: "Undead Hand",
        gender: "n"
    },
    {
        name: "Undead Orb",
        gender: "n"
    },
    {
        name: "Undead Skull",
        gender: "n"
    },
    {
        name: "Undead Snake",
        gender: "n"
    },
    {
        name: "Water Angel",
        gender: "n"
    },
    {
        name: "Water Axe",
        gender: "n"
    },
    {
        name: "Water Flying Helmet",
        gender: "n"
    },
    {
        name: "Water Jughead",
        gender: "n"
    },
    {
        name: "Water Log Holder",
        gender: "n"
    },
    {
        name: "Water Tiki",
        gender: "n"
    },
    // trap standard
    {
        name: "Bat Spin",
        gender: "f"
    },
    {
        name: "Blackout",
        gender: "m"
    },
    {
        name: "Blades",
        gender: "m"
    },
    {
        name: "Chopper",
        gender: "m"
    },
    {
        name: "Cobra Cadabra",
        gender: "m"
    },
    {
        name: "Deja Vu",
        gender: "f"
    },
    {
        name: "Echo",
        gender: "f"
    },
    {
        name: "Fist Bump",
        gender: "m"
    },
    {
        name: "Fling Kong",
        gender: "m"
    },
    {
        name: "Flip Wreck",
        gender: "m"
    },
    {
        name: "Food Fight",
        gender: "m"
    },
    {
        name: "Funny Bone",
        gender: "m"
    },
    {
        name: "High Five",
        gender: "m"
    },
    {
        name: "Rocky Roll",
        gender: "m"
    },
    {
        name: "Spotlight",
        gender: "f"
    },
    {
        name: "Torch",
        gender: "f"
    },
    {
        name: "Trail Blazer",
        gender: "m"
    },
    {
        name: "Tread Head",
        gender: "m"
    },
    // trap sidekicks
    {
        name: "Bop",
        gender: "m"
    },
    {
        name: "Breeze",
        gender: "f"
    },
    {
        name: "Drobit",
        gender: "m"
    },
    {
        name: "Hijinx",
        gender: "f"
    },
    {
        name: "Pet Vac",
        gender: "m"
    },
    {
        name: "Small Fry",
        gender: "m"
    },
    {
        name: "Spry",
        gender: "m"
    },
    {
        name: "Weerupter",
        gender: "m"
    }
];

module.exports = trapCharacters;