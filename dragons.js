var CodeMaintenance = (function() {
    'use strict';

    CodeMaintenance = function() {
        this.warriors = [];
        this.dragons = [];
    this.expectators = [];
    };

    CodeMaintenance.prototype.addWarrior = function(warrior) {
        this.warriors.push(warrior);

        return this;
    };

    CodeMaintenance.prototype.addDragon = function(dragon) {
        this.dragons.push(dragon);

        return this;
    };

    CodeMaintenance.prototype.addExpectator = function(expectator) {
        this.expectators.push(expectator);

        return this;
    };

    CodeMaintenance.prototype.fight = function(rounds) {
        try {
            if ((this.warriors.length > 0) && (this.dragons.length > 0) \
            && (this.expectators.length > 0)) {
                for (var index = 0; index < rounds; index++) {
                    var warrior = this.warriors[Math.floor(Math.random() * this.warriors.length)];
                    var dragon = this.dragons[Math.floor(Math.random() * this.dragons.length)];
                    var expectator = this.expectators[Math.floor(Math.random() * this.expectators.length)];

                    if (!!Math.round(Math.random() * 1)) {
                        console.log(warrior + ' fought ' + dragon + ' and won!');
                        if (!!Math.round(Math.random() * 1)) {
                            console.log(expectator + ' applauded!');
                        } else {
                            console.log(expectator + ' thinks ' + warrior + ' cheated. Bad fight.');
                        }

                    } else {
                        console.log(warrior + ' fought ' + dragon + ' and lost.');
                        if (!!Math.round(Math.random() * 1)) {
                            console.log(expectator + ' took the burnt remains home for a barbecue. :)');
                        } else {
                            console.log(expectator + ' mourned the passing of ' + warrior);
                        }
                    }
                }
            } else {
                throw('You must supply, at least, one warrior and one dragon');
            }
        } catch (exception) {
            console.log(exception);
        }
    };

    return CodeMaintenance;
})();

// runner
var codeMaintenance = new CodeMaintenance();
codeMaintenance.addWarrior('Jorge Roberto')
               .addWarrior('Sillas Soares')
               .addWarrior('Sotnas Leunam')
               .addWarrior('Fabio Porto')
               .addWarrior('Diego Oliveira')
               .addWarrior('Gustavo Franco')
               .addWarrior('André Augusto')
               .addWarrior('Tadeu Zagallo')
               .addDragon('Devon & Cornwall')
               .addDragon('Elliot')
               .addDragon('Gorbash')
               .addDragon('Mushu')
               .addDragon('Smrgol')
               .addDragon('Vermithrax Pejorative')
               .addDragon('Yowler')
               .addDragon('Chrysophylax')
               .addDragon('Custard')
               .addDragon('Glaurung')
               .addDragon('Griaule')
               .addDragon('Icefyre')
               .addDragon('Norbert')
               .addDragon('Pern Dragon')
               .addDragon('Prothero')
               .addDragon('Romanian Longhorn')
               .addDragon('Saphira')
               .addDragon('Scatha')
               .addDragon('Smaug')
               .addDragon('Tintaglia')
               .addDragon('Balerion')
               .addDragon('Meraxes')
               .addDragon('Vhagar')
               .addDragon('Silverwing')
               .addDragon('Vermithrax')
               .addDragon('Ghiscar')
               .addDragon('Valrion')
               .addDragon('Esovius')
               .addDragon('Archonae')
               .addDragon('Drogon')
               .addDragon('Rhaegal')
               .addDragon('Viserion')
               .addExpectator('Patola')
               .fight(50);
