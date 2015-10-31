
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPageview extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m19.2 15c-2.3 0-4.2 1.9-4.2 4.2s1.9 4.1 4.2 4.1 4.1-1.8 4.1-4.1-1.8-4.2-4.1-4.2z m14.1-8.3h-26.6c-1.9 0-3.4 1.5-3.4 3.3v20c0 1.8 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.8-1.5-3.3-3.4-3.3z m-5.3 23.7l-4.9-4.9c-1.1 0.7-2.5 1.2-4 1.2-4.1 0-7.4-3.4-7.4-7.5s3.3-7.5 7.5-7.5 7.5 3.3 7.5 7.5c0 1.4-0.5 2.8-1.2 4l4.9 4.8-2.4 2.4z"/></g>
            </IconBase>
        );
    }
}
