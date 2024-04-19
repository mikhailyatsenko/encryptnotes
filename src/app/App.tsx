import { Navbar } from 'widgets/Navbar';
import AppRouter from './providers/router/AppRouter';
import { Footer } from 'widgets/Footer';
import { useEffect, useState } from 'react';
import Spinner from 'shared/ui/Spinner/Spinner';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false); // Когда все загружено, скрываем прелоадер
    };

    return () => {
      window.onload = null; // Очистка обработчика при размонтировании компонента
    };
  }, []);

  return loading ? (
    <Spinner />
  ) : (
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
    </>
  );
};

export default App;
