import Resume from "@/components/Resume";

const ResumeRoute = () => {
  const envData = {
    myName: process.env.REACT_APP_MY_NAME,
    myRole: process.env.REACT_APP_MY_ROLE,
    mobile: process.env.REACT_APP_MOBILE,
    email: process.env.REACT_APP_EMAIL,
    location: process.env.REACT_APP_LOCATION,
  };
  return <Resume envData={envData} />;
};
export default ResumeRoute;
