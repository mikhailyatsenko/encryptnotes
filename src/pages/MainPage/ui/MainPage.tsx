import { NavLink } from 'react-router-dom';
import { useScramble } from 'use-scramble';
import cls from './MainPage.module.scss';

export const MainPage = () => {
  const { ref } = useScramble({
    text: 'is a service for encrypting short notes',
    speed: 0.2,
    tick: 1,
    step: 2,
    scramble: 2,
    seed: 0,
  });
  return (
    <section id="main">
      <div className="container">
        <div className={cls.mainWrapper}>
          <h1>
            <strong className={cls.name}>«Encrypt notes»</strong>
          </h1>
          <h1 ref={ref} />
          <div className={cls.buttonsWrapper}>
            <button>
              <NavLink to="/create">Create encrypted note</NavLink>
            </button>

            <button className="secondary">
              <NavLink to="/decode">Decode note</NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
