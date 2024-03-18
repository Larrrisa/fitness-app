import image from "./to_be_2_card.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <p>Скидка действует:</p>
        <div className="timer">
          <p className="clock">
            09<span className="minutes">минут</span> :59
            <span className="seconds">секунд</span>
          </p>
        </div>
      </div>
      <div className="main">
        <h1>Выберите подходящий тарифный план</h1>
        <div className="offer">
          <div>
            <img src={image} alt="man image" />
          </div>
          <div className="info">
            <div className="info__cards">
              <div className="info__card">
                <p className="info__card__duration">1 недел</p>
                <div className="info__card__prices">
                  <p className="info__card__price">699&#8381;</p>
                  <p className="info__card__price-old">999&#8381;</p>
                </div>
                <p className="info__card__motto">Чтобы просто начать 👍🏻</p>
                <span>-30%</span>
              </div>
              <div className="info__card">
                <p className="info__card__duration">1 месяц</p>
                <div className="info__card__prices">
                  <p className="info__card__price">999&#8381;</p>
                  <p className="info__card__price-old">1690&#8381;</p>
                </div>
                <p className="info__card__motto">Привести тело в порядок 💪🏻</p>
                <span>-40%</span>
              </div>
              <div className="info__card">
                <p className="info__card__duration">3 месяца</p>
                <div className="info__card__prices">
                  <p className="info__card__price">2990&#8381;</p>
                  <p className="info__card__price-old">5990&#8381;</p>
                </div>
                <p className="info__card__motto">Изменить образ жизни 🔥</p>
                <span>-50%</span>
              </div>
            </div>
            <div>
              <p>Навсегда</p>
              <p>5990&#8381;</p>
              <p>18990&#8381;</p>
              <p>Всегда быть в форме и поддерживать своё здоровье ⭐️</p>
            </div>
            <p>
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
              чем за 1 месяц
            </p>
            <div>
              <input type="checkbox"></input>
              <p>
                Я соглашаюсь с Правилами сервиса и условиями Публичной оферты.
              </p>
            </div>
            <button>Купить</button>
            <p>
              Нажимая «Купить», Пользователь соглашается на автоматическое
              списание денежных средств по истечению купленного периода.
              Дальнейшие списания по тарифам участвующим в акции осуществляются
              по полной стоимости согласно оферте.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
