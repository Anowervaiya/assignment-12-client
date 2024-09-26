import { useState } from 'react';

// import { imageUpload } from '../../../api/utils';
// import { Helmet } from 'react-helmet-async';
import { useMutation } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import { imageUpload } from '../../../APi/Utilities';
import AddScholarshipForm from '../../../Components/Form/AddScholarshipForm';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import ImageUpload from '../../../utility/ImageUpload';

const AddScholarship = () => {
  const [ApplicationDeadline, setApplicationDeadline] = useState(new Date());
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState('Upload Image');

  const { mutateAsync } = useMutation({
    mutationFn: async ScholarshipData => {
      const { data } = await axiosSecure.post(
        `/add-scholarship`,
        ScholarshipData
      );
      return data;
    },
    onSuccess: () => {
      toast.success('Scholarhip Added Successfully!');
      navigate('/Dashboard/manage-scholarships');
      setLoading(false);
    },
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const ScholarshipName = form.ScholarshipName.value;
    const UniversityName = form.UniversityName.value;
    const subject = form.subject.value;
    const ScholarshipCategory = form.ScholarshipCategory.value;
    const DegreeCategory = form.DegreeCategory.value;
    const Universityrank = form.Universityrank.value;
    const ServiceCharge = form.ServiceCharge.value;
    const TuitionFees = form.TuitionFees.value;
    const location = form.location.value;
    const description = form.description.value;
    const ApplicationFees = parseFloat(form.ApplicationFees.value)
    const image = form.image.files[0];

    const Moderator = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    try {
      const image_url = await ImageUpload(image);

      const ScholarshipData = {
        ScholarshipName,
        UniversityName,
        Universityrank,
        ServiceCharge,
        TuitionFees,
        description,
        ApplicationFees,
        subject,
        ScholarshipCategory,
        DegreeCategory,
        image,
        Moderator,
        location,
        ApplicationDeadline,
        image: image_url,
        
      };

      console.table(ScholarshipData);

      await mutateAsync(ScholarshipData);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  //   handle image change
  const handleImage = image => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name);
  };

  return (
    <>
      {/* Form */}
      <AddScholarshipForm
        handleSubmit={handleSubmit}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
        loading={loading}
        ApplicationDeadline={ApplicationDeadline}
        setApplicationDeadline={setApplicationDeadline}
      />
    </>
  );
};

export default AddScholarship;
