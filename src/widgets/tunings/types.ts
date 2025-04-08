export interface TuningsProps {
   models: { id: number; image: string; name: string }[];
   part: string;
   setActive: (
      value: string | ((old: string | null) => string | null) | null,
   ) => Promise<URLSearchParams>;
}
