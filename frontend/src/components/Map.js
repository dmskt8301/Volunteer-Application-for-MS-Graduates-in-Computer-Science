import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMarker: null,
      selectedPlace: {},
      showingInfoWindow: false,
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      });
    }
  };

  render() {
    const mapContainerStyle = {
      height: "500px",
    };
    return (
      <div className="section">
        <div
          id="map"
          className="rounded-lg overflow-hidden"
          style={mapContainerStyle}
        >
          <Map
            style={mapContainerStyle}
            google={this.props.google}
            zoom={12}
            initialCenter={{
              lat: 32.731,
              lng: -97.115,
            }}
            scrollwheel={false}
            scaleControl={false}
            disableDefaultUI={true}
            mapType={window.google.maps.MapTypeId.ROADMAP}
            styles={[
              {
                featureType: "all",
                elementType: "all",
                stylers: [{ visibility: "on" }],
              },
              {
                featureType: "administrative",
                elementType: "labels.text.fill",
                stylers: [{ color: "#444444" }],
              },
              {
                featureType: "administrative.province",
                elementType: "all",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "administrative.locality",
                elementType: "all",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "administrative.neighborhood",
                elementType: "all",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "administrative.land_parcel",
                elementType: "all",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "administrative.land_parcel",
                elementType: "labels.text",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "landscape",
                elementType: "all",
                stylers: [{ color: "#f2f2f2" }],
              },
              {
                featureType: "landscape.man_made",
                elementType: "all",
                stylers: [{ visibility: "simplified" }],
              },
              {
                featureType: "poi",
                elementType: "all",
                stylers: [
                  { visibility: "off" },
                  { color: "#cee9de" },
                  { saturation: "2" },
                  { weight: "0.80" },
                ],
              },
              {
                featureType: "poi.attraction",
                elementType: "geometry.fill",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "poi.park",
                elementType: "all",
                stylers: [{ visibility: "on" }],
              },
              {
                featureType: "road",
                elementType: "all",
                stylers: [{ saturation: -100 }, { lightness: 45 }],
              },
              {
                featureType: "road.highway",
                elementType: "all",
                stylers: [{ visibility: "simplified" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{ visibility: "on" }, { color: "#f5d6d6" }],
              },
              {
                featureType: "road.highway",
                elementType: "labels.text",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "road.highway",
                elementType: "labels.icon",
                stylers: [{ hue: "#ff0000" }, { visibility: "on" }],
              },
              {
                featureType: "road.highway.controlled_access",
                elementType: "labels.text",
                stylers: [{ visibility: "simplified" }],
              },
              {
                featureType: "road.highway.controlled_access",
                elementType: "labels.icon",
                stylers: [
                  { visibility: "on" },
                  { hue: "#0064ff" },
                  { gamma: "1.44" },
                  { lightness: "-3" },
                  { weight: "1.69" },
                ],
              },
              {
                featureType: "road.arterial",
                elementType: "all",
                stylers: [{ visibility: "on" }],
              },
              {
                featureType: "road.arterial",
                elementType: "labels.text",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "road.local",
                elementType: "all",
                stylers: [{ visibility: "on" }],
              },
              {
                featureType: "road.local",
                elementType: "labels.text",
                stylers: [
                  { visibility: "simplified" },
                  { weight: "0.31" },
                  { gamma: "1.43" },
                  { lightness: "-5" },
                  { saturation: "-22" },
                ],
              },
              {
                featureType: "transit",
                elementType: "all",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "transit.line",
                elementType: "all",
                stylers: [{ visibility: "on" }, { hue: "#ff0000" }],
              },
              {
                featureType: "transit.station.airport",
                elementType: "all",
                stylers: [{ visibility: "simplified" }, { hue: "#ff0045" }],
              },
              {
                featureType: "transit.station.bus",
                elementType: "all",
                stylers: [{ visibility: "on" }, { hue: "#00d1ff" }],
              },
              {
                featureType: "transit.station.bus",
                elementType: "labels.text",
                stylers: [{ visibility: "simplified" }],
              },
              {
                featureType: "transit.station.rail",
                elementType: "all",
                stylers: [{ visibility: "simplified" }, { hue: "#00cbff" }],
              },
              {
                featureType: "transit.station.rail",
                elementType: "labels.text",
                stylers: [{ visibility: "simplified" }],
              },
              {
                featureType: "water",
                elementType: "all",
                stylers: [{ color: "#46bcec" }, { visibility: "on" }],
              },
              {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [
                  { weight: "1.61" },
                  { color: "#cde2e5" },
                  { visibility: "on" },
                ],
              },
            ]}
          >
            <Marker
              onClick={this.onMarkerClick}
              name="Volunteer - Office"
              position={{ lat: 32.731, lng: -97.115 }}
              icon={{
                url: "images/map-marker.png",
                scaledSize: new this.props.google.maps.Size(50, 50),
              }}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <b>Volunteer - Office</b>
                <br />
                701 S Nedderman Dr
                <br />
                Arlington, TX 76019
                <br />
                USA
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCOdKtT5fapH3_OfhV3HFeZjqFs4OfNIew",
})(MapContainer);
