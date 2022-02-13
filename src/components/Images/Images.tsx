import React, {FC} from 'react';
import {Carousel} from 'react-bootstrap';
import {IImageObj} from "../../interfaces";
import {urls} from "../../constants";
import {Tabs, Tab} from 'react-bootstrap';

interface IProps {
    imageObj: IImageObj;
}

const Images: FC<IProps> = ({imageObj}) => {

    return (
        <Tabs defaultActiveKey="backdrops" id="uncontrolled-tab-example" className="mb-3" variant={'pills'}>
            <Tab eventKey="backdrops" title="Backdrops" >
                <Carousel style={{width: "500px"}} interval={6000}>
                    {imageObj.backdrops.slice(0, 5).map(image =>
                        <Carousel.Item key={image.file_path}>
                            <img className="d-block w-100" src={urls.images500 + image.file_path} alt=""/>
                        </Carousel.Item>
                    )}
                </Carousel>
            </Tab>
            <Tab eventKey="logos" title="Logos">
                <Carousel style={{width: "500px"}} interval={10000}>
                {imageObj.logos.slice(0, 5).map(image =>
                    <Carousel.Item key={image.file_path}>
                        <img className="d-block w-100" src={urls.images500 + image.file_path} alt=""/>
                    </Carousel.Item>
                )}
                </Carousel>
            </Tab>
            <Tab eventKey="posters" title="Posters">
                <Carousel style={{width: "500px"}} interval={10000}>
                {imageObj.posters.slice(0, 5).map(image =>
                    <Carousel.Item key={image.file_path}>
                        <img className="d-block w-100" src={urls.images500 + image.file_path} alt=""/>
                    </Carousel.Item>
                )}
                </Carousel>
            </Tab>
        </Tabs>
    );
};

export {Images};