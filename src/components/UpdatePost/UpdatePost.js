import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { isAuthenticated } from '../../api/auth';
import { updateSinglePost, getSinglePost } from '../../api/AllPosts/allposts';
import InventoryInputs from '../dashboard/inputComponents/Inventory';
import AuthorInputs from '../dashboard/inputComponents/Author';
import GenreInputs from '../dashboard/inputComponents/GenreInput';
import MaterialsInputs from '../dashboard/inputComponents/Materials';
import FragmentInputs from '../dashboard/inputComponents/Fragment';
import BookformInputs from '../dashboard/inputComponents/Bookform';
import ProvenanceInputs from '../dashboard/inputComponents/Provenance';
import DataZone from '../dashboard/inputComponents/DataZone';
import CartonnageInputs from '../dashboard/inputComponents/Cartonnage';
import AcquisitionInputs from '../dashboard/inputComponents/Acqusition';
import { toast } from 'react-toastify';
import { Form, FormGroup, Col, Row, Container } from 'react-bootstrap';

const UpdatePost = (props) => {
    const [post, setPost] = useState({
        papyrusId: "",
        editionName: "",
        inventoryNumber: "",
        LDAB: "",
        TM: "",
        CEDOPAL: "",
        note: "",
        dimension: "",
        recto: "",
        reused: "",
        columns: "",
        upperMargin: "",
        lowerMargin: "",
        objectiveElements: "",
        scriptDescription: "",
        philologicalFeatures: "",
        bibliography: "",
        corrections: "",
        paratextualFeatures: "",
        signs: "",
        annotations: "",
        archiveDossier: "",
        possibleReconstructions: "",
        inventory: "",
        author: "",
        genre: "",
        material: "",
        fragment: "",
        bookform: "",
        provenance: "",
        editiondata: "",
        cartonnage: "",
        acquisition: "",
        photo: "",
        intercolumnspace:'',
        linespercolumn:'',numberoffolios:'',externalMargin:'',innerMargin:'',laterlaMargins:'',
        number:'',
        PN:'',
        formData: "",
    });
    const { user, token } = isAuthenticated();

    const { inventory, author, bookform, editiondata, fragment, genre, material, provenance, acquisition, cartonnage, papyrusId,
        editionName,
        inventoryNumber,
        LDAB,
        TM,
        MP3,
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
        possibleReconstructions, 
        intercolumnspace,
    linespercolumn,numberoffolios,innerMargin,externalMargin,
    lateralMargin,number,PN,formData } = post;

    useEffect(() => {
        try {
            let id = props.location.state.detail;
            getValues(id);
        } catch (error) {
            console.log(error)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getValues = (id) => {
        getSinglePost(id).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                setPost({
                    ...post,
                    inventory: data.inventory,
                    author: data.author,
                    bookform: data.bookform,
                    editiondata: data.editiondata,
                    fragment: data.fragment,
                    genre: data.genre,
                    material: data.material,
                    provenance: data.provenance,
                    acquisition: data.acquisition,
                    cartonnage: data.cartonnage,
                    papyrusId: data.papyrusId,
                    editionName: data.editionName,
                    inventoryNumber: data.inventoryNumber,
                    LDAB: data.LDAB,
                    TM: data.TM,
                    CEDOPAL: data.CEDOPAL,
                    note: data.note,
                    noteDate: data.noteDate,
                    noteONPA: data.noteONPA,
                    dimension: data.dimension,
                    recto: data.recto,
                    reused: data.reused,
                    columns: data.columns,
                    upperMargin: data.upperMargin,
                    lowerMargin: data.lowerMargin,
                    objectiveElements: data.objectiveElements,
                    scriptDescription: data.scriptDescription,
                    philologicalFeatures: data.philologicalFeatures,
                    bibliography: data.bibliography,
                    corrections: data.corrections,
                    paratextualFeatures: data.paratextualFeatures,
                    signs: data.signs,
                    annotations: data.annotations,
                    archiveDossier: data.archiveDossier,
                    possibleReconstructions: data.possibleReconstructions,
                    intercolumnspace:data.intercolumnspace,
                    linespercolumn:data.linespercolumn,
                    numberoffolios:data.numberoffolios,
                    innerMargin:data.innerMargin,
                    externalMargin:data.externalMargin,
                    lateralMargin:data.lateralMargin,
                    number:data.number,
                    PN:data.PN,
                    formData: new FormData(),

                })
            }
        })
            .catch((err) => console.log(err, 'error in get all update post'));
    }

    const handleChange = (name) => (event) => {
        const values = name === 'photo' ? event.target.files[0] : event.target.value;
        post.formData.set(name, values);
        setPost({ ...post, [name]: values });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        updateSinglePost(props.location.state.detail, user._id, token, formData).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.success(`post is updated!!!`);
            }
        })
            .catch((err) => console.log(err, 'error in get all update post'));
    }

    return (
        <Container className="mx-auto my-2 EveT_l_RicercaFormMain ">

            <Row>
                <h2>update post :</h2>
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
                                            // name='papyrusId'
                                            value={papyrusId}
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
                                            // name='editionName'
                                            value={editionName}
                                            onChange={handleChange('editionName')}
                                            placeholder="editionName " />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Inventory Place
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='inventoryNumber'
                                            value={inventoryNumber}
                                            onChange={handleChange('inventoryNumber')}
                                            placeholder="inventoryNumber "
                                        />
                                    </Col>
                                </Form.Group>

                                <FormGroup as={Row}>
                                    <Form.Label htmlFor="input1" column xs={4} sm={4}>
                                        Inventory :
                            </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <InventoryInputs handleChange={handleChange} inventory={inventory} />
                                    </Col>
                                </FormGroup>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        LDAB
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='LDAB'
                                            value={LDAB}
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
                                            // name='TM'
                                            value={TM}
                                            onChange={handleChange('TM')} placeholder="TM" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        CEDOPAL
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='CEDOPAL'
                                            value={MP3}
                                            onChange={handleChange('CEDOPAL')} placeholder="CEDOPAL" />
                                    </Col>
                                </Form.Group>

                                <FormGroup as={Row}>
                                    <Form.Label htmlFor="input12" column xs={4} sm={4}>
                                        Find Place :
                            </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <ProvenanceInputs handleChange={handleChange} provenance={provenance} />
                                    </Col>
                                </FormGroup>

                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="input15" column xs={4} sm={4}>
                                        Acquisitions :
                            </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <AcquisitionInputs handleChange={handleChange} acquisition={acquisition} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                    <Form.Label column xs={4} sm={4}>Notes on Provenance and Acquisition</Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control as="textarea" rows={3} value={noteONPA} onChange={handleChange('noteONPA')} placeholder='Notes on Provenance and Acquisition' />
                                    </Col>
                                </Form.Group>

                                

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Recto
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='recto'
                                            value={recto}
                                            onChange={handleChange('recto')} placeholder="Recto" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Reused
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='reused'
                                            value={reused}
                                            onChange={handleChange('reused')} placeholder="reused" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="input3" column xs={4} sm={4}>
                                        Genre :
                                 </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <GenreInputs handleChange={handleChange} genre={genre} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                    <Form.Label column xs={4} sm={4}>Note</Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control as="textarea" value={note} onChange={handleChange('note')} rows={3} placeholder='general notes' />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                    <Form.Label column xs={4} sm={4}>Script Description</Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control as="textarea" value={scriptDescription} onChange={handleChange('scriptDescription')} rows={3} placeholder='Script Description' />
                                    </Col>
                                </Form.Group>
                                <FormGroup as={Row}>
                                        <Form.Label htmlFor="input9" column xs={4} sm={4}>
                                            PN :
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                                name='PN' value={PN}
                                                onChange={handleChange('PN')} placeholder="PN" />
                                        </Col>
                                    </FormGroup>
                                <FormGroup as={Row}>
                                    <Form.Label htmlFor="input2" column xs={4} sm={4}>
                                        No.of Fragments :
                            </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <FragmentInputs handleChange={handleChange} fragment={fragment} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row}>
                                    <Form.Label htmlFor="input8" column xs={4} sm={4}>
                                        Material :
                            </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <MaterialsInputs handleChange={handleChange} material={material} />
                                    </Col>
                                </FormGroup>

                             
                                <FormGroup as={Row}>
                                    <Form.Label htmlFor="input9" column xs={4} sm={4}>
                                        Bookform :
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <BookformInputs handleChange={handleChange} bookform={bookform} />
                                    </Col>
                                </FormGroup>
                                
                            </Col>

                            <Col md={6}>

                                <FormGroup as={Row}>
                                    <Form.Label htmlFor="input1" column xs={4} sm={4}>
                                        Ancient Author & Work :
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <AuthorInputs handleChange={handleChange} author={author} />
                                    </Col>
                                </FormGroup>

                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="input15" column xs={4} sm={4}>
                                        Edition Date :
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <DataZone handleChange={handleChange} editiondata={editiondata} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                    <Form.Label column xs={4} sm={4}> Notes on Date</Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control as="textarea" rows={3} value={noteDate} onChange={handleChange('noteDate')} placeholder='Notes on Provenance and Acquisition' />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Objective elements
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='objectiveElements'
                                            value={objectiveElements}
                                            onChange={handleChange('objectiveElements')} placeholder="objectiveElements" />
                                    </Col>
                                </Form.Group>                               

                                <FormGroup as={Row}>
                                    <Form.Label htmlFor="input13" column xs={4} sm={4}>
                                        Cartonnage :
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <CartonnageInputs handleChange={handleChange} cartonnage={cartonnage} />
                                    </Col>
                                </FormGroup>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Philological features
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='philologicalFeatures'
                                            value={philologicalFeatures}
                                            onChange={handleChange('philologicalFeatures')} placeholder="philologicalFeatures" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Corrections
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='corrections'
                                            value={corrections}
                                            onChange={handleChange('corrections')} placeholder="corrections" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Paratextual features
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='paratextualFeatures'
                                            value={paratextualFeatures}
                                            onChange={handleChange('paratextualFeatures')} placeholder="paratextualFeatures" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Signs
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='signs'
                                            value={signs}
                                            onChange={handleChange('signs')} placeholder="signs" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Annotations
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='annotations'
                                            value={annotations}
                                            onChange={handleChange('annotations')} placeholder="annotations" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Archive / dossier
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='archiveDossier'
                                            value={archiveDossier}
                                            onChange={handleChange('archiveDossier')} placeholder="archiveDossier" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column xs={4} sm={4}>
                                        Possible reconstructions
                                </Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control type="text"
                                            // name='possibleReconstructions'
                                            value={possibleReconstructions}
                                            onChange={handleChange('possibleReconstructions')} placeholder="possibleReconstructions" />
                                    </Col>
                                </Form.Group>

                               

                                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                    <Form.Label column xs={4} sm={4}>Philological features</Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control as="textarea" value={philologicalFeatures} onChange={handleChange('philologicalFeatures')} rows={3} placeholder='Philological features' />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                    <Form.Label column xs={4} sm={4}>Bibliography</Form.Label>
                                    <Col xs={8} sm={7} >
                                        <Form.Control as="textarea" value={bibliography} onChange={handleChange('bibliography')} rows={3} placeholder='Bibliography' />
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
                                            // name='photo'
                                            accept='image/*'
                                            id='photo'
                                        // required
                                        />
                                    </Col>
                                </Form.Group>
                                
                            </Col>

                            { bookform === 'roll' && <div>
                                     <Row md={2}>
                                     <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            number of columns
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='columns' value={columns}
                                                onChange={handleChange('columns')} placeholder="number of columns" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Upper margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='upperMargin'  value={upperMargin}
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
                                                name='lowerMargin' value={lowerMargin}
                                                onChange={handleChange('lowerMargin')} placeholder="Lower margin" />
                                        </Col>
                                    </Form.Group>
                                   
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Inter column space
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='intercolumnspace' value={intercolumnspace}
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
                                                name='linespercolumn' value={linespercolumn}
                                                onChange={handleChange('linespercolumn')} placeholder="Lines per column" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Dimensions
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='dimension' value={dimension}
                                                onChange={handleChange('dimension')} placeholder="Dimensions" />
                                        </Col>
                                    </Form.Group>
                                    </Row>
                                     </div> }

                                     { bookform === 'codex' && <div>
                                     <Row md={2}>
                                     <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            number of columns
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='columns' value={columns}
                                                onChange={handleChange('columns')} placeholder="number of columns" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Upper margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='upperMargin' value={upperMargin}
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
                                                name='lowerMargin' value={lowerMargin}
                                                onChange={handleChange('lowerMargin')} placeholder="Lower margin" />
                                        </Col>
                                    </Form.Group>
                                   
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Number of folios
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text" 
                                                name='numberoffolios' value={numberoffolios}
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
                                                name='linespercolumn' value={linespercolumn}
                                                onChange={handleChange('linespercolumn')} placeholder="Lines per column" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Dimensions
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='dimension' value={dimension}
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
                                                name='innerMargin' value={innerMargin}
                                                onChange={handleChange('innerMargin')} placeholder="Inner margin" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            External margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='externalMargin' value={externalMargin}
                                                onChange={handleChange('externalMargin')} placeholder="External margin" />
                                        </Col>
                                    </Form.Group>
                                    </Row>
                                     </div> }
                                       
                                     { bookform === 'sheet' && <div>
                                     <Row md={2}>
                                     <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            number of columns
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='columns' value={columns}
                                                onChange={handleChange('columns')} placeholder="number of columns" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Upper margin
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='upperMargin' value={upperMargin}
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
                                                name='lowerMargin' value={lowerMargin}
                                                onChange={handleChange('lowerMargin')} placeholder="Lower margin" />
                                        </Col>
                                    </Form.Group>
                                   
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Inter column space
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='intercolumnspace' value={intercolumnspace}
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
                                                name='linespercolumn' value={linespercolumn}
                                                onChange={handleChange('linespercolumn')} placeholder="Lines per column" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Dimensions
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='dimensions' value={dimension}
                                                onChange={handleChange('dimension')} placeholder="Dimensions" />
                                        </Col>
                                    </Form.Group>
                                    </Row><Row md={2}>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Lateral Margins
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='lateralMargin' value={lateralMargin}
                                                onChange={handleChange('lateralMargin')} placeholder="Lateral per column" />
                                        </Col>
                                    </Form.Group>
                                  </Row>
                                     </div> }
                                     { bookform === 'tablet' && <div>
                                     <Row md={2}>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Number
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='number' value={number}
                                                onChange={handleChange('number')} placeholder="Number" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Dimensions
                                </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='dimensions' value={dimension}
                                                onChange={handleChange('dimension')} placeholder="Dimensions" />
                                        </Col>
                                    </Form.Group>
                                    </Row>
                                     </div> }
                                     { bookform !== 'tablet' &&
                                     bookform  !== 'sheet' &&
                                     bookform  !== 'codex' &&
                                     bookform  !== 'roll' && 
                                     bookform  !== undefined && <div>
                                     <Row md={1}>
                                     <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={4}>
                                            Dimensions
                                    </Form.Label>
                                        <Col xs={8} sm={7} >
                                            <Form.Control type="text"
                                                name='dimensions'
                                                onChange={handleChange('dimension')} placeholder="Dimensions" />
                                        </Col>
                                    </Form.Group>
                                    </Row>
                                     </div> }

                        </Row>
                        <div>
                            <button type='submit' className="btn btn-outline-primary m-2 ">Save</button>
                            <button type='reset' className="btn btn-outline-dark m-2 ">Reset</button>
                        </div>
                    </Form>

                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(UpdatePost);
