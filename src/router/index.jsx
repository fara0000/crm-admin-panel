import React from 'React';
import RequestPage from '../views/requestsPage';
import ActivesPage from "../views/activesPage";
import KnowledgeBasePage from "../views/knowledgeBasePage";
import SettingsPage from "../views/settingsPage";
import ClientsPage from "../views/clientsPage";
import StuffPage from "../views/stuffPage";

const Routes = {
    '/': () => <RequestPage />,
    '/actives': () => <ActivesPage />,
    '/settings': () => <SettingsPage />,
    '/knowledge': () => <KnowledgeBasePage />,
    '/clients': () => <ClientsPage />,
    '/stuff': () => <StuffPage />,
};

export default Routes;

