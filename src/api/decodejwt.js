import jwt_decode from 'jwt-decode';
import React from 'react'

export default function DecodeJwt() {
    const token = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).auth).user;
    console.log(jwt_decode(token));
}
