import React, {  useRef} from 'react'
import { style } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { Game, MainComponent } from '../../components';
import { useThemeContext } from '../../context/theme/theme';
import { useLanguageContext } from '../../context/localization/localization';


function Home() {
  const navigate = useNavigate();
  const {language}=useLanguageContext();
  const {theme}=useThemeContext();
  const classes = style(theme);
//Butona basıldığında /game url yönlendirmesi yapmamı sağlayan fonksiyon
  //const [karsioyuncu, setKarsioyuncu] = useState(false);

  //useffect:React'in en önemli hook'larından biridir ve fonksiyonel bileşenlerde yan etkileri (side effects) yönetmek için kullanılır. Yan etkiler, bileşenin yaşam döngüsü boyunca gerçekleşen işlemleri ifade eder, örneğin veri çekme, DOM manipülasyonu, abonelikleri başlatma veya temizleme gibi.


  //useRef hook'u, React bileşenlerinde DOM elementlerine veya başka değerlere doğrudan erişim sağlamak ve bileşenin yaşam döngüsü boyunca değişmeyecek bir referans (veya değer) oluşturmak için kullanılır.
  const startbutton = useRef<HTMLDivElement>(null);
  const gameComponent = useRef<HTMLDivElement>(null);


  
  const searchPlayers = () => {
    if (startbutton.current)//Bu current özelliği, referans alınan DOM elementine erişim sağlar. Bileşen render edildikten sonra current, referans verdiğiniz DOM elemanını içerir.
      startbutton.current.style.display = "none";

        //backende gidecek loading çıkacak 

    if (gameComponent.current)
      gameComponent.current.style.display = "block";
  }

  return (
    <MainComponent>
      <div ref={startbutton} className={classes.searchForPlayers}>
        <button onClick={searchPlayers}>
          <FontAwesomeIcon icon={faPlay} />
          <h1>{language.searchPlayers}</h1>
        </button>
      </div>

      <div className={classes.gameComponent} ref={gameComponent} >
        <Game></Game>
      </div>
    </MainComponent>

  )
}

export default Home