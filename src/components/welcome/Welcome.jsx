// Welcome.js
import backgroundImage from './communication-02.jpg';
import './Welcome.css';

const Welcome = ({ t }) => {
  return (
    <div className="welcome">
      <div className="image-container">
        <img src={backgroundImage} alt='img' className="background-image" />
        <div className="image-overlay">
          <div className="text-container">
            <h1>{t('GVS')}</h1>
            <p>
              {t('GVS performs research, development, production & engineering in the field of electronics. GVS was founded 1988 in Belgrade. Basic activity is electronic equipment for communications, power supply systems and real-time control systems. With its products, GVS offers a full range of services with complete turn-key solutions. GVS products and services are of the highest quality.')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
