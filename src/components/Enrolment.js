import React from 'react';
//import ReactDOM from 'react-dom';
import { Container, Table, TableBody, TableHead } from 'mdbreact';
import Nursery from '../NURSERY-FORM.pdf';
import College from '../COLLEGE-FORM.pdf';
import Institute from '../INSTITUTE-FORM.pdf';


class EnrolPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
    return (
        <Container className="mt-4" id="container">
          <section>
              <h2 className="h1-responsive font-weight-bold text-center my-5">ENROLMENT FORMS</h2>
              <p>Admission forms can be obtained from the school admin office or downloaded from our website, filled and returned to the school. other information will be passed across to applicants as soon as forms are received.</p>
              <br/>
              <p>To download form, click on the corresponding tab for School of interest and download the form there.</p>
              <Table>
                  <TableHead>
                    <tr>
                      <th>SCHOOL</th>
                      <th>FORM</th>
                    </tr>
                  </TableHead>
                  <TableBody>
                    <tr>
                      <td><h4>Nursery & Primary</h4></td>
                      <td>
                          <button type="button" className="btn btn-info waves-effect waves-light">
                              <a  className="white-text" href = {Nursery} target = "_blank" rel="noopener noreferrer">
                                  Download admission form
                              </a>
                          </button>
                      </td>
                    </tr>
                    <tr>
                      <td><h4>Comprehensive College</h4></td>
                      <td>
                          <button type="button" className="btn btn-info waves-effect waves-light">
                              <a  className="white-text" href = {College} target = "_blank" rel="noopener noreferrer">
                                  Download admission form
                              </a>
                          </button>
                      </td>
                    </tr>
                    <tr>
                      <td><h4>Islamic Institute</h4></td>
                      <td>
                          <button type="button" className="btn btn-info waves-effect waves-light">
                              <a  className="white-text" href = {Institute} target = "_blank" rel="noopener noreferrer">
                                  Download admission form
                              </a>
                          </button>
                      </td>
                    </tr>
                  </TableBody>
                </Table>

                <br/>
              <h2 className="h1-responsive font-weight-bold text-center my-5">SCHOOL ACCOUNT NUMBER</h2>
              <p className="text-center"></p>
              <Table>
                  <TableHead>
                    <tr>
                      <th>ACCOUNT NAME</th>
                      <th>#</th>
                      <th>BANK</th>
                    </tr>
                  </TableHead>
                  <TableBody>
                    <tr>
                      <td><strong><h3>Islamic Comprehensive College Ede</h3></strong></td>
                      <td><strong><h3>2032897311</h3></strong></td>
                      <td><strong><h3>First Bank</h3></strong></td>
                    </tr>
                  </TableBody>
                </Table>
              <br/>
          </section>
        </Container>
    );
  }
}

export default EnrolPage;