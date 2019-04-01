"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mathjax_1 = require("../../mathjax");
var styles_1 = require("./styles");
var MathpixLoader = /** @class */ (function (_super) {
    tslib_1.__extends(MathpixLoader, _super);
    function MathpixLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** the state of the component */
        _this.state = {
            isMathJaxLoaded: false,
            isReadyToTypeSet: false
        };
        return _this;
    }
    /** load math jax and wait for it completion */
    MathpixLoader.prototype.loadMathJax = function () {
        // load the script tag
        // @ts-ignore
        try {
            var el = document.getElementById('SVG-styles');
            if (!el) {
                document.head.appendChild(mathjax_1.MathJax.Stylesheet());
            }
            var elStyle = document.getElementById('Mathpix-styles');
            if (!elStyle) {
                var style = document.createElement("style");
                style.setAttribute("id", "Mathpix-styles");
                style.innerHTML = styles_1.MathpixStyle;
                document.head.appendChild(style);
            }
            this.setState({ isReadyToTypeSet: true });
        }
        catch (e) {
            console.log('Error load MathJax =>', e.message);
        }
    };
    MathpixLoader.prototype.componentDidMount = function () {
        this.loadMathJax();
    };
    MathpixLoader.prototype.render = function () {
        if (this.state.isReadyToTypeSet) {
            return React.createElement("div", { id: "content" }, this.props.children);
        }
        return React.createElement("div", null, "Loading");
    };
    return MathpixLoader;
}(React.Component));
exports.default = MathpixLoader;
//# sourceMappingURL=index.js.map