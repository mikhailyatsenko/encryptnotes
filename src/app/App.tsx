import { Navbar } from 'widgets/Navbar';
import AppRouter from './providers/router/AppRouter';
import { Footer } from 'widgets/Footer';

const App = () => {
  <>
    <nav>
      <Navbar />
    </nav>
    <main>
      <AppRouter />
    </main>
    <footer>
      <Footer />
    </footer>
  </>;
  // );
};

export default App;
