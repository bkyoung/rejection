import Image from 'next/image';
import { isLoggedIn } from '../../features/user/userSlice.js';
import UserStyles from './User.styles.js';
import { IconUserCircle } from '@tabler/icons';;

const User = ({ user = { displayName: 'Anonymous', photoURL: '' } } = {}) => {
  const { displayName, photoURL } = user;
  return (
    <>
      <style jsx>{UserStyles}</style>
      <div className="user">
        <span className="avatar">{isLoggedIn
          ? photoURL
            ? (<div>
                <Image
                  src={photoURL}
                  objectFit="cover"
                  width="32px"
                  height="32px"
                  alt={displayName}
                />
              </div>)
            : <IconUserCircle size={32} />
          : <IconUserCircle size={32} />}
        </span>
        <h2 className="name">{displayName}</h2>
      </div>
    </>
  );
};

export default User;
