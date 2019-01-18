import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import Title from '../atoms/Title';

class EditableTitle extends Component {
    constructor(props) {
        super(props);
        const { defaultTitle } = props;
        this.state = {
            titleIsEditable: false,
            title: defaultTitle
        };
        this.makeTitleEditable = this.makeTitleEditable.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }

    makeTitleEditable(event) {
        this.setState({
            titleIsEditable: true
        });
    };

    updateTitle(event) {
        const newTitle = event.target.previousElementSibling.value;
        this.setState({
            title: newTitle, 
            titleIsEditable: false
        });
    }

    render() {
        const { titleIsEditable, title } = this.state;

        return <div>
            {titleIsEditable
            ?   <Fragment>
                    <input type='text' defaultValue={title}></input>
                    <Button onClick={this.updateTitle}>Submit</Button>
                </Fragment>
            :   <Fragment>
                    <Title>{title}</Title>
                    <Button onClick={this.makeTitleEditable}>Reset</Button>
                </Fragment>
            }
        </div>
    }

}

EditableTitle.propTypes = {
    defaultTitle: PropTypes.string.isRequired
}

export default EditableTitle;