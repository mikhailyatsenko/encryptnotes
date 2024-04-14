export const AboutPage = () => {
  return (
    <section id="decode">
      <div className="container">
        <div className="text-center">
          <h2 className="fw-light">Encrypt notes is a pet project.</h2>
          <p>The service is hosted on a free server, which does not always work quickly.</p>
          <p>Backend source code:</p>
          <div className="mb-4 col-md-6 alert alert-info mx-auto">
            <strong>
              <a
                href="https://github.com/mikhailyatsenko/encryptnotes_backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/mikhailyatsenko/encryptnotes_backend
              </a>
            </strong>
          </div>
          <p>Frontend source code:</p>
          <div className="mb-4 col-md-6 alert alert-info mx-auto">
            <strong>
              <a href="https://github.com/mikhailyatsenko/encryptnotes" target="_blank" rel="noopener noreferrer">
                github.com/mikhailyatsenko/encryptnotes
              </a>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
