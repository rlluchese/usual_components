// import ButtonPage from './pages/ButtonPage';
import Accordion from '../components/Accordion'

function AccordionPage() {

  const items = [
    {
      id: 1,
      label: "Rafael",
      content: "Rafa"
    },
    {
      id: 2,
      label: "Paula",
      content: "Paulinha"
    },
    {
      id: 3,
      label: "Claudia",
      content: "Mana"
    }
  ];

  return (
    <div>
        <Accordion items={ items }/>
    </div>
  );
}

export default AccordionPage;
