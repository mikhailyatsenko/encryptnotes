import { NavLink } from 'react-router-dom';
import { useScramble } from 'use-scramble';
import cls from './MainPage.module.scss';

export const MainPage = () => {
  const { ref } = useScramble({
    text: 'is a service for encrypting short notes',
    range: [92, 130],
    speed: 0.2,
    step: 2,
    scramble: 8,
    seed: 5,
  });
  return (
    <section id="main">
      <div className="container">
        <div className={cls.mainWrapper}>
          <div className={cls.title}>
            <h1>
              <strong>«Encrypt notes»</strong>
            </h1>
            <h1 className={cls.subtilte} ref={ref} />
            <h1 className={cls.invisible}>is a service for encrypting short notes</h1>
          </div>

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
