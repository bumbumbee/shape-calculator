import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/shapesActions'

class Calculator extends React.Component {
    state = {
        title: '',
        color: '',
        width: '',
        height: '',
        radius: '',
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    submit = (e) => {
        e.preventDefault();
        const {title, color, width, height, radius} = this.state;
        const shape = {title, color, width, height, radius};
        this.props.addShape(shape)
    };

    render() {
        return (
            <div>
                <h3>Insert shape:</h3>
                <form onSubmit={this.submit}>

                    <select name="title"
                            onChange={this.handleChange}
                            value={this.state.title}>
                        <option value='' disabled>Title</option>
                        <option>triangle</option>
                        <option>rectangle</option>
                        <option>circle</option>
                    </select>

                    <select name="color"
                            onChange={this.handleChange}
                            value={this.state.color}>
                        <option value='' disabled>Color</option>
                        <option>red</option>
                        <option>green</option>
                        <option>blue</option>
                    </select>

                    <input type="number" placeholder='width/radius' name='width'
                           onChange={this.handleChange}
                           value={this.state.width}/>

                    <input type="number" placeholder='height' name='height'
                           onChange={this.handleChange}
                           value={this.state.height}/>

                    <button>Submit</button>
                </form>

                <div className="shape">
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shapes: state.shapes
    }
};

export default connect(mapStateToProps, actions)(Calculator)