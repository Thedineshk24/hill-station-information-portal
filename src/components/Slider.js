import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container
} from "reactstrap";

const items = [
    {
        src: "https://images.pexels.com/photos/4786198/pexels-photo-4786198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        altText: "Indian Flag",
        caption: "india"
    },
    {
        src: "https://images.unsplash.com/photo-1580795497004-70a347ea4fc3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto",
        altText: "shimla",
        caption: "shimla"
    },
    {
        src: "https://images.unsplash.com/photo-1561567668-3716831ac029?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto",
        altText: "mussoorie",
        caption: "mussoorie"
    }
];

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const gotoIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return(
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src} >

                <img src={item.src} alt={item.altText} className="img-thumbnail"/>
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        )
    })

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="slider"
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={gotoIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>        
    )
}

export default Slider
