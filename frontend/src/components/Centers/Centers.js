import React, { Component } from 'react'

export default class Centers extends Component {
    render() {
        return (
            <div className="columns is-centered">
                <div className="column is-4">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <div class="select is-fullwidth">
                            <select name="country">
                                <option value="Argentina">Aceite comestible usado</option>
                                <option value="Bolivia">Aceite y lubricante automotriz usado</option>
                                <option value="Brazil">Electronicos y electrodomesticos</option>
                                <option value="Chile">Medicamentos caducos</option>
                                <option value="Colombia">Metales</option>
                                <option value="Ecuador">Papel y carton</option>
                                <option value="Guyana">PET</option>
                                <option value="Paraguay">Pilas y baterias</option>
                                <option value="Peru">Residuos de construccion</option>
                                <option value="Suriname">Residuos Sanitarios</option>
                                <option value="Uruguay">Vidrio</option>
                            </select>
                            </div>
                        </div>
                        <div class="control">
                            <button type="submit" class="button is-primary">Filtrar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
