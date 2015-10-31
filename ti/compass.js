
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiCompass extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 8.3c6.4 0 11.7 5.3 11.7 11.7 0 6.4-5.3 11.7-11.7 11.7s-11.7-5.3-11.7-11.7 5.3-11.7 11.7-11.7m0-3.3c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z m7 8c-0.2-0.2-0.6-0.3-0.8-0.2l-10 2.9c-0.2 0-0.5 0.3-0.5 0.5l-2.9 10c-0.1 0.2 0 0.6 0.2 0.8 0.2 0.1 0.4 0.2 0.6 0.2l0.3 0 9.9-2.9c0.2 0 0.5-0.3 0.5-0.5l2.9-10c0.1-0.2 0-0.6-0.2-0.8z m-12.2 12.2l2.3-8.1 5.8 5.8-8.1 2.3z"/></g>
            </IconBase>
        );
    }
}
