import React from 'react';
import user from '../../../data/user.json';
import { ProfileStats } from '../ProfileStats';
import { ProfileDesk } from '../profileDesk/ProfileDesk';

export const Profile = () => {
    const {stats, ...userData} = user 
    return (
        <React.Fragment>
            <ProfileDesk {...userData}/>
            <ProfileStats {...stats}/>  
        </React.Fragment>
        
    );
};

//Олег, якщо будеш дивиться цей код, то знай шо ти лох :))
