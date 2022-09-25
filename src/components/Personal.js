import React from "react";

class Personal extends React.Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange, firstName, lastName } = this.props;
    return (
      <>
        <div classname="row">
          <form classname="col s10">
            <div classname="row">
              <h2>Enter your personal information:</h2>
              <div classname="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  classname="validate"
                  onChange={handleChange("firstName")}
                  value={firstName}
                />
                <label htmlFor="first_name" className="active">
                  First Name
                </label>
              </div>
              <div classname="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  class="validate"
                  onChange={handleChange("lastName")}
                  value={lastName}
                />
                <label htmlFor="last_name" className="active">
                  Last Name
                </label>
              </div>
            </div>
          </form>
        </div>
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
export default Personal;
