import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions";
import Button from "../atoms/Button";
import Title from "../atoms/Title";

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
  }

  updateTitle(event) {
    event.preventDefault();
    const { fetchData } = this.props;
    const newTitle = event.target.previousElementSibling.value;

    fetchData(newTitle);

    this.setState({
      title: newTitle,
      titleIsEditable: false
    });
  }

  componentDidUpdate() {
    const { title } = this.state;
    const { defaultTitle } = this.props;
    if (defaultTitle !== title) {
      this.setState({
        title: defaultTitle
      });
    }
  }

  render() {
    const { titleIsEditable, title } = this.state;

    return (
      <div className="editable-title">
        {titleIsEditable ? (
          <form>
            <input
              type="text"
              defaultValue={title}
              className="editable-title__input"
            />
            <Button
              onClick={this.updateTitle}
              className="editable-title__button"
            >
              Search
            </Button>
          </form>
        ) : (
          <Fragment>
            <Title className="editable-title__title">{title}</Title>
            <Button
              onClick={this.makeTitleEditable}
              className="editable-title__button"
            >
              ×
            </Button>
          </Fragment>
        )}
      </div>
    );
  }
}

EditableTitle.propTypes = {
  defaultTitle: PropTypes.string.isRequired
};

export default connect(
  null,
  { fetchData }
)(EditableTitle);
