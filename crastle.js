const readline = require('readline');

let inventory = []
let keys = []
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



//list that moves you through places
let location = {
    drawbridge: () => {
        rl.question("In front of you stands a mighty castle, dare I say action castle. Below you is a moat filled with lava, sharks, bears, crocodiles, and active machine guns. Will you go to the entrance or the moat?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    moat: () => {
        console.log("Why would you- just why... It's a lava filled moat with BEARS, SHARKS, CROCODILES AND FUCKING MACHINE GUNS")
        rl.question('Will you go to the entrance or the drawbridge? ' + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);

        });
    },

    entrance: () => {
        console.log('This is the entrance. There are many knights and peasants here. There is a grand hallway with many tapestries.')
        rl.question('Will you go to the drawbridge or hallway? ' + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);

        });
    },

    hallway: () => {
        console.log('You are in a hallway filled with beautiful paintings. There is a dining room and a kitchen to the left of the hallway, and a barracks, an armory and a stairwell to your right.')
        rl.question("Will you go to the Kitchen, the dining room, the stairwell, the barracks or the armory?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    kitchen: () => {
        console.log('You are in a kitchen with many chefs whiping and whirling around cooking all sorts of wonders. There seems to be some sort of green house out the back. The head chef begins to yell at you in some french sounding tounge.')
        rl.question("Will you exit the kitchen, or look around more?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    diningroom: () => {
        console.log('You are in a dining room filled with drunk soldiers and nobles eating and drinking their worries away. It smelles bad.')
        rl.question("Would you like to go back to the hallway, or do something else?" + " \r\n", function(answer) {
            answer = answer.toLowerCase();
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    stairwell: () => {
        console.log('You are in a dark stairwell. The bricks are cracked, and as you look down the seemingly endless stairs, there seems to be screams echoing up. Or is that just your imagination...')
        rl.question("Will you go down the stairs, or back into the hallway?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    dungeon: () => {
        console.log('You enter the dungeon, adrenaline coarsing through your veins. The door creaks open and you see YC standing there with a whip. He says "Do you want to join my game design and development club?" ')
        rl.question("Its too late. You are now his artist." + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    barracks: () => {
        console.log("You are in a soldier's barracks. There are soldiers playing cards and sleeping. A few give you a weird look, end up going back to what they were doing. ")
        rl.question("Will you go back to the hallway, or do something else?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    armory: () => {
        console.log("This is the armory. There are many swords, crossbows, and... machine guns? Whatever.")
        rl.question("Will you go back to the hallway, or do something else?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    throneroom: () => {
        console.log('You are in a Throne Room. On the throne sits a scepter of the king. The king seems to have left for now.') //on inspect talk about treasure
        rl.question("Will you go back to the hallway or do something else?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    treasureroom: () => {
        console.log('The treasure room is filled with gold and other valuables. For some reason, it smells like a bathroom')
        rl.question("Go to throneRoom or bathroom" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    bathroom: () => {
        rl.question("bathroom" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            subject = "bathroom";
            commands[verb](subject);
        });

    }

}






//for inspecting rooms in order to find items and place them in your inventory; incomplete
let inspection = {
    moat: () => {
        console.log('Lava. Bears. Sharks. Crocodiles. Machine guns.')
        rl.question("Would you like to go to the entrance or the drawbridge?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    drawbridge: () => {
        console.log('Just a normal drawbridge. Nothing out of the ordinary. You can see the lava through the cracks of the wood.')
        rl.question("Would you like to go to the entrance or the moat?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    entrance: () => {
        console.log('People are chatting and having a general good time. There is one guy drunk as a dog though.')
        rl.question("Would you like to go to the hallway or the drawbridge?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    hallway: () => {
        console.log('Paintings and rugs line the walls beautifully. There is one painting that seems a little out of place though. A small depiction of a moutain, which seems to have a lock embedded into the mountain')
        rl.question("Would you like to go to the entrance or the moat? or do something else..." + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    painting: () => {
        console.log('As you inspect the painting, you find that it can swing slightly open, with a small niche behind. You reach in and find your hand on a cool metal surface. You grab it, and pull out a key.')
        keys.push('painting');
        rl.question("Would you like to go to the entrance or the moat?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    kitchen: () => {
        console.log('The chef coninues to yell at you in french. Merde... ')
        rl.question("Would you like to go to the entrance or the moat?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    diningroom: () => {
        console.log('Lots of beer and meat. Cheers and bellows echo around the atrium.')
        rl.question("Would you like to go to the entrance or the moat?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },

    stairwell: () => {
        console.log('')
        keys.push('painting');
        rl.question("Would you like to go to the entrance or the moat?" + " \r\n", function(answer) {
            answer = answer.toLowerCase()
            let verb = answer.split(' ')[0];
            let subject = answer.split(' ')[1];
            commands[verb](subject);
        });
    },


}

let commands = {
    go: (subject) => {
        if (subject == "bathroom") {

            location.bathroom();
        } else {
            location[subject]();
        }
    },

    inspect: (subject => {
      if (inspection[subject]() == null) {

        inspection[subject]();
      } else {
        console.log("Nothing to see here.")
      }
    })
};






console.log("Welcome to Action Castle!\r\nRULES: type 'go <place>' to go to that place and 'inspect <place>' to inspect it. Have fun!");
location.drawbridge();