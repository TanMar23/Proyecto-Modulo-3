import React, { Component } from "react";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import axios from 'axios'

mapboxgl.accessToken =
  "pk.eyJ1IjoibWx6eiIsImEiOiJjandrNmVzNzUwNWZjNGFqdGcwNmJ2ZWhpIn0.ybY6wnAtJwj-Tq0c46sW6A";

class Center extends Component {
    state = {
                center: {}
            }
        


  componentDidMount() {
    axios.get(`http://localhost:3000/api/center/${this.props.match.params.id}`).then( res =>{
    this.setState({center: res.data.place})
    const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: "mapbox://styles/mapbox/streets-v9"
      });
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const user_location = [
            position.coords.longitude,
            position.coords.latitude
          ];
          map.setZoom(12).setCenter(user_location);
          new mapboxgl.Marker({ color: "red" })
            .setLngLat(user_location)
            .setPopup(new mapboxgl.Popup().setHTML("<h3>Usted está aquí</h3>"))
            .addTo(map);
        });
      }

    if(this.state.center.longitud && this.state.center.latitud){
        const center_location = [this.state.center.longitud, this.state.center.latitud]
        new mapboxgl.Marker({ color: "green" })
        .setLngLat(center_location)
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Destino</h3>"))
        .addTo(map);
    }
  
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserLocation: true
        })
      );
  
      map.addControl(
        new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: "metric",
          language: "es",
          placeholderOrigin: "Seleccione su lugar de origen",
          placeholderDestination: "Seleccione su destino"
        }),
        "top-left"
      );
  
      map.addControl(new mapboxgl.NavigationControl());
  
    })
  }
  render() {
    return (
   <div className="section">

        <div className="container">
        <p className="has-text-centered">Categoria: {this.state.center.tipoResiduo}</p>

            <div className="columns">
                <div
                className="column is -7 map" style={{ width: "50vw", height: "90vh" }}
                ref={e => (this.mapContainer = e)}/>
                <div className="column is-5 data">
                   <div class="card">
                        <header class="card-header">
                            <p class="card-header-title card-text">
                                {this.state.center.empresa}
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <p className="card-text">Direccion: {this.state.center.address}</p>
                                <p className="card-text">Email: {this.state.center.email ? this.state.center.email : 'No disponible'}</p>
                                <p className="card-text">Numero: {this.state.center.contactNumber ? this.state.center.contactNumber : 'No disponible'}</p>
                                <p className="card-text">Website: {this.state.center.website ? this.state.center.website : 'No disponible'}</p>
                                <p className="card-text">Horario: {this.state.center.horario ? this.state.center.horario : 'No disponible'}</p>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="#" class="card-footer-item">Save</a>
                            <a href="#" class="card-footer-item">Edit</a>
                            <a href="#" class="card-footer-item">Delete</a>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
   </div>
    );
  }
}

export default Center;