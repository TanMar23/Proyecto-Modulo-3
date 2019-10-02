import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Center extends Component {
    state = {
        center: {}
    }

    getCenter = async () => {
        console.log(this.props.match.params.id)
        const response = await axios.get(`http://localhost:3000/api/center/${this.props.match.params.id}`)        
        this.setState({
            center: response.data
        })
    }

    componentDidMount() {
        this.getCenter()
    }


    render() {
        const { center } = this.state
       console.log(center);
        return (
            <div>
                <p>Centro</p>
            </div>
        )
    }
}
