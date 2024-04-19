import cls from './AboutPage.module.scss';

export const AboutPage = () => {
  return (
    <section id="decode">
      <div className="container">
        <div className={cls.AboutPage}>
          <h2>Encrypt notes is a pet project.</h2>
          <p>The service is hosted on a free server, which does not always work quickly.</p>
          <p>Backend source code:</p>
          <strong>
            <a href="https://github.com/mikhailyatsenko/encryptnotes_backend" target="_blank" rel="noopener noreferrer">
              github.com/mikhailyatsenko/encryptnotes_backend
            </a>
          </strong>
          <p>Frontend source code:</p>
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
