
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdFilter extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m26.6 17.1l-4.6 5.9-3.2-3.9-4.6 5.9h18.3l-5.9-7.9z m-21.6-8.8h-3.3v26.7c0 1.8 1.5 3.3 3.3 3.3h26.7v-3.3h-26.7v-26.7z m30-6.6h-23.3c-1.9 0-3.4 1.5-3.4 3.3v23.3c0 1.9 1.5 3.4 3.4 3.4h23.3c1.8 0 3.3-1.5 3.3-3.4v-23.3c0-1.8-1.5-3.3-3.3-3.3z m0 26.6h-23.3v-23.3h23.3v23.3z"/></g>
            </IconBase>
        );
    }
}
