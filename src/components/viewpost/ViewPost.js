import React, { Fragment,Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col, Card, InputGroup, FormControl, Button, Table } from "react-bootstrap";
import { isAuthenticated } from '../../api/auth';
import { getSingleRegisterPost ,getSinglePost} from '../../api/AllPosts/allposts';
import ImageComponent from '../dashboard/imageComponent/image';
import { toast } from 'react-toastify';
import './css/ViewPost.css';
import {API} from '../../config'

export default class ViewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }
  getViewPostData(){
    getSinglePost(this.props.match.params.id).then((res) => {
      if (res.error) {
        toast.error(`get pagecontent error`);
      } else {
         
        
          this.setState({
           data:res
           });
            console.log(res.error);
      }
  }) .catch((err) => console.log(err, 'error in create post'));
}

  componentWillMount () {
    var data = this.getViewPostData();
    this.setState({data : data});
}


  bookFormRender(name){
   
    if(name=='roll'){
    return   (<React.Fragment> <tr>
                        <th> number of columns</th>
                        <td>{this.state.data.columns === undefined ? '' : this.state.data.columns}</td>
                      </tr>
                      <tr>
                        <th>Upper Margin</th>
                        <td>{this.state.data.upperMargin === undefined ? '' : this.state.data.upperMargin}</td>
                      </tr>
                      <tr>
                        <th>Lower Margin</th>
                        <td>{this.state.data.lowerMargin === undefined ? '' : this.state.data.lowerMargin}</td>
                      </tr>
                      <tr>
                        <th> Inter Column space</th>
                        <td>{this.state.data.intercolumnspace === undefined ? '' : this.state.data.intercolumnspace}</td>
                      </tr><tr>
                        <th>Lines per column</th>
                        <td>{this.state.data.linespercolumn === undefined ? '' : this.state.data.linespercolumn}</td>
                      </tr>
                      <tr>
                        <th> Dimensions</th>
                        <td>{this.state.data.dimension === undefined ? '' : this.state.data.dimension}</td>
                      </tr></React.Fragment>)
     }
     else if(name=='codex'){
      return   (<React.Fragment> <tr>
        <th> number of columns</th>
        <td>{this.state.data.columns === undefined ? '' : this.state.data.columns}</td>
      </tr>
      <tr>
        <th>Upper Margin</th>
        <td>{this.state.data.upperMargin === undefined ? '' : this.state.data.upperMargin}</td>
      </tr>
      <tr>
        <th>Lower Margin</th>
        <td>{this.state.data.lowerMargin === undefined ? '' : this.state.data.lowerMargin}</td>
      </tr>
      <tr>
        <th> Number of folios</th>
        <td>{this.state.data.numberoffolios === undefined ? '' : this.state.data.numberoffolios}</td>
      </tr><tr>
        <th>Lines per column</th>
        <td>{this.state.data.linespercolumn === undefined ? '' : this.state.data.linespercolumn}</td>
      </tr>
      <tr>
        <th> Dimensions</th>
        <td>{this.state.data.dimension === undefined ? '' : this.state.data.dimension}</td>
      </tr><tr>
        <th>Inner Marging</th>
        <td>{this.state.data.innerMargin === undefined ? '' : this.state.data.innerMargin}</td>
      </tr>
      <tr>
        <th> External Margin</th>
        <td>{this.state.data.externalMargin === undefined ? '' : this.state.data.externalMargin}</td>
      </tr></React.Fragment>)
    }else if(name=='sheet'){
      return   (<React.Fragment> <tr>
        <th> number of columns</th>
        <td>{this.state.data.columns === undefined ? '' : this.state.data.columns}</td>
      </tr>
      <tr>
        <th>Upper Margin</th>
        <td>{this.state.data.upperMargin === undefined ? '' :this.state.data.upperMargin}</td>
      </tr>
      <tr>
        <th>Lower Margin</th>
        <td>{this.state.data.lowerMargin === undefined ? '' : this.state.data.lowerMargin}</td>
      </tr>
      <tr>
        <th> Inter Column space</th>
        <td>{this.state.data.intercolumnspace === undefined ? '' : this.state.data.intercolumnspace}</td>
      </tr><tr>
        <th>Lines per column</th>
        <td>{this.state.data.linespercolumn === undefined ? '' : this.state.data.linespercolumn}</td>
      </tr>
      <tr>
        <th> Dimensions</th>
        <td>{this.state.data.dimension === undefined ? '' : this.state.data.dimension}</td>
      </tr> <tr>
        <th>Lateral Margin</th>
        <td>{this.state.data.lateralMargin === undefined ? '' : this.state.data.lateralMargin}</td>
      </tr></React.Fragment>)
    }else if(this.state.data.bookform=='tablet'){
      return (<React.Fragment><tr>
      <th>Number</th>
      <td>{this.state.data.number === undefined ? '' : this.state.data.number}</td>
    </tr>
    <tr>
      <th> Dimensions</th>
      <td>{this.state.data.dimension === undefined ? '' : this.state.data.dimension}</td>
    </tr></React.Fragment>)
    }else{
      return (<React.Fragment>
    <tr>
      <th> Dimensions</th>
      <td>{this.state.data.dimension === undefined ? '' : this.state.data.dimension}</td>
    </tr></React.Fragment>)
    }
  };
  render() {
    const download = e => {
      console.log(e.target.href);
      fetch(e.target.href, {
        method: "GET",
        headers: {}
      })
        .then(response => {
          response.arrayBuffer().then(function(buffer) {
            const url = window.URL.createObjectURL(new Blob([buffer]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "image.png"); //or any other extension
            document.body.appendChild(link);
            link.click();
          });
        })
        .catch(err => {
          console.log(err);
        });
      }
    if(this.state.data==null){
      return <div>loading....</div>
    }
  return (
    <Fragment>
      <Container className=" mt-3">
        <Fragment>
          <Row >
          <Col md={4} >
              <div className='my-4'>
                {/* <ImageComponent item={this.state.data._id} download onClick={e => download(e)}/> */}
                <a href={`${API}/allposts/photo/${this.state.data._id}`} target="_blank">
                <img  src={`${API}/allposts/photo/${this.state.data._id}`}  />
                </a>
               
              </div>
              <div>
              <button  type="button" class="btn btn-primary"  download onClick={e => download(e)}>download</button>
              </div>
              

            </Col>
            <Col md={8} className='mt-4'>
              <Card>
                <Table responsive="sm" >
                  <tbody>
                  <tr>
                      <th>Title</th>
                      <td>Descrition</td>
                    </tr>
                    <tr>
                      <th>Papyrus ID</th>
                      <td>{this.state.data.papyrusId === undefined ? '' : this.state.data.papyrusId}</td>
                    </tr>
                    <tr>
                      <th>Material</th>
                      <td>{this.state.data.material === undefined ? '' : this.state.data.material}</td>
                    </tr>
                    
                    <tr>
                      <th>Date</th>
                      <td>{this.state.dataeditiondata === undefined ? '' : this.state.dataeditiondata}</td>
                    </tr>
                   
                    <tr>
                      <th>Digital Images</th>
                      <td><a href={this.state.data.PN === undefined ? '' : this.state.data.PN} 
                      target="_blank">{this.state.data.PN === undefined ? '' : this.state.data.PN}</a></td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
         
          </Row>
        </Fragment>

      </Container>
    </Fragment>
  )
}
}

