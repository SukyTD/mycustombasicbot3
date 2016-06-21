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

        bot.getLocked = function() {
            if($(".wait-list.option.enabled").length > 0) return true;
            else return false;
        }         

        bot.commands.fbgCommand = {
            command: 'fbg',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Join Our Facebook Group: http://on.fb.me/1dRgupy");
                }
            }
        };
        
        bot.commands.autofapCommand = {
            command: 'autofap',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://i.imgur.com/YBlC5cW.gif");
                }
            }
        };
        
        bot.commands.bbcCommand = {
            command: 'bbc',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("http://vrf.wpengine.netdna-cdn.com/wp-content/uploads/2014/07/cemani-chickens-01.jpg");
                }
            }
        };
        
        bot.commands.clearqueueCommand = {
            command: 'clearqueue',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'manager', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var locked = bot.getLocked();
                    if(locked) {
                        $.ajax({
                        type: 'PUT', 
                        url: 'https://plug.dj/_/booth/lock', 
                        contentType: 'application/json',
                        data: JSON.stringify({
                            isLocked: false,
                            removeAllDJs: false })
                        });
                    }   
                    $.ajax({
                    type: 'PUT', 
                    url: 'https://plug.dj/_/booth/lock', 
                    contentType: 'application/json',
                    data: JSON.stringify({
                        isLocked: true,
                        removeAllDJs: true })
                    });
                    if(!locked) {
                        $.ajax({
                        type: 'PUT', 
                        url: 'https://plug.dj/_/booth/lock', 
                        contentType: 'application/json',
                        data: JSON.stringify({
                            isLocked: false,
                            removeAllDJs: false })
                        });
                    }
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
        
        bot.commands.nationytCommand = {
            command: 'nationyt',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Subscribe to The Nation: http://bit.ly/TheNationYt");
                }
            }
        };
        
        bot.commands.nationfbCommand = {
            command: 'nationfb',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Like The Nation on facebook: http://bit.ly/TheNationFb");
                }
            }
        };
        
        bot.commands.badgeCommand = {
            command: 'badge',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Have RCS? Want to stand out from the rest? Submit your very own plug.dj badge here: http://bit.ly/CustomBadge to be applied to the room.");
                }
            }
        };
        
        bot.commands.submissionsCommand = {
            command: 'submissions',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Submit your music here: http://www.alltrapnation.com/trap-submission/");
                }
            }
        };
        
        bot.commands.ChillnationCommand = {
            command: 'chillnation',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Subscribe to Chill Nation: https://www.youtube.com/user/ChillStepNation");
                }
            }
        };
        /*
        englishCommand: {
                command: 'english',
                rank: 'bouncer',
                type: 'startsWith',
                functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                        if(chat.message.length === cmd.length) return API.sendChat('/me No user specified.');
                        var name = chat.message.substring(cmd.length + 2);
                        var user = basicBot.userUtilities.lookupUserName(name);
                        if(typeof user === 'boolean') return API.sendChat('/me Invalid user specified.');
                        var lang = basicBot.userUtilities.getUser(user).language;
                        var ch = '/me @' + name + ' ';
                        switch(lang){
                            case 'en': break;
                            case 'da': ch += 'Vær venlig at tale engelsk.'; break;
                            case 'de': ch += 'Bitte sprechen Sie Englisch.'; break;
                            case 'es': ch += 'Por favor, hable Inglés.'; break;
                            case 'fr': ch += 'Parlez anglais, s\'il vous plaît.'; break;
                            case 'nl': ch += 'Spreek Engels, alstublieft.'; break;
                            case 'pl': ch += 'Proszę mówić po angielsku.'; break;
                            case 'pt': ch += 'Por favor, fale Inglês.'; break;
                            case 'sk': ch += 'Hovorte po anglicky, prosím.'; break;
                            case 'cs': ch += 'Mluvte prosím anglicky.'; break;
                            case 'sr': ch += 'Молим Вас, говорите енглески.'; break;
                        }
                        ch += ' English please.';
                        API.sendChat(ch);
                    }
                }
            },
        */
        bot.commands.changelog = {
            command: 'changelog',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'bouncer', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("Change Log: *Fixed the !changelog command");
                }
            }
        };
        
        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Rave Bot",
        language: "english",
        chatLink: "https://rawgit.com/SukyTD/basicBot/master/lang/en.json",
        maximumAfk: 70,
        afkRemoval: false,
        maximumDc: 20,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 5,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 7,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: 3,
        skipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list: http://bit.ly/1zQ3biY. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "],
            ["na", "The song you played was not available for some users. "],
            ["troll", "The song you played is considered trolling if you play it again you will be banned. "],
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 10,
        motd: "Mehs to skip: 9",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: "http://bit.ly/1zQ3biY",
        rulesLink: "http://bit.ly/1A5GcR9",
        themeLink: "We allow These genres: Trap, House, Chill, Electro, Rap, and Bass music.",
        fbLink: "http://facebook.com/alltrapnation",
        youtubeLink: "https://www.youtube.com/user/AllTrapNation",
        website: "http://alltrapnation.com/",
        intervalMessages: "Like us on Facebook: http://facebook.com/alltrapnation",
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/SukyTD/custom/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/SukyTD/custom/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/SukyTD/custom/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/SukyTD/basicBot/master/basicBot.js', extend);

}).call(this);
