import React from 'react';
import Button from '../UX/Button/Button';

export default function ProfileInfoCard({ profile }) {
  return (
    <div className=" w-full flex flex-col items-center p-4 bg-card rounded-lg ">
      <img
        src={profile.profile_photo || "default_profile_image_url"}
        alt={profile.name}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="mt-4 text-lg font-semibold text-foreground">{profile.name}</h2>
      <p className="">@{profile.username || "username"}</p>
      <div className="flex space-x-4 mt-2">
        <span className="text-center">Publicações <span className='font-bold'> 21 </span> </span>
        <span className="text-center">
          Seguidores: <span className='font-bold'> {profile.followsCount || 0}</span>
        </span>
        <span className="">
          Seguindo:  <span className='font-bold'>{profile.followingCount || 0}</span>
        </span>
      </div>
      <span className="text--center font-semibold">
          {profile.bio || ''}
        </span>
      <div className="mt-4 flex flex-col space-y-2">
        <Button text={"Editar perfil"} background={'rgb(59 130 246 )'} color={'white'} />
       </div>
    </div>
  );
}
