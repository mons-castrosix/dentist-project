
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  
  Container,
  Row,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { createPaciente } from "domain/usecases/createPaciente";
const Paciente = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = async () => {
      alert('press');
        try {
            const user = await createPaciente({ name, email });
            console.log(user);
            navigate("/pacientes")
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="1"></Col>
          <Col className="order-xl-1" xl="9">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Monserrat Alejandra Castro Sixtos</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Editar
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Información
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nombre (s)
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-nombre"
                            value={name}
                            onChange={e=>{setName(e.target.value)}}
                            placeholder="Nombre (s)"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Apellido Paterno
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-apaterno"
                            placeholder="Apellido paterno"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Apellido Materno
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-amaterno"
                            placeholder="Apellido Materno"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-edad"
                          >
                            Edad
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-edad"
                            placeholder="Edad"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-edad"
                          >
                            Genero
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-edad"
                            placeholder="Edad"
                            type="select"
                          >
                            <option val="">Selecciona</option>
                            <option val="F">Femenino</option>
                            <option val="M">Masculino</option>



                          </Input>                        

                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Información de Contacto                  
                  </h6>
                  <div className="pl-lg-4">
                  <Row>
                      <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-correo"
                              >
                                Correo Electrónico
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-correo"
                                placeholder="Correo electrónico"
                                type="email"
                                value={email}
                                onChange={e=>{setEmail(e.target.value)}}
                                />
                            </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-telefono"
                          >
                            Teléfono de Contacto
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-telefono"
                            placeholder="Edad"
                            type="text"
                          >
                            <option val="">Selecciona</option>
                            <option val="F">Femenino</option>
                            <option val="M">Masculino</option>
                          </Input>                        

                        </FormGroup>
                      </Col>
                  </Row>
                    {/*<Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>*/}
                  </div>
                  {/* Description */}
                  <Row>
                  <Col md="4"></Col>
                    <Col md="4" >
                      <Button color="primary" onClick={handleSubmit}>Guardar Información</Button>
                    </Col>
                    <Col md='4'></Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Paciente;
