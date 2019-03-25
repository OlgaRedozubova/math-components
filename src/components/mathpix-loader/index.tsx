import * as React from "react";
import {MathJax} from '../../mathjax';

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
        console.log('MathJax=>', MathJax);
        try {
            //console.log('MathJax.Stylesheet()=>', MathJax.Stylesheet())
            //document.head.appendChild(MathJax.Stylesheet());
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