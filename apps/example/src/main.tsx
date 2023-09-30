// extarnal
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { GroupProvider } from 'react-group-provider';

// packages

import App from './App.tsx';
import './index.css';

const ProviderTree = GroupProvider([StrictMode]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ProviderTree>
		<App />
	</ProviderTree>
);
