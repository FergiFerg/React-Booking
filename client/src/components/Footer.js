import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className='footer-mail'>
                <a href='mailto:bethanyd104@gmail.com'>bethanyd104@gmail.com</a>
                <a href='https://www.instagram.com/bee_achinghands/' style={{ display: 'block' }}>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        size='2x'
                        color='black'
                        style={{ height: '26px', marginTop: '2px', marginLeft: '8px' }}
                    />
                </a>
            </div>
            <div>
                <span className='footer-copyright'>
                    ©2022 by Bethany Davis
                </span>
            </div>
        </footer>
    );
};

export default Footer;
