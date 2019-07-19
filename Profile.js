import React from 'react';
const Profile = (props) => <div>You're on the Profile Tab
<button onClick={()=>props.addTabs('contact','Contact')}>Add Contact</button>
</div>;
export default Profile;