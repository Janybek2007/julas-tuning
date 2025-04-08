export interface CarTuningMenuProps {
   active: string | null;
   setActive: (
      value: string | ((old: string | null) => string | null) | null,
   ) => Promise<URLSearchParams>;
}
