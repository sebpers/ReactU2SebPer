import React, { Component } from 'react'
import styles from './styleCard.module.css';
import PropTypes from 'prop-types';


// Show UI cards - and hold other components as children
class CardComponent extends Component {

  constructor(props) {
    super(props);
    this.toggleWindow = this.toggleWindow.bind(this);

    // State of toggle window
    this.state = {
      showHide: false
    }
  }

  // Change state True / False in this.state.toggleWindow.
  toggleWindow() {
    this.setState({ showHide: !this.state.showHide });
  }

  buttonStyle = {
    backgroundColor: '#20a5ac',
    width: 100,
    padding: 7,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    right: 30,
    borderRadius: 5,
    border: 'none'
  }


  render() {
    const info = this.state.showHide ? 'Hide Info' : 'Show Info';

    return (
        <div className={styles.myClass} >
          <React.Fragment>
            {this.props.children}
          </React.Fragment>

          {this.props.myInfo && 
            <React.Fragment>
              {/* Toggle button text, Show info / Hide info */}
              {this.state.showHide ?
              <button onClick={this.toggleWindow} style={this.buttonStyle}>
                {info}
              </button>
              :
              <button onClick={this.toggleWindow} style={this.buttonStyle}>
                {info}
              </button>}
            </React.Fragment>
          }

          {/* Toggle children - Show / hide */}
          {this.state.showHide ? <div>{this.props.myInfo}</div> : null}
        </div>
    )
  }
}

export default CardComponent

CardComponent.propTypes = {
  myInfo: PropTypes.string
}
