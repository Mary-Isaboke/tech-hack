import React from 'react';
import '../styles/MedicationList.css';

const MedicationList = () => {
    return (
        <div className="medication-list">
            <div className="medication-list-header">Medication List</div>
            <ul>
                <li className="medication-item">
                    <span className="medication-name">Paracetamol</span>
                    <span className="medication-dose">500mg</span>
                    <span className="medication-time">8:00 AM</span>
               </li>
               <li className="medication-item">
                    <span className="medication-name">Amoxicillin</span>
                    <span className="medication-dose">250mg</span>
                    <span className="medication-time">12:00 PM</span>
               </li>
               <li className="medication-item">
                    <span className="medication-name">Ibuprofen</span>
                    <span className="medication-dose">200mg</span>
                    <span className="medication-time">6:00 PM</span>
                </li>
                <li className="medication-item">
                   <span className="medication-name">Metformin</span>
                   <span className="medication-dose">500mg</span>
                   <span className="medication-time">8:00 AM</span>
                </li>
                <li className="medication-item">
                   <span className="medication-name">Lipitor</span>
                   <span className="medication-dose">10mg</span>
                   <span className="medication-time">9:00 PM</span>
                </li>
            </ul>
        </div>
    );
}

export default MedicationList;
