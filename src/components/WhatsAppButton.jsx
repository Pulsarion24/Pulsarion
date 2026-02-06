import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <div className="dropdown">
            <button
                className="whatsapp-btn dropdown-toggle"
                type="button"
                id="floatingWhatsappDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <FaWhatsapp />
            </button>
            <ul className="dropdown-menu whatsapp-dropdown" aria-labelledby="floatingWhatsappDropdown">
                <li><a className="dropdown-item" href="https://wa.me/260777342846" target="_blank" rel="noopener noreferrer">+260 777 342 846</a></li>
                <li><a className="dropdown-item" href="https://wa.me/260977889886" target="_blank" rel="noopener noreferrer">+260 97 7889886</a></li>
            </ul>
        </div>
    );
};

export default WhatsAppButton;
