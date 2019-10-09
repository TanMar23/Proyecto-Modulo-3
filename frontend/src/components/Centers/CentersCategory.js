import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

export default class CentersCategory extends Component {

    getFilteredCenters = async () => {
        const response = await axios.get('https://young-beyond-07801.herokuapp.com/api/centers/:categoryCenter')        
        this.setState({
            centers: response.data.places
        })        
    }

    componentDidMount() {
        this.getFilteredCenters()
    }

    render() {
        return (
            <div>
                <p>Centros por categoria</p>
            </div>
        )
    }
}
