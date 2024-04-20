import { Navbar } from 'widgets/Navbar';
import AppRouter from './providers/router/AppRouter';
import { Footer } from 'widgets/Footer';
// import { useEffect, useState } from 'react';
// import Spinner from 'shared/ui/Spinner/Spinner';

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
