import { NavLink } from 'react-router-dom';

export const MainPage = () => {
  return (
    <section id="decode">
      <div className="container">
        <div className="col-lg-6 text-center">
          <h1 className="fw-light">«Encrypt notes» is a service for encrypting short notes.</h1>
        </div>

        <button className="fw-light">
          <NavLink to="/create">Create encrypted note</NavLink>
        </button>

        <button className="fw-light">
          <NavLink to="/note">Decode note</NavLink>
        </button>
      </div>
    </section>
  );
};
