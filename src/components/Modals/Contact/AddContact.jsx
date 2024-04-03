import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import contactApi from '../../../hooks/contact/contactApi';
import './css/AddContact.css'

const AddContact = ({ setIsModalCreate, isRolApi }) => {


    const { createContact } = contactApi();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleModal = () => {
        setIsModalCreate(false)
    }



    const submit = async (data) => {
        createContact(data);
        setIsModalCreate(false);
    }

    return (
        <div className="add_contact_container">
            <div className="add_contact_backdrop" onClick={handleModal}></div>
            <form className="add_contact_form" onSubmit={handleSubmit(submit)}>
                <div className=''>
                    <p className='add_contact_title'>Agregar Contacto</p>
                </div>
                <div className=''>
                    <div className="">
                        <div className=''>
                            <label className="add_contact_label" htmlFor="dni">
                                Cédula | RUC
                            </label>
                            <input
                                type="number"
                                id="dni"
                                name="dni"
                                className="add_contact_input"
                                {...register('dni', { required: 'Este campo es obligatorio' })}
                            />
                            {errors.dni && <p>{errors.dni.message}</p>}
                        </div>
                        <div className=''>
                            <label htmlFor="" className='add_contact_label'>Rol</label>
                            <select name="" id="" className=""
                                {...register('rolId', { required: 'Este campo es obligatorio' })}
                            >
                                <option value="" defaultValue>Seleccione uno</option>
                                {isRolApi?.map((rol) => (
                                    <option key={rol.id} value={rol.id}>
                                        {rol.role}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="">
                            <label className="add_contact_label" htmlFor="company">
                                Empresa
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="add_contact_input"
                                {...register('company')}
                            />
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <label className="add_contact_label" htmlFor="firstName">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="add_contact_input"
                                {...register('firstName', { required: 'Este campo es obligatorio' })}
                            />
                            {errors.firstName && <p>{errors.firstName.message}</p>}
                        </div>
                        <div className="">
                            <label className="add_contact_label" htmlFor="lastName">
                                Apellidos
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="add_contact_input"
                                {...register('lastName', { required: 'Este campo es obligatorio' })}
                            />
                            {errors.lastName && <p>{errors.lastName.message}</p>}
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <label className="add_contact_label" htmlFor="phone">
                                Telefono
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="add_contact_input"
                                {...register('phone', { required: 'Este campo es obligatorio' })}
                            />
                            {errors.phone && <p>{errors.phone.message}</p>}
                        </div>
                        <div className="">
                            <label className="add_contact_label" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="add_contact_input"
                                {...register('email', { required: 'Este campo es obligatorio' })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <label className="add_contact_label" htmlFor="addrees">
                                Direccion
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="add_contact_input"
                                {...register('address', { required: 'Este campo es obligatorio' })}
                            />
                            {errors.address && <p>{errors.address.message}</p>}
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <label className="add_contact_label" htmlFor="country">
                                Pais
                            </label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                className="add_contact_input"
                                defaultValue='Ecuador'
                                {...register('country', { required: 'Este campo es obligatorio' })}
                            />
                            {errors.country && <p>{errors.country.message}</p>}
                        </div>
                        <div className="">
                            <label className="add_contact_label" htmlFor="country">
                                Ciudad
                            </label>
                            <input
                                type="text"

                                className="add_contact_input"
                                {...register('city', { required: 'Este campo es obligatorio' })}
                            />
                            {errors.city && <p>{errors.city.message}</p>}
                        </div>
                        
                    </div>
                </div>
                <div className="add_contact_buttons_container">
                    <button
                        type="submit"
                        className=""

                    >
                        Agregar
                    </button>
                    <button
                        type='submit'
                        className="add_contact_cancel"
                        onClick={() => setIsModalCreate(false)}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddContact;
