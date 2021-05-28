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
        name: "Tempest Timer",
        gender: "n"
    },
    {
        name: "Drafty Decanter",
        gender: "n"
    },
    {
        name: "Storm Warning",
        gender: "n"
    },
    {
        name: "Cloudy Cobra",
        gender: "n"
    },
    {
        name: "Cyclone Sabre",
        gender: "n"
    },
    {
        name: "Breezy Bird",
        gender: "n"
    },
    {
        name: "Ghastly Grimace",
        gender: "n"
    },
    {
        name: "Shadow Spider",
        gender: "n"
    },
    {
        name: "Dark Dagger",
        gender: "n"
    },
    {
        name: "Slag Hammer",
        gender: "n"
    },
    {
        name: "Rubble Trouble",
        gender: "n"
    },
    {
        name: "Dust of Time",
        gender: "n"
    },
    {
        name: "Banded Boulder",
        gender: "n"
    },
    {
        name: "Spinning Sandstorm",
        gender: "n"
    },
    {
        name: "Rock Hawk",
        gender: "n"
    },
    {
        name: "Spark Spear",
        gender: "n"
    },
    {
        name: "Fire Flower",
        gender: "n"
    },
    {
        name: "Scorching Stopper",
        gender: "n"
    },
    {
        name: "Eternal Flame",
        gender: "n"
    },
    {
        name: "Searing Spinner",
        gender: "n"
    },
    {
        name: "Blazing Belch",
        gender: "n"
    },
    {
        name: "Kaos Trap",
        gender: "n"
    },
    {
        name: "Weed Whacker",
        gender: "n"
    },
    {
        name: "Seed Serpent",
        gender: "n"
    },
    {
        name: "Jade Blade",
        gender: "n"
    },
    {
        name: "Emerald Energy",
        gender: "n"
    },
    {
        name: "Oak Eagle",
        gender: "n"
    },
    {
        name: "Shrub Shrieker",
        gender: "n"
    },
    {
        name: "Heavenly Hawk",
        gender: "n"
    },
    {
        name: "Shining Ship",
        gender: "n"
    },
    {
        name: "Beam Scream",
        gender: "n"
    },
    {
        name: "Axe of Illusion",
        gender: "n"
    },
    {
        name: "Arcane Hourglass",
        gender: "n"
    },
    {
        name: "Biter's Bane",
        gender: "n"
    },
    {
        name: "Rune Rocket",
        gender: "n"
    },
    {
        name: "Sorcerous Skull",
        gender: "n"
    },
    {
        name: "Spell Slapper",
        gender: "n"
    },
    {
        name: "Automatic Angel",
        gender: "n"
    },
    {
        name: "Makers Mana",
        gender: "n"
    },
    {
        name: "Grabbing Gadget",
        gender: "n"
    },
    {
        name: "Topsy Techy",
        gender: "n"
    },
    {
        name: "Factory Flower",
        gender: "n"
    },
    {
        name: "Tech Totem",
        gender: "n"
    },
    {
        name: "Haunted Hatchet",
        gender: "n"
    },
    {
        name: "Dream Piercer",
        gender: "n"
    },
    {
        name: "Grim Gripper",
        gender: "n"
    },
    {
        name: "Spirit Sphere",
        gender: "n"
    },
    {
        name: "Spectral Skull",
        gender: "n"
    },
    {
        name: "Spooky Snake",
        gender: "n"
    },
    {
        name: "Soaking Staff",
        gender: "n"
    },
    {
        name: "Aqua Axe",
        gender: "n"
    },
    {
        name: "Frost Helm",
        gender: "n"
    },
    {
        name: "Flood Flask",
        gender: "n"
    },
    {
        name: "Wet Walter",
        gender: "n"
    },
    {
        name: "Tidal Tiki",
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
        name: "Weeruptor",
        gender: "m"
    }
];

module.exports = trapCharacters;