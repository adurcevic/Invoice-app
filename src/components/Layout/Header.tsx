import React from 'react';
import Logo from '../Logo';
import { useThemeState } from '../../context/ThemeContext';
import SunAndMoon from '../Icons/SunAndMoon';
import { layout } from '../../style';

const Header = () => {
  const { theme, changeTheme } = useThemeState();

  return (
    <div className="flex bg-gray-primary dark:bg-dark-primary">
      <div className="flex w-full items-center justify-between border-r-[1px] border-blue-tertiary pr-[23px]">
        <div className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-r-[20px] bg-purple-primary after:absolute after:top-[50%] after:h-[72px] after:w-[72px] after:rounded-l-[20px] after:bg-purple-secondary after:content-['']">
          <Logo />
        </div>
        <button
          className="transition-brightness h-8 w-8 cursor-pointer touch-manipulation rounded-full bg-none outline-offset-4 duration-300 hover:brightness-150 focus:brightness-150"
          onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
          title="Toggles light & dark"
          aria-label={theme === 'dark' ? 'dark' : 'light'}
        >
          <SunAndMoon />
        </button>
      </div>
      <div className={`${layout.flexCenter}`}>
        <img
          className="mx-6 h-[32px] w-[32px] rounded-full"
          src="/src/assets/image-avatar.jpg"
          alt="profile picture"
        />
      </div>
    </div>
  );
};

export default Header;
