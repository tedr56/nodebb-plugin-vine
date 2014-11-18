(function(module) {
    "use strict";

    var Vine = {},
        embed = '<iframe class="vine-embed" src="https://vine.co/v/$1/embed/postcard?related=0" width="480" height="480" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>'

    Vine.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:vine\.co)\/v\/?(.+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = Vine;
}(module));
