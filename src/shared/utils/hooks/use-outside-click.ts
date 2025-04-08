import React from 'react';

export function useOutsideClick<T extends HTMLElement>(
	callback: VoidFunction,
	_ref?: React.RefObject<T | null>
) {
	const $ref = React.useRef<T>(null);
	const ref = _ref !== undefined ? _ref : $ref;
	React.useEffect(() => {
		function handleClick(event: MouseEvent) {
			if (ref.current && !(ref.current as T).contains(event.target as Node)) {
				callback();
			}
		}
		if (typeof document === 'undefined') return;

		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [callback, ref]);
	return $ref;
}
