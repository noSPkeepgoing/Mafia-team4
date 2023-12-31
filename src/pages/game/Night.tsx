import styles from '@styles/pages/night.module.scss';
import GameHeader from '@components/common/GameHeader';
import { useSearchParams } from 'react-router-dom';

const Night = () => {
  const [searchParams] = useSearchParams();
  const pocketId = searchParams.get('pocketId');
  const chatId = searchParams.get('chatId');

  return (
    <div className={styles.night}>
      <GameHeader
        title=""
        timer={5}
        pocketId={pocketId}
        next="hanging"
        chatId={chatId}
      />
      <div className={styles.night__text}>
        <span>
          밤이 <br /> 되었습니다...
        </span>
      </div>
      <div className={styles.night__img}></div>
    </div>
  );
};

export default Night;
