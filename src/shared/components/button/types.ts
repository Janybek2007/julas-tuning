import type { IconProps } from '../icon';

export interface ButtonProps extends React.PropsWithChildren {
   variant?: 'solid' | 'outline';
   disabled?: boolean;
   onClick?: (e: React.MouseEvent) => void;
   icon?: IconProps;
   className?: string;
   as?: 'a' | 'button';
   href?: string;
   color?: 'neutral' | 'primary' | 'secondary' | 'mint' | 'tertiary';
   target?: React.HTMLAttributeAnchorTarget;
}
