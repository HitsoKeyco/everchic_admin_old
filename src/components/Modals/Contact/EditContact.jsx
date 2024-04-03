import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import contactApi from '../../../hooks/contact/contactApi';
import './css/EditContact.css'

const EditContact = ({ handleModalEditContact, isRolApi, updateData, contact }) => {
    const { updateContact } = contactApi();
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    const handleModal = (e) => {
        e.preventDefault();
        handleModalEditContact(false);
    }


    const submit = async (data) => {
        console.log(data);
        await updateContact(data, contact.id);
        setTimeout(updateData, 2000);
        handleModalEditContact(false);
    }

    return (
        <>
            <div className="edit_contact_container">
                <div className="edit_contact_backdrop" onClick={handleModal}></div>
                {
                    <form id='myForm' className="edit_contact_form" onSubmit={handleSubmit(submit)}>
                        <div className=''>
                            <p className='edit_contact_title'>Editar Contacto</p>
                        </div>
                        <div className=''>
                            <div className="">
                                <div className=''>
                                    <label className="edit_contact_label" htmlFor="dni">
                                        Cédula | RUC
                                    </label>
                                    <input
                                        type="number"
                                        id="dni"
                                        name="dni"
                                        className="edit_contact_input"
                                        defaultValue={contact.dni}
                                        {...register('dni', { required: 'Este campo es obligatorio' })}
                                    />
                                    {errors.dni && <p>{errors.dni.message}</p>}
                                </div>
                                <div className=''>
                                    <label htmlFor="" className='edit_contact_label'>Rol</label>
                                    <select
                                        name=""
                                        id=""
                                        className=""
                                        {...register('roleId', { required: 'Este campo es obligatorio' })}
                                        defaultValue={contact.rolId}
                                        onChange={(e) => setValue('rolId', e.target.value)}
                                    >
                                        {isRolApi?.map((rol) => (
                                            <option key={rol.id} value={rol.id}>
                                                {rol.role}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="">
                                    <label className="edit_contact_label" htmlFor="company">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="edit_contact_input"
                                        defaultValue={contact.company}
                                        {...register('company')}
                                    />

                                </div>
                            </div>

                            <div className="">
                                <div className="">
                                    <label className="edit_contact_label" htmlFor="firstName">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="edit_contact_input"
                                        defaultValue={contact.firstName}
                                        {...register('firstName', { required: 'Este campo es obligatorio' })}
                                    />
                                    {errors.firstName && <p>{errors.firstName.message}</p>}
                                </div>
                                <div className="">
                                    <label className="edit_contact_label" htmlFor="lastName">
                                        Apellidos
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="edit_contact_input"
                                        defaultValue={contact.lastName}
                                        {...register('lastName', { required: 'Este campo es obligatorio' })}
                                    />
                                    {errors.lastName && <p>{errors.lastName.message}</p>}
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <label className="edit_contact_label" htmlFor="phone">
                                        Telefono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="edit_contact_input"
                                        defaultValue={contact.phone}
                                        {...register('phone', { required: 'Este campo es obligatorio' })}
                                    />
                                    {errors.phone && <p>{errors.phone.message}</p>}
                                </div>
                                <div className="">
                                    <label className="edit_contact_label" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="edit_contact_input"
                                        defaultValue={contact.email}
                                        {...register('email', { required: 'Este campo es obligatorio' })}
                                    />
                                    {errors.email && <p>{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <label className="edit_contact_label" htmlFor="addrees">
                                        Direccion
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        className="edit_contact_input"
                                        defaultValue={contact.address}
                                        {...register('address', { required: 'Este campo es obligatorio' })}
                                    />
                                    {errors.address && <p>{errors.address.message}</p>}
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <label className="edit_contact_label" htmlFor="country">
                                        Pais
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"                                        
                                        className="edit_contact_input"
                                        defaultValue={contact.country}
                                        {...register('country', { required: 'Este campo es obligatorio' })}
                                    />
                                    {errors.country && <p>{errors.country.message}</p>}
                                </div>
                                <div className="">
                                    <label className="edit_contact_label" htmlFor="country">
                                        Ciudad
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        className="edit_contact_input"
                                        defaultValue={contact.city}
                                        {...register('city', { required: 'Este campo es obligatorio' })}
                                    />
                                    {errors.city && <p>{errors.city.message}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="edit_contact_buttons_container">
                            <button
                                type="submit"
                                form="myForm"
                                className=""
                            >
                                Actualizar
                            </button>
                            <button
                                className="edit_contact_button_cancel"
                                onClick={handleModal}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                }
            </div>
        </>
    );
};

export default EditContact;
