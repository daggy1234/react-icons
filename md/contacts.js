
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdContacts extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m33.3 0h-26.6v3.3h26.6v-3.3z m-26.6 40h26.6v-3.3h-26.6v3.3z m26.6-33.3h-26.6c-1.9 0-3.4 1.5-3.4 3.3v20c0 1.8 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.8-1.5-3.3-3.4-3.3z m-13.3 4.6c2.1 0 3.8 1.6 3.8 3.7s-1.7 3.8-3.8 3.8-3.7-1.7-3.7-3.8 1.6-3.7 3.7-3.7z m8.3 17h-16.6v-2.5c0-2.7 5.5-4.1 8.3-4.1s8.3 1.4 8.3 4.1v2.5z"/></g>
            </IconBase>
        );
    }
}
