import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendsList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <div>
      <Profile username={user.username} avatar = {user.avatar} tag = {user.tag} location = {user.location} stats = {user.stats} />
      <Statistics stats={data} title={"Upload stats"} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

