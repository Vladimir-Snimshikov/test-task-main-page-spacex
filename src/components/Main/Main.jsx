import { useSelector } from 'react-redux';
import { selectCardsData } from '../../store/cardsSlice';
import Card from '../Card/Card';
import Button from '../Button/Button';
import classNames from '../../utils/classNames';
import { useMemo } from 'react';

const {
  info,
  infoTextContainer,
  infoTitle,
  infoSubtitle,
  infoCardsContainer,
  section,
} = classNames;

function Main(porps) {
  const cardsData = useSelector(selectCardsData);
  const { text } = porps;

  const MemoizedCard = useMemo(() => {
    return (props) => <Card {...props} />;
  }, []);

  return (
    <main className="main">
      <section className={`${info} ${section}`}>
        <div className={infoTextContainer}>
          <h1 className={infoTitle}>{text.title}</h1>

          <span className={infoSubtitle}>{text.subtitle}</span>
        </div>

        <ul className={infoCardsContainer}>
          {cardsData.map((card) => {
            return <MemoizedCard key={card.id} {...card} />;
          })}
        </ul>
        <Button buttonText="Начать путешествие"></Button>
      </section>
    </main>
  );
}
export default Main;
