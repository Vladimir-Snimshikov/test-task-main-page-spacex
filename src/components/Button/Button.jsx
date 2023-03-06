import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from '../../utils/classNames';

const { link, button, buttonSpan } = classNames;

function Button(props) {
  const { buttonText } = props;
  const [spans, setSpans] = useState([
    <span key={1} className={buttonSpan}></span>,
    <span key={2} className={buttonSpan}></span>,
    <span key={3} className={buttonSpan}></span>,
    <span key={4} className={buttonSpan}></span>,
  ]);

  return (
    <Link to="#" className={`${button} ${link}`}>
      {spans}

      {buttonText}
    </Link>
  );
}
export default Button;
