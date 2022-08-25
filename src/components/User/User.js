import Image from 'next/image';
import { isLoggedIn } from '../../features/user/userSlice.js';
import UserStyles from './User.styles.js';
import { IconUserCircle } from '@tabler/icons';;

const User = ({ user }) => {
  const { displayName, photoURL } = user
  console.log(displayName);
  return (
    <>
      <style jsx>{UserStyles}</style>
      <div className="user">
        <h2 className="name">{displayName}</h2>
        <span className="avatar">{isLoggedIn
          ? photoURL
            ? (<div style={{ borderRadius: '50%', overflow: 'hidden', width: '32px', height: '32px' }}>
                <Image
                  src={photoURL}
                  objectFit="cover"
                  width="32px"
                  height="32px"
                  className="avatar-img"
                  alt=""
                />
              </div>)
            : <IconUserCircle size={32} />
          : <IconUserCircle size={32} />}
        </span>
      </div>
    </>
  );
};

export default User;
