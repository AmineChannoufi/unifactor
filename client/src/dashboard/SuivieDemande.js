import React from "react";
import { Link } from "react-router-dom";

function SuivieDemande() {
  return (
    <div style={{ marginTop: "150px" }}>
     

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Num</th>

            <th style={{ textAlign: "center" }}>adherent</th>
            <th style={{ textAlign: "center" }}>ident</th>
            <th style={{ textAlign: "center" }}>rib</th>
            <th style={{ textAlign: "center" }}>ca</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        {/* <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.adherent}</td>
                <td>{item.ident}</td>
                <td>{item.rib}</td>
                <td>{item.ca}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                   // onClick={() => deleteContact(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/View/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </div>
  );
}

export default SuivieDemande;
