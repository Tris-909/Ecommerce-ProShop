import React from 'react'

const Rating = ({ rating, text, color }) => {
    return (
        <div className="rating">
            <span>
                <i className={
                    rating > 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
                    style={{color}}
                />
            </span>
            <span>
                <i className={
                    rating > 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
                    style={{color}}

                />
            </span>
            <span>
                <i className={
                    rating > 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
                    style={{color}}

                />
            </span>
            <span>
                <i className={
                    rating > 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
                    style={{color}}

                />
            </span>
            <span>
                <i className={
                    rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
                    style={{color}}

                />
            </span>
            {text ? (
               <div> {text && text}</div>
            ) : null}
        </div>
    )
}

Rating.defaultProps = {
    color: '#ffff00',
    text: null
}

export default Rating;
