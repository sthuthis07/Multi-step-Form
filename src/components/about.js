import React from "react";

class About extends React.Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { handleChange, btcourse, cgpa, pgcourse, country } = this.props;
    return (
      <>
        <div classname="row">
          <form classname="col s14">
            <div classname="row">
              <h2>Enter your personal information:</h2>
              <div classname="input-field col s5">
                <input
                  id="btcourse"
                  type="text"
                  classname="validate"
                  onChange={handleChange("btcourse")}
                  value={btcourse}
                />
                <label htmlFor="btcourse" className="active">
                  B.Tech Course
                </label>
              </div>
              <div classname="input-field col s5">
                <input
                  id="cgpa"
                  type="text"
                  class="validate"
                  onChange={handleChange("cgpa")}
                  value={cgpa}
                />
                <label htmlFor="cgpa" className="active">
                  CGPA
                </label>
              </div>
              <div classname="input-field col s5">
                <input
                  id="pgcourse"
                  type="text"
                  class="validate"
                  onChange={handleChange("pgcourse")}
                  value={pgcourse}
                />
                <label htmlFor="pgcourse" className="active">
                  P.G Course
                </label>
              </div>
              <div classname="input-field col s5">
                <input
                  id="country"
                  type="text"
                  class="validate"
                  onChange={handleChange("country")}
                  value={country}
                />
                <label htmlFor="country" className="active">
                  Country
                </label>
              </div>
            </div>
          </form>
        </div>
        <button
          class="btn waves-effect waves-light blue"
          type="submit"
          name="action"
          onClick={this.back}
        >
          <i classname="material-icons right">Previous</i>
        </button>
        <button
          class="btn waves-effect waves-light blue"
          type="submit"
          name="action"
          onClick={this.next}
        >
          <i classname="material-icons right">Next</i>
        </button>
      </>
    );
  }
}

export default About;
