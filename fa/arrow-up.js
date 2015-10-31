
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaArrowUp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m36.4 20.5q0 1.1-0.7 1.9l-1.6 1.6q-0.8 0.8-1.9 0.8-1.2 0-1.9-0.8l-6.2-6.2v14.8q0 1.1-0.8 1.8t-1.9 0.7h-2.8q-1.1 0-1.9-0.7t-0.8-1.8v-14.8l-6.2 6.2q-0.7 0.8-1.9 0.8t-1.9-0.8l-1.5-1.6q-0.8-0.8-0.8-1.9 0-1.1 0.8-1.9l13.7-13.8q0.7-0.7 1.9-0.7 1.1 0 1.9 0.7l13.8 13.8q0.7 0.8 0.7 1.9z"/></g>
            </IconBase>
        );
    }
}
