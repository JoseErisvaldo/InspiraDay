import React from 'react';
import Button from '../UX/Button/Button';
import jose from './jose.png'

export default function ProfileInfoCard () {
  return (
    <div className="p-4 rounded text-gray-500">
      <img src={jose} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h2 className='text-center font-bold'>José Erisvaldo</h2>
      <div className='flex flex-col justify-center items-center gap-4'>
        <div className='flex justify-center items-center gap-4'>
          <span className='font-bold  text-center'>
            <p>Seguidores</p>
            <p>1000</p>
          </span>
          <span className='font-bold  text-center'>
            <p>Seguindo</p>
            <p>0</p>
          </span>
        </div>
        <div>
          <Button text="Ver perfil" background="#0084ff" color="#fff" />
        </div>
      </div>
    </div>
  );
};

