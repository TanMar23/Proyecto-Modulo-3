// import React, { Component } from 'react'
// import axios from 'axios'
// import Layout from '../Layout'

// export default class ContributionList extends Component {
//     state={
//         contributions:[]
//     }

//     getContributions = async () => {
//         const response = await axios.get('http://localhost:3000/api/contribution-list')        
//         this.setState({
//             contributions: response.data.contributions
//         })
//     }

//     componentDidMount(){
//      this.getContributions()   
//     }

//     render() {
//         const { contributions } = this.state
        
//         return (
//             <Layout history={this.props.history}>
//             <div>
//                 <h3 className='has-text-centered'>Contribuciones</h3>
//             {contributions ? contributions.map((contribution, i) => 
//                 <table className= "box table" key={i}>
//                     <tbody>
//                         <tr>
//                         <td>{contribution.quantity}</td>
//                         <td>{contribution.unity}</td>
//                         <td>
//                             <button
//                                 id={contributions._id}
//                                 onClick={() => {
//                                     axios.delete(`http://localhost:3000/contribution/${contributions._id}`)
//                                     this.props.history.push('/contribution-list')
//                                 }}>
//                                 Borrar
//                             </button>
//                         </td>
//                         </tr>
//                         </tbody>
//                         </table>
//                 ) : <p>Cargando...</p>
//             }
//             </div>
//             </Layout>
//         )
//     }
// }
