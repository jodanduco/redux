import React, { Component } from 'react';

export default class GoogleMap extends Component {

  componentDidMount() {
    const htmlElementRef = this.refs.map; // -> To work to third party libraries that not works with react
    new google.maps.Map(htmlElementRef, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      }
    });
  }
  render() {
    return <div ref="map"/>;
  }
}