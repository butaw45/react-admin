import axios from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { Role } from "../../models/role";



const UserEdit = (props: any) => {
  let { id } = useParams();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role_id, setRoleId] = useState("");
  const [roles, setRoles] = useState([]);
  const [navigate, setNavigate] = useState(false);
  
  useEffect(() => {
    (async () => {
      const response = await axios.get("roles");

      setRoles(response.data);

      const { data } = await axios.get(`users/${id}`);

      setFirstName(data.first_name);
      setLastName(data.last_name);
      setEmail(data.email);
      setRoleId(data.role_id);
    })();
  }, [id]);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.put(`users/${id}`, {
      first_name,
      last_name,
      email,
      role_id,
    });

    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="users" />;
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label>First Name</label>
          <input className="form-control" defaultValue={first_name} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input className="form-control" defaultValue={last_name} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Email</label>          
          <input className="form-control" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {/* 
          * //! role_id Belom difix
          * //TODO: Benerin role_id nya, ketika di edit, role_id nya tidak berubah 
        */}
        <div className="mb-3">
          <label>Role</label>
          <select className="form-control" value={role_id} onChange={(e) => setRoleId(e.target.value)}>
            {roles.map((r: Role) => {
              return (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn btn-outline-secondary">Save</button>
      </form>
    </Wrapper>
  );
};

export default UserEdit;
 