import React, { Component } from 'react';
import axios from '../../hoc/Axios';
import Pdf from 'react-to-pdf';
const ref = React.createRef();
export class Registrations extends Component {
  state = {
    data: '',
    name: '',
    loading: false
  };
  render() {
    const getData = name => {
      this.setState({ loading: true });

      axios.get('/registrations/' + name + '.json').then(Response => {
        this.setState({ data: Response.data, name: name, loading: false });
      });
    };
    let Loading = (
      <div>
        <div className='spinner-border' role='status'>
          <span className='sr-only'></span>
        </div>
        &nbsp; Loading...
      </div>
    );
    return (
      <div>
        <div>
          <br />
          
          <select
            onChange={event => {
              getData(event.target.value);
            }}
          >
            <option>Choose Event</option>
            <option value="Crown's Pitch">Crown's Pitch</option>
            <option value='BGMI'>BGMI</option>
            <option value='Codewar'>Codewar 3.0</option>
            <option value="Typing">Typing</option>
            <option value='Marvel Quiz'>Marvel Quiz</option>
            <option value='Basketball 3V3'>Basketball 3V3</option>
            <option value='Beg Borrow Steal'>Beg Borrow Steal</option>
            <option value='Mr and Miss INTERFACE'>Mr and Miss INTERFACE</option>
          </select>
          <br />
          <br />
          <section ref={ref} style={{ margin: '0 auto' }}>
            <div
              className='row'
              style={{
                background: 'white',
                padding: '20px',
                textAlign: 'left',
                borderBottom: '1px solid grey'
              }}
            >
              <div className='col-3'>
                <b>Name :</b>
              </div>
              <div className='col-3'>
                <b>Team Name :</b>
              </div>
              <div className='col-3'>
                <b>Email Address :</b>
              </div>
              <div className='col-3'>
                <b>College :</b>
              </div>
              <div className='col-3'>
                <b>Mobile Number :</b>
              </div>
            </div>

            {this.state.loading ? Loading : null}
            {this.state.name === '' ? (
              <p>Please select an Event</p>
            ) : !this.state.data ? (
              <p>No Result Found</p>
            ) : null}

            {this.state.name && this.state.data
              ? Object.values(this.state.data).map((Element,index) => {
                  
                  console.log(Element)

                  return (
                    <div
                      className='row'
                      style={{
                        background: 'white',
                        padding: '20px',
                        textAlign: 'left',
                        borderBottom: '1px solid grey',
                        fontSize: '12px'
                      }}
                      key={index}
                    >
                      <div className='col-3'>{Element.name}</div>
                      <div className='col-3'>{Element.teamName!=""?Element.teamName:"NA"}</div>
                      <div className='col-3'>{Element.email}</div>
                      <div className='col-3'>{Element.college}</div>
                      <div className='col-3'>{Element.mobile}</div>
                    </div>
                  );
                })
              : null}
          </section>

          {/* brlow is commented */}

          {/* <br />
          <Pdf targetRef={ref} filename={this.state.name + '.pdf'}>
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                disabled={
                  !this.state.data && this.state.name === '' ? true : false
                }
              >
                Generate Pdf
              </button>
            )}
          </Pdf>
          <br />
          <span className='text-muted'>
            Desktop Recommended.
            <br /> Mobile Users may experience Layout Problems while generating
            pdf
          </span>
          <br />
          <br />
          
          above is commented  why?
          */}
          
        </div>
      </div>
    );
  }
}

export default Registrations;
