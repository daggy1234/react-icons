
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdLockOutline extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 13.3h-1.7v-3.3c0-4.6-3.7-8.3-8.3-8.3s-8.3 3.7-8.3 8.3v3.3h-1.7c-1.8 0-3.3 1.5-3.3 3.4v16.6c0 1.9 1.5 3.4 3.3 3.4h20c1.8 0 3.3-1.5 3.3-3.4v-16.6c0-1.9-1.5-3.4-3.3-3.4z m-10-8.5c2.9 0 5.2 2.4 5.2 5.2v3.3h-10.2v-3.3h-0.2c0-2.8 2.3-5.2 5.2-5.2z m10 28.5h-20v-16.6h20v16.6z m-10-5c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3-3.3 1.5-3.3 3.3 1.5 3.3 3.3 3.3z"/></g>
            </IconBase>
        );
    }
}
