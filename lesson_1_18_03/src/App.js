import './App.css';
import Content from './components/Content/Content';
import { offer, rent } from './data/data';

const App = () => {
  return (
    <section className='App'>
      {/* <Content image={offer.image} title={offer.title} /> */}
      <Content obj={offer} />
      <Content obj={rent} />
    </section>
  );
};

export default App;
