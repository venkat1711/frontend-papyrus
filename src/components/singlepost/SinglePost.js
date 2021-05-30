import React, { Fragment } from 'react';
import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col, Card, InputGroup, FormControl, Button, Table } from "react-bootstrap";
import { isAuthenticated } from '../../api/auth';
import { registerSinglePost } from '../../api/AllPosts/allposts';
import ImageComponent from '../dashboard/imageComponent/image';
import { toast } from 'react-toastify';
import './css/SinglePost.css';

const SinglePost = (props) => {

  const { user, token } = isAuthenticated();

  const { _id, inventory, author, bookform, editiondata, fragment, genre, material, provenance, acquisition, cartonnage, papyrusId,
    editionName,
    inventoryNumber,
    LDAB,
    TM,
    CEDOPAL,
    note,
    noteDate,
    noteONPA,
    dimension,
    recto,
    reused,
    columns,
    upperMargin,
    lowerMargin,
    objectiveElements,
    scriptDescription,
    philologicalFeatures,
    bibliography,
    corrections,
    paratextualFeatures,
    signs,
    annotations,
    archiveDossier,
    possibleReconstructions } = props.location.state.detail;

  const registerPost = () => {
    return isAuthenticated() ? (
      <div className="mb-4 ">
        <InputGroup className="mt-4 w-100 EveT_l_inputgroup">
          <FormControl
            placeholder="follow the post"
            disabled
          />
          <InputGroup.Append>
            <Button className="outline-primary" onClick={register}>follow</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    ) : (
        <div className="mb-4 ">
          <InputGroup className="mt-4 w-100 EveT_l_inputgroup">
            <FormControl
              placeholder="login to follow the post"
              disabled
            />
            <InputGroup.Append >
              <Link to='/login'>
                <Button className="outline-primary">login</Button>
              </Link>
            </InputGroup.Append >
          </InputGroup >
        </div >
      );
  };

  const register = () => {
    const postData = {
      userId: user._id,
      allpostId: _id,
    };
    registerSinglePost(user._id, token, postData)
      .then((data) => {
        if (data.err) {
          toast.error(data);
          console.log(data);
        } else {
          toast.success(`following post!!!`);
        }
      })
      .catch((err) => console.log(err, 'error in create post'));
  };

  return (
    <Fragment>
      <Container className=" mt-3">
        <Fragment>
          <Row >
            <Col md={8} className='mt-4'>
              <Card>
                <Table responsive="sm" >
                  <tbody>
                    <tr>
                      <th>Papyrus ID</th>
                      <td>{papyrusId === undefined ? '' : papyrusId}</td>
                    </tr>
                    <tr>
                      <th>Inventory,Number</th>
                      <td>{inventory === undefined ? '' : inventory},{inventoryNumber === undefined ? '' : inventoryNumber}</td>
                    </tr>
                     <tr>
                      <th>Edition</th>
                      <td>{editionName === undefined ? '' : editionName}</td>
                    </tr>
                    <tr>
                      <th>TM</th>
                      <td>{TM === undefined ? '' : TM}</td>
                    </tr>
                    <tr>
                      <th>CEDOPAL</th>
                      <td>{CEDOPAL === undefined ? '' : CEDOPAL}</td>
                    </tr>
                    <tr>
                      <th>Find place</th>
                      <td>{provenance === undefined ? '' : provenance}</td>
                    </tr>
                    <tr>
                      <th>Date</th>
                      <td>{editiondata === undefined ? '' : editiondata}</td>
                    </tr>
                    <tr>
                      <th>Notes to date</th>
                      <td>{noteDate === undefined ? '' : noteDate}</td>
                    </tr>
                    <tr>
                      <th>Acquisition</th>
                      <td>{acquisition === undefined ? '' : acquisition}</td>
                    </tr>
                    <tr>
                      <th>Material</th>
                      <td>{material === undefined ? '' : material}</td>
                    </tr>
                    <tr>
                      <th>Notes on Provenance and Acquisition</th>
                      <td>{noteONPA === undefined ? '' : noteONPA}</td>
                    </tr>
                    <tr>
                      <th>Script Description</th>
                      <td>{scriptDescription === undefined ? '' : scriptDescription}</td>
                    </tr>
                    <tr>
                      <th>Philological Features</th>
                      <td>{philologicalFeatures === undefined ? '' : philologicalFeatures}</td>
                    </tr>
                    <tr>
                      <th>Paratextual Features</th>
                      <td>{paratextualFeatures === undefined ? '' : paratextualFeatures}</td>
                    </tr>
                    <tr>
                      <th>Note</th>
                      <td>{note === undefined ? '' : note}</td>
                    </tr>
                    <tr>
                      <th>Bibliography</th>
                      <td>{bibliography === undefined ? '' : bibliography}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col md={4} >
              <div className='my-4'>
                <ImageComponent item={_id} />
              </div>
              <div>
                <Card>
                  <Table responsive="sm" >
                    <tbody>
                      <tr>
                        <th>Recto1</th>
                        <td>{recto === undefined ? '' : recto}</td>
                      </tr>
                      <tr>
                        <th>Reused</th>
                        <td>{reused === undefined ? '' : reused}</td>
                      </tr>
                      <tr>
                        <th>Dimension</th>
                        <td>{dimension === undefined ? '' : dimension}</td>
                      </tr>
                      <tr>
                        <th>No of fragment</th>
                        <td>{fragment === undefined ? '' : `${fragment}fr;`}</td>
                      </tr>
                      <tr>
                        <th>Columns</th>
                        <td>{columns === undefined ? '' : columns}</td>
                      </tr>
                      <tr>
                        <th>Upper Margin</th>
                        <td>{upperMargin === undefined ? '' : upperMargin}</td>
                      </tr>
                      <tr>
                        <th>Lower Margin</th>
                        <td>{lowerMargin === undefined ? '' : lowerMargin}</td>
                      </tr>
                      <tr>
                        <th>Objective Elements</th>
                        <td>{objectiveElements === undefined ? '' : objectiveElements}</td>
                      </tr>
                      <tr>
                        <th>Author</th>
                        <td>{author === undefined ? '' : author}</td>
                      </tr>
                      <tr>
                        <th>Book form</th>
                        <td>{bookform === undefined ? '' : bookform}</td>
                      </tr>
                      <tr>
                        <th>Genre</th>
                        <td>{genre === undefined ? '' : genre}</td>
                      </tr>
                      <tr>
                        <th>Cartonnage</th>
                        <td>{cartonnage === undefined ? '' : cartonnage}</td>
                      </tr>
                      <tr>
                        <th>Signs</th>
                        <td>{signs === undefined ? '' : signs}</td>
                      </tr>
                      <tr>
                        <th>Annotations</th>
                        <td>{annotations === undefined ? '' : annotations}</td>
                      </tr>
                      <tr>
                        <th>ArchiveDossier</th>
                        <td>{archiveDossier === undefined ? '' : archiveDossier}</td>
                      </tr>
                      <tr>
                        <th>Corrections</th>
                        <td>{corrections === undefined ? '' : corrections}</td>
                      </tr>
                      <tr>
                        <th>Possible Reconstructions</th>
                        <td>{possibleReconstructions === undefined ? '' : possibleReconstructions}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>

              {user && user.role === 1 ? '' : (
                registerPost()
              )}
            </Col>
          </Row>
        </Fragment>

      </Container>
    </Fragment>
  )
};

export default withRouter(SinglePost);