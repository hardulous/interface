import React, { Component } from 'react';
import Section2 from '../../Component/Sections/Section2/Section2';
import Classes from './Dialog.module.css';
import axios from '../../hoc/Axios';
export class Dialog extends Component {
  state = {
    title: 'none',
    closed: 'true',
    URL: 'default',
    data: {
      event: '',
      date: '',
      coordinators: '',
      venue: '',
      rules: '',
      prize: '',
      fees: ''
    },
    register: {
      name: '',
      teamName:'',
      email: '',
      mobile: '',
      college:'',
      firstTime:true,
    listLoading:true,
      submitted: false,
      loading: false
    },
    regIsClosed: false,
  };

  componentDidMount(){
    
    this.updateModal()

  }

  updateModal(){
    const closingDate = new Date(2022,3,6,22).getTime();
    const todayDate = new Date().getTime();
    console.log(closingDate,todayDate)
    if(todayDate >= closingDate) {
      console.log("Please closed the registration")
      this.state.regIsClosed=true
    }
  }

  componentDidUpdate(){
    
    this.updateModal()

  }

  render() {
    let Loading = (
      <div style={{color:'#fff'}}>
        <div className='spinner-border' role='status' style={{color:'#fff'}}>
          <span className='sr-only'></span>
        </div>
        &nbsp; Loading...
      </div>
    );
    const registerUser = event => {
      event.preventDefault();
      
     if (this.state.register.name!==''&&this.state.register.email!==''&&this.state.register.mobile!==''&&this.state.register.college!==''){
      if(this.state.register.mobile.length<10){
         alert("Mobile Number is invalid")
      }
      else{

        this.setState({ register: { loading: true } });
        axios
        .post('/registrations/' + this.state.title + '.json', {
          ...this.state.register
        })
        .then(Response => {
          this.setState({ register: { submitted: true, loading: false } });
        });
      }
      
     }
     
     else {
      alert("Looks like you forgot to fill something.");
  };
     }
      
    const openDialog = (title, URL) => {
      var oldClosed = this.state.closed;
      this.setState({
        register:{
          listLoading:true,
          firstTime:false
        }
      });
      axios.get('/Events.json').then(Response => {
        Object.values(Response.data).map(Element => {
          if (Element.event === title) {
            this.setState({
              data: {
                event: Element.event,
                date: Element.date,
                coordinators: Element.coordinators,
                venue: Element.venue,
                rules: Element.rules,
                prize: Element.prize,
                fees: Element.fees
              },
              register: {
                name: '',
                teamName:'',
                email: '',
                mobile: '',
                college:'',
                listLoading:false,
                submitted: false,
                loading: false
              }
            });
          }
        });
      });
      this.setState({
        title: title,
        closed: !oldClosed,
        URL: URL
      });
    };
    const closeDialog = () => {
      var oldClosed = this.state.closed;
      this.setState({
        title: 'none',
        closed: !oldClosed,
        data: {
          event: '',
          date: '',
          coordinators: '',
          venue: '',
          rules: '',
          prize: '',
          fees: ''
        }
      });
    };

    const Block = {
      transform: 'translateY(0vh)',
      opacity: '1',
      transition: 'all 0.3s ease',
      background: '#222'
    };
    const None = {
      transform: 'translateY(-100vh)',
      opacity: '0',
      transition: 'all 0.3s ease',
      background: '#222'
    };

    return (
      <>
        <Section2 Dialog={openDialog} />
        <section
          className={Classes.Dialog + ' text-center'}
          style={this.state.closed === false ? Block : None}
        >
          <div className='container'>
            <div className='row'>
              <span
                className={Classes.closeButton + ' col-2'}
                onClick={closeDialog}
                style={{ fontSize: '30px' }}
              >
                X
              </span>
            </div>
            <div className='row' style={{ border: '1px solid orange' }}>
              <div className='col-12 col-md-6'>
                <h1 style={{color:'white'}}>{this.state.title}</h1>
                <img src={this.state.URL} alt={this.state.title} />
              </div>
              <div className='col-12 col-md-6' style={{ padding: '20px' }}>
              {this.state.register.listLoading ? Loading : <pre className='text-muted' style={{ textAlign: 'left' }}>
                  <b>Date : </b> {this.state.data.date} <br />
                  <b>Coordinators : </b> {this.state.data.coordinators} <br />
                  <b>Venue : </b> {this.state.data.venue} <br />
                  <b>Rules : </b> {this.state.data.rules}<br />
                  
                  <b>Fees : </b> {this.state.data.fees}
                </pre>}

              {/* below code is for making registrration close */}
            
            
            
             
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Dialog;
