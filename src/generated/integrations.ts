/**
 * RentalWorksIntegrations API v1
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
export type WebApiModulesIntegrationsStorefrontWebCatalogResponseField = {
    Value?: string | null;
    Text?: string | null;
    Selected?: boolean;
};
export type WebApiModulesIntegrationsStorefrontProductSubCategory = {
    Id?: string | null;
    Name?: string | null;
    UrlName?: string | null;
    LinkUrl?: string | null;
};
export type WebApiModulesIntegrationsStorefrontProductCategory = {
    Id?: string | null;
    Name?: string | null;
    UrlName?: string | null;
    LinkUrl?: string | null;
    SubCategories?: WebApiModulesIntegrationsStorefrontProductSubCategory[] | null;
};
export type WebApiModulesIntegrationsStorefrontProductDepartment = {
    Id?: string | null;
    Name?: string | null;
    UrlName?: string | null;
    Categories?: WebApiModulesIntegrationsStorefrontProductCategory[] | null;
};
export type WebApiModulesIntegrationsStorefrontWebCatalog = {
    Id?: string | null;
    Name?: string | null;
    UrlName?: string | null;
    DepartmentId?: string | null;
    LocationId?: string | null;
    WarehouseId?: string | null;
    AllowAddingUnavailableItems?: boolean | null;
    GridFields?: WebApiModulesIntegrationsStorefrontWebCatalogResponseField[] | null;
    ListFields?: WebApiModulesIntegrationsStorefrontWebCatalogResponseField[] | null;
    DetailFields?: WebApiModulesIntegrationsStorefrontWebCatalogResponseField[] | null;
    ShoppingCartFields?: WebApiModulesIntegrationsStorefrontWebCatalogResponseField[] | null;
    Images?: string | null;
    Departments?: WebApiModulesIntegrationsStorefrontProductDepartment[] | null;
};
export type FwCoreApiSwashbuckleBadRequestResponse = {
    [key: string]: string[];
};
export type FwStandardModelsFwApiException = {
    StatusCode?: number;
    Message?: string;
    StackTrace?: string;
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
export type FwStandardDataFwTranslatedValue = {
    FieldName?: string | null;
    TranslatedValue?: string | null;
    UntranslatedValue?: string | null;
    IsTranslated?: boolean;
    UserIsTranslating?: boolean;
};
export type WebApiModulesIntegrationsStorefrontProductAvailability = {
    TotalIn?: number;
    Total?: number;
};
export type WebApiModulesIntegrationsStorefrontProductImage = {
    Id?: string | null;
    Url?: string | null;
};
export type StorefrontPackageItem = {
    Images?: WebApiModulesIntegrationsStorefrontProductImage[] | null;
    ProductId?: number;
    InventoryPackageInventoryId?: string | null;
    ICode?: string | null;
    ICodeColor?: string | null;
    LineColor?: string | null;
    Description?: string | null;
    InventoryId?: string | null;
    IsPrimary?: boolean;
    DefaultQuantity?: number | null;
    DefaultQuantityColor?: string | null;
    IsOption?: boolean;
    Charge?: boolean | null;
    NoChargePrint?: boolean | null;
    IsRequired?: boolean | null;
    OptionColor?: string | null;
    ItemClass?: string | null;
    ItemTrackedBy?: string | null;
    AvailFor?: string | null;
    AvailFrom?: string | null;
    CategoryOrderBy?: number | null;
    OrderBy?: number | null;
    ItemColor?: string | null;
    IsNestedComplete?: string | null;
    Inactive?: string | null;
    WarehouseId?: string | null;
    ParentId?: string | null;
    PackageItemClass?: string | null;
    ItemNonDiscountable?: string | null;
    PrimaryInventoryId?: string | null;
    UnitId?: string | null;
    PackageId?: string | null;
    Availability?: WebApiModulesIntegrationsStorefrontProductAvailability;
    DailyRate?: number | null;
    WeeklyRate?: number | null;
    MonthlyRate?: number | null;
    DailyExtended?: number | null;
    WeeklyExtended?: number | null;
    MonthlyExtended?: number | null;
    Price?: number | null;
    Retail?: number | null;
    CurrencyId?: string | null;
    CurrencyCode?: string | null;
    CurrencySymbol?: string | null;
    DateStamp?: string | null;
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
export type WebApiModulesIntegrationsStorefrontStorefrontProductL = {
    _Custom?: FwStandardDataFwCustomValue[] | null;
    _DefaultFieldAttributes?: FwStandardDataFwDefaultAttribute[] | null;
    _Translation?: FwStandardDataFwTranslatedValue[] | null;
    _HasImport?: boolean | null;
    Id?: number;
    WarehouseId?: string | null;
    InventoryId?: string | null;
    InventoryNo?: string | null;
    ItemName?: string | null;
    Keywords?: string | null;
    Tags?: string | null;
    Barcodes?: string | null;
    ItemUrlName?: string | null;
    DetailedDescription?: string | null;
    TechnicalNotes?: string | null;
    Classification?: string | null;
    AvailableFor?: string | null;
    Owned?: number;
    InventoryTypeOrderBy?: string | null;
    CategoryOrderBy?: string | null;
    SubCategoryOrderBy?: string | null;
    MasterOrderBy?: string | null;
    Availability?: WebApiModulesIntegrationsStorefrontProductAvailability;
    WarehouseSpecific?: boolean | null;
    PackagePrice?: string | null;
    DailyRate?: number | null;
    WeeklyRate?: number | null;
    MonthlyRate?: number | null;
    CurrencySymbol?: string | null;
    CurrencyCode?: string | null;
    PackageItems?: StorefrontPackageItem[] | null;
    Images?: WebApiModulesIntegrationsStorefrontProductImage[] | null;
    WebCatalogId?: string | null;
    WebCatalog?: string | null;
    WebCatalogUrlName?: string | null;
    InventoryDepartmentId?: string | null;
    InventoryDepartment?: string | null;
    InventoryDepartmentUrlName?: string | null;
    CategoryId?: string | null;
    Category?: string | null;
    CategoryUrlName?: string | null;
    SubCategoryId?: string | null;
    SubCategory?: string | null;
    SubCategoryUrlName?: string | null;
    _Original?: FwStandardBusinessLogicFwBusinessLogic;
    _CreatedByUserId?: string | null;
    _CreatedByUserName?: string | null;
    _CreatedDateTime?: string | null;
    _ModifiedByUserId?: string | null;
    _ModifiedByUserName?: string | null;
    _ModifiedDateTime?: string | null;
};
export type WebApiModulesIntegrationsStorefrontStorefrontProductLRead = {
    _Custom?: FwStandardDataFwCustomValue[] | null;
    _DefaultFieldAttributes?: FwStandardDataFwDefaultAttribute[] | null;
    _Translation?: FwStandardDataFwTranslatedValue[] | null;
    _HasImport?: boolean | null;
    Id?: number;
    WarehouseId?: string | null;
    InventoryId?: string | null;
    InventoryNo?: string | null;
    ItemName?: string | null;
    Keywords?: string | null;
    Tags?: string | null;
    Barcodes?: string | null;
    ItemUrlName?: string | null;
    DetailedDescription?: string | null;
    TechnicalNotes?: string | null;
    Classification?: string | null;
    AvailableFor?: string | null;
    Owned?: number;
    InventoryTypeOrderBy?: string | null;
    CategoryOrderBy?: string | null;
    SubCategoryOrderBy?: string | null;
    MasterOrderBy?: string | null;
    Availability?: WebApiModulesIntegrationsStorefrontProductAvailability;
    WarehouseSpecific?: boolean | null;
    PackagePrice?: string | null;
    DailyRate?: number | null;
    WeeklyRate?: number | null;
    MonthlyRate?: number | null;
    CurrencySymbol?: string | null;
    CurrencyCode?: string | null;
    PackageItems?: StorefrontPackageItem[] | null;
    Images?: WebApiModulesIntegrationsStorefrontProductImage[] | null;
    WebCatalogId?: string | null;
    WebCatalog?: string | null;
    WebCatalogUrlName?: string | null;
    InventoryDepartmentId?: string | null;
    InventoryDepartment?: string | null;
    InventoryDepartmentUrlName?: string | null;
    CategoryId?: string | null;
    Category?: string | null;
    CategoryUrlName?: string | null;
    SubCategoryId?: string | null;
    SubCategory?: string | null;
    SubCategoryUrlName?: string | null;
    _Original?: FwStandardBusinessLogicFwBusinessLogicRead;
    _CreatedByUserId?: string | null;
    _CreatedByUserName?: string | null;
    _CreatedDateTime?: string | null;
    _ModifiedByUserId?: string | null;
    _ModifiedByUserName?: string | null;
    _ModifiedDateTime?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesIntegrationsStorefrontStorefrontProductLoader = {
    Items?: WebApiModulesIntegrationsStorefrontStorefrontProductL[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesIntegrationsStorefrontStorefrontProductLoaderRead = {
    Items?: WebApiModulesIntegrationsStorefrontStorefrontProductLRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesIntegrationsStorefrontLocationModel = {
    LocationId?: string | null;
    Location?: string | null;
    WarehouseId?: string | null;
    Warehouse?: string | null;
};
export type WebApiModulesIntegrationsStorefrontDealModel = {
    DealId?: string | null;
    Deal?: string | null;
};
export type WebApiModulesIntegrationsStorefrontLoginRequest = {
    Email: string;
    Password: string;
};
export type WebApiModulesIntegrationsStorefrontLoginResponse = {
    AuthToken?: string | null;
    FullName?: string | null;
};
export type WebApiModulesIntegrationsStorefrontSendResetPasswordEmailRequest = {
    EmailTo: string;
    Language?: string | null;
};
export type WebApiModulesIntegrationsStorefrontResetPasswordFromEmailRequest = {
    Email: string;
    TemporaryPassword: string;
    NewPassword: string;
};
export type WebApiModulesIntegrationsStorefrontContactRegistrationRequest = {
    Language?: string | null;
    FirstName: string;
    LastName: string;
    Phone?: string | null;
    Email: string;
};
export type WebApiModulesIntegrationsStorefrontContactRegistrationResponse = {
    Success?: boolean;
};
export type WebApiModulesIntegrationsStorefrontGetProductWarehouseDetailsResponse = {
    Availability?: WebApiModulesIntegrationsStorefrontProductAvailability;
    DailyRate?: number;
    WeeklyRate?: number;
    MonthlyRate?: number;
    CurrencySymbol?: string | null;
    CurrencyCode?: string | null;
};
export type WebApiModulesIntegrationsStorefrontQuoteRequestPackageItem = {
    InventoryId: string;
    InventoryPackageInventoryId: string;
    Qty: number;
};
export type WebApiModulesIntegrationsStorefrontQuoteRequestItem = {
    InventoryId: string;
    WebCatalogId: string;
    Qty: number;
    PackageItems?: WebApiModulesIntegrationsStorefrontQuoteRequestPackageItem[] | null;
};
export type WebApiModulesIntegrationsStorefrontQuoteRequest = {
    Language?: string | null;
    DepartmentId: string;
    LocationId: string;
    WarehouseId: string;
    DealId?: string | null;
    QuoteDescription?: string | null;
    JobName?: string | null;
    StartDate: string;
    StopDate: string;
    Notes?: string | null;
    Items: WebApiModulesIntegrationsStorefrontQuoteRequestItem[];
};
export type WebApiModulesIntegrationsStorefrontSubmitQuoteRequestResponse = {
    Success?: boolean;
    FailureMessage?: string | null;
    ProgressMeterSessionId?: string | null;
};
export type WebApiModulesIntegrationsStorefrontSendInquiryEmailRequest = {
    CatalogProductId: string;
    WarehouseId: string;
    LocationId: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    Message: string;
};
export type WebApiModulesIntegrationsStorefrontSendInquiryEmailResponse = {
    Success?: boolean;
    FailureMessage?: string | null;
};
export type WebApiModulesIntegrationsStorefrontStorefrontProgress = {
    LastUpdated?: string;
    Failed?: boolean;
    FailureMessage?: string | null;
    FailureStackTrace?: string | null;
    SessionId?: string | null;
    Caption?: string | null;
    CurrentStep?: number | null;
    TotalSteps?: number | null;
};
export type WebApiModulesIntegrationsStorefrontStorefrontProgressRead = {
    LastUpdated?: string;
    Failed?: boolean;
    FailureMessage?: string | null;
    FailureStackTrace?: string | null;
    SessionId?: string | null;
    Caption?: string | null;
    CurrentStep?: number | null;
    TotalSteps?: number | null;
    PercentComplete?: number | null;
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
export type FwStandardSqlServerFwJsonDataTableColumn = {
    Name?: string | null;
    DataField?: string | null;
    DataType?: FwStandardSqlServerFwDataTypes;
    IsUniqueId?: boolean;
    IsVisible?: boolean;
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
export type FwCoreControllersFwDataControllerDoExportExcelXlsxExportFileAsyncResult = {
    downloadUrl?: string | null;
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
/**
 * Get catalogs.
 */
export function getApiV1BoxedupCatalog(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontWebCatalog[];
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
    }>("/api/v1/boxedup/catalog", {
        ...opts
    }));
}
export function getApiV1BoxedupCatalogByCatalogid(catalogid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontWebCatalog[];
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
    }>(`/api/v1/boxedup/catalog/${encodeURIComponent(catalogid)}`, {
        ...opts
    }));
}
/**
 * Get products in a catalog with availability.
 */
export function getApiV1BoxedupCatalogByCatalogidProductsLocationidAndLocationidWarehouseidWarehouseid(catalogid: string, locationid: string, warehouseid: string, { pageno, pagesize, sort, filter, inventorydepartmentid, categoryid, subcategoryid }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
    inventorydepartmentid?: string;
    categoryid?: string;
    subcategoryid?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesIntegrationsStorefrontStorefrontProductLoaderRead;
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
    }>(`/api/v1/boxedup/catalog/${encodeURIComponent(catalogid)}/products/locationid/${encodeURIComponent(locationid)}/warehouseid/${encodeURIComponent(warehouseid)}${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter,
        inventorydepartmentid,
        categoryid,
        subcategoryid
    }))}`, {
        ...opts
    }));
}
/**
 * Get catalogs.
 */
export function getApiV1StorefrontCatalog(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontWebCatalog[];
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
    }>("/api/v1/storefront/catalog", {
        ...opts
    }));
}
/**
 * Get catalog by id.
 */
export function getApiV1StorefrontCatalogByCatalogid(catalogid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontWebCatalog[];
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
    }>(`/api/v1/storefront/catalog/${encodeURIComponent(catalogid)}`, {
        ...opts
    }));
}
/**
 * Get categorytree for a catalog.
 */
export function getApiV1StorefrontCatalogByCatalogidCategorytree(catalogid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontWebCatalog;
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
    }>(`/api/v1/storefront/catalog/${encodeURIComponent(catalogid)}/categorytree`, {
        ...opts
    }));
}
/**
 * Get products in a catalog with availability.
 */
export function getApiV1StorefrontCatalogByCatalogidProductsLocationidAndLocationidWarehouseidWarehouseidFromdateFromdateTodateTodate(catalogid: string, locationid: string, warehouseid: string, fromdate: string, todate: string, { pageno, pagesize, sort, filter, inventorydepartmentid, categoryid, subcategoryid }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
    inventorydepartmentid?: string;
    categoryid?: string;
    subcategoryid?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesIntegrationsStorefrontStorefrontProductLoaderRead;
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
    }>(`/api/v1/storefront/catalog/${encodeURIComponent(catalogid)}/products/locationid/${encodeURIComponent(locationid)}/warehouseid/${encodeURIComponent(warehouseid)}/fromdate/${encodeURIComponent(fromdate)}/todate/${encodeURIComponent(todate)}${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter,
        inventorydepartmentid,
        categoryid,
        subcategoryid
    }))}`, {
        ...opts
    }));
}
/**
 * Get product details of a single product, availability will be defaulted to today + 6 days and use the location/warehouse from the product's catalog.
 */
export function getApiV1StorefrontProductByProductidWarehouseidAndWarehouseidLocationidLocationidFromdateFromdateTodateTodate(productid: string, warehouseid: string, locationid: string, fromdate: string, todate: string, { pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontStorefrontProductLRead;
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
    }>(`/api/v1/storefront/product/${encodeURIComponent(productid)}/warehouseid/${encodeURIComponent(warehouseid)}/locationid/${encodeURIComponent(locationid)}/fromdate/${encodeURIComponent(fromdate)}/todate/${encodeURIComponent(todate)}${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Lookup warehouses
 */
export function getApiV1StorefrontLookupwarehouse(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontLocationModel[];
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
    }>("/api/v1/storefront/lookupwarehouse", {
        ...opts
    }));
}
/**
 * Lookup locations for a warehouse
 */
export function getApiV1StorefrontLookuplocation(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontLocationModel[];
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
    }>("/api/v1/storefront/lookuplocation", {
        ...opts
    }));
}
/**
 * Lookup a list of valid deals for submitting quote requests
 */
export function getApiV1StorefrontLookupdeal(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontDealModel[];
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
    }>("/api/v1/storefront/lookupdeal", {
        ...opts
    }));
}
/**
 * Login (for Contacts)
 */
export function postApiV1StorefrontLogin(webApiModulesIntegrationsStorefrontLoginRequest?: WebApiModulesIntegrationsStorefrontLoginRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontLoginResponse;
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
    }>("/api/v1/storefront/login", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesIntegrationsStorefrontLoginRequest
    })));
}
/**
 * Send email to sReset Password (for Contacts)
 */
export function postApiV1StorefrontSendresetpasswordemail(webApiModulesIntegrationsStorefrontSendResetPasswordEmailRequest?: WebApiModulesIntegrationsStorefrontSendResetPasswordEmailRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
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
    }>("/api/v1/storefront/sendresetpasswordemail", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesIntegrationsStorefrontSendResetPasswordEmailRequest
    })));
}
/**
 * Send email to sReset Password (for Contacts)
 */
export function postApiV1StorefrontResetpasswordfromemail(webApiModulesIntegrationsStorefrontResetPasswordFromEmailRequest?: WebApiModulesIntegrationsStorefrontResetPasswordFromEmailRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontLoginResponse;
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
    }>("/api/v1/storefront/resetpasswordfromemail", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesIntegrationsStorefrontResetPasswordFromEmailRequest
    })));
}
/**
 * Register a new account (Contact)
 */
export function postApiV1StorefrontRegister(webApiModulesIntegrationsStorefrontContactRegistrationRequest?: WebApiModulesIntegrationsStorefrontContactRegistrationRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontContactRegistrationResponse;
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
    }>("/api/v1/storefront/register", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesIntegrationsStorefrontContactRegistrationRequest
    })));
}
export function getApiV1StorefrontProductavailabilityInventoryidByInventoryidWarehouseidAndWarehouseidFromdateFromdateTodateTodate(inventoryid: string, warehouseid: string, fromdate: string, todate: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontProductAvailability;
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
    }>(`/api/v1/storefront/productavailability/inventoryid/${encodeURIComponent(inventoryid)}/warehouseid/${encodeURIComponent(warehouseid)}/fromdate/${encodeURIComponent(fromdate)}/todate/${encodeURIComponent(todate)}`, {
        ...opts
    }));
}
/**
 * Get extended product details with availability and rates
 */
export function getApiV1StorefrontProductdetailsProductidByProductidLocationidAndLocationidWarehouseidWarehouseidFromdateFromdateTodateTodate(productid: string, locationid: string, warehouseid: string, fromdate: string, todate: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontGetProductWarehouseDetailsResponse;
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
    }>(`/api/v1/storefront/productdetails/productid/${encodeURIComponent(productid)}/locationid/${encodeURIComponent(locationid)}/warehouseid/${encodeURIComponent(warehouseid)}/fromdate/${encodeURIComponent(fromdate)}/todate/${encodeURIComponent(todate)}`, {
        ...opts
    }));
}
/**
 * Submit a Quote Request
 */
export function postApiV1StorefrontSubmitquoterequest(webApiModulesIntegrationsStorefrontQuoteRequest?: WebApiModulesIntegrationsStorefrontQuoteRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontSubmitQuoteRequestResponse;
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
    }>("/api/v1/storefront/submitquoterequest", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesIntegrationsStorefrontQuoteRequest
    })));
}
/**
 * Send an inquiry email about an item.
 */
export function postApiV1StorefrontSendinquiryemail(webApiModulesIntegrationsStorefrontSendInquiryEmailRequest?: WebApiModulesIntegrationsStorefrontSendInquiryEmailRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontSendInquiryEmailResponse;
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
    }>("/api/v1/storefront/sendinquiryemail", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesIntegrationsStorefrontSendInquiryEmailRequest
    })));
}
/**
 * Returns the current status from a progress meter session.
 */
export function getApiV1StorefrontProgressmeterById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontStorefrontProgressRead;
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
    }>(`/api/v1/storefront/progressmeter/${encodeURIComponent(id)}`, {
        ...opts
    }));
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
