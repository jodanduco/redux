import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class PostsNew extends Component {

  /**
   * Renders fields
   * @param {Obj} field Contains events handlers of the field
   */
  renderField(field) {
    return(
      <div 
        className="form-group">
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input} // ---> onChange={field.input.onChange}, onChange={field.input.onBlur}, etc
        />
      </div>
    );
  }
  

  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Tags"
          name="tags"
          component={this.renderField} //--> Pass function reference
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField} //--> Pass function reference
        />
      </form>
    );
  }
}

export default reduxForm({ // reduxForm ---> communicate between the component and the formReducer
  form: 'PostsNewForm', // provide a unique name for the form
})(PostsNew);