import { Link } from 'react-router-dom';
import classNames from '../../utils/classNames';

const { card, cardSaidText, cardMainText, cardContainer, link, cardBonusText } =
  classNames;

function Card(props) {
  const { mainText, saidTextTop, saidTextbottom, bonusText } = props;

  return (
    <li className={card}>
      <Link className={link}>
        <div className={cardContainer}>
          <span className={cardSaidText}>{saidTextTop}</span>
          <h2 className={cardMainText}>
            {mainText}
            {bonusText ? (
              <span className={cardBonusText}>{bonusText}</span>
            ) : (
              ''
            )}
          </h2>
          <span className={cardSaidText}>{saidTextbottom}</span>
        </div>
      </Link>
    </li>
  );
}

export default Card;
