import React from "react";
import Myposts from "./Myposts/Mypost";
import Myprofile from "./Myposts/Myprofile";
// import Newpost from "./Post";
import SuperDialogsContainer from './Myposts/MypostContainer';

const Profile = (props) => {
  console.log(props, 'profile.jsx')
  return (
    <div>
      <Myprofile />
      <SuperDialogsContainer
      // postData={props.postsPage.postsData}
      // newPostText={props.newPostText}
      // // dispatch={props.dispatch}
      // store={props.store}
      />
    </div>
  );
};
export default Profile
