"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mdPluginConfigured_1 = require("./mdPluginConfigured");
var rules_1 = require("./rules");
/** md renderer */
var md = require("markdown-it")({
    html: true,
    xhtmlOut: false,
    breaks: true,
    langPrefix: "language-",
    linkify: true,
    typographer: true,
    quotes: "“”‘’"
})
    .use(mdPluginConfigured_1.ConfiguredMathJaxPlugin({}))
    .use(require("markdown-it-footnote"))
    .use(require("markdown-it-sub"))
    .use(require("markdown-it-sup"))
    .use(require("markdown-it-deflist"))
    .use(require("markdown-it-mark"))
    .use(require("markdown-it-emoji"))
    .use(require("markdown-it-ins"));
// inject rules override
md = rules_1.withLineNumbers(md);
/** String transformtion pipeline */
// @ts-ignore
exports.markdownToHtmlPipeline = function (content) {
    //md.render(content);
    return md.render(content);
};
/**
 * convert a markdown text to html
 */
function markdownToHTML(markdown) {
    var html = exports.markdownToHtmlPipeline(markdown);
    return html;
}
exports.markdownToHTML = markdownToHTML;
//# sourceMappingURL=index.js.map