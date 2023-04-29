import React, {useState, useEffect} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const GoogleReviews = ({placeId, apiKey}) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const cacheKey = `google-reviews-${placeId}`;
        const cacheExpiration = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
        const cachedData = JSON.parse(localStorage.getItem(cacheKey));

        const fetchReviews = async () => {
            try {
                // http://cors.io/?https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&language=ro&key=${apiKey}`
                const response = await fetch(`https://corsproxy.io/?` + encodeURIComponent(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&language=ro&key=${apiKey}`));
                const json = await response.json();
                const fetchedReviews = json.result.reviews;
                setReviews(fetchedReviews);

                // Cache the response
                const cacheData = {timestamp: Date.now(), reviews: fetchedReviews};
                localStorage.setItem(cacheKey, JSON.stringify(cacheData));
            } catch (error) {
                console.error('Failed to fetch reviews', error);
            }
        };

        if (cachedData && cachedData.timestamp + cacheExpiration > Date.now()) {
            // Use cached data if it's less than 30 days old
            setReviews(cachedData.reviews);
        } else {
            // Fetch new data if there's no cached data or it's expired
            fetchReviews();
        }
    }, [placeId, apiKey]);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="star active">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="star">&#9734;</span>);
            }
        }
        return stars;
    };
    return (
        <div>
            <h3>Recenzii clienti</h3>
            <Splide options={ { rewind: true, autoplay:true, pauseOnHover:true } } aria-label="slider with reviews">

            {reviews.map((review) => (
                <SplideSlide key={review.time + review.rating}>
                <div key={review.time} className={"review__item"}>
                    {/*<a href={review.author_url}>*/}
                        <div className={"review__head"}>
                            <img className={"review__author_pic"} loading='lazy' src={`https://corsproxy.io/?` + encodeURIComponent(review.profile_photo_url)} alt={review.author_name} width="50px" height="50px"/>
                            <div className={"review__author"}>
                                <h5 className={"review__author_name"}>{review.author_name}</h5>
                                <span>{review.relative_time_description}</span>
                            </div>
                        </div>
                        <p className={"review__stars"}>{renderStars(review.rating)}</p>
                        <p className={"review__text"}>{review.text}</p>

                    {/*</a>*/}
                </div>
                </SplideSlide>
            ))}
            </Splide>
        </div>
    );
};

export default GoogleReviews;