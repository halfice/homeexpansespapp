import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Button from 'react-bootstrap/Button'
class expanse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Amount: 0,
      Detail: "",
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:8000/smartapi/sms/ea442f52-ccf0-498c-98c2-48209a17bbba')
      .then(res => {
        this.setState({
          books: res.data.recordset[0].Data,//.data[0][0].Data,
          Guid: "ea442f52-ccf0-498c-98c2-48209a17bbba",
          CurrentDate: this.getdate(),

        })
      })
      .catch(err => {
        console.log(err + 'Error from ShowBookList');
      })

  };

  handleChange(evt) {
    this.setState({ Amount: evt.target.value });
  }

  handleChangetxtarea(evt) {
    this.setState({
      Detail: evt.target.value,
    });
  }


  onClickUpdate() {

   // alert(this.state.Amount);
   // alert(this.state.Detail);
    this.gotoSharEPonit();
    
   
  }
  gotoSharEPonit()
  {
   /* 
    var spauth = require('node-sp-auth');
  var request = require('request-promise');
    //var url="https://azizi021.sharepoint.com/sites/MyPlanner";
    spauth.getAuth('https://azizi021.sharepoint.com/sites/MyPlanner', {
      clientId: 'a13626d1-0c45-4c58-bd86-a7e79e4d4a9b',
      clientSecret: 'ZbGKom7FzE1eg34Cp7TrhBYBD13VIWTeAQ1P/o9Nwlw='
    })
      .then(data => {
        var headers = data.headers;
        headers['Accept'] = 'application/json;odata=verbose';
        var UrlToHit = `https://azizi021.sharepoint.com/sites/MyPlanner/_api/lists/getbytitle('HomeExpanse')/items`;
        request.get({
          url: UrlToHit,
          headers: headers,
          json: true
        }).then(response => {
          var varClientName = "N/A"
          if (response.d.results != null && response.d.results != "") {
            //if (response.d.results.length > 0) {
             // varClientName = response.d.results[0]["Title"];
             console.log(response.d.results);
            }
          });
  });
  */

}


  render() {

    return (
      <div className="container app">



        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Home Expanse Portal 2020</h2>
            <h3>{this.state.CurrentDate}</h3>
          </div>


        </div>

        <Container>
          <Row>
            <Col sm={1}> <label>Amount </label></Col>
            <Col sm={11}><input type="text" placeholder="Enter Amount" className="txtcss" onChange={this.handleChange.bind(this)} /></Col>
          </Row>
          <Row>
            <Col sm={1}> <label>Detail </label></Col>
            <Col sm={11}><textarea rows="4" cols="50" onChange={this.handleChangetxtarea.bind(this)} className="textareacss" >
            </textarea></Col>
          </Row>

          <Row>
            <Col sm={12}>
              <hr></hr>
              <div className="buttonclass" >
                <div className="list">
                  <Button variant="primary" onClick={this.onClickUpdate.bind(this)}>Add Expanse</Button>
                </div>
              </div>

            </Col>
          </Row>
        </Container>



        <div>
        </div>

        <hr></hr>
      </div>
    );
  }
}

export default expanse;