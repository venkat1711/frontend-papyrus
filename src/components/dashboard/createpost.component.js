import React, { Fragment, useState } from 'react';
import { Row, Col, Form, FormGroup } from 'react-bootstrap';
import { createPost } from '../../api/AllPosts/allposts';
import InventoryInputs from './inputComponents/Inventory';
import AuthorInputs from './inputComponents/Author';
import GenreInputs from './inputComponents/GenreInput';
import MaterialsInputs from './inputComponents/Materials';
import FragmentInputs from './inputComponents/Fragment';
import BookformInputs from './inputComponents/Bookform';
import ProvenanceInputs from './inputComponents/Provenance';
import CartonnageInputs from './inputComponents/Cartonnage';
import AcqusitionInputs from './inputComponents/Acqusition';
import DataZone from './inputComponents/DataZone';
import { isAuthenticated } from '../../api/auth';
import { toast } from 'react-toastify';
import './css/createpost.css';

const CreatePost = () => {
    const [data, setData] = useState({
        papyrusId:'',
        editionName:'',
        inventoryNumber:'',
        LDAB:'',
        TM:'',
        CEDOPAL:'',
        noteONPA:'',
        noteDate:'',
        note:'',
        dimension:'',
        recto:'',
        reused:'',
        columns:'',
        upperMargin:'',
        lowerMargin:'',
        objectiveElements:'',
        scriptDescription:'',
        philologicalFeatures:'',
        bibliography:'',
        corrections:'',
        paratextualFeatures:'',
        signs:'',
        annotations:'',
        archiveDossier:'',
        possibleReconstructions:'',
        inventory: [],
        author: [],
        genre: [],
        material: [],
        fragment: [],
        bookform: [],
        provenance: [],
        editiondata: [],
        acquisition: [],
        cartonnage: [],
        photo: '',
        intercolumnspace:'',
        linespercolumn:'',numberoffolios:'',externalMargin:'',innerMargin:'',laterlaMargins:'',
        formData: new FormData(),
    });

    const { user, token } = isAuthenticated();

    const handleChange = (name) => (event) => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        data.formData.set(name, value);
        setData({ ...data, [name]: value });
       // alert("data of set"+JSON.stringify(data.formData.get(name)));
    };

    const formSubmit = (e) => {
       // e.preventDefault();
       //alert("called"+JSON.stringify(data.formData.get('intercolumnspace')));
        createPost(user._id, token, data.formData).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.success(`post is create!!!`);
            }
        })
            .catch((err) => console.log(err, 'error in create post'));
    }


    return (
        <Fragment>
            <div className="mx-auto EveT_l_RicercaFormMain my-2">
                {/* <h2>Database of Ancient Books.</h2> */}
                <Row>
                    <Col sm={12} xs={12} md={12} className="EveT_l_RicercaForm"   >
                        <Form onSubmit={formSubmit}>
                        <Row>
                                <Col md={6}>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Papyrus ID
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='papyrusId'
                                                onChange={handleChange('papyrusId')}
                                                placeholder="Papyrus ID" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Editions name
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='editionName'
                                                onChange={handleChange('editionName')}
                                                placeholder="editionName " />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Inventory number
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='inventoryNumber'
                                                onChange={handleChange('inventoryNumber')}
                                                placeholder="inventoryNumber "
                                            />
                                        </Col>
                                    </Form.Group>

                                    <FormGroup as={Row}>
                                        <Form.Label htmlFor="input1" column xs={4} sm={4}>
                                            Inventory Place  :
                                 </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <InventoryInputs handleChange={handleChange} />
                                        </Col>

                                    </FormGroup>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            LDAB
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='LDAB'
                                                onChange={handleChange('LDAB')}
                                                placeholder="LDAB " />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            TM
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='TM'
                                                onChange={handleChange('TM')} placeholder="TM" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            CEDOPAL
                                    </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='CEDOPAL'
                                                onChange={handleChange('CEDOPAL')} placeholder="CEDOPAL" />
                                        </Col>
                                    </Form.Group>

                                    <FormGroup as={Row}>
                                        <Form.Label htmlFor="input12" column xs={4} sm={4}>
                                            Find Place :
                                    </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <ProvenanceInputs handleChange={handleChange} />
                                        </Col>
                                    </FormGroup>

                                    <Form.Group as={Row}>
                                        <Form.Label htmlFor="input15" column xs={4} sm={4}>
                                            Acqusition :
                                    </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <AcqusitionInputs handleChange={handleChange} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                        <Form.Label column xs={4} sm={4}>Notes on Provenance and Acquisition</Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control as="textarea" rows={3} name='noteONPA' onChange={handleChange('noteONPA')} placeholder='Notes on Provenance and Acquisition' />
                                        </Col>
                                    </Form.Group>

                                    <FormGroup as={Row}>
                                        <Form.Label htmlFor="input8" column xs={4} sm={4}>
                                            Material :
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <MaterialsInputs handleChange={handleChange} />
                                        </Col>
                                    </FormGroup>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Recto
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='recto'
                                                onChange={handleChange('recto')} placeholder="Recto" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Reused
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='reused'
                                                onChange={handleChange('reused')} placeholder="reused" />
                                        </Col>
                                    </Form.Group>

                                    <FormGroup as={Row}>
                                        <Form.Label htmlFor="input2" column xs={4} sm={4}>
                                            No.of Fragments :
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <FragmentInputs handleChange={handleChange} />
                                        </Col>
                                    </FormGroup>
                                    <Form.Group as={Row}>
                                        <Form.Label htmlFor="input3" column xs={4} sm={4}>
                                            Genre :
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <GenreInputs handleChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                        <Form.Label column xs={4} sm={4}>Bibliography</Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control as="textarea" rows={3} onChange={handleChange('bibliography')} placeholder='Bibliography' />
                                        </Col>
                                    </Form.Group>
                                    
                                    <FormGroup as={Row}>
                                        <Form.Label htmlFor="input9" column xs={4} sm={4}>
                                            Bookform :
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <BookformInputs handleChange={handleChange} />
                                        </Col>
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup as={Row}>
                                        <Form.Label htmlFor="input1" column xs={4} sm={4}>
                                            Ancient Author & Work :
                                 </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <AuthorInputs handleChange={handleChange} />
                                        </Col>
                                    </FormGroup>

                                    <Form.Group as={Row}>
                                        <Form.Label htmlFor="input15" column xs={4} sm={4}>
                                            Date :
                            </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <DataZone handleChange={handleChange} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                        <Form.Label column xs={4} sm={4}> Notes on Date</Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control as="textarea" rows={3} name='noteDate' onChange={handleChange('noteDate')} placeholder='Notes on Provenance and Acquisition' />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Objective elements
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            onChange={handleChange('objectiveElements')} placeholder="objectiveElements" />
                                    </Col>
                                </Form.Group>

                                    

                                    <FormGroup as={Row}>
                                        <Form.Label htmlFor="input13" column xs={4} sm={4}>
                                            Cartonnage :
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <CartonnageInputs handleChange={handleChange} />
                                        </Col>
                                    </FormGroup>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Corrections
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='corrections'
                                                onChange={handleChange('corrections')} placeholder="corrections" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Paratextual features
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='paratextualFeatures'
                                                onChange={handleChange('paratextualFeatures')} placeholder="paratextualFeatures" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Signs
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='signs'
                                                onChange={handleChange('signs')} placeholder="signs" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Annotations
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='annotations'
                                                onChange={handleChange('annotations')} placeholder="annotations" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Archive / dossier
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='archiveDossier'
                                                onChange={handleChange('archiveDossier')} placeholder="archiveDossier" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Possible reconstructions
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='possibleReconstructions'
                                                onChange={handleChange('possibleReconstructions')} placeholder="possibleReconstructions" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                        <Form.Label column xs={4} sm={4}>Script Description</Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control as="textarea" rows={3} onChange={handleChange('scriptDescription')} placeholder='Script Description' />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                        <Form.Label column xs={4} sm={4}>Philological features</Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control as="textarea" rows={3} onChange={handleChange('philologicalFeatures')} placeholder='Philological features' />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                        <Form.Label column xs={4} sm={4}>Note</Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control as="textarea" rows={3} onChange={handleChange('note')} placeholder='general notes' />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label htmlFor="input15" column xs={4} sm={4}>
                                            Upload Image :
                            </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.File
                                                onChange={handleChange('photo')}
                                                type='file'
                                                name='photo'
                                                accept='image/*'
                                                id='photo'
                                                required
                                            />
                                        </Col>
                                    </Form.Group>
                                    </Col>
                               
                                     { data.formData.get('bookform') === 'roll' && <React.Fragment> 
                                     <Row md={2}>
                                     <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            number of columns
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='columns'
                                                onChange={handleChange('columns')} placeholder="number of columns" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Upper margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='upperMargin'
                                                onChange={handleChange('upperMargin')} placeholder="Upper margin" />
                                        </Col>
                                    </Form.Group>
                                    </Row><Row md={2}>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Lower margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='lowerMargin'
                                                onChange={handleChange('lowerMargin')} placeholder="Lower margin" />
                                        </Col>
                                    </Form.Group>
                                   
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Inter column space
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='intercolumnspace'
                                                onChange={handleChange('intercolumnspace')} placeholder="Inter column space" />
                                        </Col>
                                    </Form.Group>
                                    </Row><Row md={2}>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Lines per column
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='linespercolumn'
                                                onChange={handleChange('linespercolumn')} placeholder="Lines per column" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Dimensions
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='dimension'
                                                onChange={handleChange('dimension')} placeholder="Dimensions" />
                                        </Col>
                                    </Form.Group>
                                    </Row>
                                    </React.Fragment>  }

                                     { data.formData.get('bookform') === 'codex' && <React.Fragment> 
                                     <Row md={2}>
                                     <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            number of columns
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='columns'
                                                onChange={handleChange('columns')} placeholder="number of columns" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Upper margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='upperMargin'
                                                onChange={handleChange('upperMargin')} placeholder="Upper margin" />
                                        </Col>
                                    </Form.Group>
                                    </Row><Row md={2}>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Lower margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='lowerMargin'
                                                onChange={handleChange('lowerMargin')} placeholder="Lower margin" />
                                        </Col>
                                    </Form.Group>
                                   
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Number of folios
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='numberoffolios'
                                                onChange={handleChange('numberoffolios')} placeholder="Number of folios" />
                                        </Col>
                                    </Form.Group>
                                    </Row><Row md={2}>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Lines per column
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='linespercolumn'
                                                onChange={handleChange('linespercolumn')} placeholder="Lines per column" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Dimensions
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='dimension'
                                                onChange={handleChange('dimension')} placeholder="Dimensions" />
                                        </Col>
                                    </Form.Group>
                                    </Row><Row md={2}>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Inner margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='innerMargin'
                                                onChange={handleChange('innerMargin')} placeholder="Inner margin" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            External margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='externalMargin'
                                                onChange={handleChange('externalMargin')} placeholder="External margin" />
                                        </Col>
                                    </Form.Group>
                                    </Row>
                                    </React.Fragment>  }

                                     { data.formData.get('bookform') === 'sheet' && <div>
                                     <Row md={2}>
                                     <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            number of columns
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='columns'
                                                onChange={handleChange('columns')} placeholder="number of columns" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Upper margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='upperMargin'
                                                onChange={handleChange('upperMargin')} placeholder="Upper margin" />
                                        </Col>
                                    </Form.Group>
                                    </Row><Row md={2}>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Lower margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='lowerMargin'
                                                onChange={handleChange('lowerMargin')} placeholder="Lower margin" />
                                        </Col>
                                    </Form.Group>
                                   
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Inter column space
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='intercolumnspace'
                                                onChange={handleChange('intercolumnspace')} placeholder="Inter column space" />
                                        </Col>
                                    </Form.Group>
                                    </Row><Row md={2}>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Lines per column
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='linespercolumn'
                                                onChange={handleChange('linespercolumn')} placeholder="Lines per column" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Dimensions
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='dimensions'
                                                onChange={handleChange('dimensions')} placeholder="Dimensions" />
                                        </Col>
                                    </Form.Group>
                                    </Row><Row md={2}>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Lateral Margins
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='lateralMargin'
                                                onChange={handleChange('lateralMargin')} placeholder="Lateral per column" />
                                        </Col>
                                    </Form.Group>
                                  </Row>
                                     </div> }
                               
                            </Row>
                            <div>
                                <button type='submit' onClick={formSubmit} className="btn btn-outline-primary m-2 ">Save</button>
                                <button type='reset' className="btn btn-outline-dark m-2 ">Reset</button>
                            </div>

                        </Form>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )

};

export default CreatePost;
