import React, {Component} from 'react'
import { connect } from 'react-redux'
import updateInput from '../../actions/updateInput'

class Input extends Component {
    handleChange = (e) => {
        const { updateInput } = this.props;
        updateInput(e.target.value)
    }

    renderInput = () => {
        return (
            <div>
                <input
                    onChange={this.handleChange}
                    maxLength="9"
                    minLength="1"
                    pattern="[0-9]*"
                />
            </div>
        )
    }

    render() {
        return (
            this.renderInput()
        )
    }
}

const mapStateToProps = (store) => {
    return {
        myinput: store.updateInput.input
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateInput: (input) => dispatch(updateInput(input))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input)