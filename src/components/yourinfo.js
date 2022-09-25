import React from "react";

class Yourinfo extends React.Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { firstName, lastName, btcourse, cgpa, pgcourse, country } =
      this.props;
    return (
      <>
        <h2> This is the information you have entered</h2>
        <div
          className="info"
          style={{
            padding: "3rem",
            fontWeight: "bolder",
            lineHeight: "4rem",
            fontSize: "30px",
          }}
        >
          First Name:{firstName}
          <br></br>
          Last Name:{lastName}
          <br></br>
          B.Tech:{btcourse}
          <br></br>
          CGPA:{cgpa}
          <br></br>
          P.G course:{pgcourse}
          <br></br>
          Country:{country}
          <br></br>
        </div>
        <button
          class="btn waves-effect waves-light blue"
          type="submit"
          name="action"
          onClick={this.back}
        >
          <i classname="material-icons right">Previous</i>
        </button>
      </>
    );
  }
}
export default Yourinfo;
