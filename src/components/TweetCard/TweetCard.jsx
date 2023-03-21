import css from './TweetCard.module.css';
import { ReactComponent as Icon } from '../../images/picture2 1.svg';
import { ReactComponent as Logo } from '../../images/Logo.svg';
import { useEffect, useState } from 'react';

const TweetCard = () => {
  const [active, setActive] = useState(getLocalStorageActive());
  const [totalFollowers, setTotalFollowers] = useState(
    getLocalStorageFollowers()
  );

  function getLocalStorageActive() {
    return JSON.parse(localStorage.getItem('Btn')) ?? false;
  }

  function getLocalStorageFollowers() {
    return JSON.parse(localStorage.getItem('Followers')) ?? 100500;
  }

  const handleClick = () => {
    setActive(!active);
    setTotalFollowers(prevTotalFollowers =>
      active ? prevTotalFollowers - 1 : prevTotalFollowers + 1
    );
  };

  useEffect(() => {
    localStorage.setItem('Btn', active);
    localStorage.setItem('Followers', totalFollowers);
  }, [active, totalFollowers]);

  
  return (
    <div className={css.mainContainer}>
      <div className={css.container}>
        <div className={css.LogoContainer}>
          <Logo />
        </div>
        <div className={css.IconContainer}>
          <Icon />
        </div>

        <div className={css.pictureContainer}>
          <div className={css.picture}>
            <div className={css.photo}> </div>
          </div>
        </div>
        <div className={css.textContainer}>
          <p className={css.tweets}> 777 tweets</p>
          <p className={css.folowers}>
            {totalFollowers.toLocaleString('en-US')} Followers
          </p>
          <button
            onClick={handleClick}
            className={active ? 'active' : 'btn'}
            type="button"
          >
            {active ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
