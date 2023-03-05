import { useSelector } from 'react-redux';
import { selectCardsData } from '../../store/cardsSlice';
import Card from '../Card/Card';
import Button from '../Button/Button';
function Main() {
  const cardsData = useSelector(selectCardsData);

  return (
    <main className="main">
      <section className="info section section_place_info">
        <div className="info__text-container">
          <h1 className="info__title">ПУТЕШЕСТВИЕ</h1>

          <span className="info__subtitle">на красную планету</span>
        </div>

        <ul className="info__right-container">
          {cardsData.map((card) => {
            return <Card key={card.id} {...card} />;
          })}
        </ul>
        <Button></Button>
      </section>
    </main>
  );
}
export default Main;
