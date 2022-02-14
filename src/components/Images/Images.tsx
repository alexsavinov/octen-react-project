import React, {FC} from 'react';
import {Tabs, Tab, Carousel} from 'react-bootstrap';

import {settings, urls} from '../../constants';
import {IImageObj} from '../../interfaces';

interface IProps {
    imageObj: IImageObj;
}

const Images: FC<IProps> = ({imageObj}) => {

    return (
        <Tabs defaultActiveKey='backdrops' id='uncontrolled-tab-example' className='mb-3' variant={'pills'}>
            <Tab eventKey='backdrops' title='Backdrops' >
                <Carousel style={{width: settings.widthImages + 'px'}} interval={settings.intervalForImages}>
                    {imageObj.backdrops.slice(0, settings.numberOfImages).map(image =>
                        <Carousel.Item key={image.file_path}>
                            <img className='d-block w-100' src={urls.images500 + image.file_path} alt=''/>
                        </Carousel.Item>
                    )}
                </Carousel>
            </Tab>
            <Tab eventKey='logos' title='Logos'>
                <Carousel style={{width: settings.widthImages + 'px'}} interval={settings.intervalForImages}>
                {imageObj.logos.slice(0, settings.numberOfImages).map(image =>
                    <Carousel.Item key={image.file_path}>
                        <img className='d-block w-100' src={urls.images500 + image.file_path} alt=''/>
                    </Carousel.Item>
                )}
                </Carousel>
            </Tab>
            <Tab eventKey='posters' title='Posters'>
                <Carousel style={{width: settings.widthImages + 'px'}} interval={settings.intervalForImages}>
                {imageObj.posters.slice(0, settings.numberOfImages).map(image =>
                    <Carousel.Item key={image.file_path}>
                        <img className='d-block w-100' src={urls.images500 + image.file_path} alt=''/>
                    </Carousel.Item>
                )}
                </Carousel>
            </Tab>
        </Tabs>
    );
};

export {Images};
