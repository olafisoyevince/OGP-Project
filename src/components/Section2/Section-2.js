import icon8 from '../../assets/images/icons8.png';
import './Style.css'
import Path from '../../routes';

function Section2() {
  return (
    <section className='section-2'>
      <div className="section">
        <div className="top">
          <div className="sideA">
            <div className="card-title">
              <button className="btn" to={Path.login}>
                Login/Register
              </button>
              <div className="Title">
                <h1>Current</h1>
                <h1
                  style={{
                    color: "#FF7D45",
                  }}
                >
                  Action Plan
                </h1>
              </div>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor, sit amet consejdusjctetur adipisicing elit.
                Architecto, neque. Quaerat velQuaeQuaerat vel rat vel,
                reprehenderit tempore error voluptatem dicta. Tenetur, quas
                excepturi.
              </p>
            </div>
          </div>
          <div className="sideB">
            <div className="cards">
              <div className="icon">
                <img src={icon8} alt="icon" />
              </div>
              <div className="Title2">
                <h3>Fiscal Transparency</h3>
                <p
                  style={{
                    color: "#ffff",
                    font: "Roboto",
                    fontSize: "12px",
                    width: "100%",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Architecto, neque. Quaerat vel, reprehenderit tempore error
                </p>
              </div>
              <div className="body">
                <ul>
                  <li>
                    <span
                      style={{
                        color: "#ffff",
                      }}
                    >
                      {" "}
                      Quaerat vel
                    </span>
                  </li>
                  <br />
                  <li>
                    <span
                      style={{
                        color: "#ffff",
                      }}
                    >
                      Qu amet consectetur
                    </span>
                  </li>
                  <br />
                  <li>
                    <span
                      style={{
                        color: "#ffff",
                      }}
                    >
                      reprehenderit uaerat vel
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
