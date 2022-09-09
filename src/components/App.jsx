// import data from '../user.json'
import { Profile } from './Profile/Profile.jsx'

const data = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
}
console.log(data)
export const App = () => {
  return (
    <div>
      <Profile user={data}/>
    </div>
  );
};

