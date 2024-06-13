
import {
  Card,CardHeader,CardFooter,Pagination,PaginationItem,PaginationLink,Table,Container,Row,Col} from "reactstrap";
import { ColumnGroup } from 'primereact/columngroup';
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { useRef } from "react";
import Header2 from "components/Headers/Header2.js";
import { NavLink } from "react-router-dom";
import { listarPacientes } from "domain/usecases/createPaciente";
import { FilterMatchMode } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';

import 'primereact/core/core.min.js'
import { useState } from "react";
import { useEffect } from "react";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
const Tables = () => {
  const [list, setList] = useState([])
  const [list2, setList2] = useState([])
  const navigate = useNavigate();
  const dt = useRef(null);

  
  useEffect(() => {
    async function getList() {
      try {
        const user= await listarPacientes();
            //console.log(user);
            //var pacObj = JSON.parse(user);
            var id = "";
            var x=0;
            user.forEach((item) => {x++;
              Object.entries(item).forEach(([key, val]) => {
                
                  if (key == "id") {
                      id = JSON.stringify(val);
                      Object.assign(item,{no:x});
                      Object.assign(item, { ver:<NavLink style={{marginRight:'5px'}} to='/admin/ver-pacientes'><i className="pi pi-eye" style={{ fontSize: '2rem' }}></i></NavLink>});
                      Object.assign(item, { editar:<NavLink style={{marginRight:'5px'}} to={'/admin/edit-paciente/'+id}><i className="pi pi-user-edit" style={{ fontSize: '2rem' }}></i></NavLink> })
                      Object.assign(item, { eliminar:<NavLink style={{marginRight:'5px'}} to='/admin/ver-pacientes'><i className="pi pi-user-minus" style={{ fontSize: '2rem' }}></i></NavLink>})

                  }

              });
            });
              

            setList(user);
            var resultado = JSON.stringify(user);
            setList2(JSON.parse(resultado));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getList();
    //console.log(list);
  }, [list,list2]);
  
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }

});
const [globalFilterValue, setGlobalFilterValue] = useState("");
const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);

};
const columns = [
  
  { field: 'nombre', header: 'Nombre' },
  { field: 'edad', header: 'Edad' },
  { field: 'genero', header: 'Genero' },
  { field: 'telefono', header: 'Contacto' },


];
const ir = () => {
  let path = '/admin/add-paciente';
  navigate(path);
}

const headerGroup = (<ColumnGroup>
  <Row>
      <Column header="" colSpan={5}></Column>
      <Column  header="Acciones" style={{ paddingLeft: '110px' }} colSpan={3}></Column>

  </Row>
  <Row>
  <Column header="N°"></Column>

      <Column header="Nombre"></Column>
      <Column header="Edad"></Column>
      <Column header="Genero"></Column>
      <Column header="Contacto"></Column>
      <Column header="Ver"></Column>
      <Column header="Editar"></Column>
      <Column header="Eliminar"></Column>
  </Row>
</ColumnGroup>);

const exportColumns = columns.map((col) => ({ title: col.header, dataKey: col.field }));

const exportCSV = () => {
  dt.current.exportCSV();
};
const exportPdf = () => {
  import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then(() => {
          const doc = new jsPDF.default(0, 0);

          doc.autoTable(exportColumns, list);
          doc.save('apoyos.pdf');
      });
  });
};
const saveAsExcelFile = (buffer, fileName) => {
  import('file-saver').then((module) => {
      if (module && module.default) {
          let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
          let EXCEL_EXTENSION = '.xlsx';
          const data = new Blob([buffer], {
              type: EXCEL_TYPE
          });

          module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      }
  });
};
const exportExcel = () => {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(list2);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer = xlsx.write(workbook, {
          bookType: 'xlsx',
          type: 'array'
      });

      saveAsExcelFile(excelBuffer, 'apoyos');
  });
};
const header = (
  <div>


      <div className='row'>
          <div className='col-md-8 col-sm-6'>
              <div className="flex align-items-center justify-content-end gap-4">
                  <Button  id='copy' icon="pi pi-file" raised onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                  <Button  id='excel' icon="pi pi-file-excel" severity="success" raised onClick={exportExcel} data-pr-tooltip="XLS" />
                  <Button id='pdf' icon="pi pi-file-pdf" severity="warning" raised onClick={exportPdf} data-pr-tooltip="PDF" />
                  
              </div>
          </div>
          <div className='col-md-4 col-sm-6'>
              <span className="p-input-icon-left">

                  <InputText
                      value={globalFilterValue}
                      onChange={onGlobalFilterChange}
                      placeholder="Buscar"

                  />
              </span>
          </div>
          

      </div></div>

);
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
              <Row>
                 <Col md="10" sm="6">
                 <h3 className="mb-0">Pacientes</h3>

              </Col>
              <Col md="2" sm="6">
              <Button type="button" id='pdf' icon="pi pi-user-plus" style={{ minWidth: '4rem',marginLeft:'70px' }} raised onClick={ir} />

              </Col>
              </Row>
             
              </CardHeader>
              <DataTable
                                    ref={dt}
                                    value={list}
                                    paginator
                                    rows={10}
                                    filters={filters}
                                    headerColumnGroup={headerGroup}
                                    resizableColumns showGridlines
                                    rowsPerPageOptions={[5, 10, 25]}
                                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                    currentPageReportTemplate="Mostrando {first} de {last} de {totalRecords} registros"
                                    tableStyle={{ minWidth: '50rem' }}
                                    globalFilterFields={['nombre', 'edad', 'genero', 'telefono']}
                                    header={header}>
                                    <Column field="no" header="N°" style={{ minWidth: '2rem' }} />
                                    <Column field="nombre" header="Nombre" style={{ minWidth: '8rem' }} />
                                    <Column field="edad" header="Edad" style={{ minWidth: '4rem' }} />
                                    <Column field="genero" header="Genero" style={{ minWidth: '6rem' }} />
                                    <Column field="telefono" header="Teléfono" filterField="Sección" filter  style={{ minWidth: '6rem' }} />
                                    <Column field="ver" header="Ver" style={{ minWidth: '2rem' }} />
                                    <Column field="editar" header="Editar" style={{ minWidth: '2rem' }} />
                                    <Column field="eliminar" header="Editar" style={{ minWidth: '2rem' }} />

                                   
                                </DataTable>
{/*
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
              </CardFooter>*/}
            </Card>
          </div>
        </Row>
       
      </Container>
    </>
  );
};

export default Tables;
