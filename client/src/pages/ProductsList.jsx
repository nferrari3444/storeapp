import React, {Component} from 'react'

import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'



//import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
color: #ef9b0f;
cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

// class UpdateProduct extends Component {
//     updateUser = event => {
//         event.preventDefault()

//         window.location.href = `/movies/update/${this.props.id}` 
//     }

//     render() {
//         return <Update onClick = {this.updateUser}></Update>
//     }
// }

// class DeleteProduct extends Component {
//     deleteUser = event => {
//         event.preventDefault()

//         if ( 
//             window.confirm(
//                 `Do you want to delete this product ${this.props.id} permanently?`
//             )
//         )
//         {
//             api.deleteProductById(this.props.id)
//             window.location.reload()
//         }
//     }

// render() {
//     return <Delete onClick = {this.deleteUser}>Delete</Delete>
// }

// }


// class ProductssList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             products: [],
//             columns: [],
//             isLoading: false,
//         }
//     }

//     componentDidMount = async () => {
//         this.setState({ isLoading: true })

//         await api.getAllProductss().then(products => {
//             this.setState({
//                 movies: products.data.data,
//                 isLoading: false,
//             })
//         })
//     }

//     render() {
//         const { products, isLoading } = this.state
//         console.log('TCL: MoviesList -> render -> products', products)

//         const columns = [
//             {
//                 Header: 'ID',
//                 accessor: '_id',
//                 filterable: true,
//             },
//             {
//                 Header: 'Name',
//                 accessor: 'name',
//                 filterable: true,
//             },
//             {
//                 Header: 'Description',
//                 accessor: 'description',
//                 filterable: true,
//             },
// {
    //            Header: 'Category',
    //            accessor: 'category',
    //            filterable: true,
    //             },

   // {
        //        Header: 'Price',
        //        accessor: 'price',
        //        filterable: true,
        //             },

    //    {
            //    Header: 'Quantity',
            //    accessor: 'quantity',
            //    filterable: true,
            //             },

//             {
//                 Header: 'Time',
//                 accessor: 'time',
//                 Cell: props => <span>{props.value.join(' / ')}</span>,
//             },
//         ]

//         let showTable = true
//         if (!products.length) {
//             showTable = false
//         }

//         return (
//             <Wrapper>
//                 {showTable && (
//                     <ReactTable
//                         data={products}
//                         columns={columns}
//                         loading={isLoading}
//                         defaultPageSize={10}
//                         showPageSizeOptions={true}
//                         minRows={0}
//                     />
//                 )}
//             </Wrapper>
//         )
//     }
// }


// class ProductsList extends Component {
//     render()

const ProductsList = () => {
    console.log('llega acaaaa')
        return (
            <div>
                <p>In this page you'll see the list of products</p>
            </div>
        )
    }


export default ProductsList

