import React, {useState, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loading from '../components/Loading';
import { getSingleProduct } from '../redux/actions/productActions';
import { updateProductAsAdmin } from '../redux/actions/adminActions';
import { UPDATE_PRODUCT_AS_ADMIN_RESET } from '../redux/actions/actionTypes';

const ProductEditScreen = ({ history, match }) => {
    const dispatch = useDispatch();
    const productID = match.params.id;
    const { singleProduct, loading, error } = useSelector(state => state.singleProduct);
    const { success: updatedSuccess, loading: updatedLoading, error: updatedError } = useSelector(state => state.updatedProduct);
    const { user } = useSelector(state => state.user);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (user && user.isAdmin) {
            dispatch(getSingleProduct(productID));
        }
    }, [productID, updatedSuccess]);

    useEffect(() => {
        if (singleProduct) {
            setName(singleProduct.name);
            setPrice(singleProduct.price);
            setImage(singleProduct.image);
            setBrand(singleProduct.brand);
            setCountInStock(singleProduct.countInStock);
            setCategory(singleProduct.category);
            setDescription(singleProduct.description);
        }
    }, [singleProduct])

    const submitHandler = () => {
        dispatch({ type: UPDATE_PRODUCT_AS_ADMIN_RESET });
        dispatch(updateProductAsAdmin(name, price, image, brand, category, countInStock, description, productID));
    }

    return (
    <>
        <Link to='/admin/productsList' className="btn btn-light my-3">
            Go Back
        </Link>
        <FormContainer>
            <h1>Edit User :</h1>
            { error ? <Message variant="danger" content={error} /> : null }
            { loading ? <Loading /> : (
                <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Your Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='price'>
                    <Form.Label>price :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Product Price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='image'>
                    <Form.Label>Image :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='brand'>
                    <Form.Label>Brand :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Product Brand" 
                        value={brand} 
                        onChange={(e) => setBrand(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='countInStock'>
                    <Form.Label>Count In Stock :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="" 
                        value={countInStock} 
                        onChange={(e) => setCountInStock(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='category'>
                    <Form.Label>Category :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Category" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='description'>
                    <Form.Label>Description :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Description..." 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Button type="submit" variant='primary'>Update</Button>
            </Form>
            ) }
        </FormContainer>
    </>  
    )
}

export default ProductEditScreen;
