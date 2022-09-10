import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import { Profile } from './Profile/Profile.jsx'
import { Statistics } from './Statistics/Statistics.jsx'
import { FriendsList } from './FriendList/FriendList'



export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} title={"Upload stats"} />
      <FriendsList friends={friends} />
    </div>
  );
};

