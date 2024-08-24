/**
 * eslint-disable react/react-in-jsx-scope
 *
 * @format
 */

import React from "react";
import { SortBy, type User } from "../types.d";

interface Props {
  changeSorting: (sort: SortBy) => void;
  deleteUser: (email: string) => void;
  showColors: boolean;
  users: User[];
}

export function UsersList({
  hangeSorting,
  deleteUser,
  showColors,
  users,
}: Props) {
  return (
    <>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #000",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 5)",

          overflow: "hidden",
        }}>
        <thead style={{ border: "1px solid #000", borderRadius: "10px" }}>
          <tr>
            <th>Foto</th>
            <th
              className="pointer"
              onClick={() => {
                changeSorting(SortBy.NAME);
              }}>
              Nombre
            </th>
            <th
              className="pointer"
              onClick={() => {
                changeSorting(SortBy.LAST);
              }}>
              Apellido
            </th>
            <th
              className="pointer"
              onClick={() => {
                changeSorting(SortBy.COUNTRY);
              }}>
              País
            </th>
            <th
              className="pointer"
              onClick={() => {
                changeSorting(SortBy.CITY);
              }}>
              Ciudad
            </th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody className={showColors ? "table--showColors" : ""}>
          {users.map((user, index) => {
            const backgroundColor = index % 2 === 0 ? "#333" : "#555";
            const color = showColors ? backgroundColor : "transparent";
            const textColor = showColors ? "#fff" : "#000";

            return (
              <tr
                key={index}
                style={{ backgroundColor: color, color: textColor }}>
                <td>
                  <img
                    src={user.picture.thumbnail}
                    alt="Foto de usuario"
                    width="70"
                    height="70"
                    style={{ borderRadius: "50%" }}
                  />
                  <p>Edad: {user.dob.age}</p>
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td>{user.location.city}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user.email);
                    }}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "10px 20px",
                      cursor: "pointer",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 4)",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "darkred")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "red")
                    }>
                    Borrar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
