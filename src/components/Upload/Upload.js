import React, {Component} from "react";
import api from "../../components/services/api"

export default class Upload extends Component {
  state = {
    file: null,
    name:'pedro'
}

handleFile(e){
    let file = e.target.files[0]
    this.setState({file:file})

}

handleUpload(e) {
    let file = this.state.file

    let formdata = new FormData()

    formdata.append('file', file)
    formdata.append('name', 'Pedro Lucas')
    api({
        url:'/enviar',
        method: 'POST',
        headers:{
            authorization: 'tanto faz',
        },
        data: formdata
    }).then((res) =>{

        console.log('upload realizado com sucesso!')

    },(err)=>{
       console.log(err)
    })
}

render() {
    return(
<div className='App'>
    <h1>UPLOAD DE ARQUIVOS</h1>
    <form>
        <div className="">
            <label>SELECT FILE</label>
            <input type="file" name="file" onChange={(e)=>this.handleFile(e)}/>
            <button type='button' onClick={()=>this.handleUpload()}>Upload</button>
        </div>
    </form>
</div>
  )}}