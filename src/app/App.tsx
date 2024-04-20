import { Navbar } from 'widgets/Navbar';
import AppRouter from './providers/router/AppRouter';
import { Footer } from 'widgets/Footer';
// import { useEffect, useState } from 'react';
// import Spinner from 'shared/ui/Spinner/Spinner';

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   console.log(loading, 'in useeffect');
  //   const handleLoad = () => {
  //     setLoading(false);
  //     console.log(loading, 'in handleLoad');
  //   };

  //   window.addEventListener('load', handleLoad);

  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, [loading]);
  // console.log(loading, 'outside useeffect');
  // return loading ? (
  //   <Spinner />
  // ) : (
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
