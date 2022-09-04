import React, { Component } from 'react'
import ClipboardButton from 'react-clipboard.js'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputNum: '',
      copy: 'Copy'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.convertToRoman = this.convertToRoman.bind(this)
    this.onSuccess = this.onSuccess.bind(this)
    this.resetInput = this.resetInput.bind(this)
  }

  resetInput () {
    this.setState({inputNum: '', copy: 'copy'})
  }

  onSuccess () {
    this.setState({copy: 'Copied'})
  }

  handleSubmit (e) {
    this.setState({inputNum: e.target.value})
  }

  convertToRoman (num) {
    var nums = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    var romans = ''
    var invaild = 'The input must be a Number and in the range of 1 - 4999'

    if (num > 4999 || isNaN(num) || num === 0) {
      return invaild
    } else {
      for (var i in nums) {
        if (nums.hasOwnProperty(i)) {
          while (num >= nums[i]) {
            romans += i
            num -= nums[i]
          }
        }
      }
      return romans
    }
  }
  render () {
    const submitDisable = !this.state.inputNum
    return (
      <div className='container'>
        <div className='span12'>
          <h1>Roman Number Converter</h1>
          <div className='input'>
            <input
              className='textBox'
              placeholder='The input must be in the range of 1 - 4999'
              type='text'
              onChange={this.handleSubmit}
              value={this.state.inputNum}
              />
          </div>
          <div className='bd-clipboard'>
            <div className='highlight'>
              <h2 id='roman'>{this.convertToRoman(this.state.inputNum)}</h2>
            </div>
          </div>
          <ClipboardButton
            className='btn prime'
            onSuccess={this.onSuccess}
            data-clipboard-target='#roman'>{ this.state.copy }</ClipboardButton>
          <button disabled={submitDisable} className='btn prime' onClick={this.resetInput}>Reset</button>
        </div>
      </div>
    )
  }
}

export default App
