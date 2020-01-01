import React, {useState, useEffect, Fragment} from 'react';
import SideNav from './SideNav';
import Edit from '../assets/images/edit.png';
import Cancel from '../assets/images/combined-shape.png';
import ListDoctors from './ListDoctors';
import DummyDoctor from '../assets/images/group-5.png';
import Search from '../assets/images/magnifying-glass.svg';
import AssignDoctor from './AssignDoctor';

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
        let index = listDoc.findIndex(i => { if(i.id === data.id) return i });
        listDoc.splice(index, 1, data);
        setDoctors(listDoc);
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
                                <img src={Edit} alt="edit" style={{}} />
                                <span style={{ height:10, width:30 }}></span>
                                <img src={Cancel} alt="cancel" />
                            </div>
                            </div>
                        </div>
                        <div className="col-2 search-icon">
                            <button className="btn">Proceed to next location</button>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}