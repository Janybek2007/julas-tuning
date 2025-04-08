export interface CarItemProps {
   item: {
      image?: string;
      title: string;
      id: number;
   };
   tuning?: {
      created_at: string;
      delete?: VoidFunction;
   };
   soon?: boolean;
   actions?: { type: ActionType; onClick?: VoidFunction }[];
}

export type ActionType = 'view' | 'call' | 'select';
