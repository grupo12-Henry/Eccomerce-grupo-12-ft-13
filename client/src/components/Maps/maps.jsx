import React from 'react';
import Iframe from 'react-iframe'
import ContactUser from '../ContactUser/ContactUser';

export const Maps = () => {
    return (<div class='d-flex ml-5 justify-content-around' >
        <div class='ml-5 mr-5'>
            <Iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11705.500149414122!2d-58.427978593933524!3d-34.58532265484562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1627364497085!5m2!1ses!2sar"
                width="400"
                height="350"
                display="flex"
                position="relative"
                style={{}}
                allowfullscreen=""
                loading="lazy" />
        </div>
        <ContactUser/>
        </div>
    )
}
export default Maps;
