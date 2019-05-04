import React from 'react'
import API from '../../../util/API'

class Profiles extends React.Component {

  state = {
    firstname: '', 
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardname: '',
    cardnumber: '',
    expmonth: '',
    expyear: '',
    cvv: ''
  }

   handleInput = event => {
        event.preventDefault()
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
      }

      handleProfile = (event) => {
        event.preventDefault()
        const { firstname, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv } = this.state
        API.task(firstname, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv)
      }

  render() {
  return ( 
      
        <div className="row">
  <div className="col-75">
    <div className="container">
      <form action="/action_page.php" onSubmit={this.handleProfile}>

        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" name="email" placeholder="john@example.com"/>
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" name="city" placeholder="New York"/>

            <div className="row">
              <div className="col-50">
                <label for="state">State</label>
                <input type="text" name="state" placeholder="NY"/>
              </div>
              <div className="col-50">
                <label for="zip">Zip</label>
                <input type="text" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
              <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" name="expmonth" placeholder="September"/>

            <div className="row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" name="expyear" placeholder="2018"/>
                <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
                </label>
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" name="cvv" placeholder="352"/>
                <button type="button" className="btn btn-success">+New Fake</button>
              </div>
            </div>
            <input type="text" placeholder="Profile Name"/>
          </div>
        </div>
      </form>
      <button type="button" class="btn btn-success">Save Profile!</button>
    </div>
  </div>
</div>
    
     )}
}
 
export default Profiles