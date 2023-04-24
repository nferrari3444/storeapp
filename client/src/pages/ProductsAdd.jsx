import React, {Component, useState} from 'react'
import {useDispatch} from "react-redux";
import { PrimaryButton } from '../components/CommonStyled'
import api from '../api'
import {productsCreate} from "../slices/productsSlice";

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

const StyledCreateProduct = styled.div`
display: flex;
justify-content: space-between;
`;

const StyledForm = styled.form`
display: flex;
flex-direction: column;
max-width: 300px;
margin-top: 2rem;
select,
input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182,182,182);
    margin: 0.3rem 0;
    &:focus {
        border: 2px solid rgb(0,208,255);
    }
}
select {
    color: rgb(95,95,95);
}
`;

const ImagePreview = styled.div`
    margin: 2rem 0 2rem 2rem;
    padding: 2rem;
    border: 1px solid rgb(183,183,183);
    max-width: 300px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    color: rgb(78,78,78);
    img {
        max-width: 100%
    }
`;


function ProductAdd() {

    const dispatch = useDispatch()
    const [productImg, setProductImg] = useState("")

    // console.log(productImg)
    const handleProductImageUpload = (e) => {
        const file = e.target.files[0]

        console.log(file)
        TransformFile(file)
    }

    // Hay que transformar el archivo que se carga a base64 
    const TransformFile = (file) => {
        const reader = new FileReader()

        if(file) {
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setProductImg(reader.result);
            }
        } else {
            setProductImg("")
        }
    };

    const [products, setProducts] = useState({name:'', description:'', category: '', price : '',
                                        quantity: '' })

                    // const handleChange = name => event => {

                    //     const value = name === "photo" ? event.target.files[0] : event.target.value;
                    //     formData.set(name, value);
                    //     setValues({...values, [name]: value});
                        
                    // }
    const {name,description,category,price,quantity} = products

    console.log(name)
    console.log(description)
    const changeHandler = name => event => {
        console.log(name)
        const value = event.target.value;
        console.log(value)
        setProducts({...products, [name]: value})
        }

    const handleSubmit = (e) => {
        
         e.preventDefault()
    
        dispatch(
            productsCreate({
                name,
                description,
                category,
                price,
                quantity,
                image: productImg,
            })
        );

    };


return (
    
    <StyledCreateProduct>
        <StyledForm onSubmit={handleSubmit}>
            <h3>Create a Product</h3>
            <input 
                type="file"
                accept= "image/"
                onChange={handleProductImageUpload}
                required

            />

            <select name = 'category' onChange= {changeHandler('category')} required>
                <option value="">Select Category</option>
                <option value="category1">Category1</option>
                <option value="category2">Category2</option>
                <option value="category3">Category3</option>
            </select>
            <input
            type="text" 
            required 
            placeholder='Name'
            name = 'name'
            onChange={changeHandler('name')}
            value = {name} 
            />
        
            <input
            type="text" 
            required 
            placeholder='Description'
            name = 'description'
            onChange={changeHandler('description')} 
            // value = {description}

            />
            
            <input
            type="text" 
            required 
            placeholder='Price'
            name = 'price'
            onChange={changeHandler('price')} 
            // value = {price}

            />
            
            <input
            type="text" 
            required 
            placeholder='Quantity'
            name = 'quantity'
            onChange={changeHandler('quantity')} 
            // value = {quantity}

            />

            <PrimaryButton type="submit">
                Submit
            </PrimaryButton>
            
         
        
        </StyledForm>

        <ImagePreview>
            {productImg ? <> 
            <img src={productImg} alt = "product image!" />
            </> : <p>Image preview will appear here!</p>}

        </ImagePreview>
    </StyledCreateProduct>


)
            }

// class ProductAdd extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: '',
//             description: '',
//             category: '',
//             price: '',
//             quantity: '',
//             time: '',
//         }
//     }

//     handleChangeInputName = async event => {
//         const name = event.target.value
//         this.setState({ name })
//     }

//     handleChangeInputRating = async event => {
//         const rating = event.target.validity.valid
//             ? event.target.value
//             : this.state.rating

//         this.setState({ rating })
//     }

//     handleChangeInputTime = async event => {
//         const time = event.target.value
//         this.setState({ time })
//     }

//     handleIncludeMovie = async () => {
//         const { name, rating, time } = this.state
//         const arrayTime = time.split('/')
//         const payload = { name, rating, time: arrayTime }

//         await api.insertMovie(payload).then(res => {
//             window.alert(`Movie inserted successfully`)
//             this.setState({
//                 name: '',
//                 rating: '',
//                 time: '',
//             })
//         })
//     }

//     render() {
//         const { name, rating, time } = this.state
//         return (
//             <Wrapper>
//                 <Title>Create Product</Title>

//                 <Label>Name: </Label>
//                 <InputText
//                     type="text"
//                     value={name}
//                     onChange={this.handleChangeInputName}
//                 />

//                 <Label>Rating: </Label>
//                 <InputText
//                     type="number"
//                     step="0.1"
//                     lang="en-US"
//                     min="0"
//                     max="10"
//                     pattern="[0-9]+([,\.][0-9]+)?"
//                     value={rating}
//                     onChange={this.handleChangeInputRating}
//                 />

//                 <Label>Time: </Label>
//                 <InputText
//                     type="text"
//                     value={time}
//                     onChange={this.handleChangeInputTime}
//                 />

//                 <Button onClick={this.handleIncludeMovie}>Add Movie</Button>
//                 <CancelButton href={'/movies/list'}>Cancel</CancelButton>
//             </Wrapper>
//         )
//     }
// }

//export default MoviesInsert

// class ProductAdd extends Component {
//     render() {

// const ProductAdd = () => {


//         return (
//             <div>
//                 <p>In this page you'll see the form to add a Product</p>
//             </div>
//         )
//     }


export default ProductAdd;