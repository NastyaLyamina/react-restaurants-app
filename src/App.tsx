import { RestaurantPage } from './pages/RestaurantPage';
import './styles.css';

function App() {
  return (
    <>
      <main>
        <RestaurantPage />
      </main>

      <footer className="footer">
        <p>Privacy Policy</p>
        <p className="corporation">2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </>
  );
}

export default App;
