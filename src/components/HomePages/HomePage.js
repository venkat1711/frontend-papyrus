import React, { Component, Fragment } from 'react';
import { Row, Col } from "react-bootstrap";
import HomePage1 from '../../images/screenSplash.jpg';
import Footer from '../../components/Footer/Footer';
import '../Home/css/Navigation.css';
import Modal, {closeStyle} from 'simple-react-modal';
import {useState} from 'react';
import { API,IMAGE_URL } from '../../config';
import { isAuthenticated } from '../../api/auth';

export default class HomePage extends Component {
    constructor(){
        super()
        this.state = {}
      }
     
      show(){
        this.setState({show: true})
      }
     
      close(){
        this.setState({show: false})
      }

      getRole(){
        if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt')).user.role
        }
        return null;
      }
      
    
    render() {
        return (
            <Fragment>
                <Row >
                    <Col sm={3} className="p-4" id="EveT_l_sideimg">
                        <img className="d-block w-100" src={IMAGE_URL} alt='' width="30%" height="95%"/>
                        <div>
                        <button  type="button" class="btn btn-primary" 
                        style={{ display: this.getRole()==1 ? "block" : "none",cursor: "pointer" ,float:"right",marginTop:"1px"}} onClick={this.show.bind(this)}>
          Change Image</button>
      <Modal show={this.state.show} onClose={this.close} transitionSpeed={1000}>
  <div><FileUploadPage/></div>
</Modal>

      </div>
 

                    </Col>
                    <Col sm={9} className="p-4">
                        <h3>PSIonline - PLAURonline - psi online PPadonline - PPRAGonline</h3>
                        <p className="w-75">Attraverso questo sito è possibile consultare il catalogo informatico dei PSI – Papiri della Società Italiana e dei P. Laur. – Papiri della Biblioteca Medicea Laurenziana.
                        ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                        condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                        sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                        Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                        mauris sit amet nibh. Donec sodales
                     sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc</p>
                        <p>
                            Il progetto è il frutto di accordi di cooperazione stipulati tra diverse istituzioni italiane e straniere: le Università di Bologna, Cassino, Messina, Napoli e Padova, l’Accademia Fiorentina di Papirologia, l’Istituto Papirologico Vitelli – Università di Firenze, la Biblioteca Medicea Laurenziana, il Museo Egizio del Cairo. La sua realizzazione è attualmente curata dal Centro Editoriale e dal Laboratorio di Ricerche Storiche e Archeologiche dell’Antichità (Dipartimento di Scienze Umane, Sociali e della Salute) dell’Università di Cassino.</p>
                    </Col>
                </Row>
                <Footer />
            </Fragment>
        )
    }
};

function FileUploadPage(){
	const [ setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked,setIsSelected] = useState(false);
  var selectedFile=null;
	const changeHandler = (event) => {
       selectedFile= event.target.files[0] ;
  };
  const closeEvent=()=>{
    window.location.reload();
  }

	const handleSubmission = () => {
        const formData = new FormData();
		formData.append('File', selectedFile);

		fetch(
			`${API}/fileupload`,
			{
				method: 'POST',
                body: formData,
                
			}
		)
			.then((response) => response.json())
			.then((result) => {
                console.log('Success:', result);
            window.location.reload();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	
	};

	return(
    <div>
      
       <h2 style={{float:"left"}}>Image Upload</h2>
      <h6 style={{textAlign:"right",cursor:"pointer"}} onClick={handleSubmission}>X</h6>
    

      <div class="input-group mb-3">
  <input type="file" class="form-control" name="file" onChange={changeHandler}/>
  </div>		
			<div style={{textAlign:"right"}}>
      <button  type="button" class="btn btn-success" onClick={handleSubmission}>Upload</button>

			</div>
      </div>
	)
}