import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {buttonStatus: true}

  onClickButton = () => {
    this.setState(prevStatus => ({buttonStatus: !prevStatus.buttonStatus}))
  }

  render() {
    const {buttonStatus} = this.state
    const mode = buttonStatus ? 'dark' : 'light'
    const buttonText = buttonStatus ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="page-container">
        <div className={`card ${mode}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
