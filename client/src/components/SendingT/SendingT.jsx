// import React, { Component } from 'react';

// class Sending extends Component {

//   state = {
//     text: {
//       recipient: '',
//       textmessage: ''
//     }
//   }

//   sendText = () => {
//     const { text } = this.state;
//     //pass text message GET variables via query string
//     fetch(`http://localhost:3000/admin/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
//     .catch(err => console.error(err))
//   }

//   render() {
//     const { text } = this.state;
//     const spacer = {
//       margin: 8
//     }
//     const textArea = {
//       borderRadius: 4
//     }
//     return (
//       <div >
//         <div style={{ marginTop: 10 }} >
//           <h2> Send Text Message </h2>
//           <label> Your Phone Number </label>
//           <br />
//           <input value={text.recipient}
//             onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
//           <div style={spacer} />
//           <label> Message </label>
//           <br />
//           <textarea rows={3} value={text.textmessage} style={textArea}
//             onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
//           <div style={spacer} />
//           <button onClick={this.sendText}> Send Text </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Sending;

import React, { Component } from 'react';

class Sending extends Component {

  state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  }

  sendText = () => {
    const { text } = this.state;
    //pass text message GET variables via query string
    fetch(`http://localhost:3000/admin/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err => console.error(err))
  }

  render() {
    const { text } = this.state;
    const spacer = {
      margin: 8
    }
    const textArea = {
      borderRadius: 4
    }
    return (
      <div >
        <div style={{ marginTop: 10 }} >
          <h2> Send Text Message </h2>
          <label> Your Phone Number </label>
          <br />
          <input value={text.recipient}
            onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
          <div style={spacer} />
          <label> Message </label>
          <br />
          <textarea rows={3} value={text.textmessage} style={textArea}
            onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
          <div style={spacer} />
          <button onClick={this.sendText}> Send Text </button>
        </div>
      </div>
    );
  }
}

export default Sending;