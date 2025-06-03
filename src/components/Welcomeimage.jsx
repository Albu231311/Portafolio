import Welcomeimage from '../assets/images/port.png';

export default function ProfileImage() {
  return (
    <div className="w-100 h-100 overflow-hidden mx-auto my-4">
      <img
        src={Welcomeimage}
        alt="Welcome Photo"
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    </div>
  );
}
