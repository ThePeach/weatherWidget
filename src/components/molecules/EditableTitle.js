import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import Title from '../atoms/Title';
import styles from './EditableTitle.module.css';

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

        return <div className={styles.wrapper}>
            {titleIsEditable
            ?   <form>
                    <input className={styles.input} type='text' defaultValue={title}></input>
                    <Button onClick={this.updateTitle} className={styles.btn}>Search</Button>
                </form>
            :   <Fragment>
                    <Title>{title}</Title>
                    <Button onClick={this.makeTitleEditable} className={styles.btn}>×</Button>
                </Fragment>
            }
        </div>
    }

}

EditableTitle.propTypes = {
    defaultTitle: PropTypes.string.isRequired
}

export default EditableTitle;