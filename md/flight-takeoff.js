
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdFlightTakeoff extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><defs><path id="a" d="m0 0h40v40h-40v-40z"/></defs><clipPath id="b"><use overflow="visible"/></clipPath><path d="m4.2 31.7h31.6v3.3h-31.6z m32.6-15.6c-0.4-1.4-1.8-2.2-3.1-1.8l-8.8 2.4-11.5-10.7-3.3 0.8 6.9 12-8.2 2.2-3.3-2.6-2.4 0.7 3 5.2 1.3 2.2 2.6-0.7 8.9-2.3 7.2-2 8.9-2.3c1.4-0.4 2.1-1.8 1.8-3.1z"/></g>
            </IconBase>
        );
    }
}
