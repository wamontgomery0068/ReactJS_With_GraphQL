import React, { Component } from 'react';
import './App.css';


// Imported Components Below
import Chart from './components/Chart';
// Imported Components Above


class App extends Component {
  constructor(){
    super();

    this.state = {
      chartData: {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  // Function that Gets the Chart Data
  getChartData(){
    // Ajac calls here
    this.setState({
      chartData: {
        labels: ['Dodger Stadium', 'Yankee Stadium', 'Coors Field', 'Chase Field', 'Globe Life Park in Arlington'],
        datasets: [
            {
                label: 'Seating Capacity',
                data: [
                    56000,
                    52325,
                    49469,
                    48633,
                    48114
                ],
                backgroundColor:[
                    'rgb(0, 90, 156)',
                    'rgb(19, 36, 72)',
                    'rgb(74, 60, 125)',
                    'rgb(255, 89, 16)',
                    'rgb(190, 15, 52)'
                ]
            }
        ]
    }
    })
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} legendPosition="bottom" />
      </div>
    );
  }
}

export default App;
