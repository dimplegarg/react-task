import React, {Fragment} from "react";
import Edit from '../assets/images/edit.png';
import Cancel from '../assets/images/combined-shape.png';
import MediCare from '../assets/images/medicare-logo-770-270.png';
import BupaId from '../assets/images/bupa-vector-logo.png';

export default function ListAssignedDoctors({data}) {
    console.log('sel doc', data)
    return(
        <Fragment>
            { data.length > 0 && 
                data.map((i, idx) => {
                    return(
                        <tr key={idx}>
                            <td colSpan="1">
                                <label>
                                    {i.name}
                                    <span>super admin</span>
                                </label>
                                <div className="mediBupa">
                                <span>
                                    <img src={MediCare} alt="medi-care" />
                                    {i.providerNo}
                                </span>
                                <span>
                                    <img src={BupaId} alt="bupa-id" />
                                    {i.bupaId}
                                </span>
                                </div>
                            </td>
                            <td colSpan="1">
                                <label>{i.bankAccount}</label>
                                <span>064-291299121920 . Joe Simons</span>
                            </td>
                            <td colSpan="1">
                                <label>Joe Simons</label>
                                <span>9999210921 . Male</span>
                            </td>
                            <td colSpan="1">
                                <div className="table-action">
                                        <img src={Edit} alt="edit" />
                                        <img src={Cancel} alt="cancel" />
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
        </Fragment>
    )

}