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
        "de" : [
            {
                "title" : 'Clansuche closed',
                "text" : '[b]Communtiy[/b]\n(Das Forum rund um die Community, Rekruten suchen & finden und kreative Posts)\nhttp://battlelog.battlefield.com/bf4/de/forum/view/2955065218175153843/\n\n[b]Beachte folgenden Thread:[/b]\n[i]Richtlinien für Clansuche / Clanangebote[/i]\nhttp://battlelog.battlefield.com/bf4/de/forum/threadview/2955064768540810904/\n\n[b]Thread geschlossen. [/b]'
            },
            {
                "title" : "Name & Shame closed",
                "text" : '[b]Richtlinien für Beiträge[/b]\nDer Sinn in den Foren ist es, eine produktive, hilfreiche und einladende Atmosphäre zu schaffen, in der Spieler diskutieren, Hilfe suchen und Rückmeldungen zu Battlefield posten können. Beiträge, die nicht diesen Richtlinien entsprechen, unterliegen dem Ermessen der Forenmoderatoren und können entfernt werden. Nutzer, die wiederholt gegen Regeln verstoßen oder durch ein negatives Verhalten auffallen, können durch Disziplinare Maßnahmen (Bann) bestraft werden.\n\n[b]Name & Shame[/b]\nDas Benennen oder Andeuten von Nutzern, von denen du glaubst, dass sie cheaten ist im Battlelog nicht erlaubt.\nEs ist weder produktiv, noch beschleunigt es die Sanktionen, die gegen solche Spieler erhoben werden.\nJegliche Andeutungen oder Bemerkungen dieser Art werden entfernt.\nMelde einen Spieler direkt über das Dreieck in seinem Battlelog Profil, damit wir das korrekt überprüfen können.\n\n[b]Thread geschlossen.[/b]'
            },
            {
                "title" : "Suchfunktion",
                "text" : '[b]Richtlinien für Beiträge[/b]\nDer Sinn in den Foren ist es, eine produktive, hilfreiche und einladende Atmosphäre zu schaffen, in der Spieler diskutieren, Hilfe suchen und Rückmeldungen zu Battlefield posten können. Beiträge, die nicht diesen Richtlinien entsprechen, unterliegen dem Ermessen der Forenmoderatoren und können entfernt werden. Nutzer, die wiederholt gegen Regeln verstoßen oder durch ein negatives Verhalten auffallen, können durch Disziplinare Maßnahmen (Bann) bestraft werden.\n\n[b]Nutze die Suchfunktion[/b]\nDoppelte oder mehrfach vorhandene Themen oder Posts werden entfernt, um die Effektivität der Foren zu erhalten. Wiederholtes Posting eines bereits vorhandenen Themas oder Posts kann zu einem temporären Bann führen.\n\n[b]Thread geschlossen.[/b]'
            },
            {
                "title" : "Richtlinien closed",
                "text" : '[b]Richtlinien für Beiträge[/b]\nDer Sinn in den Foren ist es, eine produktive, hilfreiche und einladende Atmosphäre zu schaffen, in der Spieler diskutieren, Hilfe suchen und Rückmeldungen zu Battlefield posten können. Beiträge, die nicht diesen Richtlinien entsprechen, unterliegen dem Ermessen der Forenmoderatoren und können entfernt werden. Nutzer, die wiederholt gegen Regeln verstoßen oder durch ein negatives Verhalten auffallen, können durch Disziplinare Maßnahmen (Bann) bestraft werden.\n\n[b]Thread geschlossen.[/b]'
            }
        ],
        "en" : [

        ]
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
                    for(var i in texts){
                        html.append($('<div class="entry">'+texts[i].title+'</div>').data("text", texts[i]).on("click", function(){
                            t.trigger("focus");
                            var v = t.val();
                            v = v + $(this).data("text").text;
                            t.val(v);
                            BBLog.closeAllPopups();
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