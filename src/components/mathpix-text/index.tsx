import * as React from 'react';
import {markdownToHTML} from "../../markdown";

export interface MathpixTextProps {
    text: string;
}

class MathpixText extends React.Component<MathpixTextProps> {
    convertToHTML = (content?: string) => {
        const html = markdownToHTML(content);
        return html;
    };
    render() {
        return (
            <div id="preview-content" dangerouslySetInnerHTML={{ __html: this.convertToHTML(this.props.text) }} />
        );
    }
}
export default MathpixText;
