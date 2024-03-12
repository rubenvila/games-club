/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import appFirebase from '../credentials';
import { getAuth } from 'firebase/auth';
import Navbar from './Navbar';

const Profile = () => {
  const auth = getAuth(appFirebase);
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    username: '',
    email: '',
  });
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
  });
  const db = getFirestore(appFirebase);

  useEffect(() => {
    const fetchUserData = async () => {
      const userRef = doc(db, `users/${auth.currentUser.uid}`);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData(data);
        setFormData({
          nombre: data.nombre,
          apellido: data.apellido,
          username: data.username,
          email: data.email,
        });
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const userRef = doc(db, `users/${auth.currentUser.uid}`);
    await updateDoc(userRef, {
      nombre: formData.nombre,
      apellido: formData.apellido,
      username: formData.username,
    });

    setEditing(false);
    setUserData({ ...userData, nombre: formData.nombre, apellido: formData.apellido, username: formData.username });
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h2 className="pu-title">PERFIL</h2>
        <div className="user-info">
          {editing ? (
            <form onSubmit={handleSave}>
              <div>
                <label className='edit-title' htmlFor="nombre">Nombre</label>
                <input className='cajatexto2' type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
              </div>
              <div>
                <label className='edit-title' htmlFor="apellido">Apellido</label>
                <input className='cajatexto2' type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} />
              </div>
              <button type="submit" className='btn btn-primary'>Guardar Cambios</button>
            </form>
          ) : (
            <div>
              <p className='title-descript'>
                <b className='answ-descript'>NOMBRE</b> {userData.nombre} {userData.apellido}
              </p>
              <p className='title-descript'>
                <b className='answ-descript'>USUARIO</b> {userData.username}
              </p>
              <p className='title-descript'>
                <b className='answ-descript'>CORREO</b> {userData.email}
              </p>
              <button onClick={handleEdit} className="btn btn-primary">Editar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;