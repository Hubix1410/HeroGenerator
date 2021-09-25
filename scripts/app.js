class Hero {

    // GENERATORS

    generateRace(choosenRace) {
        this.race = choosenRace;
        console.log(this.race);
        // GENERATE RACE BASE STATS OBJECT
        switch (this.race) {
            case "dwarf":
                this.tableBaseStats = dwarfRaceStats;
                this.tableBaseSkillsAndTalents = 1;
                break;
            case "human":
                this.tableBaseStats = humanRaceStats;
                this.tableBaseSkillsAndTalents = 1;
                break;
            case "halfling":
                this.tableBaseStats = halflingRaceStats;
                this.tableBaseSkillsAndTalents = 1;
                break;
            case "elf":
                this.tableBaseStats = elfRaceStats;
                this.tableBaseSkillsAndTalents = 1;
                break;
        }
    }

    generateBaseStats() {

        // MAIN STATS
        this.weaponSkill = this.tableBaseStats.weaponSkillBase + Math.floor(Math.random() * 18 + 2);
        this.ballisticSkill = this.tableBaseStats.ballisticSkillBase + Math.floor(Math.random() * 18 + 2);
        this.strength = this.tableBaseStats.strengthBase + Math.floor(Math.random() * 18 + 2);
        this.toughness = this.tableBaseStats.toughnessBase + Math.floor(Math.random() * 18 + 2);
        this.agillity = this.tableBaseStats.agillityBase + Math.floor(Math.random() * 18 + 2);
        this.intelligence = this.tableBaseStats.intelligenceBase + Math.floor(Math.random() * 18 + 2);
        this.willPower = this.tableBaseStats.willPowerBase + Math.floor(Math.random() * 18 + 2);
        this.fellowship = this.tableBaseStats.fellowshipBase + Math.floor(Math.random() * 18 + 2);

        // SCEONDARY STATS
        this.strengthBonus = Math.floor(this.strength / 10);
        this.tougnessBonus = Math.floor(this.tougness / 10);
        this.movement = this.tableBaseStats.movementBase;
        this.magic = this.tableBaseStats.magicBase;
        this.insanityPoints = this.tableBaseStats.insanityPointsBase;

        // RANDOM WOUNDS
        this.woundsRand = Math.floor(Math.random() * 9 + 1)
        if (this.woundsRand >= this.tableBaseStats.woundsBase.low[0] && this.woundsRand <= this.tableBaseStats.woundsBase.low[1]) {
            this.wounds = this.tableBaseStats.woundsBase.low[2];
        } else if (this.woundsRand >= this.tableBaseStats.woundsBase.medium[0] && this.woundsRand <= this.tableBaseStats.woundsBase.medium[1]) {
            this.wounds = this.tableBaseStats.woundsBase.medium[2];
        } else if (this.woundsRand >= this.tableBaseStats.woundsBase.high[0] && this.woundsRand <= this.tableBaseStats.woundsBase.high[1]) {
            this.wounds = this.tableBaseStats.woundsBase.high[2];
        } else if (this.woundsRand >= this.tableBaseStats.woundsBase.veryHigh[0] && this.woundsRand <= this.tableBaseStats.woundsBase.veryHigh[1]) {
            this.wounds = this.tableBaseStats.woundsBase.veryHigh[2];
        }

        // RANDOM FATE POINTS
        this.fatePointsRandom = Math.floor(Math.random() * 9 + 1);
        if (this.fatePointsRandom >= this.tableBaseStats.fatePointsBase.low[0] && this.fatePointsRandom <= this.tableBaseStats.fatePointsBase.low[1]) {
            this.fatePoints = this.tableBaseStats.fatePointsBase.low[2];
        } else if (this.fatePointsRandom >= this.tableBaseStats.fatePointsBase.medium[0] && this.fatePointsRandom <= this.tableBaseStats.fatePointsBase.medium[1]) {
            this.fatePoints = this.tableBaseStats.fatePointsBase.medium[2];
        } else if (this.fatePointsRandom >= this.tableBaseStats.fatePointsBase.high[0] && this.fatePointsRandom <= this.tableBaseStats.fatePointsBase.high[1]) {
            this.fatePoints = this.tableBaseStats.fatePointsBase.high[2];
        }

        // GENERATE SKILLS AND TALENTS

    }

    generateProfessionStatsSkillsAndTrappings(prof) {
        this.proffesion = prof;
        this.skillsTable = '';
        this.trappingsTable = '';
        let proffesionTable = prof;
        switch (this.race) {
            case "dwarf":
                switch (this.proffesion) {
                    case "trollSlayer":
                        proffesionTable = trollSlayer;
                        this.skillsTable = trollSlayer;
                        this.trapingsTable = trollSlayer.trapingsProf;
                        break;
                    case "runeSmith":
                        proffesionTable = runeSmith;
                        this.skillsTable = runeSmith;
                        this.trapingsTable = runeSmith.trapingsProf;
                        break;
                    case "thunderer":
                        proffesionTable = thunderer;
                        this.skillsTable = thunderer;
                        this.trapingsTable = thunderer.trapingsProf;
                        break;
                }
                break;
            case "human":
                switch (this.proffesion) {
                    case "priest":
                        proffesionTable = priest;
                        this.skillsTable = priest;
                        this.trapingsTable = priest.trapingsProf;
                        break;
                    case "guardian":
                        proffesionTable = guardian;
                        this.skillsTable = guardian;
                        this.trapingsTable = guardian.trapingsProf;
                        break;
                    case "trader":
                        proffesionTable = trader;
                        this.skillsTable = trader;
                        this.trapingsTable = trader.trapingsProf;
                        break;
                }
                break;
            case "halfling":
                switch (this.proffesion) {
                    case "innkeeper":
                        proffesionTable = innkeeper;
                        this.skillsTable = innkeeper;
                        this.trapingsTable = innkeeper.trapingsProf;
                        break;
                    case "thief":
                        proffesionTable = thief;
                        this.skillsTable = thief;
                        this.trapingsTable = thief.trapingsProf;
                        break;

                }
                break;
            case "elf":
                switch (this.proffesion) {
                    case "mage":
                        proffesionTable = mage;
                        this.skillsTable = mage;
                        this.trapingsTable = mage.trapingsProf;
                        break;
                    case "ranger":
                        proffesionTable = ranger;
                        this.skillsTable = ranger;
                        this.trapingsTable = ranger.trapingsProf;
                        break;
                    case "herald":
                        proffesionTable = herald;
                        this.skillsTable = herald;
                        this.trapingsTable = herald.trapingsProf;
                        break;
                }
                break;
        }

        this.weaponSkillProffesion = proffesionTable.weaponSkillProf;
        this.ballisticSkillProffesion = proffesionTable.ballisticSkillProf;
        this.strengthProffesion = proffesionTable.strengthProf;
        this.toughnessProffesion = proffesionTable.toughnessProf;
        this.agillityProffesion = proffesionTable.agillityProf;
        this.intelligenceProffesion = proffesionTable.intelligenceProf;
        this.willPowerProffesion = proffesionTable.willPowerProf;
        this.fellowshipProffesion = proffesionTable.fellowshipProf;
    }

    generateDevStats() {
        this.weaponSkillDev = 0;
        this.ballisticSkillDev = 0;
        this.strengthDev = 0
        this.toughnessDev = 0;
        this.agillityDev = 0;
        this.intelligenceDev = 0;
        this.willPowerDev = 0;
        this.fellowshipDev = 0;
    }

    generateFinalStats() {
        this.weaponSkillFinal = this.weaponSkill + this.weaponSkillDev;
        this.ballisticSkillFinal = this.ballisticSkill + this.ballisticSkillDev;
        this.strengthFinal = this.strength + this.strengthDev;
        this.toughnessFinal = this.toughness + this.toughnessDev;
        this.agillityFinal = this.agillity + this.agillityDev;
        this.intelligenceFinal = this.intelligence + this.intelligenceDev;
        this.willPowerFinal = this.willPower + this.willPowerDev;
        this.fellowshipFinal = this.fellowship + this.fellowshipDev;
    }

    // INSTERTS

    insertBaseStats() {
        document.querySelector(".baseStats td:nth-child(2)").innerHTML = this.weaponSkill;
        document.querySelector(".baseStats td:nth-child(3)").innerHTML = this.ballisticSkill;
        document.querySelector(".baseStats td:nth-child(4)").innerHTML = this.strength;
        document.querySelector(".baseStats td:nth-child(5)").innerHTML = this.toughness;
        document.querySelector(".baseStats td:nth-child(6)").innerHTML = this.agillity;
        document.querySelector(".baseStats td:nth-child(7)").innerHTML = this.intelligence;
        document.querySelector(".baseStats td:nth-child(8)").innerHTML = this.willPower;
        document.querySelector(".baseStats td:nth-child(9)").innerHTML = this.fellowship;
    }

    instertProffesionStats() {
        document.querySelector(".proffesionStats td:nth-child(2)").innerHTML = this.weaponSkillProffesion;
        document.querySelector(".proffesionStats td:nth-child(3)").innerHTML = this.ballisticSkillProffesion;
        document.querySelector(".proffesionStats td:nth-child(4)").innerHTML = this.strengthProffesion;
        document.querySelector(".proffesionStats td:nth-child(5)").innerHTML = this.toughnessProffesion;
        document.querySelector(".proffesionStats td:nth-child(6)").innerHTML = this.agillityProffesion;
        document.querySelector(".proffesionStats td:nth-child(7)").innerHTML = this.intelligenceProffesion;
        document.querySelector(".proffesionStats td:nth-child(8)").innerHTML = this.willPowerProffesion;
        document.querySelector(".proffesionStats td:nth-child(9)").innerHTML = this.fellowshipProffesion;
    }

    instertDevStats() {
        document.querySelector(".developmentStats td:nth-child(2)").innerHTML = this.weaponSkillDev;
        document.querySelector(".developmentStats td:nth-child(3)").innerHTML = this.ballisticSkillDev;
        document.querySelector(".developmentStats td:nth-child(4)").innerHTML = this.strengthDev;
        document.querySelector(".developmentStats td:nth-child(5)").innerHTML = this.toughnessDev;
        document.querySelector(".developmentStats td:nth-child(6)").innerHTML = this.agillityDev;
        document.querySelector(".developmentStats td:nth-child(7)").innerHTML = this.intelligenceDev;
        document.querySelector(".developmentStats td:nth-child(8)").innerHTML = this.willPowerDev;
        document.querySelector(".developmentStats td:nth-child(9)").innerHTML = this.fellowshipDev;
    }

    instertFinalStats() {
        document.querySelector(".finalStats td:nth-child(2)").innerHTML = this.weaponSkillFinal;
        document.querySelector(".finalStats td:nth-child(3)").innerHTML = this.ballisticSkillFinal;
        document.querySelector(".finalStats td:nth-child(4)").innerHTML = this.strengthFinal;
        document.querySelector(".finalStats td:nth-child(5)").innerHTML = this.toughnessFinal;
        document.querySelector(".finalStats td:nth-child(6)").innerHTML = this.agillityFinal;
        document.querySelector(".finalStats td:nth-child(7)").innerHTML = this.intelligenceFinal;
        document.querySelector(".finalStats td:nth-child(8)").innerHTML = this.willPowerFinal;
        document.querySelector(".finalStats td:nth-child(9)").innerHTML = this.fellowshipFinal;
    }

    insertSkillsAndTrappings() {
        console.log(this.trapingsTable);
        console.log(this.skillsTable)

        this.trapingsTable.forEach((content)=>{
            let element = document.createElement("li");
            element.innerHTML = content;
            document.querySelector(".finalInventory > ul").appendChild(element);
        });

        this.skillsTable.basicSkillsProf.forEach((content)=>{
            let element = document.createElement("li");
            element.innerHTML = content[0] + " (" + content[1] + ")";
            document.querySelector(".finalSkills > ul").appendChild(element);
        });
    }

    // OTHERS

    showStats() {
        console.log("WS: " + this.weaponSkill + ", " + this.tableBaseStats.weaponSkillBase);
        console.log("BS: " + this.ballisticSkill + ", " + this.tableBaseStats.ballisticSkillBase);
        console.log("Str: " + this.strength + ", " + this.tableBaseStats.strengthBase);
        console.log("Toug: " + this.toughness + ", " + this.tableBaseStats.toughnessBase);
        console.log("Agl: " + this.agillity + ", " + this.tableBaseStats.agillityBase);
        console.log("Int: " + this.intelligence + ", " + this.tableBaseStats.intelligenceBase);
        console.log("WP: " + this.willPower + ", " + this.tableBaseStats.willPowerBase);
        console.log("Fell: " + this.fellowship + ", " + this.tableBaseStats.fellowshipBase);
        console.log("StrBon: " + this.strengthBonus + ", " + this.tableBaseStats.strengthBonusBase);
        console.log("HP: " + this.wounds);
        console.log("M: " + this.movement);
        console.log("Mag: " + this.magic);
        console.log("FP: " + this.fatePoints);
        console.log("IP: " + this.insanityPoints);
    }

    developStats(stat) {
        switch (stat) {
            case "WS":
                if (this.weaponSkillProffesion > this.weaponSkillDev) {
                    this.weaponSkillDev += 5;
                } else {
                    alert("Twoja profesja nie pozwala rozwinąć ci tej statystyki")
                }
                break;
            case "BS":
                if (this.ballisticSkillProffesion > this.ballisticSkillDev) {
                    this.ballisticSkillDev += 5;
                } else {
                    alert("Twoja profesja nie pozwala rozwinąć ci tej statystyki")
                }
                break;
            case "S":
                if (this.strengthProffesion > this.strengthDev) {
                    this.strengthDev += 5;
                } else {
                    alert("Twoja profesja nie pozwala rozwinąć ci tej statystyki")
                }
                break;
            case "T":
                if (this.toughnessProffesion > this.toughnessDev) {
                    this.toughnessDev += 5;
                } else {
                    alert("Twoja profesja nie pozwala rozwinąć ci tej statystyki")
                }
                break;
            case "Ag":
                if (this.agillityProffesion > this.agillityDev) {
                    this.agillityDev += 5;
                } else {
                    alert("Twoja profesja nie pozwala rozwinąć ci tej statystyki")
                }
                break;
            case "Int":
                if (this.intelligenceProffesion > this.intelligenceDev) {
                    this.intelligenceDev += 5;
                } else {
                    alert("Twoja profesja nie pozwala rozwinąć ci tej statystyki")
                }
                break;
            case "WP":
                if (this.willPowerProffesion > this.willPowerDev) {
                    this.willPowerDev += 5;
                } else {
                    alert("Twoja profesja nie pozwala rozwinąć ci tej statystyki")
                }
                break;
            case "Fel":
                if (this.fellowshipProffesion > this.fellowshipDev) {
                    this.fellowshipDev += 5;
                } else {
                    alert("Twoja profesja nie pozwala rozwinąć ci tej statystyki")
                }
                break;
        }

        this.instertDevStats();
        this.generateFinalStats();
        this.instertFinalStats();
    }

    rollADice(stat) {
        let modifier = prompt("difficulty level of the test");
        modifier = parseInt(modifier);
        let random = Math.floor(Math.random() * (100 - 1)) + 1;
        switch (stat) {
            case "WS":
                if(random <= this.weaponSkillFinal + modifier){
                    alert("Succes! " + random + "/" + (this.weaponSkillFinal + modifier));
                } else {
                    alert("Faliure! " + random + "/" + (this.weaponSkillFinal + modifier));
                }
                break;
            case "BS":
                if(random <= this.ballisticSkillFinal + modifier){
                    alert("Succes! " + random + "/" + (this.ballisticSkillFinal + modifier));
                } else {
                    alert("Faliure! " + random + "/" + (this.ballisticSkillFinal + modifier));
                }
                break;
            case "S":
                if(random <= this.strengthSkillFinal + modifier){
                    alert("Succes! " + random + "/" + (this.strengthFinal + modifier));
                } else {
                    alert("Faliure! " + random + "/" + (this.strengthFinal + modifier));
                }
                break;
            case "T":
                if(random <= this.toughnessFinal + modifier){
                    alert("Succes! " + random + "/" + (this.toughnessFinal + modifier));
                } else {
                    alert("Faliure! " + random + "/" + (this.toughnessFinal + modifier));
                }
                break;
            case "Ag":
                if(random <= this.agillityFinal + modifier){
                    alert("Succes! " + random + "/" + (this.agillityFinal + modifier));
                } else {
                    alert("Faliure! " + random + "/" + (this.agillityFinal + modifier));
                }
                break;
            case "Int":
                if(random <= this.intelligenceFinal + modifier){
                    alert("Succes! " + random + "/" + (this.intelligenceFinal + modifier));
                } else {
                    alert("Faliure! " + random + "/" + (this.intelligenceFinal + modifier));
                }
                break;
            case "WP":
                if(random <= this.willPowerFinal + modifier){
                    alert("Succes! " + random + "/" + (this.willPowerFinal + modifier));
                } else {
                    alert("Faliure! " + random + "/" + (this.willPowerFinal + modifier));
                }
                break;
            case "Fel":
                if(random <= this.fellowshipFinal + modifier){
                    alert("Succes! " + random + "/" + (this.fellowshipFinal + modifier));
                } else {
                    alert("Faliure! " + random + "/" + (this.fellowshipFinal + modifier));
                }
                break;
        }
    }
}

hero1 = new Hero();

function generatingPhase4(){
    console.log("Pahse4");
    document.querySelector(".landingPage").style.display = "none";
    document.querySelector(".finalSection").style.display = "block";

    document.querySelector(".heroName span").innerHTML = document.querySelector(".heroNameInput").value;
    document.querySelector(".heroRace span").innerText = hero1.race;
    document.querySelector(".heroProfession span").innerText = hero1.proffesion;
    document.querySelector(".heroReligion span").innerText = document.querySelector(".heroReligionInput").value;
    document.querySelector(".heroHomeTown span").innerText = document.querySelector(".heroHomeTownInput").value;
    document.querySelector(".heroDescription span").innerText = document.querySelector(".heroDescriptionInput").value;
    document.querySelector(".otherInformation").style.display = "none";   
}

function generatingPhase3(prof) {
    hero1.generateProfessionStatsSkillsAndTrappings(prof);
    hero1.generateDevStats();
    hero1.generateFinalStats();
    hero1.instertProffesionStats();
    hero1.instertDevStats();
    hero1.instertFinalStats();
    hero1.insertSkillsAndTrappings()

    document.querySelector(".chooseProfession").style.display = "none";
    document.querySelector(".otherInformation").style.display = "flex";
    document.querySelector(".yoo").addEventListener("click", generatingPhase4);
}

function generatingPhase2() {

    hero1.generateBaseStats();
    document.querySelector(".chooseRace").style.display = "none";
    hero1.showStats();
    hero1.insertBaseStats();


    document.querySelector(".chooseProfession").style.display = "flex";

    if (hero1.race === "human") {

        document.querySelector(".humanProffesions").style.display = "flex";

        let trollSlayer = document.querySelector(".humanPriest");
        let runeSmith = document.querySelector(".humanGuardian");
        let thunderer = document.querySelector(".humanTrader");

        trollSlayer.addEventListener("click", () => generatingPhase3("priest"));
        runeSmith.addEventListener("click", () => generatingPhase3("guardian"));
        thunderer.addEventListener("click", () => generatingPhase3("trader"));

    } else if (hero1.race === "dwarf") {

        document.querySelector(".dwarfProffesions").style.display = "flex";

        let trollSlayer = document.querySelector(".dwarfTrollSlayer");
        let runeSmith = document.querySelector(".dwarfRuneSmith");
        let thunderer = document.querySelector(".dwarfThunderer");

        trollSlayer.addEventListener("click", () => generatingPhase3("trollSlayer"));
        runeSmith.addEventListener("click", () => generatingPhase3("runeSmith"));
        thunderer.addEventListener("click", () => generatingPhase3("thunderer"));

    } else if (hero1.race === "halfling") {

        document.querySelector(".halflingProffesions").style.display = "flex";

        let halflingInnkeeper = document.querySelector(".halflingInnkeeper");
        let halflingthief = document.querySelector(".halflingthief");

        halflingInnkeeper.addEventListener("click", () => generatingPhase3("innkeeper"));
        halflingthief.addEventListener("click", () => generatingPhase3("thief"));

    } else if (hero1.race === "elf") {

        document.querySelector(".elfProffesions").style.display = "flex";

        let elfMage = document.querySelector(".elfMage");
        let elfRanger = document.querySelector(".elfRanger");
        let elfHerald = document.querySelector(".elfHerald");

        elfMage.addEventListener("click", () => generatingPhase3("mage"));
        elfRanger.addEventListener("click", () => generatingPhase3("ranger"));
        elfHerald.addEventListener("click", () => generatingPhase3("herald"));
    }
}

function generatingPhase1() {

    document.querySelector(".landingPage").style.display = "none";
    document.querySelector(".chooseRace").style.display = "flex";

    const raceButtonHuman = document.querySelector("#chooseHuman");
    raceButtonHuman.addEventListener("click", () => hero1.generateRace("human"));
    raceButtonHuman.addEventListener("click", generatingPhase2);

    const raceButtonDwarf = document.querySelector("#chooseDwarf");
    raceButtonDwarf.addEventListener("click", () => hero1.generateRace("dwarf"));
    raceButtonDwarf.addEventListener("click", generatingPhase2);

    const raceButtonHalfling = document.querySelector("#chooseHalfling");
    raceButtonHalfling.addEventListener("click", () => hero1.generateRace("halfling"));
    raceButtonHalfling.addEventListener("click", generatingPhase2);

    const raceButtonElf = document.querySelector("#chooseElf");
    raceButtonElf.addEventListener("click", () => hero1.generateRace("elf"));
    raceButtonElf.addEventListener("click", generatingPhase2);

}

function generateButtons() {
    let devButtonWS = document.querySelector(".developmentWS");
    let devButtonBS = document.querySelector(".developmentBS");
    let devButtonS = document.querySelector(".developmentS");
    let devButtonT = document.querySelector(".developmentT");
    let devButtonAg = document.querySelector(".developmentAg");
    let devButtonInt = document.querySelector(".developmentInt");
    let devButtonWP = document.querySelector(".developmentWP");
    let devButtonFel = document.querySelector(".developmentFel");

    devButtonWS.addEventListener("click", () => hero1.developStats("WS"));
    devButtonBS.addEventListener("click", () => hero1.developStats("BS"));
    devButtonS.addEventListener("click", () => hero1.developStats("S"));
    devButtonT.addEventListener("click", () => hero1.developStats("T"));
    devButtonAg.addEventListener("click", () => hero1.developStats("Ag"));
    devButtonInt.addEventListener("click", () => hero1.developStats("Int"));
    devButtonWP.addEventListener("click", () => hero1.developStats("WP"));
    devButtonFel.addEventListener("click", () => hero1.developStats("Fel"));

    let rollADiceButtonWS = document.querySelector(".rollADiceWS");
    let rollADiceButtonBS = document.querySelector(".rollADiceBS");
    let rollADiceButtonS = document.querySelector(".rollADiceS");
    let rollADiceButtonT = document.querySelector(".rollADiceT");
    let rollADiceButtonAg = document.querySelector(".rollADiceAg");
    let rollADiceButtonInt = document.querySelector(".rollADiceInt");
    let rollADiceButtonWP = document.querySelector(".rollADiceWP");
    let rollADiceButtonFel = document.querySelector(".rollADiceFel");

    rollADiceButtonWS.addEventListener("click", () => hero1.rollADice("WS"));
    rollADiceButtonBS.addEventListener("click", () => hero1.rollADice("BS"));
    rollADiceButtonS.addEventListener("click", () => hero1.rollADice("S"));
    rollADiceButtonT.addEventListener("click", () => hero1.rollADice("T"));
    rollADiceButtonAg.addEventListener("click", () => hero1.rollADice("Ag"));
    rollADiceButtonInt.addEventListener("click", () => hero1.rollADice("Int"));
    rollADiceButtonWP.addEventListener("click", () => hero1.rollADice("WP"));
    rollADiceButtonFel.addEventListener("click", () => hero1.rollADice("Fel"));
}

generateButtons();

startButton = document.querySelector(".landingPage > div");

startButton.addEventListener("click", generatingPhase1);