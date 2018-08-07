import React, {Component} from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => this.setState({
    title: data.title,
    body: data.body
  }))
  }

  // componentWillMount() {
    // console.log('componentWillMount...');
  // }
//
  // componentDidUpdate() {
    // console.log('componentDidUpdate...');
  // }
//
  // componentWillUpdate() {
    // console.log('componentWillUpdate...');
  // }
//
  // // read https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705
  // componentWillReceiveProps(nextProps, nextState) {
    // console.log('componentWillReceiveProps...');
  // }

  //static getDerivedStateFromProps(nextProps, prevSate) {
    //return {
      //test: 'something'
    //}
  //}
//
  //getSnapshotBeforeUpdate(prevProps, prevState) {
    //console.log('getSnapshotBeforeUpdate');
  //}

  render() {
    const { title, body } = this.state;
    return (<div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>);
  }
}

export default Test;
