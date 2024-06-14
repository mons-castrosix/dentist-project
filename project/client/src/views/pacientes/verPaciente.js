import {Button,Card,CardHeader,CardBody,FormGroup,Form,Input,Container,Row,Col,} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { createPaciente } from "domain/usecases/createPaciente";
import { verPaciente,editarPaciente } from "domain/usecases/createPaciente";
  // core components
  import Header2 from "components/Headers/Header2.js";
  
  const VerPaciente = () => {
    const {id}= useParams();
    const isAdd= !id;
    const navigate = useNavigate();

    const ir = () => {
      let path = '/admin/pacientes';
      navigate(path);
    }

    
  const { register, handleSubmit, reset, setValue, getValues,formState: { errors } } = useForm({
});
  
    
    


  

    useEffect(() =>{
      
        async function verDatos(){
          const datos= await verPaciente(id);
          console.log(datos.nombres);
          const fields=['nombres','amaterno','apaterno','edad','genero','telefono','email'];
          fields.forEach(field =>setValue(field,datos[field]));
          
        }
        verDatos();
      
    },[])

   
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
                    <h3 className="mb-0">Datos del paciente</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    {/*<Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Editar
                    </Button>*/}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <form>
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
                          <input
                          {...register("nombres", {
                        required: true,

                      })}
                      readOnly
                            className="form-control"
                            id="input-nombre"
                            placeholder="Nombre (s)"
                            type="text"
                            name="nombres"
                            
                            
                          />
                          {errors.nombres?.type=="required" && <span><i className="pi pi-exclamation-circle" style={{ color: 'red' }}></i> {errors.nombres?.message}</span>}

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
                          <input
                          {...register("apaterno", {
                            required: true,

                           })}
                           readOnly

                            className="form-control"
                            id="input-apaterno"
                            placeholder="Apellido paterno"
                            type="text"

                            name="apaterno"
                          />
                          {errors.apaterno?.type=="required" && <span><i className="pi pi-exclamation-circle" style={{ color: 'red' }}></i> {errors.apaterno?.message}</span>}

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
                          <input
                           {...register("amaterno", {
                            required: true,

                           })}
                           readOnly

                            className="form-control"
                            id="input-amaterno"
                            placeholder="Apellido Materno"
                            type="text"

                            name="amaterno"
                          />
                       {errors.amaterno?.type=="required" && <span><i className="pi pi-exclamation-circle" style={{ color: 'red' }}></i> {errors.amaterno?.message}</span>}

                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-edad">Edad</label>
                          <input
                          {...register("edad", {
                            required: true,
                           })}
                            className="form-control"
                            id="input-edad"
                            placeholder="Edad"
                            type="text"
                            name="edad"
                            readOnly

                          />
                         {errors.edad?.type=="required" && <span><i className="pi pi-exclamation-circle" style={{ color: 'red' }}></i> {errors.edad?.message}</span>}
                         {errors?.edad?.type === "matches" && <span className='eform'><i className="pi pi-exclamation-circle" style={{ color: 'red' }}></i>{errors.edad?.message}</span> }
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
                          <select
                          {...register("genero", {
                            required: true,
                           })}
                            className="form-control"
                            id="input-edad"
                            placeholder="Genero"
                            name="genero"
                            readOnly

                            type="select"
                          >
                            <option value="">Selecciona</option>
                            <option value="F">Femenino</option>
                            <option value="M">Masculino</option>
                          </select>                        
                          {errors.genero?.type=="required" && <span><i className="pi pi-exclamation-circle" style={{ color: 'red' }}></i> {errors.genero?.message}</span>}

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
                              <input
                              {...register("email", {
                            required: true
                           })}
                           readOnly

                                className="form-control"
                                id="input-correo"
                                placeholder="Correo electrónico"
                                type="email"
                                name="email"
                               
                                />
                                {errors.email?.type=="required" && <span><i className="pi pi-exclamation-circle" style={{ color: 'red' }}></i> {errors.email?.message}</span>}

                            </FormGroup>
                      </Col>
                      <Col lg="6">
                      <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-correo"
                              >
                                Número de telefono
                              </label>
                              <input
                              {...register("telefono", {
                            required: true
                           })}
                                className="form-control"
                                id="input-correo"
                                placeholder="Correo electrónico"
                                type="text"
                                readOnly

                                name="telefono"
                               
                                />
                              {errors.telefono?.type=="required" && <span><i className="pi pi-exclamation-circle" style={{ color: 'red' }}></i> {errors.telefono?.message}</span>}

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
                  <Col md="5"></Col>
                    <Col md="3" >
                      <Button type="submit" color="primary" onClick={ir}>Atrás</Button>
                    </Col>
                    <Col md='4'></Col>
                  </Row>
</form>              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );

  
  }
  
  export default VerPaciente;
  