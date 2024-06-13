import {Button,Card,CardHeader,CardBody,FormGroup,Form,Input,Container,Row,Col,} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { createPaciente } from "domain/usecases/createPaciente";
import { editarPaciente } from "domain/usecases/createPaciente";
const Paciente = () => {

  const {id}= useParams();
  const isAdd= !id;
  const navigate = useNavigate();
  const [user, setUser] = useState({});

    const [nombres, setNombres] = useState('');
    const [apaterno, setApaterno] = useState('');
    const [amaterno, setAmaterno] = useState('');

    const validationSchema = Yup.object().shape({
      nombres: Yup.string()
          .required('Nombre (s) es obligatorio'),
      apaterno: Yup.string()
          .required('Apellido paterno es obligatorio'),
      amaterno: Yup.string()
          .required('Apellido materno es obligatorio'),
      edad: Yup.string().required("Edad es obligatoria").matches(/^(0|[1-9]\d*)(\.\d+)?$/,"Ingresa solo numeros"),
      genero: Yup.string().required('Genero es obligatorio'),
      email: Yup.string()
      .required('Correo electrónico es obligatorio'),
      telefono: Yup.string()
      .required('Telefono es obligatorio')
      /*email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
      role: Yup.string()
          .required('Role is required'),
      password: Yup.string()
          .transform(x => x === '' ? undefined : x)
          .concat(isAddMode ? Yup.string().required('Password is required') : null)
          .min(6, 'Password must be at least 6 characters'),
      confirmPassword: Yup.string()
          .transform(x => x === '' ? undefined : x)
          .when('password', (password, schema) => {
              if (password || isAddMode) return schema.required('Confirm Password is required');
          })
          .oneOf([Yup.ref('password')], 'Passwords must match')*/
  });
  const { register, handleSubmit, reset, setValue, getValues,formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
});
  
    const handleSub= async () => {
      if(isAdd){
        try {
                  const user = await createPaciente({ nombres, apaterno,amaterno });
                  console.log(user);
                  navigate("/pacientes")
              } catch (error) {
                  console.error(error);
              }
      }        
    }
    function onSubmit(data) {
      alert('click');
      return isAdd
          ? add(data)
          : update(id, data);
  }
  async function add(data){
    try {
      const user = await createPaciente(data);
      console.log(user);
      navigate("/admin/pacientes")
    } catch (error) {
        console.error(error);
    }
  }



  function update(){
alert('edit');
  }

    useEffect(() =>{
      if(!isAdd){
        async function verDatos(){
          const datos= await editarPaciente(id);
          console.log(datos.nombres);
          const fields=['nombres','amaterno','apaterno','edad','genero','telefono','email'];
          fields.forEach(field =>setValue(field,datos[field]));
          
        }
        verDatos();
      }
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
                    <h3 className="mb-0">{isAdd ? 'Nuevo Paciente':'Editar Paciente'}</h3>
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
                <form onSubmit={handleSubmit(onSubmit)}>
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
                            className="form-control"
                            id="input-nombre"
                            onChange={e=>{setNombres(e.target.value)}}
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
                            className="form-control"
                            id="input-apaterno"
                            placeholder="Apellido paterno"
                            type="text"
                            onChange={e=>{setApaterno(e.target.value)}}

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
                            className="form-control"
                            id="input-amaterno"
                            placeholder="Apellido Materno"
                            type="text"
                            onChange={e=>{setApaterno(e.target.value)}}

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
                  <Col md="4"></Col>
                    <Col md="4" >
                      <Button type="submit" color="primary" >Guardar Información</Button>
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

  
};

export default Paciente;
