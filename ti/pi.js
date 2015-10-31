
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiPi extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.2 14.2c-0.7-0.6-1.7-0.6-2.4 0-2.1 2.1-5.5 2.1-7.6 0-3.4-3.4-9-3.4-12.4 0-0.6 0.7-0.6 1.7 0 2.4s1.7 0.6 2.4 0c0.6-0.6 1.3-1.1 2.1-1.3v13c0 1 0.8 1.7 1.7 1.7s1.7-0.7 1.7-1.7v-13c0.8 0.2 1.5 0.7 2.1 1.3 1.3 1.3 2.9 2.1 4.5 2.4v9.3c0 1 0.8 1.7 1.7 1.7s1.7-0.7 1.7-1.7v-9.3c1.6-0.3 3.2-1.1 4.5-2.4 0.6-0.7 0.6-1.7 0-2.4z"/></g>
            </IconBase>
        );
    }
}
