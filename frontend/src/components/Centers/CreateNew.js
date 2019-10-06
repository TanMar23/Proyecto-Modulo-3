import React, { Component } from 'react'
import MY_SERVICE from '../../services/index'

export default class CreateNew extends Component {
    state={
        center: {
            empresa: "",
            email: "",
            website: "",
            address: "",
            horario: "",
            contactNumber: "",
            tipoResiduo: ""
        }
    }

    handleInput = (e) => {
        const { center } = this.state;
        const key = e.target.name;
        center[key] = e.target.value;
        this.setState({ center });
    //     this.setState({
    //         center: {
    //         ...this.state.center,
    //         [e.target.name]: e.target.value
    //     }
    //   })
    }


      addCenter = (e) => {
        e.preventDefault();
        MY_SERVICE.addCenter(this.state.center)
          .then((response) => {
            console.log(response);
            this.props.history.push('/centers')
          })
          .catch((error) => {
            console.log(error);
          });
      };


    render() {
        let  center = this.state
        console.log(this.state.center);
        
        return (
            <div className="new-center-wrapper">
            <div className="columns is-centered">
              <div >
                <form className="columns is-5 box" onSubmit={center.addCenter}>
                  <div className="column">
                    <h1 className="title is-3">Agregar centro de acopio</h1>

                      <label className="label is-size-6">Nombre:*</label>
                      <input className="input" onChange={center.handleInput} type="text" name="empresa" required/>
                
                      <label className="label is-size-6">Email:</label>
                      <input className="input" onChange={center.handleInput} type="email" name="email"/>
                  
                      <label className="label is-size-6">Sitio Web:</label>
                      <input className="input" onChange={center.handleInput} type="text" name="website"/>
                
                      <label className="label is-size-6">Dirección:*</label>
                      <input className="input" onChange={center.handleInput} type="text" name="address" required/>

                      <label className="label is-size-6">Horario:</label>
                      <input className="input" onChange={center.handleInput} type="text" name="horario"/>

                      <label className="label is-size-6">Número telefónico:</label>
                      <input className="input" onChange={center.handleInput} type="number" name="contactNumber"/>

                      {/* Filter Categoria*/}
                        <label className="label is-size-6">Categoría:*</label>
                        <div className="columns is-centered">
                            <div className="column is-12">
                                <div className="field has-addons">
                                    <div className="control is-expanded">
                                        <div className="select is-fullwidth">
                                        <select name="tipoResiduo" id='tipoResiduo' onChange={this.updateValue} required>
                                            <option disabled selected>Seleccione una categoría</option>
                                            <option value="ACEITE COMESTIBLE USADO">Aceite comestible usado</option>
                                            <option value="ACEITE Y LUBRICANTE AUTOMOTRIZ USADO">Aceite y lubricante automotriz usado</option>
                                            <option value="ELECTRONICOS Y ELECTRODOMESTICOS">Electrónicos y electrodomésticos</option>
                                            <option value="MEDICAMENTOS CADUCOS">Medicamentos caducos</option>
                                            <option value="METALES">Metales</option>
                                            <option value="PAPEL Y CARTON">Papel y cartón</option>
                                            <option value="PET">PET</option>
                                            <option value="PILAS Y BATERIAS">Pilas y baterías</option>
                                            <option value="RESIDUOS DE CONSTRUCCION">Residuos de construcción</option>
                                            <option value="RESIDUOS SANITARIOS">Residuos Sanitarios</option>
                                            <option value="VIDRIO">Vidrio</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* Acaba filtro de categoria */}

                    <div>
                    <input className="button is-primary is-fullwidth" type="submit" value="Agregar centro"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        )
    }
}