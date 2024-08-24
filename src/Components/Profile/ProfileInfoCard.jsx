import React from 'react';
import Button from '../UX/Button/Button';
import jose from './jose.png'
import { Link } from 'react-router-dom';

export default function ProfileInfoCard ({profile}) {
  return (
    <div className="p-4 rounded text-gray-500">
      <img src={profile.photo} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h2 className='text-center font-bold'>{profile.name}</h2>
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
      </div>
    </div>
  );
};

