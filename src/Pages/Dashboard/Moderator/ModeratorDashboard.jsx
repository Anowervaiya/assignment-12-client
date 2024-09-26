import React from 'react'
import {
  MdOutlineManageAccounts,
  MdOutlineManageHistory,
  MdOutlineRateReview,
} from 'react-icons/md';

import { FaRegUser } from 'react-icons/fa';
import { VscGitStashApply } from 'react-icons/vsc';
import DynamicLink from '../../../Components/DynamicLink/DynamicLink';

function ModeratorDashboard({ handleToogle }) {
  return (
    <div>
      <DynamicLink
        handleToogle={handleToogle}
        address={'add-scholarship'}
        name={'Add Scholarship'}
        icon={<VscGitStashApply size={30} />}
      ></DynamicLink>
      <DynamicLink
        handleToogle={handleToogle}
        address={'manage-scholarships'}
        name={'Manage Scholarships'}
        icon={<MdOutlineManageAccounts size={30} />}
      ></DynamicLink>
      <DynamicLink
        handleToogle={handleToogle}
        address={'all-reviews'}
        name={'All Reviews'}
        icon={<MdOutlineRateReview size={30} />}
      ></DynamicLink>
      <DynamicLink
        handleToogle={handleToogle}
        address={'applied-scholarship'}
        name={'All applied Scholarship'}
        icon={<MdOutlineManageHistory size={30} />}
      ></DynamicLink>
    </div>
  );
}

export default ModeratorDashboard