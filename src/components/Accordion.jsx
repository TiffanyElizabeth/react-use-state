import { useState } from "react";

export default function Accordion({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((currentStateIsOpen) => !currentStateIsOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-title">
                <h1>{title}</h1>
                <button className="accordion-button" onClick={toggleAccordion}>
                    {isOpen ? "-" : "+"}
                </button>
            </div>
            {isOpen && <div>{description}</div>}
        </div>
    );
}