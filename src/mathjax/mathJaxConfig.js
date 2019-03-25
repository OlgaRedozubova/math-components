"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TODO: use AMS numbering once the package will be available
var MathJaxConfig = {
    TeX: {
        packages: ['base', 'ams', 'noundefined', 'boldsymbol', 'newcommand', 'amscd', 'action', 'bbox', 'cancel', 'enclose', 'extpfeil', 'html', 'braket', 'physics', 'unicode', 'verb', 'mhchem'],
        TagSide: "right",
        TagIndent: "0.8em",
        MultLineWidth: "85%",
        useLabelIds: true,
        tags: "none",
        inlineMath: [
            // start/end delimiter pairs for in-line math
            ["$", "$"],
            ["\\(", "\\)"]
        ],
        displayMath: [
            // start/end delimiter pairs for display math
            ["$$", "$$"],
            ["\\[", "\\]"]
        ],
        processEscapes: true,
        processEnvironments: true,
        processRefs: true,
    },
    MathML: {
        parseAs: "html",
        forceReparse: false // Force the MathML to be reparsed?
        //   (e.g., for XML parsing in an HTML document)
    },
    HTML: {
        scale: 1,
        mathmlSpacing: false,
        exFactor: 0.5 // default size of ex in em units when ex size can't be determined
    },
    SVG: {
        scale: 1,
        mathmlSpacing: false,
        exFactor: 0.5 // default size of ex in em units when ex size can't be determined
    }
};
exports.default = MathJaxConfig;
//# sourceMappingURL=mathJaxConfig.js.map