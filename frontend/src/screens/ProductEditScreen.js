import React, {useState, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import axios from 'axios';
import Loading from '../components/Loading';
import { getSingleProduct } from '../redux/actions/productActions';
import { updateProductAsAdmin } from '../redux/actions/adminActions';
import { UPDATE_PRODUCT_AS_ADMIN_RESET } from '../redux/actions/actionTypes';
import HeadphoneInput from '../components/ProductDetail/HeadphoneTable/HeadPhoneInput';
import GameInput from '../components/ProductDetail/GameTable/GameInput';
import TVInput from '../components/ProductDetail/TvTable/TVInput';

const ProductEditScreen = ({ history, match }) => {
    const dispatch = useDispatch();
    const productID = match.params.id;
    const { singleProduct, loading, error } = useSelector(state => state.singleProduct);
    const { success: updatedSuccess, loading: updatedLoading, error: updatedError } = useSelector(state => state.updatedProduct);
    const { user } = useSelector(state => state.user);

    //! ALL PRODUCT 
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [uploading, setUploading] = useState(false);

    //! TV
    const [ screenSizes, setscreenSizes] = useState('');
    const [screenType, setscreenType] = useState('');
    const [screenResolution, setscreenResolution] = useState('');
    const [resolutionInPixel, setresolutionInPixel] = useState('');
    const [refreshRate, setrefreshRate] = useState('');
    const [ wifi, setwifi] = useState('');
    const [ usbPorts, setusbPorts] = useState('');
    const [sizeHeightWidthDepth, setsizeHeightWidthDepth] = useState('');
    const [tvswarranty, settvswarranty] = useState('');

    //! HEADPHONE 
    const [HeadphoneType, setHeadphoneType] = useState('');
    const [Colour, setHeadphoneColour] = useState('');
    const [VoiceControl, setVoiceControl] = useState('');
    const [NoiseReductionType, setNoiseReductionType] = useState('');
    const [BuiltInMicrophone, setBuiltInMicrophone] = useState('');
    const [Warranty, setWarranty] = useState('');

    //! GAME
    const [Platform, setPlatform] = useState('');
    const [GamingGerne, setGamingGerne] = useState('');
    const [Rating, setRating] = useState('');
    const [ConsumerAdvice, setConsumerAdvice] = useState('');
    const [GameDeveloper, setGameDeveloper] = useState('');
    const [GamePublisher, setGamePublisher] = useState('');

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

            if (singleProduct.category === 'headphone') {
                setHeadphoneType(singleProduct.headphoneDetail.HeadphoneType);
                setHeadphoneColour(singleProduct.headphoneDetail.Colour);
                setVoiceControl(singleProduct.headphoneDetail.VoiceControl);
                setNoiseReductionType(singleProduct.headphoneDetail.NoiseReductionType);
                setBuiltInMicrophone(singleProduct.headphoneDetail.BuiltInMicrophone);
                setWarranty(singleProduct.headphoneDetail.Warranty);
            } else if (singleProduct.category === 'game') {
                setPlatform(singleProduct.gameDetail.Platform);
                setGamingGerne(singleProduct.gameDetail.GamingGerne);
                setRating(singleProduct.gameDetail.Rating);
                setConsumerAdvice(singleProduct.gameDetail.ConsumerAdvice);
                setGameDeveloper(singleProduct.gameDetail.GameDeveloper);
                setGamePublisher(singleProduct.gameDetail.GamePublisher);
            } else if (singleProduct.category === 'tvs') {
                setscreenSizes(singleProduct.tvsDetail.screenSizes);
                setscreenType(singleProduct.tvsDetail.screenType);
                setscreenResolution(singleProduct.tvsDetail.screenResolution);
                setresolutionInPixel(singleProduct.tvsDetail.resolutionInPixel);
                setrefreshRate(singleProduct.tvsDetail.refreshRate);
                setwifi(singleProduct.tvsDetail.wifi);
                setusbPorts(singleProduct.tvsDetail.usbPorts);
                setsizeHeightWidthDepth(singleProduct.tvsDetail.sizeHeightWidthDepth);
                settvswarranty(singleProduct.tvsDetail.warranty);
            }

        }
    }, [singleProduct])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: UPDATE_PRODUCT_AS_ADMIN_RESET });

        let headphoneDetail, gameDetail, tvsDetail;
        if (category === 'headphone') {
            headphoneDetail = {
                HeadphoneType,
                Colour,
                VoiceControl,
                NoiseReductionType,
                BuiltInMicrophone,
                Warranty
            }
        } else if (category === 'game') {
            gameDetail = {
                Platform,
                GamingGerne,
                Rating,
                ConsumerAdvice,
                GameDeveloper,
                GamePublisher
            }
        } else if (category === 'tvs') {
            tvsDetail = {
                screenSizes,
                screenType,
                screenResolution,
                resolutionInPixel,
                refreshRate,
                wifi,
                usbPorts,
                sizeHeightWidthDepth,
                tvswarranty
            }
        }

        dispatch(updateProductAsAdmin(
            name, 
            price, 
            image, 
            brand, 
            category, 
            countInStock, 
            description, 
            productID,
            tvsDetail,
            headphoneDetail,
            gameDetail
        ));
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/upload', formData, config);

            setImage(data);
            setUploading(false);
        } catch(error) {
            console.log(error);
            setUploading(false);
        }
    }

    return (
    <>
        <Link to='/admin/productsList' className="btn btn-light my-3">
            Go Back
        </Link>
        <FormContainer>
            <h1>CREATE / EDIT PRODUCT :</h1>
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
                        placeholder="Enter Your Image URL" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} />
                    <Form.File id="image-file" label="Choose File" custom 
                    onChange={uploadFileHandler}></Form.File>
                    {uploading ? <Loading /> : null}
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
                        as="select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                            <option value=''>Select Category...</option>
                            <option value='laptops'> laptops </option>
                            <option value='tvs'> tvs </option>
                            <option value='phones'> phones </option>
                            <option value='headphone'> headphone </option>
                            <option value='game'> game </option>
                    </Form.Control>
                </Form.Group>
                
                {
                    category === 'tvs' ? (
                    <Form.Group controlId='tvsDetail'>
                        <TVInput 
                            screenSizes={screenSizes} 
                            setscreenSizes={(value) => setscreenSizes(value)}
                            screenType={screenType}
                            setscreenType={(value) => setscreenType(value)}
                            screenResolution={screenResolution}
                            setscreenResolution={(value) => setscreenResolution(value)}
                            resolutionInPixel={resolutionInPixel}
                            setresolutionInPixel={(value) => setresolutionInPixel(value)}
                            refreshRate={refreshRate}
                            setrefreshRate={(value) => setrefreshRate(value)}
                            wifi={wifi}
                            setwifi={(value) => setwifi(value)}
                            usbPorts={usbPorts}
                            setusbPorts={(value) => setusbPorts(value)}
                            sizeHeightWidthDepth={sizeHeightWidthDepth}
                            setsizeHeightWidthDepth={(value) => setsizeHeightWidthDepth(value)}
                            warranty={tvswarranty}
                            setwarranty={(value) => settvswarranty(value)}
                        />
                    </Form.Group>
                    ) : null
                }

                {
                    category === 'headphone' ? (
                    <Form.Group controlId='headphoneDetail'>
                        <HeadphoneInput 
                            HeadphoneType={HeadphoneType} 
                            setHeadphoneType={(value) => setHeadphoneType(value)}
                            Colour={Colour}
                            setHeadphoneColour={(value) => setHeadphoneColour(value)}
                            VoiceControl={VoiceControl}
                            setVoiceControl={(value) => setVoiceControl(value)}
                            NoiseReductionType={NoiseReductionType}
                            setNoiseReductionType={(value) => setNoiseReductionType(value)}
                            BuiltInMicrophone={BuiltInMicrophone}
                            setBuiltInMicrophone={(value) => setBuiltInMicrophone(value)}
                            Warranty={Warranty}
                            setWarranty={(value) => setWarranty(value)}
                        />
                    </Form.Group>
                    ) : null
                }
               
                {
                    category === 'game' ? (
                        <Form.Group controlId='gameDetail'>
                            <GameInput 
                                 Platform={Platform}
                                 setPlatform={(value) => setPlatform(value)}
                                 GamingGerne={GamingGerne}
                                 setGamingGerne={(value) => setGamingGerne(value)}
                                 Rating={Rating}
                                 setRating={(value) => setRating(value)}
                                 ConsumerAdvice={ConsumerAdvice}
                                 setConsumerAdvice={(value) => setConsumerAdvice(value)}
                                 GameDeveloper={GameDeveloper}
                                 setGameDeveloper={(value) => setGameDeveloper(value)}
                                 GamePublisher={GamePublisher}
                                 setGamePublisher={(value) => setGamePublisher(value)}
                            />
                        </Form.Group>
                    ) : null
                }

                <Form.Group controlId='description'>
                    <Form.Label>Description :</Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows={7} 
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
