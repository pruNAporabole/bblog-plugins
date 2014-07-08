/**
* Battlelog Mods - A Plugin that give some love to battlelog mods :)
*
* @author BrainFooLong
* @version 1.0
* @url http://getbblog.com
*/

BBLog.handle("add.plugin", {

    /**
    * The unique, lowercase id of my plugin
    * Allowed chars: 0-9, a-z, -
    */
    id : "battlelog-mods",

    /**
    * The name of my plugin, used to show config values in bblog options
    * Could also be translated with the translation key "plugin.name" (optional)
    *
    * @type String
    */
    name : "Battlelog Mods",

    /**
    * All text templates go in here
    *
    * @type Object
    */
    textTemplates : {
        "de" : {
            "clan" : {
                "title" : "Clansuche",
                "text-self" : "Hierzu gibt es bereits ein Unterforum wo solches hingehört:\n\n[b]Communtiy[/b]\n(Das Forum rund um die Community, Rekruten suchen & finden und kreative Posts)\nhttp://battlelog.battlefield.com/bf4/de/forum/view/2955065218175153843/\n\n[b]Beachte folgenden Thread:[/b]\n[i]Richtlinien für Clansuche / Clanangebote[/i]\nhttp://battlelog.battlefield.com/bf4/de/forum/threadview/2955064768540810904/",
                "text-use" : "{clan}\n\n\n{closed}"
            },
            "nameshame" : {
                "title" : "Name & Shame",
                "text-self" : "[b]Name & Shame[/b]\nDas Benennen oder Andeuten von Nutzern, von denen du glaubst, dass sie cheaten ist im Battlelog nicht erlaubt.\nEs ist weder produktiv, noch beschleunigt es die Sanktionen, die gegen solche Spieler erhoben werden.\nJegliche Andeutungen oder Bemerkungen dieser Art werden entfernt.\nMelde einen Spieler direkt über das Dreieck in seinem Battlelog Profil, damit wir das korrekt überprüfen können.",
                "text-use" : "{guidelines}\n\n{nameshame}\n\n\n{closed}"
            },
            "search" : {
                "title" : "Suchfunktion",
                "text-self" : "[b]Nutze die Suchfunktion[/b]\nDoppelte oder mehrfach vorhandene Themen oder Posts werden entfernt, um die Effektivität der Foren zu erhalten. Wiederholtes Posting eines bereits vorhandenen Themas oder Posts kann zu einem temporären Bann führen.",
                "text-use" : "{guidelines}\n\n{search}\n\n\n{closed}"
            },
            "guidelines" : {
                "title" : "Richtlinien für Beiträge",
                "text-self" : "[b]Richtlinien für Beiträge[/b]\nDer Sinn in den Foren ist es, eine produktive, hilfreiche und einladende Atmosphäre zu schaffen, in der Spieler diskutieren, Hilfe suchen und Rückmeldungen zu Battlefield posten können. Beiträge, die nicht diesen Richtlinien entsprechen, unterliegen dem Ermessen der Forenmoderatoren und können entfernt werden. Nutzer, die wiederholt gegen Regeln verstoßen oder durch ein negatives Verhalten auffallen, können durch Disziplinare Maßnahmen (Bann) bestraft werden.",
                "text-use" : "{guidelines}\n\n\n{closed}"
            },
            "closed" : {
                "title" : "Thread geschlossen",
                "text-self" : "[b]Thread geschlossen.[/b]",
                "text-use" : "{closed}"
            }
        },
        "en" : {
            "clan" : {
                "title" : "Recruitment",
                "text-self" : "Please be sure to post in the correct forums of your platform to recruite:\n[url=http://battlelog.battlefield.com/bf4/en/forum/view/2955065226116511147/]Recruitment for PC[/url]\n[url=http://battlelog.battlefield.com/bf4/en/forum/view/2979150493868734973/]Recruitment for PS3 & PS4[/url]\n[url=http://battlelog.battlefield.com/bf4/en/forum/view/2955064775252487694/]Recruitment for X360 & XONE[/url]\n\nAlso, don't forget to check the guide to the Platoons Forum for more informations:\nhttp://battlelog.battlefield.com/bf4/en/forum/threadview/2955064775253899297/",
                "text-use" : "{clan}\n\n\n{closed}"
            },
            "nameshame" : {
                "title" : "Name & Shame",
                "text-self" : "[b]Naming and Shaming[/b]\nNaming and shaming those who you believe to be cheating is not permitted on the forum or Battlelog posts. It is not productive and does not expedite action taken against these players. Any references of this type will be removed. Instead, Report players directly for investigation.",
                "text-use" : "{guidelines}\n\n{nameshame}\n\n\n{closed}"
            },
            "search" : {
                "title" : "Search Engine",
                "text-self" : "[b]Use the search feature[/b]\nDuplicate content will be removed to promote the usefulness of this forum. Repeat reposting will result in a temporary ban.",
                "text-use" : "{guidelines}\n\n{search}\n\n\n{closed}"
            },
            "guidelines" : {
                "title" : "Guidelines",
                "text-self" : "[b]Post Guidelines[/b]\nThe purpose of these forums is to create a productive and inviting space in which players can discuss, seek help, and give feedback on Battlefield. Posts that do not contribute to this end are subject to removal per the judgment of forum staff. Users that regularly violate rules or who are disruptive are subject to disciplinary action (bans) per the judgment of forum staff.",
                "text-use" : "{guidelines}\n\n\n{closed}"
            },
            "closed" : {
                "title" : "Thread locked",
                "text-self" : "[b]Thread locked.[/b]",
                "text-use" : "{closed}"
            }
        }
    },

    /**
    * Some translations for this plugins
    * For every config flag must exist a corresponding EN translation
    *   otherwise the plugin will no be loaded
    *
    * @type Object
    */
    translations : {
    },

    /**
    * Config flags, added to the BBLog Options Container
    * Config flags are served as integer, 1 or 0
    * Every flag must be a array with following keys,
    *   first key[0]: is the config flag name
    *   second key[1]: is the default value that is initially setted, when the plugin is loading the first time, 1 or 0
    *   third key[2]: (optional) must be a function, this turns the config entry into a
    *     button and the handler will be executed when the user click on it (like plugins, themes, radar, etc..)
    */
    configFlags : [],

    /**
    * A handler that be fired immediately (only once) after the plugin is loaded into bblog
    *
    * @param object instance The instance of your plugin which is the whole plugin object
    *    Always use "instance" to access any plugin related function, not use "this" because it's not working properly
    *    For example: If you add a new function to your addon, always pass the "instance" object
    */
    init : function(instance){
        $("head").append('<style type="text/css">#popup-bmods .entry{cursor:pointer; padding:3px;} #popup-bmods .entry:hover{text-decoration:underline}</style>')
    },

    /**
    * A trigger that fires everytime when the dom is changing but at max only once each 200ms (5x per second) to prevent too much calls in a short time
    * Example Case: If 10 DOM changes happen in a period of 100ms than this function will only been called 200ms after the last of this 10 DOM changes
    * This make sure that all actions in battlelog been finished before this function been called
    * This is how BBLog track Battlelog for any change, like url, content or anything
    *
    * @param object instance The instance of your plugin which is the whole plugin object
    *    Always use "instance" to access any plugin related function, not use "this" because it's not working properly
    *    For example: If you add a new function to your addon, always pass the "instance" object
    */
    domchange : function(instance){
        // post templates
        var t = $("textarea.common-replyform-form-body, textarea#forum-newthread-body");
        if(!$("#bmods-btns").length){
            t.before('<div class="base-clear"></div><div style="margin-top:5px; margin-bottom:2px; text-align:right;" id="bmods-btns"></div><div class="base-clear"></div>');
            $("#bmods-btns").append($('<input class="btn btn-small" value="Text Templates" type="button">').on("click", function(){
                var html = $('<div>');
                html.append('<div style="font-size:10px; text-align:right;">Plugin powered by <a href="http://getbblog.com" target="_blank">getbblog.com</a></div><br/>');
                if(typeof instance.textTemplates[BBLog.cache("language")] != "undefiend"){
                    var texts = instance.textTemplates[BBLog.cache("language")];
                    for(var id in texts){
                        html.append($('<div class="entry">'+texts[id].title+'</div>').data("data", texts[id]).on("click", function(){
                            t.trigger("focus");
                            var data = $(this).data("data");
                            var v = $.trim(t.val());
                            if(v.length) v += "\n\n";
                            var text = data["text-use"];
                            for(var subId in texts){
                                text = text.replace(new RegExp("{"+subId+"}", "ig"), texts[subId]["text-self"]);
                            }
                            t.val(v);
                            BBLog.closeAllPopups();
                            $("input[name='officialPost']").prop("checked", true);
                        }));
                    }
                }
                BBLog.popup('bmods', 'Text Templates', html);
            }));
        }
        // new links to user profile dropdown
        var e = $("section#user .profile-info .common-reportbutton-dropdown ul, #profile-header .username ul");
        if(e.length && !$("#bmods-userposts-link").length){
            var id = $("#user").attr("data-user-id");
            if(!id) id = $("#profile-secondary-column a.avatar").attr("rel");
            e.append('<li><a id="bmods-userposts-link" class="base-no-ajax" target="_blank" href="/'+BBLog.cache("mode")+'/'+BBLog.cache("battlelog.language")+'forum/userPosts/'+id+'/">User Posts</a></li>');
        }
    }
});