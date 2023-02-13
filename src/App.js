import './App.css';

function App() {
  return (
    <div className="App">
      <article className='card__container'>
        <img src='https://raw.githubusercontent.com/makeitrealcamp/top-v27/a731136682131a1657d794f22f37b56bdfbb3e63/onboarding/html-css/order-summary/images/illustration-hero.svg' alt='ilustration'/>
        <section className='card__container-text'>
          <h1>Order Summary</h1>
          <p>You can now lister to millions of songs, audiobooks and podcasts on any device anywhere you like!</p>
        </section>
        <section className='charge__plan'>
          <img src='https://raw.githubusercontent.com/makeitrealcamp/top-v27/a731136682131a1657d794f22f37b56bdfbb3e63/onboarding/html-css/order-summary/images/icon-music.svg' alt='music logo'/>
          <section className='plan__time'>
            <h4>Annual Plan</h4>
            <p>$59.99/year</p>
          </section>
          <a className='change__link' href=''>Change</a>
        </section>
        <section className='footer'>
          <button className='charge__button'> Proceed to Payment</button>
          <a className='cancel__link' href=''>Cancel Order</a>
        </section>
      </article>
    </div>
  );
}

export default App;
