import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class PostsNew extends Component {

  /**
   * Renders fields
   * @param {Obj} field Contains events handlers of the field, a single piece of state.
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
        {field.meta.error} 
      </div>
    );
  }

  onSubmit(values) {
    console.log('values', values);
    
  }
  

  render() {
    const { handleSubmit } = this.props; // -> props bunch of methods of form
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button 
          type="submit"
          className="btn btn-primary">
            Submit
        </button>
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
  // errors.fieldName
  
  // Validates the inputs from 'values' 
  if (values.title && values.title.lenght < 3) {
    errors.title = 'Title is too short';
  }

  if (!values.title) {
    errors.title = 'Enter a title !!';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories !!';
  }

  if (!values.content) {
    errors.content = 'Enter some content please !!';
  }

  // Is errors is empty, the form is fine to submit
  // Is errors has *any* props, redux form assumes form is valid
  return errors;

}

export default reduxForm({ // reduxForm ---> communicate between the component and the formReducer
  form: 'PostsNewForm', // provide a unique name for the form
  validate,
})(PostsNew);