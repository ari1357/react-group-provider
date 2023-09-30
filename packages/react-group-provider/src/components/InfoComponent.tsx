// extarnal
import { useContext, useEffect } from 'react';

// internal
import { InfoContext } from '@/providers/InfoProvider';

const InfoComponent = () => {
	// hook
	const { info, setInfo } = useContext(InfoContext);

	// first render
	useEffect(() => {
		setInfo('test');
	}, [setInfo]);

	return (
		<>
			<p>{info}</p>
		</>
	);
};

export default InfoComponent;
