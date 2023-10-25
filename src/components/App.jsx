import React from 'react';
import Profile from './Profile/Profile.jsx';
import user from '../assets/user.json';

import Statistics from './Statistics/Statistics.jsx';
import data from '../assets/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../assets/friends.json';

import Transactions from './Transactions/Transactions';
import transactions from '../assets/transactions.json';

export const App = () => {
  return (
    <div>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>

    <div>
      <Statistics title="Upload stats" stats={data} />
    </div>

    <div>
      <FriendList friends={friends} />
    </div>

    <div>
      <Transactions items={transactions} />
    </div>

    </div>
  );
};
