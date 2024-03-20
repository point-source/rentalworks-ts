import * as accountservices from './generated/accountservices';
import * as administrator from './generated/administrator';
import * as rwexports from './generated/exports';
import * as home from './generated/home';
import * as integrations from './generated/integrations';
import * as mobile from './generated/mobile';
import * as pages from './generated/pages';
import * as plugins from './generated/plugins';
import * as reports from './generated/reports';
import * as settings from './generated/settings';
import * as utilities from './generated/utilities';

export class RentalWorks {
    public static set baseUrl(baseUrl: string) {
        accountservices.defaults.baseUrl = baseUrl;
        administrator.defaults.baseUrl = baseUrl;
        rwexports.defaults.baseUrl = baseUrl;
        home.defaults.baseUrl = baseUrl;
        integrations.defaults.baseUrl = baseUrl;
        mobile.defaults.baseUrl = baseUrl;
        pages.defaults.baseUrl = baseUrl;
        plugins.defaults.baseUrl = baseUrl;
        reports.defaults.baseUrl = baseUrl;
        settings.defaults.baseUrl = baseUrl;
        utilities.defaults.baseUrl = baseUrl;
    }

    public static set token(token: string) {
        this.token = token;
        const bearer = `Bearer ${token}`;

        accountservices.defaults.headers.Authorization = bearer;
        administrator.defaults.headers.Authorization = bearer;
        rwexports.defaults.headers.Authorization = bearer;
        home.defaults.headers.Authorization = bearer;
        integrations.defaults.headers.Authorization = bearer;
        mobile.defaults.headers.Authorization = bearer;
        pages.defaults.headers.Authorization = bearer;
        plugins.defaults.headers.Authorization = bearer;
        reports.defaults.headers.Authorization = bearer;
        settings.defaults.headers.Authorization = bearer;
        utilities.defaults.headers.Authorization = bearer;
    }

    public static accountservices = accountservices;
    public static administrator = administrator;
    public static exports = rwexports;
    public static home = home;
    public static integrations = integrations;
    public static mobile = mobile;
    public static pages = pages;
    public static plugins = plugins;
    public static reports = reports;
    public static settings = settings;
    public static utilities = utilities;

    public static async login(username: string, password: string) {
        const response = await accountservices.postApiV1Jwt(
            {
                UserName: username,
                Password: password,
            }
        );
        this.token = response.access_token ?? '';
    }
}