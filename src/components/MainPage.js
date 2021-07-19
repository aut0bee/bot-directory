import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

export class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className='tc'>
        <Header count={this.state.count}/>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>loading</h1> :
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage
