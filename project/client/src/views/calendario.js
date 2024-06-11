
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
  
  } from "reactstrap";
  import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

  // core components
  import Header2 from "components/Headers/Header2.js";
  
  const Calendario = () => {
    return (
      <>
        <Header2/>
        {/* Page content */}
        <Container classNameName="mt--7" fluid>
         
        <div className="container-fluid mt--6">
<div className="row">
<div className="col">

<div className="card card-calendar">

<div className="card-header">

<h5 className="h3 mb-0">Calendar</h5>
</div> 


<div className="card-body p-0">
<div className="calendar fc fc-unthemed fc-ltr" data-toggle="calendar" id="calendar"><div className="fc-toolbar fc-header-toolbar"><div className="fc-left"></div> 
<div className="fc-right"></div> 
<div className="fc-center"></div> 
<div className="fc-clear"></div> 
</div> 
<div className="fc-view-container" ><div className="fc-view fc-month-view fc-basic-view"><table className=""><thead className="fc-head"><tr><td className="fc-head-container fc-widget-header"><div className="fc-row fc-widget-header"><table className=""><thead><tr><th className="fc-day-header fc-widget-header fc-sun"><span>Sun</span></th><th className="fc-day-header fc-widget-header fc-mon"><span>Mon</span></th><th className="fc-day-header fc-widget-header fc-tue"><span>Tue</span></th><th className="fc-day-header fc-widget-header fc-wed"><span>Wed</span></th><th className="fc-day-header fc-widget-header fc-thu"><span>Thu</span></th><th className="fc-day-header fc-widget-header fc-fri"><span>Fri</span></th><th className="fc-day-header fc-widget-header fc-sat"><span>Sat</span></th></tr></thead></table></div> 
</td></tr></thead><tbody className="fc-body"><tr><td className="fc-widget-content"><div className="fc-scroller fc-day-grid-container" style={{overFlow:'hidden', height: '779px;'}}><div className="fc-day-grid fc-unselectable"><div className="fc-row fc-week fc-widget-content" style={{height: '129px;' }}><div className="fc-bg"><table className=""><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-other-month fc-past" data-date="2024-05-26"></td><td className="fc-day fc-widget-content fc-mon fc-other-month fc-past" data-date="2024-05-27"></td><td className="fc-day fc-widget-content fc-tue fc-other-month fc-past" data-date="2024-05-28"></td><td className="fc-day fc-widget-content fc-wed fc-other-month fc-past" data-date="2024-05-29"></td><td className="fc-day fc-widget-content fc-thu fc-other-month fc-past" data-date="2024-05-30"></td><td className="fc-day fc-widget-content fc-fri fc-other-month fc-past" data-date="2024-05-31"></td><td className="fc-day fc-widget-content fc-sat fc-past" data-date="2024-06-01"></td></tr></tbody></table></div> 
<div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-other-month fc-past" data-date="2024-05-26"><span className="fc-day-number">26</span></td><td className="fc-day-top fc-mon fc-other-month fc-past" data-date="2024-05-27"><span className="fc-day-number">27</span></td><td className="fc-day-top fc-tue fc-other-month fc-past" data-date="2024-05-28"><span className="fc-day-number">28</span></td><td className="fc-day-top fc-wed fc-other-month fc-past" data-date="2024-05-29"><span className="fc-day-number">29</span></td><td className="fc-day-top fc-thu fc-other-month fc-past" data-date="2024-05-30"><span className="fc-day-number">30</span></td><td className="fc-day-top fc-fri fc-other-month fc-past" data-date="2024-05-31"><span className="fc-day-number">31</span></td><td className="fc-day-top fc-sat fc-past" data-date="2024-06-01"><span className="fc-day-number">1</span></td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div> 
</div> 
<div className="fc-row fc-week fc-widget-content" style={{height: '129px;'}}><div className="fc-bg"><table className=""><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-past" data-date="2024-06-02"></td><td className="fc-day fc-widget-content fc-mon fc-past" data-date="2024-06-03"></td><td className="fc-day fc-widget-content fc-tue fc-past" data-date="2024-06-04"></td><td className="fc-day fc-widget-content fc-wed fc-past" data-date="2024-06-05"></td><td className="fc-day fc-widget-content fc-thu fc-past" data-date="2024-06-06"></td><td className="fc-day fc-widget-content fc-fri fc-past" data-date="2024-06-07"></td><td className="fc-day fc-widget-content fc-sat fc-past" data-date="2024-06-08"></td></tr></tbody></table></div> 
<div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-past" data-date="2024-06-02"><span className="fc-day-number">2</span></td><td className="fc-day-top fc-mon fc-past" data-date="2024-06-03"><span className="fc-day-number">3</span></td><td className="fc-day-top fc-tue fc-past" data-date="2024-06-04"><span className="fc-day-number">4</span></td><td className="fc-day-top fc-wed fc-past" data-date="2024-06-05"><span className="fc-day-number">5</span></td><td className="fc-day-top fc-thu fc-past" data-date="2024-06-06"><span className="fc-day-number">6</span></td><td className="fc-day-top fc-fri fc-past" data-date="2024-06-07"><span className="fc-day-number">7</span></td><td className="fc-day-top fc-sat fc-past" data-date="2024-06-08"><span className="fc-day-number">8</span></td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div> 
</div> 
<div className="fc-row fc-week fc-widget-content" style={{height: '129px;'}}><div className="fc-bg"><table className=""><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-past" data-date="2024-06-09"></td><td className="fc-day fc-widget-content fc-mon fc-today " data-date="2024-06-10"></td><td className="fc-day fc-widget-content fc-tue fc-future" data-date="2024-06-11"></td><td className="fc-day fc-widget-content fc-wed fc-future" data-date="2024-06-12"></td><td className="fc-day fc-widget-content fc-thu fc-future" data-date="2024-06-13"></td><td className="fc-day fc-widget-content fc-fri fc-future" data-date="2024-06-14"></td><td className="fc-day fc-widget-content fc-sat fc-future" data-date="2024-06-15"></td></tr></tbody></table></div> 
<div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-past" data-date="2024-06-09"><span className="fc-day-number">9</span></td><td className="fc-day-top fc-mon fc-today " data-date="2024-06-10"><span className="fc-day-number">10</span></td><td className="fc-day-top fc-tue fc-future" data-date="2024-06-11"><span className="fc-day-number">11</span></td><td className="fc-day-top fc-wed fc-future" data-date="2024-06-12"><span className="fc-day-number">12</span></td><td className="fc-day-top fc-thu fc-future" data-date="2024-06-13"><span className="fc-day-number">13</span></td><td className="fc-day-top fc-fri fc-future" data-date="2024-06-14"><span className="fc-day-number">14</span></td><td className="fc-day-top fc-sat fc-future" data-date="2024-06-15"><span className="fc-day-number">15</span></td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div> 
</div> 
<div className="fc-row fc-week fc-widget-content" style={{height: '129px;'}}><div className="fc-bg"><table className=""><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-future" data-date="2024-06-16"></td><td className="fc-day fc-widget-content fc-mon fc-future" data-date="2024-06-17"></td><td className="fc-day fc-widget-content fc-tue fc-future" data-date="2024-06-18"></td><td className="fc-day fc-widget-content fc-wed fc-future" data-date="2024-06-19"></td><td className="fc-day fc-widget-content fc-thu fc-future" data-date="2024-06-20"></td><td className="fc-day fc-widget-content fc-fri fc-future" data-date="2024-06-21"></td><td className="fc-day fc-widget-content fc-sat fc-future" data-date="2024-06-22"></td></tr></tbody></table></div> 
<div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-future" data-date="2024-06-16"><span className="fc-day-number">16</span></td><td className="fc-day-top fc-mon fc-future" data-date="2024-06-17"><span className="fc-day-number">17</span></td><td className="fc-day-top fc-tue fc-future" data-date="2024-06-18"><span className="fc-day-number">18</span></td><td className="fc-day-top fc-wed fc-future" data-date="2024-06-19"><span className="fc-day-number">19</span></td><td className="fc-day-top fc-thu fc-future" data-date="2024-06-20"><span className="fc-day-number">20</span></td><td className="fc-day-top fc-fri fc-future" data-date="2024-06-21"><span className="fc-day-number">21</span></td><td className="fc-day-top fc-sat fc-future" data-date="2024-06-22"><span className="fc-day-number">22</span></td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div> 
</div> 
<div className="fc-row fc-week fc-widget-content" style={{height:' 129px;'}}><div className="fc-bg"><table className=""><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-future" data-date="2024-06-23"></td><td className="fc-day fc-widget-content fc-mon fc-future" data-date="2024-06-24"></td><td className="fc-day fc-widget-content fc-tue fc-future" data-date="2024-06-25"></td><td className="fc-day fc-widget-content fc-wed fc-future" data-date="2024-06-26"></td><td className="fc-day fc-widget-content fc-thu fc-future" data-date="2024-06-27"></td><td className="fc-day fc-widget-content fc-fri fc-future" data-date="2024-06-28"></td><td className="fc-day fc-widget-content fc-sat fc-future" data-date="2024-06-29"></td></tr></tbody></table></div> 
<div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-future" data-date="2024-06-23"><span className="fc-day-number">23</span></td><td className="fc-day-top fc-mon fc-future" data-date="2024-06-24"><span className="fc-day-number">24</span></td><td className="fc-day-top fc-tue fc-future" data-date="2024-06-25"><span className="fc-day-number">25</span></td><td className="fc-day-top fc-wed fc-future" data-date="2024-06-26"><span className="fc-day-number">26</span></td><td className="fc-day-top fc-thu fc-future" data-date="2024-06-27"><span className="fc-day-number">27</span></td><td className="fc-day-top fc-fri fc-future" data-date="2024-06-28"><span className="fc-day-number">28</span></td><td className="fc-day-top fc-sat fc-future" data-date="2024-06-29"><span className="fc-day-number">29</span></td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div> 
</div> 
<div className="fc-row fc-week fc-widget-content" style={{height: '134px;'}}><div className="fc-bg"><table className=""><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-future" data-date="2024-06-30"></td><td className="fc-day fc-widget-content fc-mon fc-other-month fc-future" data-date="2024-07-01"></td><td className="fc-day fc-widget-content fc-tue fc-other-month fc-future" data-date="2024-07-02"></td><td className="fc-day fc-widget-content fc-wed fc-other-month fc-future" data-date="2024-07-03"></td><td className="fc-day fc-widget-content fc-thu fc-other-month fc-future" data-date="2024-07-04"></td><td className="fc-day fc-widget-content fc-fri fc-other-month fc-future" data-date="2024-07-05"></td><td className="fc-day fc-widget-content fc-sat fc-other-month fc-future" data-date="2024-07-06"></td></tr></tbody></table></div> 
<div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-future" data-date="2024-06-30"><span className="fc-day-number">30</span></td><td className="fc-day-top fc-mon fc-other-month fc-future" data-date="2024-07-01"><span className="fc-day-number">1</span></td><td className="fc-day-top fc-tue fc-other-month fc-future" data-date="2024-07-02"><span className="fc-day-number">2</span></td><td className="fc-day-top fc-wed fc-other-month fc-future" data-date="2024-07-03"><span className="fc-day-number">3</span></td><td className="fc-day-top fc-thu fc-other-month fc-future" data-date="2024-07-04"><span className="fc-day-number">4</span></td><td className="fc-day-top fc-fri fc-other-month fc-future" data-date="2024-07-05"><span className="fc-day-number">5</span></td><td className="fc-day-top fc-sat fc-other-month fc-future" data-date="2024-07-06"><span className="fc-day-number">6</span></td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div> 
</div> 
</div> 
</div> 
</td></tr></tbody></table></div> 
</div> 
</div> 

</div> 

</div> 






<div className="modal fade" id="new-event" tabindex="-1" role="dialog" aria-labelledby="new-event-label" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered modal-secondary" role="document">
<div className="modal-content">

<div className="modal-body">
<form className="new-event--form">
<div className="form-group">
<label className="form-control-label">Event title</label>
<input type="text" className="form-control form-control-alternative new-event--title" placeholder="Event Title"/>
</div> 

<div className="form-group mb-0">
<label className="form-control-label d-block mb-3">Status color</label>
<div className="btn-group btn-group-toggle btn-group-colors event-tag" data-toggle="buttons">
<label className="btn bg-info active"/><input type="radio" name="event-tag" value="bg-info" autocomplete="off" checked=""/>
<label className="btn bg-warning"/><input type="radio" name="event-tag" value="bg-warning" autocomplete="off"/>
<label className="btn bg-danger"/><input type="radio" name="event-tag" value="bg-danger" autocomplete="off"/>
<label className="btn bg-success"/><input type="radio" name="event-tag" value="bg-success" autocomplete="off"/>
<label className="btn bg-default"/><input type="radio" name="event-tag" value="bg-default" autocomplete="off"/>
<label className="btn bg-primary"/><input type="radio" name="event-tag" value="bg-primary" autocomplete="off"/>
</div> 

</div> 

<input type="hidden" className="new-event--start"/>
<input type="hidden" className="new-event--end"/>
</form>
</div> 


<div className="modal-footer">
<button type="submit" className="btn btn-primary new-event--add">Add event</button>
<button type="button" className="btn btn-link ml-auto" data-dismiss="modal">Close</button>
</div> 

</div> 

</div> 

</div> 





<div className="modal fade" id="edit-event" tabindex="-1" role="dialog" aria-labelledby="edit-event-label" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered modal-secondary" role="document">
<div className="modal-content">

<div className="modal-body">
<form className="edit-event--form">
<div className="form-group">
<label className="form-control-label">Event title</label>
<input type="text" className="form-control form-control-alternative edit-event--title" placeholder="Event Title"/>
</div> 

<div className="form-group">
<label className="form-control-label d-block mb-3">Status color</label>
<div className="btn-group btn-group-toggle btn-group-colors event-tag mb-0" data-toggle="buttons">
<label className="btn bg-info active"><input type="radio" name="event-tag" value="bg-info" autocomplete="off" checked=""/></label>
<label className="btn bg-warning"><input type="radio" name="event-tag" value="bg-warning" autocomplete="off"/></label>
<label className="btn bg-danger"><input type="radio" name="event-tag" value="bg-danger" autocomplete="off"/></label>
<label className="btn bg-success"><input type="radio" name="event-tag" value="bg-success" autocomplete="off"/></label>
<label className="btn bg-default"><input type="radio" name="event-tag" value="bg-default" autocomplete="off"/></label>
<label className="btn bg-primary"><input type="radio" name="event-tag" value="bg-primary" autocomplete="off"/></label>
</div> 

</div> 

<div className="form-group">
<label className="form-control-label">Description</label>
<textarea className="form-control form-control-alternative edit-event--description textarea-autosize" placeholder="Event Desctiption"></textarea>
<i className="form-group--bar"></i>
</div> 

<input type="hidden" className="edit-event--id"/>
</form>
</div> 


<div className="modal-footer">
<button className="btn btn-primary" data-calendar="update">Update</button>
<button className="btn btn-danger" data-calendar="delete">Delete</button>
<button className="btn btn-link ml-auto" data-dismiss="modal">Close</button>
</div> 

</div> 

</div> 

</div> 

</div> 

</div> 


<footer className="footer pt-0">
<div className="row align-items-center justify-content-lg-between">
<div className="col-lg-6">
<div className="copyright text-center  text-lg-left  text-muted">
© 2021 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
</div> 

</div> 

<div className="col-lg-6">
<ul className="nav nav-footer justify-content-center justify-content-lg-end">
<li className="nav-item">
<a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
</li>
<li className="nav-item">
<a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
</li>
<li className="nav-item">
<a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
</li>
<li className="nav-item">
<a href="https://www.creative-tim.com/license" className="nav-link" target="_blank">License</a>
</li>
</ul>
</div> 

</div> 

</footer>
</div> 

        </Container>
      </>
    );
  };
  
  export default Calendario;
  