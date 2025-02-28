import { Sidebar } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import type { HTMLAttributes, VFC } from 'react';
import React from 'react';

import GenericMenu from '../../../components/GenericMenu';
import type { GenericMenuItemProps } from '../../../components/GenericMenuItem';
import { useHandleMenuAction } from '../../../hooks/useHandleMenuAction';
import { useAdministrationMenu } from './hooks/useAdministrationMenu';

const Administration: VFC<Omit<HTMLAttributes<HTMLElement>, 'is'>> = (props) => {
	const t = useTranslation();

	const sections = useAdministrationMenu();
	const items = sections.reduce((acc, { items }) => [...acc, ...items], [] as GenericMenuItemProps[]);

	const handleAction = useHandleMenuAction(items);

	return <GenericMenu sections={sections} title={t('Administration')} onAction={handleAction} is={Sidebar.TopBar.Action} {...props} />;
};

export default Administration;
