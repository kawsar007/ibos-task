import React, { useState } from "react";
const TaskTwo = () => {
  const [dummyData, setDummyData] = useState([
    {
      moduleName: "Configuration",
      activityName: "Item Category",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
      moduleName: "Configuration Two",
      activityName: "Item",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
        moduleName: "Configuration Three",
        activityName: "Item Category",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
      {
        moduleName: "Configuration Four",
        activityName: "Item",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
  ]);

  console.log(dummyData, "DD");
  const dummyDataHandler = (name, value, ind) => {
    let data = [...dummyData];
    let isInd = data[ind];
    isInd[name] = value;
    setDummyData(data);
    console.log(ind, "Name");
  };

  return (
    <div className="content">
      <table id="customers">
        <tr>
          <th>Module Name</th>
          <th>Activity Name</th>
          <th>Create</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>Approve</th>
        </tr>
        {dummyData.map((dumData, index) => (
          <tr key={index}>
            <td>{dumData?.moduleName}</td>
            <td>{dumData?.activityName}</td>
            <td>
              <input
                type="checkbox"
                value={dumData?.isCreate}
                name="isCreate"
                onChange={(e) => {
                  dummyDataHandler("isCreate", e.target.checked, index);
                }}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value={dumData?.isView}
                name="isView"
                onChange={(e) => {
                  dummyDataHandler("isView", e.target.checked, index);
                }}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value={dumData?.isEdit}
                name="isEdit"
                onChange={(e) => {
                  dummyDataHandler("isEdit", e.target.checked, index);
                }}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value={dumData?.isDelete}
                name="isDelete"
                onChange={(e) => {
                  dummyDataHandler("isDelete", e.target.checked, index);
                }}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value={dumData?.isApprove}
                name="isApprove"
                onChange={(e) => {
                  dummyDataHandler("isApprove", e.target.checked, index);
                }}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TaskTwo;