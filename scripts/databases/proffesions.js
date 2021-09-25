// PROFESSIONS DWARF

let trollSlayer = {
    // Main stats
    weaponSkillProf: 10,
    ballisticSkillProf: 0,
    strengthProf: 5,
    toughnessProf: 5,
    agillityProf: 5,
    intelligenceProf: 0,
    willPowerProf: 10,
    fellowshipProf: 0,

    // Secondary stats
    woundsProf: 3,
    attacksProf: 1,
    movementProf: 0,
    magicProf: 0,

    trapingsProf: ["Great Axe", "Light Armour", "Bottle of poor crafrsmenship alcohol"],
    basicSkillsProf: [basicSkills.consumeAlcohol, basicSkills.intimidate, advancedSkills.dodgeBlow]
}

let runeSmith = {
    // Main stats
    weaponSkillProf: 5,
    ballisticSkillProf: 0,
    strengthProf: 5,
    toughnessProf: 0,
    agillityProf: 0,
    intelligenceProf: 10,
    willPowerProf: 15,
    fellowshipProf: 0,

    // Secondary stats
    woundsProf: 2,
    attacksProf: 0,
    movementProf: 0,
    magicProf: 1,

    trapingsProf: ["Medium armour", "Trade tools (Runesmith)"],
    basicSkillsProf: [basicSkills.perception, advancedSkills.readWrite, advancedSkills.runeCraft, academicKnowledge.rune]
}

let thunderer = {
    // Main stats
    weaponSkillProf: 5,
    ballisticSkillProf: 15,
    strengthProf: 5,
    toughnessProf: 0,
    agillityProf: 5,
    intelligenceProf: 0,
    willPowerProf: 0,
    fellowshipProf: 0,

    // Secondary stats
    woundsProf: 2,
    attacksProf: 0,
    movementProf: 1,
    magicProf: 0,

    trapingsProf: ["Light armour", "Gunpowder", "Musket", "Gloves"],
    basicSkillsProf: [basicSkills.perception, advancedSkills.readWrite, advancedSkills.Heal]
}

// PROFESSIONS HUMAN

let priest = {
    // Main stats
    weaponSkillProf: 5,
    ballisticSkillProf: 0,
    strengthProf: 5,
    toughnessProf: 5,
    agillityProf: 0,
    intelligenceProf: 10,
    willPowerProf: 10,
    fellowshipProf: 10,

    // Secondary stats
    woundsProf: 2,
    attacksProf: 0,
    movementProf: 0,
    magicProf: 1,

    trapingsProf: ["Light armour", "Wonderer staff", "Heal potion", "Prayer book"],
    basicSkillsProf: [basicSkills.gossip,academicKnowledge.history, academicKnowledge.theology, advancedSkills.readWrite, advancedSkills.Heal, advancedSkills.Channelling,
    advancedSkills.MagicalSense],
}

let guardian = {
    // Main stats
    weaponSkillProf: 10,
    ballisticSkillProf: 10,
    strengthProf: 5,
    toughnessProf: 5,
    agillityProf: 0,
    intelligenceProf: 0,
    willPowerProf: 5,
    fellowshipProf: 0,

    // Secondary stats
    woundsProf: 4,
    attacksProf: 0,
    movementProf: 0,
    magicProf: 0,

    trapingsProf: ["One-handed sword", "Chain Armour", "Crossbow", "Quarrels(10)"],
    basicSkillsProf: [basicSkills.gossip, basicSkills.haggle, basicSkills.ride, academicKnowledge.strategyTactics, advancedSkills.dodgeBlow]
}

let trader = {
    // Main stats
    weaponSkillProf: 5,
    ballisticSkillProf: 5,
    strengthProf: 0,
    toughnessProf: 0,
    agillityProf: 5,
    intelligenceProf: 10,
    willPowerProf: 10,
    fellowshipProf: 20,

    // Secondary stats
    woundsProf: 2,
    attacksProf: 0,
    movementProf: 0,
    magicProf: 0,

    trapingsProf: ["Light armour", "Trade goods", "Heal potion", "Horse", "Cab", "A lot of money"],
    basicSkillsProf: [basicSkills.gossip, academicKnowledge.history, academicKnowledge.theology, advancedSkills.readWrite, advancedSkills.Heal, advancedSkills.Channelling,
    advancedSkills.MagicalSense],
}

// PROFESSIONS ELF

let mage = {
    // Main stats
    weaponSkillProf: 0,
    ballisticSkillProf: 0,
    strengthProf: 0,
    toughnessProf: 0,
    agillityProf: 5,
    intelligenceProf: 15,
    willPowerProf: 15,
    fellowshipProf: 15,

    // Secondary stats
    woundsProf: 2,
    attacksProf: 0,
    movementProf: 0,
    magicProf: 1,

    trapingsProf: ["Cloak", "Maigc staff", "Spell book"],
    basicSkillsProf: [advancedSkills.readWrite, advancedSkills.Channelling,
    advancedSkills.MagicalSense, advancedSkills.sleightOfHand, academicKnowledge.history, academicKnowledge.theology, academicKnowledge.magic]
}

let ranger = {
    // Main stats
    weaponSkillProf: 5,
    ballisticSkillProf: 15,
    strengthProf: 0,
    toughnessProf: 0,
    agillityProf: 10,
    intelligenceProf: 5,
    willPowerProf: 5,
    fellowshipProf: 0,

    // Secondary stats
    woundsProf: 4,
    attacksProf: 0,
    movementProf: 0,
    magicProf: 0,

    trapingsProf: ["Lighe armour", "Green cloak", "Bow", "Arrows(20)"],
    basicSkillsProf: [advancedSkills.dodgeBlow, advancedSkills.setTrap,
    advancedSkills.shadowing, basicSkills.ride, academicKnowledge.strategyTactics]
}

let herald = {
    // Main stats
    weaponSkillProf: 0,
    ballisticSkillProf: 0,
    strengthProf: 0,
    toughnessProf: 0,
    agillityProf: 10,
    intelligenceProf: 15,
    willPowerProf: 10,
    fellowshipProf: 15,

    // Secondary stats
    woundsProf: 2,
    attacksProf: 0,
    movementProf: 0,
    magicProf: 0,

    trapingsProf: ["Light armour", "Good quality clothes", "dagger", "Books", "A lot of money"],
    basicSkillsProf: [basicSkills.gossip, basicSkills.haggle, basicSkills.intimidate, academicKnowledge.history, academicKnowledge.theology, academicKnowledge.arts,
    academicKnowledge.philosophy, advancedSkills.readWrite, advancedSkills.lipReading]
}

// PROFESSIONS HALFLING

let thief = {
    // Main stats
    weaponSkillProf: 5,
    ballisticSkillProf: 5,
    strengthProf: 0,
    toughnessProf: 0,
    agillityProf: 15,
    intelligenceProf: 5,
    willPowerProf: 0,
    fellowshipProf: 5,

    // Secondary stats
    woundsProf: 2,
    attacksProf: 0,
    movementProf: 0,
    magicProf: 0,

    trapingsProf: ["Light armour", "2 daggers", "poison", "short crossbow", "Dark clothes"],
    basicSkillsProf: [basicSkills.gossip, basicSkills.intimidate,
    advancedSkills.lipReading, advancedSkills.setTrap, advancedSkills.shadowing]
}

let innkeeper = {
    // Main stats
    weaponSkillProf: 5,
    ballisticSkillProf: 5,
    strengthProf: 0,
    toughnessProf: 0,
    agillityProf: 5,
    intelligenceProf: 5,
    willPowerProf: 5,
    fellowshipProf: 20,

    // Secondary stats
    woundsProf: 2,
    attacksProf: 0,
    movementProf: 0,
    magicProf: 0,

    trapingsProf: ["Light armour", "Good quality clothes", "Alcohol", "dagger", "A lot of food"],
    basicSkillsProf: [basicSkills.gossip, basicSkills.haggle, basicSkills.intimidate,],
}
