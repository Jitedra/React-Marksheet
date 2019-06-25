import React, {Component} from 'react';
class Form extends Component{
  state = {
  	name: '',
  	class: '',
  	math: '',
  	english: '',
  	science: '',
  	hindi: '',
  	social: ''
  }
  render(){
  	return(
  	  <div class="container">
        <hr/>
  	    <div> 
	      <form>
		    <div class="row">
		      <div class="col">
		        <a href="add-marks.html">Add Marks</a>
		      </div>
		      <div class="col">
		        <a href="view-marksheet.html">View Marksheet</a>
		      </div>
		    </div>
	      </form>
      </div>
    <hr/>
    <table class="table-css">
      	<tr>
      	  <th>MARKSHEET</th>
      	</tr>
      	<tr>
      	  <td><label>Name: </label></td>
      	  <td><input type="text" name="" id="name" /></td>
      	</tr>
      	<tr>
      	  <td><label>Class: </label></td>
      	  <td><input type="text" name="" id="class" /></td>
      	</tr>
      	<tr>
      	  <td><label>Maths: </label></td>
      	  <td><input type="text" name="" id="math" /></td>
      	</tr>
      	<tr>
      	  <td><label>English: </label></td>
      	  <td><input type="text" name="" id="english" /></td>
      	</tr>
      	<tr>
      	  <td><label>Hindi: </label></td>
      	  <td><input type="text" name="" id="hindi" /></td>
      	</tr>
      	<tr>
      	  <td><label>Science: </label></td>
      	  <td><input type="text" name="" id="science" /></td>
      	</tr>
      	<tr>
      	  <td><label>Social: </label></td>
      	  <td><input type="text" name="" id="social" /></td>
      	</tr>
      	<tr>
      	  <td>
      	  	<button type="button" class="btn btn-primary" onclick="check()">Submit</button>
      	  </td>
      	</tr>
    </table>
  </div>
  	);
  }
}

export default Form;