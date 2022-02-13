import React, {FC, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import {IVideo} from "../../interfaces";
import YouTube from "react-youtube";

interface IProps {
    videos: IVideo[];
}

const Videos: FC<IProps> = ({videos}) => {
    return (

        <Carousel style={{width: "640px"}} interval={10000}>
            {videos.slice(0, 5).map(video =>
                video.site === 'YouTube' &&
                <Carousel.Item key={video.id}>
                    <YouTube videoId={video.key}/>
                </Carousel.Item>
            )}
        </Carousel>
    );
};

export {Videos};