import HomePage from './home';
import UnderConstructionPage from './under-contruction';

const Home = process.env.ENV === 'DEV' ? HomePage : UnderConstructionPage;

export default Home;
