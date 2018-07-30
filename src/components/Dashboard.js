import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/shapesActions'

class Dashboard extends React.Component {
    render() {
        let area;
        let totalArea = 0;
        const shapes = this.props.shapes.map((shape, i) => {

            shape.title === 'rectangle' ? area = shape.width * shape.height :
                shape.title === 'triangle' ? area = (shape.width * shape.height) / 2 :
                    area = shape.width * shape.width * 3.14;
            totalArea += area;
            //  console.log(totalArea);
            return <tbody key={i}>
            <tr>
                <td>{shape.title}<span onClick={() => this.props.removeShape(i)}>x</span></td>
                <td className="center-item">{shape.color}</td>
                <td>{area}</td>
            </tr>
            </tbody>
        });

        return (
            <div>
                <h3>Dashboard</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Shape</th>
                        <th className="center-item">Color</th>
                        <th>Area</th>
                    </tr>
                    </thead>
                    {shapes}
                </table>
                <h4>Amount of shapes: {this.props.shapes.length}</h4>
                <h4>Total area: {totalArea.toFixed(2)}</h4>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shapes: state.shapes
    }
};


export default connect(mapStateToProps, actions)(Dashboard)