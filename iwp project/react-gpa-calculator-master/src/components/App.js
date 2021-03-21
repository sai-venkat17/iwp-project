import React, { Component } from "react";
import ClassItem from "./class_item";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [{ grade: 10.0, credit: 4 }]
    };
  }

  handleChange(i, change) {
    const courses = this.state.courses.slice();
    courses[i] = { ...courses[i], ...change };
    this.setState({
      courses: courses
    });
  }

  addCourse() {
    this.setState({
      courses: [...this.state.courses, { grade: 10.0 , credit: 4 }]
    });
  }
  resetCourse(){
    this.setState({
      courses: [{ grade: 10.0 , credit: 4 }]
    });
    document.getElementById("2").value="10.00";
    
  }

  render() {
    let totalCredit = 0,
      totalGrade = 0;

    const courses = this.state.courses.map((course, i) => {
      totalCredit += course.credit;
      totalGrade += course.grade * course.credit;
      return (
        <ClassItem index={i} handleChange={this.handleChange.bind(this)} />
      );
    });

    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-uppercase">GPA Calculator</h1>
            </div>
            <div className="col-md-8">
              <div className="subject-list">
                <table className="table table-striped text-center">
                  <thead>
                    <tr className="bg-dark text-light">
                      <th>Grade</th>
                      <th>Credits</th>
                      </tr>
                  </thead>
                  <tbody>{courses}</tbody>
                </table>
                <button
                  className="btn btn-dark d-block m-auto"
                  onClick={this.addCourse.bind(this)}
                >
                  Add Another Subject
                </button>
                <br></br>
                <button className="btn btn-dark d-block m-auto" onClick={this.resetCourse.bind(this)}>
                  Reset
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="score text-dark bg-light text-center">
                <p>Your Semester GPA is</p>
                <h2 className="text-primary">
                  {(totalGrade / totalCredit).toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
