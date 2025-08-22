import React from 'react'
import cards_data from '../../assets/cards/Cards_data';
import './TrendingComponent.css'
import { useRef } from 'react';


const TrendingComponent = () => {


    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -800, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: 800, behavior: "smooth" });
        }
    }

    return (
        <div className='trending-container'>
            <h2>Trending Now</h2>
            <div className='container'>
                <button onClick={() => scroll("left")}>◀</button>
                <div ref={scrollRef} className='movies-card'>
                    {cards_data.map((item, index) => {
                        return (
                            <div className="movie-card-item" key={index}>
                                <img src={item.image} alt="" />
                                <p>{index + 1}</p>
                            </div>
                        )
                    })}
                </div>
                <button onClick={() => scroll("right")}>▶</button>
            </div>
        </div>
    )
}

export default TrendingComponent