import React from 'react'
import DynamicLink from '../../../Components/DynamicLink/DynamicLink';
import {
  MdOutlineManageAccounts,
  MdOutlineManageHistory,
  MdOutlineRateReview,
} from 'react-icons/md';
function UserDashboard({ handleToogle }) {
  return (
    <div>
      <DynamicLink
        handleToogle={handleToogle}
        address={'my-reviews'}
        name={'My Reviews'}
        icon={<MdOutlineRateReview size={30} />}
      ></DynamicLink>
      <DynamicLink
        handleToogle={handleToogle}
        address={'my-application'}
        name={'My Application'}
        icon={<MdOutlineManageHistory size={30} />}
      ></DynamicLink>
    </div>
  );
}

export default UserDashboard