import cls from './AboutPage.module.scss';

export const AboutPage = () => {
  return (
    <section id="decode">
      <div className="container">
        <div className={cls.AboutPage}>
          <h2>Encrypt notes is a pet project.</h2>

          <h3>Backend source code:</h3>
          <strong>
            <a href="https://github.com/mikhailyatsenko/encryptnotes_backend" target="_blank" rel="noopener noreferrer">
              github.com/mikhailyatsenko/encryptnotes_backend
            </a>
          </strong>
          <h3>Frontend source code:</h3>
          <strong>
            <a href="https://github.com/mikhailyatsenko/encryptnotes" target="_blank" rel="noopener noreferrer">
              github.com/mikhailyatsenko/encryptnotes
            </a>
          </strong>
        </div>
      </div>
    </section>
  );
};
