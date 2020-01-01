import React, {Fragment} from "react";
import Add from '../assets/images/ic-add.png';
import Checked from '../assets/images/group-8.png';

export default function ListDoctors({listdoctor, handleSelectedDoc}) {
    return(
        <Fragment>
            { listdoctor.length > 0 && 
                listdoctor.map((i, idx) => {
                    return(
                        <div key={idx} className="list-doctor">
                            <img src={i.img} alt="doctor" />
                            <span className="doctor-name">{i.name}</span>
                            <span className="doctor-type">{i.type}</span>
                            {i.isSelected ? 
                                <img src={Checked} alt="selected" className="icon" />
                                : <img src={Add} alt="add" className="icon" onClick={() => handleSelectedDoc(idx)} />
                            }
                        </div>
                    )
                })
            }
        </Fragment>
    )

}