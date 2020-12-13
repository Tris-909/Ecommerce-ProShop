import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCarouselProducts } from '../redux/actions/productActions'
import Loading from '../components/Loading';
import Message from '../components/Message';

const CarouselSection = ({ carouselProducts, loading, error }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!carouselProducts) {
            dispatch(getCarouselProducts());
        }
    }, [dispatch, carouselProducts]);

    return loading ? <Loading /> : error ? <Message variant="danger" content={error} /> : (
        <Carousel 
            pause='hover' 
            style={{ marginBottom: '2rem', backgroundColor: 'yellow'}}
            nextIcon={<i className="fas fa-arrow-right" style={{color: 'black', fontSize: '2rem'}}></i>}
            prevIcon={<i className="fas fa-arrow-left" style={{color: 'black', fontSize: '2rem'}}></i>}>
          {carouselProducts.map((product) => (
            <Carousel.Item key={product._id} interval={5000}>
                <Link to={`/product/${product._id}`}> 
                    <Image
                      src={product.image}
                      alt={product.name}
                      fluid
                    />
                    <Carousel.Caption>
                        {product.name} ({product.price})
                    </Carousel.Caption> 
                </Link>
            </Carousel.Item>
          ))}
        </Carousel>
    );
}

export default CarouselSection;
