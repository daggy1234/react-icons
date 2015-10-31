
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdRotateRight extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25.9 9.3l-7.6-7.6v5.1c-6.5 0.8-11.6 6.4-11.6 13.2s5.1 12.4 11.6 13.2v-3.3c-4.7-0.8-8.3-4.9-8.3-9.9s3.6-9.1 8.3-9.9v6.6l7.6-7.4z m7.3 9c-0.3-2.3-1.2-4.5-2.7-6.4l-2.3 2.3c0.9 1.3 1.4 2.7 1.7 4.1h3.3z m-11.5 11.5v3.4c2.3-0.3 4.5-1.2 6.5-2.7l-2.4-2.4c-1.3 0.9-2.7 1.5-4.1 1.7z m6.5-4l2.3 2.3c1.5-1.9 2.4-4.1 2.7-6.4h-3.3c-0.3 1.4-0.8 2.8-1.7 4.1z"/></g>
            </IconBase>
        );
    }
}
