import languages from "../data/languages";
import Accordion from "./Accordion";

export default function AccordianList() {
    return (
        <div>
            {languages.map((language) => (
                <Accordion key={language.id} title={language.title} description={language.description} />
            ))}
        </div>
    );
}