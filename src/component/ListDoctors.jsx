import React, {Fragment} from "react";
import Add from '../assets/images/ic-add.png';
import Checked from '../assets/images/group-8.png';
import IconButton from '@material-ui/core/IconButton'

export default function ListDoctors({listdoctor, handleSelectedDoc}) {
    return(
        <Fragment>
            { listdoctor.length > 0 && 
                listdoctor.map((i, idx) => {
                    return(
                        <div key={idx} className="list-doctor">
                            <img src={i.img} alt="doctor" className="doc-img" />
                            <span className="doctor-name">{i.name}</span>
                            <span className="doctor-type">{i.type}</span>
                            {i.isSelected ? 
                                <IconButton aria-label="checked" className="icon" style={{ position:"absolute", marginTop:-15 }}>
                                    <img src={Checked} alt="selected" />
                                </IconButton>
                                : 
                                <IconButton aria-label="add"  className="icon" style={{ position:"absolute", marginTop:-15 }} onClick={() => handleSelectedDoc(idx)}>
                                    <img src={Add} alt="add" />
                                </IconButton>
                            }
                        </div>
                    )
                })
            }
        </Fragment>
    )

}