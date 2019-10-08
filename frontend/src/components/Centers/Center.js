import React, { Component } from "react";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import axios from 'axios';
import Layout from '../Layout'
import {MyContext} from '../../context/index'
import { Link } from 'react-router-dom'

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
    // console.log(this.context.state.loggedUser._id)
    return (
      <Layout history={this.props.history}>
   <div className="section">

        <div className="container">
        <p className="has-text-centered">Categoria: {this.state.center.tipoResiduo}</p>

            <div className="columns">
                <div
                className="column is -7 map" style={{ width: "50vw", height: "90vh" }}
                ref={e => (this.mapContainer = e)}/>
                <div className="column is-5 data">
                   <div className="card">
                        <header className="card-header">
                            <p className="card-header-title card-text">
                                {this.state.center.empresa}
                            </p>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                <p>Direccion: {this.state.center.address}</p>
                                <p>Email: {this.state.center.email ? this.state.center.email : 'No disponible'}</p>
                                <p>Numero: {this.state.center.contactNumber ? this.state.center.contactNumber : 'No disponible'}</p>
                                <p>Website: {this.state.center.website ? this.state.center.website : 'No disponible'}</p>
                                <p>Horario: {this.state.center.horario ? this.state.center.horario : 'No disponible'}</p>
                            </div>
                            <div>
                            <button className='button is-primary'> 
                          <Link to={'/contribution'}>Quiero contribuir!</Link>
                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
   </Layout>
    );
  }
}
Center.contextType = MyContext;
export default Center;