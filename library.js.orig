(function(module) {
    "use strict";

    var Vine = {},
        embed = '<iframe class="vine-embed" src="https://vine.co/v/$1/embed/postcard?related=0" width="480" height="480" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>';
    var link = /<a href="(?:https?:\/\/)?(?:vine\.co)\/v\/?(.+)">.+<\/a>/g;

    Vine.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(link)) {
            data.postData.content = data.postData.content.replace(link, embed);
        }
        callback(null, data);

<<<<<<< HEAD
    var embedUrl = /<a href="(?:https?:\/\/)?(?:vine\.co)\/v\/?(.+)">.+<\/a>/g;
    Vine.parse = function(data, callback) {
	    if (!data || !data.postData || !data.postData.content) {
          return callback(null, data);
        }
        if (data.postData.content.match(embedUrl)) {
          data.postData.content = data.postData.content.replace(embedUrl, embed);
        }
        callback(null, data);
=======
>>>>>>> upstream/master
    };

    module.exports = Vine;
}(module));
