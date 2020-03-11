import React from 'react';
import '../css/form.css'
class Form extends React.Component{
    render(){
        const { error } = this.props;
        return(
            <div>
                <form onSubmit={this.props.getApi}>
                    <input name='city' type='text' placeholder='City....'></input>
                    <button type='submit'>Search</button>
                    {error && <span style={{color: 'red'}}>{error}</span>}
                </form>
            </div>
        )
    }
}
export default Form;