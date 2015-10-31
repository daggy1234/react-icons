
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdCast extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35 5h-30c-1.8 0-3.3 1.5-3.3 3.3v5h3.3v-5h30v23.4h-11.7v3.3h11.7c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m-33.3 25v5h5c0-2.8-2.3-5-5-5z m0-6.7v3.4c4.6 0 8.3 3.7 8.3 8.3h3.3c0-6.4-5.2-11.7-11.6-11.7z m0-6.6v3.3c8.2 0 15 6.7 15 15h3.3c0-10.1-8.2-18.3-18.3-18.3z"/></g>
            </IconBase>
        );
    }
}
