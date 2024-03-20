import * as accountservices from './src/generated/accountservices.ts';
import * as administrator from './src/generated/administrator.ts';
import * as rwexports from './src/generated/exports.ts';
import * as home from './src/generated/home.ts';
import * as integrations from './src/generated/integrations.ts';
import * as mobile from './src/generated/mobile.ts';
import * as pages from './src/generated/pages.ts';
import * as plugins from './src/generated/plugins.ts';
import * as reports from './src/generated/reports.ts';
import * as settings from './src/generated/settings.ts';
import * as utilities from './src/generated/utilities.ts';
import * as custom from './src/custom.ts';
import * as tools from './src/tools.ts';

export class RentalWorks {
    private static _baseUrl: string = '';
    private static _token: string = '';

    public static get baseUrl() {
        return this._baseUrl;
    }

    public static set baseUrl(baseUrl: string) {
        this._baseUrl = baseUrl;

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
        custom.defaults.baseUrl = baseUrl;
    }

    public static get token() {
        return this._token;
    }

    public static set token(token: string) {
        this._token = token;
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
        custom.defaults.headers.Authorization = bearer;
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
    public static custom = custom;
    public static tools = tools;

    public static async login(username: string, password: string) {
        const response = await accountservices.postApiV1Jwt(
            {
                UserName: username,
                Password: password,
            }
        );

        const token = response.access_token;
        if (!token) {
            throw new Error('No access token returned. Check your username and password.');
        }

        this.token = token;
    }
}