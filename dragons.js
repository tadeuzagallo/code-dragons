/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, esnext:true, node:true, indent:4, maxerr:50 */

var CodeMaintenance = (function() {
    'use strict';

    /**
     * Constructor method
     *
     * @author Gustavo Franco
     * @since  2013-06-03
     */
    CodeMaintenance = function() {
        this.warriors = [];
        this.dragons = [];
        this.expectators = [];
    };

    CodeMaintenance.Warrior = function() {
      this.name = '';
      this.level = 1;
      this.dragons = [];
    };

    CodeMaintenance.Dragon = function() {
      this.name = '';
      this.owner = undefined;
      this.level = 1;
    };

    /**
     * Add warrior
     *
     * @param  string warrior
     * @author Gustavo Franco
     * @since  2013-06-03
     */
    CodeMaintenance.prototype.addWarrior = function(name, level) {
        if (typeof(name) !== 'string' || !name) {
          throw new TypeError('Warrior name "' + name + '" is invalid');
        }

        var warrior = new CodeMaintenance.Warrior();
        warrior.name = name;

        if (level !== undefined) {
          warrior.level = level;
        }

        this.warriors.push(warrior);

        return warrior;
    };

    /**
     * Add dragon
     *
     * @param  string dragon
     * @author Gustavo Franco
     * @since  2013-06-03
     */
    CodeMaintenance.prototype.addDragon = function(owner, name, level) {
        if (!(owner instanceof CodeMaintenance.Warrior)) {
          throw new TypeError('Dragon owner must be an CodeMaintenance.Warrior instance create by CodeMaintenance.addWarrior()');
        } else if (typeof(name) !== 'string' || !name) {
          throw new TypeError('Dragon name "' + name + '" is invalid');
        }

        var dragon = new CodeMaintenance.Dragon();
        dragon.owner = owner;
        dragon.name = name;

        if (level !== undefined) {
          dragon.level = level;
        }

        this.dragons.push(dragon);

        return dragon;
    };

    /**
     * Add expectator
     *
     * @param  string expectator
     * @author Patola
     * @since  2013-06-03
     */
    CodeMaintenance.prototype.addExpectator = function(expectator) {
        this.expectators.push(expectator);

        return this;
    };

    /**
     * Start the mess. ops, the fight ;)
     *
     * @param  integer rounds
     * @author Gustavo Franco
     * @author Patola
     * @since  2013-06-03
     */
    CodeMaintenance.prototype.fight = function(rounds) {
        var won = function(warrior, dragon) {
          return result('won', warrior, dragon);
        }, lost = function(warrior, dragon) {
          return result('lost', warrior, dragon);
        }, result = function(result, warrior, dragon) {
          return console.log(warrior.name + '(' + warrior.level + ') fought ' + dragon.name + '(' + dragon.level + ') and ' + result + '!');
        };

        try {
            if (this.warriors.length && this.dragons.length && this.expectators.length) {
                for (var index = 0; index < rounds; index++) {
                    var warrior = this.warriors[Math.floor(Math.random() * this.warriors.length)];
                    var dragon = this.dragons[Math.floor(Math.random() * this.dragons.length)];
                    var expectator = this.expectators[Math.floor(Math.random() * this.expectators.length)];

                    if (Math.random() * warrior.level > Math.random() * dragon.level) {
                        won(warrior, dragon);
                        
                        if (!!Math.round(Math.random() * 1)) {
                            console.log('   ' + expectator + ' applauded!');
                        } else {
                            console.log('   ' + expectator + ' thinks ' + warrior.name + ' cheated. Bad fight.');
                        }
                    } else {
                        lost(warrior, dragon);
                        
                        if (!!Math.round(Math.random() * 1)) {
                            console.log('   ' + expectator + ' took the burnt remains home for a barbecue. :)');
                        } else {
                            console.log('   ' + expectator + ' mourned the passing of ' + warrior.name);
                        }
                    }
                }
            } else {
                throw new Error('You must supply, at least, one warrior, dragon and expectator.');
            }
        } catch (exception) {
            console.log(exception);
        }
    };

    return CodeMaintenance;
})();

// runner
var codeMaintenance = new CodeMaintenance(),warriorNames = [
  'Jorge Roberto',
  'Sillas Soares',
  'Sotnas Leunam',
  'Fabio Porto',
  'Diego Oliveira', 
  'Gustavo Franco', 
  'André Augusto',
  'Tadeu Zagallo'
], dragonNames = [
  'Devon & Cornwall',
  'Elliot',
  'Gorbash',
  'Mushu',
  'Smrgol',
  'Vermithrax Pejorative',
  'Yowler',
  'Chrysophylax',
  'Custard',
  'Glaurung',
  'Griaule',
  'Icefyre',
  'Norbert',
  'Pern Dragon',
  'Prothero',
  'Romanian Longhorn',
  'Saphira',
  'Scatha',
  'Smaug',
  'Tintaglia',
  'Balerion',
  'Meraxes',
  'Vhagar',
  'Silverwing',
  'Vermithrax',
  'Ghiscar',
  'Valrion',
  'Esovius',
  'Archonae',
  'Drogon',
  'Rhaegal',
  'Viserion',
], i, randomLevel = function() {
  return Math.floor(Math.random() * 100) + 1;
}, randomWarrior = function() {
  return codeMaintenance.warriors[Math.floor(Math.random() * codeMaintenance.warriors.length)];
};


for (i = 0; i < warriorNames.length; i++) {
  codeMaintenance.addWarrior(warriorNames[i], randomLevel());
}

for (i = 0; i < dragonNames.length; i++) {
  codeMaintenance.addDragon(randomWarrior(), dragonNames[i], randomLevel());
}

codeMaintenance.addExpectator('Patola');

codeMaintenance.fight(50);
