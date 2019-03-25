import { ConfiguredMathJaxPlugin } from "./mdPluginConfigured";
import { withLineNumbers } from "./rules";

/** md renderer */
let md = require("markdown-it")({
  html: true,
  xhtmlOut: false,
  breaks: true,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  quotes: "“”‘’"
})
  .use(ConfiguredMathJaxPlugin({}))
  .use(require("markdown-it-footnote"))
  .use(require("markdown-it-sub"))
  .use(require("markdown-it-sup"))
  .use(require("markdown-it-deflist"))
  .use(require("markdown-it-mark"))
  .use(require("markdown-it-emoji"))
  .use(require("markdown-it-ins"));

// inject rules override
md = withLineNumbers(md);

/** String transformtion pipeline */
// @ts-ignore
export const markdownToHtmlPipeline = (content: string) => {
  //md.render(content);
  return md.render(content);
};

/**
 * convert a markdown text to html
 */
export function markdownToHTML(markdown: string): string {
  const html = markdownToHtmlPipeline(markdown);
  return html;
}
