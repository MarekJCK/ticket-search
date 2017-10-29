import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

import Form from 'components/Form'
import Flights from 'components/Flights'

const API_ENDPOINT = 'https://api.skypicker.com/flights?v=2&locale=en&'

export default class AppContainer extends Component {

  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.onFromChange = this.onFromChange.bind(this)
    this.onToChange = this.onToChange.bind(this)
    this.onFromDateChange = this.onFromDateChange.bind(this)
    this.onToDateChange = this.onToDateChange.bind(this)

    this.state = {
      currency: 'EUR',
      flights: [],
      isFormLoading: false,
      from: '',
      to: '',
      fromDate: '',
      toDate: ''
    }
  }

  onSubmit(event) {
    event.preventDefault();

    if (!this.validateForm()) {
      alert('One or more fields are empty')
      return false;
    }

    const {
      from,
      to,
      fromDate,
      toDate
    } = this.state

    const formatedFromDate = moment(fromDate).format('DD/MM/YYYY')
    const formatedToDate = moment(toDate).format('DD/MM/YYYY')

    this.setState({ isFormLoading: true })

    axios.get(`${API_ENDPOINT}&flyFrom=${from}&to=${to}&dateFrom=${formatedFromDate}&dateTo=${formatedFromDate}&typeFlight=return&returnFrom=${formatedToDate}&returnTo=${formatedToDate}`)
      .then(response => {
        this.setState({
          flights: response.data.data,
          isFormLoading: false,
          currency: response.data.currency
        })

      })
  }

  onFromChange(event) {
    this.setState({
      from: event.target.value
    })
  }

  onToChange(event) {
    this.setState({
      to: event.target.value
    })
  }

  onFromDateChange(event) {
    this.setState({
      fromDate: event.target.value
    })
  }

  onToDateChange(event) {
    this.setState({
      toDate: event.target.value
    })
  }

  validateForm() {
    const {
      from,
      to,
      fromDate,
      toDate
    } = this.state

    return from.length && to.length && fromDate.length && toDate.length
  }

  render() {
    const { isFormLoading, flights, currency } = this.state

    return (
      <div>
        <Form
          onSubmit={ this.onSubmit }
          isFormLoading={ isFormLoading }
          onFromChange={ this.onFromChange }
          onToChange={ this.onToChange }
          onFromDateChange={ this.onFromDateChange }
          onToDateChange={ this.onToDateChange }
        />      
        <Flights flights={ flights } currency={ currency } />
      </div>
    )
  }

}
