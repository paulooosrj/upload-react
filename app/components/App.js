import React from 'react';

require('./App.css');

/* export default () => <h1>Hello World</h1>; */


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(event){
    let file = event.target.files[0];
    const formData = new FormData();
    formData.append('imagem', file);
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post('http://localhost:5000/api', formData, config)
         .then(function(response){
           if(response.data.url){
             var e = document.querySelector('#timeline-images');
             e.innerHTML += '<img src="' + response.data.url + '"/>';
           }else{
             throw "error";
           }
         }.bind(this))
         .catch(errors => console.log(errors));
  }

  render() {
    return (
      <div id="uploads">
          <div id="timeline">
              <label id="btn-upload">
                  Upload
                  <input type="file" onChange={this.upload.bind(this)}/>
              </label><br/><br/>
              <h1>Imagens upadas</h1>
              <div id="timeline-images"></div>
          </div>
      </div>
    );
  }

}