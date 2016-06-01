(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

         

       
        bot.commands.fbgCommand = {
            command: 'fbg',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Join Our Facebook Group: http://bit.ly/1UhwuOO");
                }
            }
        };

        bot.commands.rcsCommand = {
            command: 'rcs',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me We use the RCS plugin in this room. Get it here: https://rcs.radiant.dj/");
                }
            }
        };
  /*      
        bot.commands.changelog = {
            command: 'changelog',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'bouncer', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Change Log: https://goo.gl/V9pC3K");
                }
            }
        };*/
        
        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Java Bot",
        language: "english",
        chatLink: "https://rawgit.com/aalinnfs/basicBot/master/lang/en.json",
        maximumAfk: 60,
        afkRemoval: false,
        maximumDc: 120,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 7,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 2,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "],
            ["na", "The song you played was not available for some users. "],
            ["troll", "The song you played is considered trolling if you play it again you will be banned"]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 10,
        motd: null,
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: "http://bit.ly/1sq5M0r",
        rulesLink: null,
        themeLink: "We allow These genres: Trap, House, Chill, Electro, Rap, and Bass music.",
        fbLink: "http://facebook.com/trapdacicc & https://www.facebook.com/ravenueofficial",
        youtubeLink: "https://www.youtube.com/c/trapdacic & https://www.youtube.com/channel/UCv0Jd36ByQYSnqVleBINATA",
        website: "http://alltrapdacic.com/",
        intervalMessages: null,
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/cooljddj/mycustombasicbot/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/cooljddj/mycustombasicbot/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
   // $.getScript('https://rawgit.com/cooljddj/mybasicbot/master/basicBot.js', extend);

}).call(this);
