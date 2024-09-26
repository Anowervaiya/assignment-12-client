import React from 'react'
import ModeratorDashboard from '../Moderator/ModeratorDashboard';
import DynamicLink from '../../../Components/DynamicLink/DynamicLink';
import {
  MdOutlineManageHistory,
} from 'react-icons/md';
function AdminDashboard({ handleToogle }) {
  return (
    <div>
      <ModeratorDashboard handleToogle={handleToogle} />
      <DynamicLink
        handleToogle={handleToogle}
        address={'manage-user'}
        name={'Manage User'}
        icon={<MdOutlineManageHistory size={30} />}
      ></DynamicLink>
    </div>
  );
}

export default AdminDashboard