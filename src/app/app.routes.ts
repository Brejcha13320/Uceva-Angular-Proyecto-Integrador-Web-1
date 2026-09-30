import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { ClientPage } from './pages/client/client.page';
import { AgentPage } from './pages/agent/agent.page';
import { AdminPage } from './pages/admin/admin.page';

export const routes: Routes = [
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "register",
        component: RegisterPage
    },
    {
        path: "client",
        component: ClientPage
    },
    {
        path: "agent",
        component: AgentPage
    },
    {
        path: "admin",
        component: AdminPage
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }
];
