import user from '../user.json'
import data from '../data.json'
import { Profile } from './Profile/Profile.jsx'
import { Statistics } from './Statistics/Statistics.jsx'


// console.log(data)
export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} title = {"Upload stats"}/>
    </div>
  );
};

