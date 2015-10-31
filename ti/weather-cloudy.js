
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiWeatherCloudy extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m28.3 31.7h-18.3c-3.7 0-6.7-3-6.7-6.7 0-3.1 2.2-5.7 5-6.5v-0.2c0-5.5 4.5-10 10-10 4.3 0 8.1 2.8 9.5 6.7 4.9-0.4 8.9 3.5 8.9 8.3 0 4.6-3.8 8.4-8.4 8.4z m-18.5-10c-1.6 0-3.1 1.5-3.1 3.3s1.5 3.3 3.3 3.3h18.3c2.8 0 5-2.2 5-5s-2.2-5-5-5c-0.4 0-0.8 0.1-1.3 0.2l-1.8 0.6-0.3-1.9c-0.6-3.2-3.3-5.5-6.6-5.5-3.6 0-6.6 3-6.6 6.6 0 0.5 0 0.9 0.1 1.4l0.4 2-2.4 0z"/></g>
            </IconBase>
        );
    }
}
