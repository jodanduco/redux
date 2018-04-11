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
          label="Title For Post"
          name="title"
          component={this.renderField} //--> Pass function reference
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField} 
        />
      </form>
    );
  }
}

/**
 * Validates fields called every re-render cycle
 * @param {Obj} values Contains the values entered by the user -> {title: 'dsadas', categories: 'blablabla'}
 */
function validate(values) {
  const errors = {};

  // Validates the inputs from 'values' 
  if (!values.title) {
    errors.title = 'Enter a title !!';
  }

  // Is errors is empty, the form is fine to submit
  // Is errors has *any* props, redux form assumes form is valid
  return errors;

}

export default reduxForm({ // reduxForm ---> communicate between the component and the formReducer
  form: 'PostsNewForm', // provide a unique name for the form
  validate,
})(PostsNew);