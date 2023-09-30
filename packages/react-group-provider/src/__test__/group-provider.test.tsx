// extarnal
import { render, screen } from '@testing-library/react';
import { StrictMode } from 'react';
import { describe, expect, expectTypeOf, it } from 'vitest';

// packages
import type { GroupProviderProps } from '@monorepo/types';

// internal
import InfoComponent from '@/components/InfoComponent';
import GroupProvider from '@/hooks/group-provider';
import InfoProvider from '@/providers/InfoProvider';

describe('GroupProvider', () => {
	// normal scenario
	it('type check', () => {
		// type check
		expectTypeOf(
			GroupProvider([InfoProvider])
		).toEqualTypeOf<GroupProviderProps>();
	});

	it('react strict check', () => {
		const TestProvider = GroupProvider([StrictMode]);
		render(<TestProvider>test</TestProvider>);
		const target = screen.getByText('test');
		expect(target.innerHTML).toBe('test');
	});

	it('single provider check', () => {
		const TestProvider = GroupProvider([InfoProvider]);
		render(
			<TestProvider>
				<InfoComponent />
			</TestProvider>
		);
		const target = screen.getByText('test');
		expect(target.innerHTML).toBe('test');
	});

	it('mulch provider test', () => {
		const TestProvider = GroupProvider([StrictMode, InfoProvider]);
		render(
			<TestProvider>
				<InfoComponent />
			</TestProvider>
		);
		const target = screen.getByText('test');
		expect(target.innerHTML).toBe('test');
	});
});
