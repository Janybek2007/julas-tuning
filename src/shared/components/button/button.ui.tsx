import React from 'react';
import s from './styles.module.scss';
import { Icon } from '../icon/icon.ui';
import { Link } from 'react-router';
import type { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
   variant = 'solid',
   children,
   icon,
   className,
   color = 'primary',
   as = 'button',
   href,
   ...props
}) => {
   const Component = as === 'a' ? Link : 'button';
   return (
      <Component
         to={href || '#'}
         {...props}
         className={`${s.button} ${s[`v-${variant}`]} ${
            s[`c-${color}`]
         } ${className}`}
      >
         {icon && <Icon {...icon} />}
         {children}
      </Component>
   );
};
