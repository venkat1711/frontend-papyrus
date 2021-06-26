import React, { Component, Fragment } from 'react';
import { Row, Col } from "react-bootstrap";
import HomePage1 from '../../images/screenSplash.jpg';
import Footer from '../../components/Footer/Footer';
import '../Home/css/Navigation.css';
import Modal, {closeStyle} from 'simple-react-modal';
import {useState} from 'react';
import { API,IMAGE_URL } from '../../config';
import { isAuthenticated } from '../../api/auth';
import PageEditor from './PageEditor';
import { getPageContent } from '../../api/AllCategories/postcontent';
import { toast } from 'react-toastify';

export default class HomePage extends Component {
    constructor(){
        super()
        this.state = {"pagecontent":[{"content":"eee"}],"show":false,"show1":false}
       // this.pagedata={"pagecontent":[{"content":"eee"}]};
        
      }
      componentDidMount(){
        this.apiCall();
      }
    
      show(){
        this.setState({show: true})
      }
      show1(){
        this.setState({show1: true})
      }

      apiCall(){
        getPageContent("homepage").then((res) => {
          if (res.error) {
            toast.error(`get pagecontent error`);
          } else {
             
              this.pagedata=res;
              this.setState({
               pagecontent:res.pagecontent
               });
                console.log(res.error);
          }
      })
          .catch((err) => console.log(err, 'error in create post'));
        // fetch(
        //   `${API}/pagecontent/homepage`,
        //   {
        //     method: 'GET'                 
                    
        //   }
        // )
        //   .then((response) => response.json())
        //   .then((result) => {
        //             console.log('Success:', result);
        //             this.pagedata=result;
        //             this.setState({
        //               pagecontent:result.pagecontent
        //           });
        //        // window.location.reload();
        //        return result;
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
      }
     
      close(){
        this.setState({show: false})
      }
      close1(){
        this.setState({show1: false})
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
                        <img className="d-block w-100" src={IMAGE_URL} alt='Ancient Papyrus' width="30%" height="95%"/>
                        <div>
                        <button  type="button" class="btn btn-primary" 
                        style={{ display: this.getRole()==1 ? "block" : "none",cursor: "pointer" ,
                        float:"right",marginTop:"1px"}} onClick={this.show.bind(this)}>
          Change Image</button>
          <button  type="button" class="btn btn-primary" 
                        style={{ display: this.getRole()==1 ? "block" : "none",cursor: "pointer" ,
                        float:"right",marginTop:"1px"}} onClick={this.show1.bind(this)}>
          Change content</button>
      <Modal show={this.state.show} onClose={this.close} transitionSpeed={1000}>
 
  <div >
 <FileUploadPage  ></FileUploadPage></div>
</Modal>
<Modal show={this.state.show1} onClose={this.close1.bind(this)} transitionSpeed={1000}>
 
 <div >
<PageEditor  ></PageEditor></div>
</Modal>

      </div>
    

                    </Col>
                    <Col sm={9} className="p-4">
                        <h3>Greek and Latin Literary Papyri from the Arsinoites</h3>
                                               
        <div dangerouslySetInnerHTML={{ __html: this.state.pagecontent[0].content }} />
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