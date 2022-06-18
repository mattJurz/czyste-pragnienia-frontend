import HomePage from './home';
import UnderConstructionPage from './under-contruction';

const Home =
  process.env.NEXT_PUBLIC_ENV === 'DEV' ? HomePage : UnderConstructionPage;

export default Home;
