
import {
  Card,
  CardHeader,
  CardFooter,
 
  Pagination,
  PaginationItem,
  PaginationLink,
  
  Table,
  Container,
  Row,
  
  
} from "reactstrap";

// core components
import Header2 from "components/Headers/Header2.js";
import { NavLink } from "react-router-dom";
import { listarPacientes } from "domain/usecases/createPaciente";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tables = () => {
  const [list, setList] = useState([])

  const getList = async () => {
    
      alert('press');
        try {
            const user = await listarPacientes();
            console.log(user);
        } catch (error) {
            console.error(error);
        }
    
}

  return (
    <>
      <Header2/>
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Pacientes</h3>
              </CardHeader>

              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light align-items-center">
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Genero</th>
                    <th scope="col">Contacto</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monserrat Alejandra Castro</td>
                    <td>25 años</td>
                    <td>
                     
                        Femenino
                    </td>
                    <td>
                      <div className="avatar-group">
                        
                        443555831
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                      <NavLink style={{marginRight:'15px'}} to='/admin/ver-pacientes'>Ver </NavLink>
                      <NavLink style={{marginRight:'15px'}} to='/admin/ver-pacientes'>Editar </NavLink>
                      <NavLink style={{marginRight:'15px'}} to='/admin/ver-pacientes'>Eliminar </NavLink>


                    </div>
                    </td>
                  </tr>
                 
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
       
      </Container>
    </>
  );
};

export default Tables;
