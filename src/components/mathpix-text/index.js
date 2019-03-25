"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var markdown_1 = require("../../markdown");
var MathpixText = /** @class */ (function (_super) {
    tslib_1.__extends(MathpixText, _super);
    function MathpixText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.convertToHTML = function (content) {
            var html = markdown_1.markdownToHTML(content);
            return html;
        };
        return _this;
    }
    MathpixText.prototype.render = function () {
        return (React.createElement("div", { id: "preview-content", dangerouslySetInnerHTML: { __html: this.convertToHTML(this.props.text) } }));
    };
    return MathpixText;
}(React.Component));
exports.default = MathpixText;
//# sourceMappingURL=index.js.map