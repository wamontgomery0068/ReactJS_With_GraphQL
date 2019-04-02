import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);

        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition: 'right'
    }

    render(){
        return(
            <div className = "Chart_Container">
                <Bar
                    data={this.state.chartData}
                    height={100}
                    options={{ 
                        title:{
                            display: this.props.displayTitle,
                            text: 'Top 5 MLB Stadiums According to Seating Capacity',
                            fontSize: 40
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        } 
                    }}
                />
            </div>
        )
    }
}

export default Chart;