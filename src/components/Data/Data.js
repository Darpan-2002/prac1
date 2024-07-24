import React from "react";
import "./data.css";
import { dataBookSelector } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
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
        <div>
          <table>
            <thead>
              <tr>
                <th>Record ID</th>
                <th>Data and Time</th>
                <th>Project Name</th>
                <th>Amount</th>
                {/* <th>Gender</th> */}
                <th>Fund Type</th>
                <th>Hospital Name</th>
                <th>Project Details</th>
                {/* <th>Treatment</th> */}
              </tr>
            </thead>
            <tbody>
              {orderData &&
                orderData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.formattedTimestamp}</td>
                      <td>{data.name}</td>
                      <td>{data.ageNew} </td>
                      {/* <td>{data.gender}</td> */}
                      <td>{data.bloodType}</td>
                      <td>{data.allergies}</td>
                      <td>{data.diagnosis}</td>
                      {/* <td>{data.treatment}</td> */}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Connect the account</h1>
      )}
    </div>
  );
};

export default Data;
