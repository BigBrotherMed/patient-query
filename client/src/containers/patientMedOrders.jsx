import React from 'react';

const PatientMedOrders = (props) => {
  if (!props.medication || props.medication.length === 0)
    return (
      <div>
        <p>No current medication orders for this patient</p>
      </div>
    );

  return (
    <div>
      {props.medication.map(order => 
        <div key={order.idMedication}>
          <p>{order.medicationText}</p>
          <p>Dosage: {order.dosageInstruction}</p>
          <p>Frequency: {order.dosageFrequency}</p> 
          <p>Refills: {order.refills}</p>      
        </div>
      )}
    </div>
  )

}

export default PatientMedOrders;