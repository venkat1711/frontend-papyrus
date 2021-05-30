import React, { Fragment, useState } from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col, Form, FormGroup, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import Img from '../../../images/image.png';
import { filterPosts } from '../../../api/AllPosts/allposts';
import InventoryInputs from './inputComponents/Inventory';
import MaterialsInputs from './inputComponents/Materials';
import GenreInputs from './inputComponents/GenreInput';
import ProvenanceInputs from './inputComponents/Provenance';
import AcquisitionInputs from './inputComponents/Acquisition';
import BookformInputs from './inputComponents/Bookform';
import DataZoneGt from './inputComponents/DataGt';
import DataZoneLt from './inputComponents/DataLt';
import Footer from '../../../components/Footer/Footer';
import { toast } from 'react-toastify';
import '../css/Ricerca.css';


const RicercaForm = ({ history }) => {
    const [values, setValues] = useState({
        inventory: "",
        genre: "",
        material: "",
        bookform: "",
        provenance: "",
        dataGt: 0,
        dataLt: 0,
        acquisition: ""
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        filterPosts(values).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                history.push({
                    pathname: '/allposts',
                    state: { detail: data }
                })
            }
        })
            .catch((err) => console.log(err, 'error in get all Datezone'));
    }

    return (
        <Fragment>
            <div className="EveT_l_RicercaMain px-2">
                {/* <h2 className="text-center">Database of Ancient Books.</h2> */}
                <Row>
                    <Col sm={12} xs={12} md={6} className="EveT_l_RicercaForm  mt-2 mx-auto "  >
                        <Form onSubmit={formSubmit}>
                            <FormGroup as={Row}>
                                <Form.Label htmlFor="input1" column xs={4} sm={4}>
                                    Inventory :
                                </Form.Label>
                                <Col xs={7} sm={7} >
                                    <InventoryInputs handleChange={handleChange} />
                                </Col>
                                <Col xs={1} sm={1} >
                                    <>
                                        {['bottom-start'].map((placement) => (
                                            <OverlayTrigger
                                                trigger="click"
                                                key={placement}
                                                delay={{ show: 1000, hide: 400 }}
                                                placement={placement}
                                                overlay={
                                                    <Popover id={`popover-positioned-${placement}`}>
                                                        <Popover.Title as="h3">{`Inventory`}</Popover.Title>
                                                        <Popover.Content>
                                                            <strong>Inventory</strong> The place where the text is (or has been) preserved. We normally use the English name of the city followed by a comma and the local name of the collection.
                                                            <a href='/inventoryinfo' target="blank"> LearnMore...</a>
                                                        </Popover.Content>
                                                    </Popover>
                                                }
                                            >
                                                <img style={{ width: '30px', height: '30px' }} src={Img} alt='' />
                                            </OverlayTrigger>
                                        ))}
                                    </>
                                </Col>
                            </FormGroup>

                            <FormGroup as={Row}>
                                <Form.Label htmlFor="input1" column xs={4} sm={4}>
                                    Find Place:
                                </Form.Label>
                                <Col xs={7} sm={7} >
                                    <ProvenanceInputs handleChange={handleChange} />

                                </Col>
                                <Col xs={1} sm={1} >
                                    <>
                                        {['bottom-start'].map((placement) => (
                                            <OverlayTrigger
                                            trigger="click"
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                    <Popover id={`popover-positioned-${placement}`}>
                                                        <Popover.Title as="h3">{`Origin`}</Popover.Title>
                                                        <Popover.Content>
                                                            <strong>Origin</strong> The place where a text was found or written.You can use modern countries, ancient regions and provinces or names of ancient or modern cities.
                                                            <a href='/origininfo' target="blank"> LearnMore...</a>
                                                         </Popover.Content>
                                                    </Popover>
                                                }
                                            >
                                                <img style={{ width: '30px', height: '30px' }} src={Img} alt='' />
                                            </OverlayTrigger>
                                        ))}
                                    </>
                                </Col>
                            </FormGroup>

                            <FormGroup as={Row}>
                                <Form.Label htmlFor="input1" column xs={4} sm={4}>
                                    Genre:
                        </Form.Label>
                                <Col xs={7} sm={7} >
                                    <GenreInputs handleChange={handleChange} />
                                </Col>
                                <Col xs={1} sm={1} >
                                    <>
                                        {['bottom-start'].map((placement) => (
                                            <OverlayTrigger
                                                trigger="click"
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                    <Popover id={`popover-positioned-${placement}`}>
                                                        <Popover.Title as="h3">{`Genere`}</Popover.Title>
                                                        <Popover.Content>
                                                            <strong>Genere</strong> The field Genere is a subdivision of the field Culture, with the following possible search criteria <a href='/genereinfo' target="blank"> LearnMore...</a>
                                                        </Popover.Content>
                                                    </Popover>
                                                }
                                            >
                                                <img style={{ width: '30px', height: '30px' }} src={Img} alt='' />
                                            </OverlayTrigger>
                                        ))}
                                    </>
                                </Col>
                            </FormGroup>

                            <FormGroup as={Row}>
                                <Form.Label htmlFor="input1" column xs={4} sm={4}>
                                    Material:
                                </Form.Label>
                                <Col xs={7} sm={7} >
                                    <MaterialsInputs handleChange={handleChange} />
                                </Col>
                                <Col xs={1} sm={1} >
                                    <>
                                        {['bottom-start'].map((placement) => (
                                            <OverlayTrigger
                                                trigger="click"
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                    <Popover id={`popover-positioned-${placement}`}>
                                                        <Popover.Title as="h3">{`Material`}</Popover.Title>
                                                        <Popover.Content>
                                                            <strong>Material</strong> The material on which the text is written, most papyrus or parchment. 
                                                            <a href='/materialinfo' target="blank"> LearnMore...</a>
                                                         </Popover.Content>
                                                    </Popover>
                                                }
                                            >
                                                <img style={{ width: '30px', height: '30px' }} src={Img} alt='' />
                                            </OverlayTrigger>
                                        ))}
                                    </>
                                </Col>
                            </FormGroup>

                            <FormGroup as={Row}>
                                <Form.Label htmlFor="input1" column xs={4} sm={4}>
                                    Bookform:
                                </Form.Label>
                                <Col xs={7} sm={7} >
                                    <BookformInputs handleChange={handleChange} />
                                </Col>
                                <Col xs={1} sm={1} >
                                    <>
                                        {['bottom-start'].map((placement) => (
                                            <OverlayTrigger
                                                trigger="click"
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                    <Popover id={`popover-positioned-${placement}`}>
                                                        <Popover.Title as="h3">{`BookForm`}</Popover.Title>
                                                        <Popover.Content>
                                                            <strong>BookForm</strong> The possibile search terms are: codex purpureus,
                                                            miniature,
                                                            offset
                                                            <a href='/bookforminfo' target="blank"> LearnMore...</a>
                                                        </Popover.Content>
                                                    </Popover>
                                                }
                                            >
                                                <img style={{ width: '30px', height: '30px' }} src={Img} alt='' />
                                            </OverlayTrigger>
                                        ))}
                                    </>
                                </Col>
                            </FormGroup>

                            <FormGroup as={Row}>
                                <Form.Label htmlFor="input1" column xs={4} sm={4}>
                                    Acquisition:
                                </Form.Label>
                                <Col xs={7} sm={7} >
                                    <AcquisitionInputs handleChange={handleChange} />
                                </Col>
                                <Col xs={1} sm={1}>
                                    <>
                                        {['bottom-start'].map((placement) => (
                                            <OverlayTrigger
                                                trigger="click"
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                    <Popover id={`popover-positioned-${placement}`}>
                                                        <Popover.Title as="h3">{`Acquisition`}</Popover.Title>
                                                        <Popover.Content>
                                                            <strong>Acquisition</strong> The possibile search terms are: purchase,
                                                            unknown,
                                                            excavation
                                                            <a href="acquistioninfo" target="blank"> LearnMore...</a>
                                                        </Popover.Content>
                                                    </Popover>
                                                }
                                            >
                                                <img style={{ width: '30px', height: '30px' }} src={Img} alt='' />
                                            </OverlayTrigger>
                                        ))}
                                    </>
                                </Col>
                            </FormGroup>

                            <FormGroup as={Row}>
                                <Form.Label htmlFor="input1" column xs={4} sm={4} md={4} lg={4} >
                                    Start date-End Date:
                               </Form.Label>

                                <Col xs={3} sm={3} md={3} lg={3} >
                                    <DataZoneGt handleChange={handleChange} />
                                </Col>

                                <Col xs={1} sm={1} className="pt-2 pl-4">
                                    <p>to</p>
                                </Col>

                                <Col xs={3} sm={3} className="">
                                    <DataZoneLt handleChange={handleChange} />
                                </Col>

                                <Col xs={1} sm={1}  >
                                    <>
                                        {['bottom-start'].map((placement) => (
                                            <OverlayTrigger
                                                trigger="click"
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                    <Popover id={`popover-positioned-${placement}`} className="">
                                                        <Popover.Title as="h3">{`Startdate`}</Popover.Title>
                                                        <Popover.Content>
                                                            <strong>Startdate</strong> Select the date from start to end.
                                                            <a href="dateinfo" target="blank"> LearnMore...</a>
                                                         </Popover.Content>
                                                    </Popover>
                                                }
                                            >
                                                <img style={{ width: '30px', height: '30px' }} src={Img} alt='' />
                                            </OverlayTrigger>
                                        ))}

                                    </>
                                </Col>
                            </FormGroup>

                            <div className=" m-5">
                                <button type='submit' className="btn btn-danger m-2 " >search</button>
                                <Button type='reset' className="btn btn-primary">Reset</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
            <Footer />
        </Fragment>
    )

};

export default withRouter(RicercaForm);
