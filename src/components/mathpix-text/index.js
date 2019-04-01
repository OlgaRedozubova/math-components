"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var markdown_1 = require("../../markdown");
var checkFormula = function (mathString, showTimeLog) {
    var startTime = new Date().getTime();
    var res_mathString = "";
    var idx = 0;
    while (idx < mathString.length) {
        var startMathPos = idx;
        var endMarker = // eslint-disable-line
         void 0; // eslint-disable-line
        if (mathString.charCodeAt(startMathPos) === 0x24 /* $ */) {
            endMarker = "$";
            if (mathString.charCodeAt(++startMathPos) === 0x24 /* $ */) {
                endMarker = "$$";
            }
        }
        else {
            if (mathString.charCodeAt(startMathPos) !== 0x5c /* \ */) {
                res_mathString = res_mathString + mathString[idx];
                idx++;
                continue;
            }
            var match = mathString
                .slice(++startMathPos)
                .match(/^(?:\\\[|\[|\\\(|\(|$|$$|begin\{([^}]*)\}|eqref\{([^}]*)\})/); // eslint-disable-line
            if (!match) {
                res_mathString = res_mathString + mathString[idx];
                idx++;
                continue;
            }
            startMathPos += match[0].length;
            if (match[0] === "\\[") {
                endMarker = "\\\\]";
            }
            else if (match[0] === "\[") {
                endMarker = "\\]";
            }
            else if (match[0] === "\\(") {
                endMarker = "\\\\)";
            }
            else if (match[0] === "\(") {
                endMarker = "\\)";
            }
            else if (match[0].includes("eqref")) {
                endMarker = "";
            }
            else if (match[1]) {
                endMarker = "\\end{" + match[1] + "}";
            }
        }
        var endMarkerPos = mathString.indexOf(endMarker, startMathPos);
        if (endMarkerPos === -1) {
            res_mathString = res_mathString + mathString.substr(idx, mathString.length);
            break;
        }
        var ln = mathString.indexOf(endMarker, startMathPos) + endMarker.length;
        var str2 = mathString.substr(idx, ln - idx).split("\n").join("");
        res_mathString = res_mathString + str2;
        var nextPos = endMarkerPos + endMarker.length;
        idx = nextPos;
    }
    var endTime = new Date().getTime();
    if (showTimeLog) {
        console.log("=> checkFormula: " + (endTime - startTime) + "ms");
    }
    return res_mathString;
};
var MathpixText = /** @class */ (function (_super) {
    tslib_1.__extends(MathpixText, _super);
    function MathpixText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.convertToHTML = function (str, isCheckFormula, showTimeLog) {
            var startTime = new Date().getTime();
            var mathString = isCheckFormula ? checkFormula(str, showTimeLog) : str;
            var html = markdown_1.markdownToHTML(mathString);
            var endTime = new Date().getTime();
            if (showTimeLog) {
                console.log("===> setText: " + (endTime - startTime) + "ms");
            }
            return html;
        };
        return _this;
    }
    MathpixText.prototype.render = function () {
        var _a = this.props, text = _a.text, _b = _a.alignMathBlock, alignMathBlock = _b === void 0 ? 'center' : _b, _c = _a.display, display = _c === void 0 ? 'block' : _c, _d = _a.isCheckFormula, isCheckFormula = _d === void 0 ? false : _d, _e = _a.showTimeLog, showTimeLog = _e === void 0 ? false : _e;
        return (React.createElement("div", { id: 'preview', style: { justifyContent: alignMathBlock, padding: '10px', overflowY: 'auto', willChange: 'transform' } },
            React.createElement("div", { id: 'setText', style: { display: display, justifyContent: 'inherit' }, dangerouslySetInnerHTML: { __html: this.convertToHTML(text, isCheckFormula, showTimeLog) } })));
    };
    return MathpixText;
}(React.Component));
exports.default = MathpixText;
//# sourceMappingURL=index.js.map