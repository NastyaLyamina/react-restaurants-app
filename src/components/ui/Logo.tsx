import LogoIcon from '../../assets/stair.svg?react';
import './Logo.css';

export const Logo = () => (
  <div className="logo-wrapper">
    <LogoIcon width={24} height={24} className="logo__icon" />
    <span className="logo__text">Eats</span>
  </div>
);