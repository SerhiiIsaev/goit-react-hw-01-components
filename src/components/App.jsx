import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendsList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'



export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} title={"Upload stats"} />
      <FriendsList friends={friends} />
      <TransactionHistory/>
    </div>
  );
};

