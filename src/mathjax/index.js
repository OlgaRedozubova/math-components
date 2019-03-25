//import {MathJax} from 'mathjax3/mathjax3/mathjax.js';

import {TeX} from 'mathjax3/mathjax3/input/tex.js';
import {SVG} from 'mathjax3/mathjax3/output/svg.js';
import {HTMLMathItem} from 'mathjax3/mathjax3/handlers/html/HTMLMathItem.js';
import {HTMLDocument} from 'mathjax3/mathjax3/handlers/html/HTMLDocument.js';
//import {browserAdaptor} from 'mathjax3/mathjax3/adaptors/browserAdaptor.js';
import {RegisterHTMLHandler} from 'mathjax3/mathjax3/handlers/html.js';
import {chooseAdaptor} from 'mathjax3/mathjax3/adaptors/chooseAdaptor.js';
const adaptor = chooseAdaptor();
RegisterHTMLHandler(adaptor);

//-require("./my-BaseMappings.js");

//-import {BaseConfiguration} from 'mathjax3/mathjax3/input/tex/base/BaseConfiguration.js';
//-BaseConfiguration.handler.macro.push('wasysym-mathchar0mo');
//wasysym-macros
//-BaseConfiguration.handler.macro.push('wasysym-macros');
//import {AllPackages} from './AllPackages.js';

import MathJaxConfig from "./mathJaxConfig";

// const texConfig = Object.assign({
//   packages: AllPackages
// }, MathJaxConfig.TeX || {});

const svgConfig = Object.assign({}, MathJaxConfig.HTML || {});

// const tex = new TeX(texConfig);
// const svg = new SVG(svgConfig);
const tex = new TeX();
const svg = new SVG();

const doc = new HTMLDocument(document, {
  InputJax: tex,
  OutputJax: svg});
// let doc = MathJax.document('<html></html>', {
//   InputJax: tex,
//   OutputJax: svg
// });

export const MathJax = {
  //
  //  Return the stylesheet DOM node
  //
  Stylesheet: function () {
    return svg.styleSheet(doc);
  },

  //
  //  Typeset a MathML expression and return the SVG tree for it
  //
  Typeset: function(string, display, em = 16, ex = 8, cwidth = 80*16) {
    let math = new HTMLMathItem(string, tex, display);
    //configuration.handler.macro
    math.setMetrics(em, ex, cwidth, 100000, 1);
    math.compile(doc);
    math.typeset(doc);
    return math.typesetRoot;
  },

  //
  //  Reset tags and labels
  //
  Reset: function (n) {
    if (n) {n--} else {n = 0}
    tex.parseOptions.tags.reset(n);
  }
};