import * as React from "react";
import {MathJax} from '../../mathjax';
import {MathpixStyle} from './styles';

class MathpixLoader extends React.Component {
    /** the state of the component */
    state = {
        isMathJaxLoaded: false,
        isReadyToTypeSet: false
    };
    /** load math jax and wait for it completion */
    private loadMathJax() {
        // load the script tag
        // @ts-ignore
        try {
            const el = document.getElementById('SVG-styles');
            if (!el) {
                document.head.appendChild(MathJax.Stylesheet());
            }

            const elStyle = document.getElementById('Mathpix-styles');
            if (!elStyle) {
                const style = document.createElement("style");
                style.setAttribute("id", "Mathpix-styles");
                style.innerHTML = MathpixStyle;
                document.head.appendChild(style)
            }
            this.setState({isReadyToTypeSet: true});
        } catch (e) {
            console.log('Error load MathJax =>', e.message);
        }
    }
    componentDidMount() {
        this.loadMathJax();
    }
    render() {
        if (this.state.isReadyToTypeSet) {
            return <div id="content">{this.props.children}</div>
        }
        return <div>Loading</div>;
    }
}

export default MathpixLoader;