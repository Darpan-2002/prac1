import React from "react";
import "./data.css";
import { useSelector, useDispatch } from "react-redux";
import { dataBookSelector } from "../../store/selectors";
import { deleteData } from "../../store/interactions";

const Data = () => {
  const orderData = useSelector(dataBookSelector);
  const account = useSelector((state) => state.provider.account);
  const provider = useSelector((state) => state.provider.connection);
  const medical = useSelector((state) => state.medical.contract);
  const dispatch = useDispatch();

  const deleteHandler = (e, data) => {
    if (window.confirm("Do you want to delete the record?")) {
      deleteData(medical, data.recordId, dispatch, provider);
    } else {
      console.log("Data not delete");
    }
  };

  return (
    <div>
      {account ? (
        <div className="hello">
          <div className="data-grid">
            <div className="grid-header">Record ID</div>
            <div className="grid-header">Date and Time</div>
            <div className="grid-header">Project Name</div>
            <div className="grid-header">Amount</div>
            {/* <div className="grid-header">Gender</div> */}
            <div className="grid-header">Fund Type</div>
            <div className="grid-header">Hospital Name</div>
            <div className="grid-header">Project Details</div>
            {/* <div className="grid-header">Treatment Plan</div> */}

            {orderData &&
              orderData.map((data, index) => (
                <React.Fragment key={index}>
                  <div className="grid-item">{index + 1}</div>
                  <div className="grid-item">{data.formattedTimestamp}</div>
                  <div className="grid-item">{data.name}</div>
                  <div className="grid-item">{data.ageNew}</div>
                  {/* <div className="grid-item">{data.gender}</div> */}
                  <div className="grid-item">{data.bloodType}</div>
                  <div className="grid-item">{data.allergies}</div>
                  <div className="grid-item">{data.diagnosis}</div>
                  {/* <div className="grid-item">{data.treatment}</div> */}
                </React.Fragment>
              ))}
          </div>
        </div>
      ) : (
        <h1>Connect the account</h1>
      )}
    </div>
  );
};

export default Data;