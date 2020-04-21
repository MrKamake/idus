import React from 'react';
import CoverImg from '../../images/coverimg.png';
import './CardItem.scss';
import Rating from 'react-rating';
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';

const CardItem = ({ additions }) => {
  return (
    <div className="ui_card">
      <div className="ui_card__imgcover">
        <img className="ui_card__img" src={CoverImg} alt="cover" />
      </div>
      <div className="ui_card__info">
        <span className="ui_card__label">Card Label</span>
        <span className="ui_card__title">Card Title</span>
        <div className="ui_card__foot">
          <span className="ui_card__hilight">Hilight</span>
          <span className="ui_card__cross-out">Cross out</span>
        </div>
      </div>
      {additions && (
        <div className="ui_card__rating">
          <div className="ui_rating_wrapper">
            <Rating
              className="ui_rating"
              initialRating={0}
              emptySymbol={<TiStarOutline size="15px" />}
              fullSymbol={<TiStarFullOutline size="15px" />}
            />
            {additions === 'comment' && (
              <span className="ui_card__comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardItem;
