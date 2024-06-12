
import {
  Card,CardHeader,CardFooter,Pagination,PaginationItem,PaginationLink,Table,Container,Row} from "reactstrap";
import { ColumnGroup } from 'primereact/columngroup';
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { useRef } from "react";
import Header2 from "components/Headers/Header2.js";
import { NavLink } from "react-router-dom";
import { listarPacientes } from "domain/usecases/createPaciente";
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
const Tables = () => {
  const [list, setList] = useState([])
  const [list2, setList2] = useState([])

  const dt = useRef(null);

  
  useEffect(() => {
    async function getList() {
      try {
        const user= await listarPacientes();
            //console.log(user);
            setList(user);
            //console.log("Lista 1"+list);
            var resultado = JSON.stringify(user);
            setList2(JSON.parse(resultado));
            //console.log("Lista 2"+list2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getList();
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
  
  { field: 'nombre', header: 'Nombre Completo' },
  { field: 'tipo', header: 'Tipo de apoyo' },
  { field: 'alcance', header: 'Alcance de apoyo' },
  { field: 'seccion', header: 'Sección' },


];

const headerGroup = (<ColumnGroup>
  <Row>
      <Column header="" colSpan={4}></Column>
      <Column  header="Acciones" style={{ paddingLeft: '125px' }} colSpan={3}></Column>

  </Row>
  <Row>
      <Column header="Nombre Completo"></Column>
      <Column header="Tipo de apoyo"></Column>
      <Column header="Alcance de apoyo"></Column>
      <Column header="Sección"></Column>
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
          <div className='col-8'>
              <div className="flex align-items-center justify-content-end gap-4">
                  <Button type="button" id='copy' icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                  <Button type="button" id='excel' icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
                  <Button type="button" id='pdf' icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
              </div>
          </div>
          <div className='col-4'>
              <span className="p-input-icon-left">
                  <i className="pi pi-search" />
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
                <h3 className="mb-0">Pacientes</h3>
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
                                    globalFilterFields={['nombre', 'tipo', 'alcance', 'seccion']}
                                    header={header}>
                                    <Column field="nombre" header="Nombre Completo" style={{ minWidth: '12rem' }} />
                                    <Column field="tipo" header="Tipo de apoyo" style={{ minWidth: '12rem' }} />
                                    <Column field="alcance" header="Alcance de apoyo" style={{ minWidth: '6rem' }} />
                                    <Column field="seccion" filterField="Sección" filter header="Distrito F" style={{ minWidth: '6rem' }} />

                                   
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
