/**
 * RentalWorks Account Services API v1
 * v1
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "@oazapfts/runtime";
import * as QS from "@oazapfts/runtime/query";
export const defaults: Oazapfts.Defaults<Oazapfts.CustomHeaders> = {
    headers: {},
    baseUrl: "/",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export type WebApiLogicAppFuncSessionLocation = {
    locationid?: string | null;
    location?: string | null;
    locationcode?: string | null;
    companyname?: string | null;
    locationcolor?: string | null;
    ratetype?: string | null;
    ratetypedisplay?: string | null;
    defaultcurrency?: string | null;
    defaultcurrencyid?: string | null;
    defaultcurrencycode?: string | null;
    defaultcurrencysymbol?: string | null;
    defaultpaymentby?: string | null;
    defaulttaxoptionid?: string | null;
    defaulttaxoption?: string | null;
    countryid?: string | null;
    country?: string | null;
    countrycodeisoalpha2?: string | null;
    phone?: string | null;
    useorderlocationbydefault?: boolean;
    defaultrepairpotypeid?: string | null;
    defaultrepairpotype?: string | null;
    emailinvoicetoorderedby?: boolean;
    emailinvoicetoaccountspayable?: boolean;
    defaultpurchasepotypeid?: string | null;
    defaultpurchasepotype?: string | null;
    defaultsubrentalpoordertypeid?: string | null;
    defaultsubrentalpoordertype?: string | null;
    defaultsubsalespoordertypeid?: string | null;
    defaultsubsalespoordertype?: string | null;
    defaultsubmiscpoordertypeid?: string | null;
    defaultsubmiscpoordertype?: string | null;
    defaultsublaborpoordertypeid?: string | null;
    defaultsublaborpoordertype?: string | null;
    defaultcombinedpoordertypeid?: string | null;
    defaultcombinedpoordertype?: string | null;
    defaultdealoutdeliverytype?: string | null;
    defaultdealindeliverytype?: string | null;
};
export type WebApiLogicAppFuncSessionWarehouse = {
    warehouseid?: string | null;
    warehouse?: string | null;
    warehousecode?: string | null;
    promptforcheckoutexceptions?: boolean;
    promptforcheckinexceptions?: boolean;
    storagecontainerstagingenable?: boolean;
    storagecontainerrescanrequired?: boolean;
    quikreceiptenable?: boolean;
    transferavailabilitydays?: number | null;
    regionid?: string | null;
    region?: string | null;
    regionwarehouseids?: string | null;
    regionwarehouses?: string | null;
    internalorderdealid?: string | null;
};
export type WebApiLogicAppFuncSessionDepartment = {
    departmentid?: string | null;
    department?: string | null;
};
export type WebApiLogicAppFuncSessionUser = {
    webusersid?: string | null;
    usersid?: string | null;
    contactid?: string | null;
    usertype?: string | null;
    email?: string | null;
    emailapp?: string | null;
    addsignaturetodraft?: boolean;
    fullname?: string | null;
    name?: string | null;
    browsedefaultrows?: number;
    griddefaultrows?: number;
    applicationtheme?: string | null;
    locale?: string | null;
    locationid?: string | null;
    location?: string | null;
    languageid?: string | null;
    language?: string | null;
    warehouseid?: string | null;
    warehouse?: string | null;
    departmentid?: string | null;
    department?: string | null;
    webadministrator?: boolean;
    firstdayofweek?: number;
    rentalinventorydepartmentid?: string | null;
    rentalinventorydepartment?: string | null;
    salesinventorydepartmentid?: string | null;
    salesinventorydepartment?: string | null;
    partsinventorydepartmentid?: string | null;
    partsinventorydepartment?: string | null;
    transportationinvdepartmentid?: string | null;
    transportationinvdepartment?: string | null;
    laborinventorydepartmentid?: string | null;
    laborinventorydepartment?: string | null;
    miscinventorydepartmentid?: string | null;
    miscinventorydepartment?: string | null;
    spaceinventorydepartmentid?: string | null;
    spaceinventorydepartment?: string | null;
    iscrew?: boolean;
    enablecreatecontract?: boolean;
    qsallowapplyallqtyitems?: boolean;
    allowcontractwithexceptions?: boolean;
    allowswapitems?: boolean;
    CanInsertIntoActiveOrder?: boolean;
    CreditCardPinPadId?: number;
    CreditCardPinPad?: string | null;
};
export type WebApiLogicAppFuncSessionDeal = {
    dealid?: string | null;
    deal?: string | null;
};
export type FwStandardAppManagerFwAmSecurityTreeNode = {
    id?: string | null;
    caption?: string | null;
    nodetype?: string | null;
    properties?: {
        [key: string]: string | null;
    } | null;
    children?: FwStandardAppManagerFwAmSecurityTreeNode[] | null;
};
export type FwStandardSqlServerFwJsonDataTableColumn = {
    Name?: string | null;
    DataField?: string | null;
    DataType?: FwStandardSqlServerFwDataTypes;
    IsUniqueId?: boolean;
    IsVisible?: boolean;
};
export type FwStandardDataFwTranslatedValue = {
    FieldName?: string | null;
    TranslatedValue?: string | null;
    UntranslatedValue?: string | null;
    IsTranslated?: boolean;
    UserIsTranslating?: boolean;
};
export type FwStandardSqlServerFwJsonDataTable = {
    ColumnIndex?: {
        [key: string]: number | null;
    } | null;
    Totals?: {
        [key: string]: number | null;
    } | null;
    Columns?: FwStandardSqlServerFwJsonDataTableColumn[] | null;
    Rows?: any[][] | null;
    PageNo?: number;
    PageSize?: number;
    TotalPages?: number;
    TotalRows?: number;
    DateFields?: string[] | null;
    _Translation?: FwStandardDataFwTranslatedValue[] | null;
};
export type FwStandardSqlServerFwJsonDataTableRead = {
    ColumnIndex?: {
        [key: string]: number | null;
    } | null;
    Totals?: {
        [key: string]: number | null;
    } | null;
    Columns?: FwStandardSqlServerFwJsonDataTableColumn[] | null;
    Rows?: any[][] | null;
    PageNo?: number;
    PageSize?: number;
    TotalPages?: number;
    TotalRows?: number;
    DateFields?: string[] | null;
    ColumnNameByIndex?: {
        [key: string]: string | null;
    } | null;
    _Translation?: FwStandardDataFwTranslatedValue[] | null;
};
export type WebApiModulesAccountServicesAccountSystemSettingsResponse = {
    DefaultUnitId?: string | null;
    DefaultRank?: string | null;
    UserAssignedICodes?: boolean;
    QuikScanStageBySession?: boolean;
    BarcodeSkipPrefixes?: FwStandardSqlServerFwJsonDataTable;
    EnableOriginalShow?: boolean;
    EnablePropsWardrobe?: boolean;
    EnableSetsWalls?: boolean;
};
export type WebApiModulesAccountServicesAccountSystemSettingsResponseRead = {
    DefaultUnitId?: string | null;
    DefaultRank?: string | null;
    UserAssignedICodes?: boolean;
    QuikScanStageBySession?: boolean;
    BarcodeSkipPrefixes?: FwStandardSqlServerFwJsonDataTableRead;
    EnableOriginalShow?: boolean;
    EnablePropsWardrobe?: boolean;
    EnableSetsWalls?: boolean;
};
export type WebApiModulesAccountServicesAccountAccountControllerGetSessionResponse = {
    location?: WebApiLogicAppFuncSessionLocation;
    warehouse?: WebApiLogicAppFuncSessionWarehouse;
    department?: WebApiLogicAppFuncSessionDepartment;
    webUser?: WebApiLogicAppFuncSessionUser;
    deal?: WebApiLogicAppFuncSessionDeal;
    applicationtree?: FwStandardAppManagerFwAmSecurityTreeNode;
    applicationOptions?: any | null;
    clientcode?: string | null;
    serverVersion?: string | null;
    systemSettings?: WebApiModulesAccountServicesAccountSystemSettingsResponse;
    plugins?: any | null;
};
export type WebApiModulesAccountServicesAccountAccountControllerGetSessionResponseRead = {
    location?: WebApiLogicAppFuncSessionLocation;
    warehouse?: WebApiLogicAppFuncSessionWarehouse;
    department?: WebApiLogicAppFuncSessionDepartment;
    webUser?: WebApiLogicAppFuncSessionUser;
    deal?: WebApiLogicAppFuncSessionDeal;
    applicationtree?: FwStandardAppManagerFwAmSecurityTreeNode;
    applicationOptions?: any | null;
    clientcode?: string | null;
    serverVersion?: string | null;
    systemSettings?: WebApiModulesAccountServicesAccountSystemSettingsResponseRead;
    plugins?: any | null;
};
export type FwCoreApiSwashbuckleBadRequestResponse = {
    [key: string]: string[];
};
export type FwStandardModelsFwApiException = {
    StatusCode?: number;
    Message?: string;
    StackTrace?: string;
};
export type WebApiModulesAccountServicesAccountAccountControllerGetOfficeLocationResponse = {
    location?: WebApiLogicAppFuncSessionLocation;
    warehouse?: WebApiLogicAppFuncSessionWarehouse;
    department?: WebApiLogicAppFuncSessionDepartment;
};
export type WebApiModulesAccountServicesAccountResetPasswordRequest = {
    Password: string;
};
export type WebApiModulesAccountServicesAccountResetPasswordResponse = {
    Status?: number;
    Message?: string | null;
};
export type WebApiModulesAccountServicesAccountGetSettingsRequest = {
    WebUsersId?: string | null;
    DepartmentId?: string | null;
    LocationId?: string | null;
};
export type WebApiLogicAppFuncUserSettingsResponse = {
    SuccessBase64Sound?: string | null;
    ErrorBase64Sound?: string | null;
    NotificationBase64Sound?: string | null;
    WebAdministrator?: boolean | null;
    HomeMenuGuid?: string | null;
    HomeMenuPath?: string | null;
    ReportsNavigationMenuVisible?: boolean | null;
    SettingsNavigationMenuVisible?: boolean | null;
    ShowUnreservedQuotes?: boolean | null;
    MainMenuPinned?: boolean | null;
    QuikActivitySetting?: string | null;
    FavoritesJson?: string | null;
    EmailSignature?: string | null;
    AvailabilityPreference?: string | null;
    AvailabilityAllWarehouses?: boolean | null;
    QuikSearchMode?: string | null;
    ShowRentalItemsOutOnly?: boolean | null;
};
export type WebApiLogicAppFuncCustomFieldsResponse = {
    ModuleNames?: string[] | null;
};
export type WebApiLogicAppFuncCustomFormModel = {
    BaseForm?: string | null;
    CustomFormId?: string | null;
    Description?: string | null;
    ThisUserOnly?: boolean | null;
    Html?: string | null;
    AssignTo?: string | null;
};
export type WebApiLogicAppFuncCustomFormsResponse = {
    customForms?: WebApiLogicAppFuncCustomFormModel[] | null;
};
export type WebApiLogicAppFuncDefaultSettingsResponse = {
    DefaultUnitId?: string | null;
    DefaultUnit?: string | null;
    DefaultDealStatusId?: string | null;
    DefaultDealStatus?: string | null;
    DefaultDealPoRequired?: boolean | null;
    DefaultDealPoType?: string | null;
    DefaultDealStagingExcludeOrderAfterWrap?: boolean | null;
    DefaultCustomerStatusId?: string | null;
    DefaultCustomerStatus?: string | null;
    DefaultDealBillingCycleId?: string | null;
    DefaultDealBillingCycle?: string | null;
    DefaultNonRecurringBillingCycleId?: string | null;
    DefaultNonRecurringBillingCycle?: string | null;
    DefaultVendorBillingCycleId?: string | null;
    DefaultVendorBillingCycle?: string | null;
    DefaultCustomerPaymentTermsId?: string | null;
    DefaultCustomerPaymentTerms?: string | null;
    DefaultRank?: string | null;
    DefaultCreditStatusId?: string | null;
    DefaultCreditStatus?: string | null;
    ContactShowAllDeals?: boolean | null;
    DefaultFulfillStrictPricingMatch?: boolean | null;
    DefaultFulfillStrictNestingLvlMatch?: boolean | null;
};
export type WebApiLogicAppFuncInventorySettingsResponse = {
    ICodeMask?: string | null;
    UserAssignedICodes?: boolean | null;
    Enable3WeekPricing?: boolean | null;
    EnableTieredWeekPricing?: boolean | null;
    Tier1Name?: string | null;
    Tier2Name?: string | null;
    Tier3Name?: string | null;
    Tier4Name?: string | null;
    Tier5Name?: string | null;
    AutoUpdateInventoryMetricImperialDimensions?: boolean | null;
    ConvertDimensionsToSmallestUnit?: boolean | null;
    AutoSortInventoryByICode?: boolean | null;
    EnableConsignment?: boolean | null;
    EnableLease?: boolean | null;
    DefaultRentalSaleRetiredReasonId?: string | null;
    DefaultRentalSaleRetiredReason?: string | null;
    DefaultLossAndDamageRetiredReasonId?: string | null;
    DefaultLossAndDamageRetiredReason?: string | null;
    DefaultRentalQuantityInventoryCostCalculation?: string | null;
    DefaultSalesQuantityInventoryCostCalculation?: string | null;
    DefaultPartsQuantityInventoryCostCalculation?: string | null;
    FixedAssetTransferOwnership?: boolean | null;
    EnableInventoryCertification?: boolean | null;
};
export type WebApiLogicAppFuncConsignmentSettingsResponse = {
    EnableConsignment?: boolean | null;
    DefaultConsignorFeeBasedOn?: string | null;
    DefaultConsignorPercent?: number | null;
    DefaultHousePercent?: number | null;
    DefaultTreatConsignedQtyAsOwned?: boolean | null;
};
export type WebApiLogicAppFuncSystemSettingsResponse = {
    AllowDeleteInvoices?: boolean | null;
    AllowInvoiceDateChange?: boolean | null;
    EnableReceipts?: boolean | null;
    EnableOriginalShow?: boolean | null;
    EnablePayments?: boolean | null;
    EnableVendorInvoice?: boolean | null;
    EnablePropsWardrobe?: boolean | null;
    EnableSetsWalls?: boolean | null;
    ShareDealsAcrossOfficeLocations?: boolean | null;
    SynchronizeCustomerStatusAndCreditStatus?: boolean | null;
    SynchronizeDealStatusAndCreditStatus?: boolean | null;
    SystemName?: string | null;
    CompanyName?: string | null;
    IsVendorNumberAssignedByUser?: boolean | null;
    QuoteOrderMessageFormat?: string | null;
    DataLanguageId?: string | null;
    DataLanguage?: string | null;
    AllCaps?: boolean | null;
    EnableQuikLocate?: boolean | null;
    DepartmentFilter?: boolean | null;
    DefaultBillingSelectAllOrders?: boolean | null;
    DefaultProcessConsignmentSelectAllInvoices?: boolean | null;
    EnableCrew?: boolean | null;
};
export type WebApiLogicAppFuncDepartmentDefaultActivities = {
    Facilities?: boolean | null;
    Labor?: boolean | null;
    Miscellaneous?: boolean | null;
    Rental?: boolean | null;
    Sales?: boolean | null;
    Transportation?: boolean | null;
    RentalSale?: boolean | null;
};
export type WebApiLogicAppFuncDepartmentSettingsResponse = {
    RequireContactConfirmation?: boolean | null;
    DefaultActivities?: WebApiLogicAppFuncDepartmentDefaultActivities;
};
export type WebApiLogicAppFuncDocumentBarcodeSettingsResponse = {
    DocumentBarCodeStyle?: string | null;
};
export type WebApiLogicAppFuncSystemNumbersModel = {
    Module?: string | null;
    IsAssignedByUser?: boolean | null;
};
export type WebApiLogicAppFuncSystemNumbersResponse = {
    SystemNumbers?: WebApiLogicAppFuncSystemNumbersModel[] | null;
};
export type WebApiLogicAppFuncWarehouseResponse = {
    MultiWarehouse?: boolean | null;
};
export type WebApiLogicAppFuncGetSettingsResponse = {
    userSettings?: WebApiLogicAppFuncUserSettingsResponse;
    customFields?: WebApiLogicAppFuncCustomFieldsResponse;
    customForms?: WebApiLogicAppFuncCustomFormsResponse;
    defaultSettings?: WebApiLogicAppFuncDefaultSettingsResponse;
    inventorySettings?: WebApiLogicAppFuncInventorySettingsResponse;
    consignmentSettings?: WebApiLogicAppFuncConsignmentSettingsResponse;
    systemSettings?: WebApiLogicAppFuncSystemSettingsResponse;
    department?: WebApiLogicAppFuncDepartmentSettingsResponse;
    documentBarcodeSettings?: WebApiLogicAppFuncDocumentBarcodeSettingsResponse;
    systemNumbers?: WebApiLogicAppFuncSystemNumbersResponse;
    warehouses?: WebApiLogicAppFuncWarehouseResponse;
    isTraining?: boolean;
    isQA?: boolean;
    isDefault?: boolean;
};
export type FwStandardModelsFwApplicationUser = {
    UserName: string;
    Password: string;
    WebApp?: string | null;
    BrowserApp?: string | null;
    BrowserAppVersion?: string | null;
    BrowserDeviceId?: string | null;
    BrowserUserAgent?: string | null;
    BrowserUrl?: string | null;
};
export type FwCoreControllersFwJwtControllerJwtResponseModel = {
    statuscode?: number;
    statusmessage?: string | null;
    access_token?: string | null;
    expires_in?: number;
    resetpassword?: boolean;
};
export type WebApiModulesAccountServicesJwtOktaRequest = {
    Email?: string | null;
    Token?: string | null;
};
export type WebApiModulesAccountServicesJwtOktaSessionRequest = {
    Token?: string | null;
    Apiurl?: string | null;
};
export type WebApiModulesAccountServicesJwtOktaSessionResponseModel = {
    Status?: string | null;
};
export type WebApiModulesAccountServicesJwtAzureAdRequest = {
    Email?: string | null;
    Token?: string | null;
    Tenant?: string | null;
    Audience?: string | null;
    Issuer?: string | null;
};
export type FwStandardModelsCheckBoxListItem = {
    value?: string | null;
    text?: string | null;
    selected?: boolean | null;
};
export type FwStandardModelsBrowseRequest = {
    miscfields?: any | null;
    "module"?: string | null;
    options?: any | null;
    orderby?: string | null;
    orderbydirection?: string | null;
    top?: number;
    pageno?: number;
    pagesize?: number;
    searchfieldoperators?: string[] | null;
    searchfields?: string[] | null;
    searchfieldvalues?: string[] | null;
    searchfieldtypes?: string[] | null;
    searchseparators?: string[] | null;
    searchcondition?: string[] | null;
    searchconjunctions?: string[] | null;
    searchgroupings?: number[] | null;
    uniqueids?: any | null;
    boundids?: any | null;
    filterfields?: {
        [key: string]: string | null;
    } | null;
    activeview?: string | null;
    emptyobject?: boolean;
    forexcel?: boolean;
    includeallcolumns?: boolean;
    fields?: FwStandardModelsCheckBoxListItem[] | null;
    totalfields?: string[] | null;
    activeviewfields?: {
        [key: string]: string[] | null;
    } | null;
};
export type FwCoreControllersFwDataControllerDoExportExcelXlsxExportFileAsyncResult = {
    downloadUrl?: string | null;
};
export type FwStandardModelsFwQueryFilter = {
    /** The DataField name to filter on. */
    Field: string;
    /** Comparison operator: = (equals), <> (not equals) */
    Op: string;
    /** The value of the DataField to filter on. */
    Value?: string | null;
};
export type FwStandardDataFwCustomValue = {
    FieldName?: string | null;
    FieldValue?: string | null;
    FieldType?: string | null;
    ValidationModule?: string | null;
    ValidationFieldName?: string | null;
};
export type FwStandardDataFwDefaultAttribute = {
    FieldName?: string | null;
    AttributeName?: string | null;
    DefaultValue?: string | null;
};
export type FwStandardBusinessLogicFwBusinessLogic = {
    AuditNote?: string | null;
    _Custom?: FwStandardDataFwCustomValue[] | null;
    _DefaultFieldAttributes?: FwStandardDataFwDefaultAttribute[] | null;
    _Original?: FwStandardBusinessLogicFwBusinessLogic;
    _Translation?: FwStandardDataFwTranslatedValue[] | null;
    _HasImport?: boolean;
    _CreatedByUserId?: string | null;
    _CreatedByUserName?: string | null;
    _CreatedDateTime?: string | null;
    _ModifiedByUserId?: string | null;
    _ModifiedByUserName?: string | null;
    _ModifiedDateTime?: string | null;
};
export type FwStandardBusinessLogicFwBusinessLogicFieldDefinition = {
    Name?: string | null;
    DataType?: FwStandardSqlServerFwDataTypes;
    ExcelOptions?: FwStandardSqlServerAttributesFwExcelOptions;
    MaxLength?: number;
    IsRequired?: boolean;
    IsPrimaryKey?: boolean;
    IsReadOnly?: boolean;
    DisplayFieldName?: string | null;
    AllowedValues?: string | null;
    TemplateSequence?: number;
};
export type FwStandardBusinessLogicFwBusinessLogicRead = {
    AuditNote?: string | null;
    RecordTitle?: string | null;
    _Fields?: FwStandardBusinessLogicFwBusinessLogicFieldDefinition[] | null;
    _Custom?: FwStandardDataFwCustomValue[] | null;
    _DefaultFieldAttributes?: FwStandardDataFwDefaultAttribute[] | null;
    _Original?: FwStandardBusinessLogicFwBusinessLogicRead;
    _Translation?: FwStandardDataFwTranslatedValue[] | null;
    _HasImport?: boolean;
    _CreatedByUserId?: string | null;
    _CreatedByUserName?: string | null;
    _CreatedDateTime?: string | null;
    _ModifiedByUserId?: string | null;
    _ModifiedByUserName?: string | null;
    _ModifiedDateTime?: string | null;
};
export type WebApiModulesAdministratorTaskSchedulerTaskSteps = {
    TaskStepsId?: number | null;
    TaskId?: number | null;
    Name?: string | null;
    StepNumber?: number | null;
    Type?: string | null;
    Command?: string | null;
    OnSuccessActionDisplay?: string | null;
    OnFailureActionDisplay?: string | null;
    OnSuccessAction?: number | null;
    RetryAttempts?: number | null;
    RetryInterval?: number | null;
    OnFailureAction?: number | null;
    OnSuccessTaskStepsId?: number | null;
    OnFailureTaskStepsId?: number | null;
    OutputFilename?: string | null;
    LastRunOutcome?: number | null;
    LastRunDuration?: number | null;
    LastRunRetries?: number | null;
    DateStamp?: string | null;
    AuditNote?: string | null;
    _Custom?: FwStandardDataFwCustomValue[] | null;
    _DefaultFieldAttributes?: FwStandardDataFwDefaultAttribute[] | null;
    _Original?: FwStandardBusinessLogicFwBusinessLogic;
    _Translation?: FwStandardDataFwTranslatedValue[] | null;
    _HasImport?: boolean;
    _CreatedByUserId?: string | null;
    _CreatedByUserName?: string | null;
    _CreatedDateTime?: string | null;
    _ModifiedByUserId?: string | null;
    _ModifiedByUserName?: string | null;
    _ModifiedDateTime?: string | null;
};
export type WebApiModulesAdministratorTaskSchedulerTaskStepsRead = {
    TaskStepsId?: number | null;
    TaskId?: number | null;
    Name?: string | null;
    StepNumber?: number | null;
    Type?: string | null;
    Command?: string | null;
    OnSuccessActionDisplay?: string | null;
    OnFailureActionDisplay?: string | null;
    OnSuccessAction?: number | null;
    RetryAttempts?: number | null;
    RetryInterval?: number | null;
    OnFailureAction?: number | null;
    OnSuccessTaskStepsId?: number | null;
    OnFailureTaskStepsId?: number | null;
    OutputFilename?: string | null;
    LastRunOutcome?: number | null;
    LastRunDuration?: number | null;
    LastRunRetries?: number | null;
    DateStamp?: string | null;
    AuditNote?: string | null;
    RecordTitle?: string | null;
    _Fields?: FwStandardBusinessLogicFwBusinessLogicFieldDefinition[] | null;
    _Custom?: FwStandardDataFwCustomValue[] | null;
    _DefaultFieldAttributes?: FwStandardDataFwDefaultAttribute[] | null;
    _Original?: FwStandardBusinessLogicFwBusinessLogicRead;
    _Translation?: FwStandardDataFwTranslatedValue[] | null;
    _HasImport?: boolean;
    _CreatedByUserId?: string | null;
    _CreatedByUserName?: string | null;
    _CreatedDateTime?: string | null;
    _ModifiedByUserId?: string | null;
    _ModifiedByUserName?: string | null;
    _ModifiedDateTime?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorTaskSchedulerTaskStepsLogic = {
    Items?: WebApiModulesAdministratorTaskSchedulerTaskSteps[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorTaskSchedulerTaskStepsLogicRead = {
    Items?: WebApiModulesAdministratorTaskSchedulerTaskStepsRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export function getApiV1AccountSession({ applicationId }: {
    applicationId?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAccountServicesAccountAccountControllerGetSessionResponseRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/account/session${QS.query(QS.explode({
        applicationId
    }))}`, {
        ...opts
    }));
}
export function getApiV1AccountOfficelocation({ locationid, warehouseid, departmentid }: {
    locationid?: string;
    warehouseid?: string;
    departmentid?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAccountServicesAccountAccountControllerGetOfficeLocationResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/account/officelocation${QS.query(QS.explode({
        locationid,
        warehouseid,
        departmentid
    }))}`, {
        ...opts
    }));
}
export function postApiV1AccountResetpassword(webApiModulesAccountServicesAccountResetPasswordRequest?: WebApiModulesAccountServicesAccountResetPasswordRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAccountServicesAccountResetPasswordResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/account/resetpassword", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAccountServicesAccountResetPasswordRequest
    })));
}
export function postApiV1AccountGetsettings(webApiModulesAccountServicesAccountGetSettingsRequest?: WebApiModulesAccountServicesAccountGetSettingsRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiLogicAppFuncGetSettingsResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/account/getsettings", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAccountServicesAccountGetSettingsRequest
    })));
}
export function postApiV1Jwt(fwStandardModelsFwApplicationUser?: FwStandardModelsFwApplicationUser, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwCoreControllersFwJwtControllerJwtResponseModel;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/jwt", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsFwApplicationUser
    })));
}
export function postApiV1JwtOkta(webApiModulesAccountServicesJwtOktaRequest?: WebApiModulesAccountServicesJwtOktaRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwCoreControllersFwJwtControllerJwtResponseModel;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/jwt/okta", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAccountServicesJwtOktaRequest
    })));
}
export function postApiV1JwtOktaverify(webApiModulesAccountServicesJwtOktaSessionRequest?: WebApiModulesAccountServicesJwtOktaSessionRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAccountServicesJwtOktaSessionResponseModel;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/jwt/oktaverify", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAccountServicesJwtOktaSessionRequest
    })));
}
export function postApiV1JwtAzuread(webApiModulesAccountServicesJwtAzureAdRequest?: WebApiModulesAccountServicesJwtAzureAdRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwCoreControllersFwJwtControllerJwtResponseModel;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/jwt/azuread", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAccountServicesJwtAzureAdRequest
    })));
}
export function postApiV1TaskschedulerTaskstepsBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardSqlServerFwJsonDataTableRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/taskscheduler/tasksteps/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1TaskschedulerTaskstepsExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwCoreControllersFwDataControllerDoExportExcelXlsxExportFileAsyncResult;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/taskscheduler/tasksteps/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1TaskschedulerTasksteps({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorTaskSchedulerTaskStepsLogicRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/taskscheduler/tasksteps${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1TaskschedulerTasksteps(webApiModulesAdministratorTaskSchedulerTaskSteps?: WebApiModulesAdministratorTaskSchedulerTaskSteps, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorTaskSchedulerTaskStepsRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/taskscheduler/tasksteps", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAdministratorTaskSchedulerTaskSteps
    })));
}
export function getApiV1TaskschedulerTaskstepsById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorTaskSchedulerTaskStepsRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/taskscheduler/tasksteps/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1TaskschedulerTaskstepsById(id: string, webApiModulesAdministratorTaskSchedulerTaskSteps?: WebApiModulesAdministratorTaskSchedulerTaskSteps, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorTaskSchedulerTaskStepsRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/taskscheduler/tasksteps/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesAdministratorTaskSchedulerTaskSteps
    })));
}
export function deleteApiV1TaskschedulerTaskstepsById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: boolean;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/taskscheduler/tasksteps/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export enum FwStandardSqlServerFwDataTypes {
    Text = "Text",
    NonTrimmableText = "NonTrimmableText",
    Date = "Date",
    Time = "Time",
    DateTime = "DateTime",
    DateTimeOffset = "DateTimeOffset",
    CreditCardExpirationDate = "CreditCardExpirationDate",
    Decimal = "Decimal",
    DecimalStringNoTrailingZeros = "DecimalStringNoTrailingZeros",
    DecimalString1Digit = "DecimalString1Digit",
    DecimalString2Digits = "DecimalString2Digits",
    DecimalString3Digits = "DecimalString3Digits",
    DecimalString4Digits = "DecimalString4Digits",
    DecimalString8Digits = "DecimalString8Digits",
    Boolean = "Boolean",
    CurrencyString = "CurrencyString",
    CurrencyStringNoDollarSign = "CurrencyStringNoDollarSign",
    CurrencyStringNoDollarSignNoDecimalPlaces = "CurrencyStringNoDollarSignNoDecimalPlaces",
    PhoneUs = "PhoneUS",
    ZipcodeUs = "ZipcodeUS",
    PercentageWholeNumber = "PercentageWholeNumber",
    Percentage2Digits = "Percentage2Digits",
    Percentage4Digits = "Percentage4Digits",
    OleToHtmlColor = "OleToHtmlColor",
    Integer = "Integer",
    JpgDataUrl = "JpgDataUrl",
    UtcDateTime = "UTCDateTime"
}
export enum FwStandardSqlServerAttributesFwExcelOptions {
    Required = "Required",
    Recommended = "Recommended",
    Optional = "Optional",
    Omit = "Omit",
    None = "None"
}
