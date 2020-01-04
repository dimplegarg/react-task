import React, {useState, useEffect, Fragment} from 'react';
import SideNav from './SideNav';
import Edit from '../assets/images/edit.png';
import Cancel from '../assets/images/combined-shape.png';
import ListDoctors from './ListDoctors';
import DummyDoctor from '../assets/images/group-5.png';
import Search from '../assets/images/magnifying-glass.svg';
import AssignDoctor from './AssignDoctor';
import ListAssignedDoctors from './ListAssignedDoctors'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'

const listDoctors = [
    {
        id: 0,
        name: 'Hippocrates A, MD',
        type: 'General practice',
        isSelected: false,
        role: '',
        providerNo: '',
        bupaId:'',
        bankAccount:'',
        linkedUser:'',
        img:DummyDoctor
    },
    {
        id: 1,
        name: 'Hippocrates D',
        type: 'General practice',
        isSelected: false,
        role: '',
        providerNo: '',
        bupaId:'',
        bankAccount:'',
        linkedUser:'',
        img:DummyDoctor
    },
    {
        id: 2,
        name: 'Hippocrates A, MD',
        type: 'General practice',
        isSelected: false,
        role: '',
        providerNo: '',
        bupaId:'',
        bankAccount:'',
        linkedUser:'',
        img:DummyDoctor
    },
    {
        id: 3,
        name: 'Hippocrates D',
        type: 'General practice',
        isSelected: false,
        role: '',
        providerNo: '',
        bupaId:'',
        bankAccount:'',
        linkedUser:'',
        img:DummyDoctor
    },
    {
        id: 4,
        name: 'Hippocrates A, MD',
        type: 'General practice',
        isSelected: false,
        role: '',
        providerNo: '',
        bupaId:'',
        bankAccount:'',
        linkedUser:'',
        img:DummyDoctor
    },
    {
        id: 5,
        name: 'Hippocrates D',
        type: 'General practice',
        isSelected: false,
        role: '',
        providerNo: '',
        bupaId:'',
        bankAccount:'',
        linkedUser:'',
        img:DummyDoctor
    },
    {
        id: 6,
        name: 'Hippocrates A, MD',
        type: 'General practice',
        isSelected: false,
        role: '',
        providerNo: '',
        bupaId:'',
        bankAccount:'',
        linkedUser:'',
        img:DummyDoctor
    },
    {
        id: 7,
        name: 'Hippocrates D',
        type: 'General practice',
        isSelected: false,
        role: '',
        providerNo: '',
        bupaId:'',
        bankAccount:'',
        linkedUser:'',
        img:DummyDoctor
    }
]

export default function Dashboard(props) {
    const [doctors, setDoctors] = useState(listDoctors);
    const [assignedDoctors, setAssignDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState();

    const handleSelDoc = idx => {
        let data = [...doctors];
        data[idx].isSelected = true;
        setDoctors(data);
        setSelectedDoctor(data[idx]);

    }
    const handleDeselectDoctor = data => {
        let listDoc = [...doctors];
        let index = listDoc.findIndex(i => { if(i.id === data.id) return i });
        listDoc[index].isSelected = false
        setDoctors(listDoc);
        setSelectedDoctor('')
    }

    const handleAssignDoctor = data => {
        let listDoc = [...doctors];
        let listAssignDoc = [...assignedDoctors];
        let index = listDoc.findIndex(i => { if(i.id === data.id) return i });
        listDoc.splice(index, 1, data);
        listAssignDoc.push(data);
        setDoctors(listDoc);
        setAssignDoctors(listAssignDoc);
        setSelectedDoctor('')
    }

    useEffect(() => {
        setDoctors(doctors);
    }, [doctors]);

    return (
        <div className="container-fluid mainContainer no-gutters row">
            <SideNav />
            <div className="col-10 main-content">
                <div className="header">
                    <span> {`< back to add users`} </span>
                    <span>Lets assign providers to location, one at a time</span>
                </div>

                <div className="searchBar col-12">
                    <div className="row">
                        <div className="col-10">
                        <div className="row">
                            <div className="col-10 search-address">
                                <span>ABC PTY LT</span>
                                <span className="address-name">Overseas Bronco</span>
                                <span>I Test Street Sydney NSW 2000 - inpatient</span>
                            </div>
                            <div className="col-2 search-icon">
                                <IconButton aria-label="edit">
                                    <img src={Edit} alt="edit" />
                                </IconButton>
                                <IconButton aria-label="cancel">
                                    <img src={Cancel} alt="cancel" />
                                </IconButton>
                            </div>
                            </div>
                        </div>
                        <div className="col-2 search-icon">
                        {assignedDoctors.length > 0 ?
                            <Button variant="contained" color="primary">Proceed to next location</Button> 
                            : 
                            <Button variant="outlined" 
                                style={{
                                    border: "1px solid #fff",
                                    opacity: .5,
                                    color: "#ebebeb"
                                }}
                            >Proceed to next location</Button>
                        }
                        </div>
                    </div>
                    <div className="line-break"></div>
                </div>

                <div className="col-12">
                    <div className="row">
                        <div className="col-3">
                            <label className="lbl">PROVIDER LIST</label>
                            {!selectedDoctor ? 
                                <Fragment>
                                    <div className="search">
                                        <img src={Search} alt="search-icon" height="20" />
                                        <input type="text" placeholder="Search or select provider" />
                                    </div>
                                    <ListDoctors listdoctor={doctors} handleSelectedDoc={(idx) => handleSelDoc(idx)} />
                                </Fragment>
                                : <AssignDoctor data={selectedDoctor} handleSelDoctor={(data) => handleDeselectDoctor(data)} handleAssignDoctor={handleAssignDoctor} />
                            }
                        </div>

                        <div className="col-9">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td colSpan="1">ASSIGNED PROVIDERS</td>
                                        <td colSpan="1">BANK ACCOUNT</td>
                                        <td colSpan="1">USERS</td>
                                        <td colSpan="1">ACTIONS</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {assignedDoctors.length > 0 ?
                                    <ListAssignedDoctors data={assignedDoctors} />
                                    :
                                    <tr className="no-provider">
                                        <td colSpan="4">
                                            <p>No providers assigned to this location.</p>
                                            <p>Search or click on the "+" sign next to the providers to start adding to this location</p>
                                            <p>Every location needs to have atleast 1 provider</p>
                                        </td>
                                    </tr>
                                }
                                </tbody>
                            </table>
                            {/* <div className="">
                                <label className="lbl">ASSIGNED PROVIDERS</label>
                                <label className="lbl">BANK ACCOUNT</label>
                                <label className="lbl">USERS</label>
                                <label className="lbl">ACTIONS</label>
                            </div>

                            <div className="">
                               
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}