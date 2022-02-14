import React, {FC} from 'react';
import {Carousel} from 'react-bootstrap';
import YouTube from 'react-youtube';

import {settings} from '../../constants';
import {IVideo} from '../../interfaces';

interface IProps {
    videos: IVideo[];
}

const Videos: FC<IProps> = ({videos}) => {
    return (
        <Carousel style={{width: settings.widthVideos + 'px'}} interval={settings.intervalForVideos}>
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