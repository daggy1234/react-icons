
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCoffee extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m34.7 13.6q0-1.7-1.2-2.9t-2.8-1.1h-1.4v8h1.4q1.6 0 2.8-1.2t1.2-2.8z m-34.7 16h37.3q0 2.2-1.5 3.8t-3.8 1.5h-26.7q-2.2 0-3.7-1.5t-1.6-3.8z m38.7-16q0 3.3-2.4 5.6t-5.6 2.4h-1.4v0.6q0 2-1.3 3.3t-3.3 1.4h-14.7q-1.9 0-3.3-1.4t-1.4-3.3v-15.3q0-0.5 0.4-0.9t1-0.4h24q3.3 0 5.6 2.3t2.4 5.7z"/></g>
            </IconBase>
        );
    }
}
