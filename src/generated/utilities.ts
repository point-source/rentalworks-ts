/**
 * RentalWorks  Utilities API v1
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
export type FwStandardModelsFwAppImageModel = {
    AppImageId?: string | null;
    DateStamp?: string | null;
    Description?: string | null;
    Extension?: string | null;
    MimeType?: string | null;
    Width?: number;
    Height?: number;
    RecType?: string | null;
    FileDownloadName?: string | null;
    OrderBy?: number;
    Image?: string | null;
};
export type FwCoreApiSwashbuckleBadRequestResponse = {
    [key: string]: string[];
};
export type FwStandardModelsFwApiException = {
    StatusCode?: number;
    Message?: string;
    StackTrace?: string;
};
export type WebApiControllersSharedControlsAppImageAppImageControllerRepositionAsyncRequest = {
    AppImageId?: string | null;
    OrderBy?: number;
};
export type WebApiControllersSharedControlsAppImageAppImageControllerAddAsyncRequest = {
    Uniqueid1?: string | null;
    Uniqueid2?: string | null;
    Uniqueid3?: string | null;
    UniqueId1Int?: number | null;
    Description?: string | null;
    Extension?: string | null;
    RecType?: string | null;
    ImageDataUrl?: string | null;
};
export type WebApiControllersSharedControlsAppImageAppImageControllerDeleteAsyncRequest = {
    AppImageId?: string | null;
};
export type FwStandardBusinessLogicFwAppImageLogicEmailRequest = {
    From: string;
    To: string;
    CC?: string | null;
    Subject?: string | null;
    Body?: string | null;
    ShowImagesInBody?: boolean;
    AppImageIds: string[];
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
export type WebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFields = {
    /** Format: Integer, IsPrimaryKey: true */
    Id?: number | null;
    /** Format: Text, Required: true */
    WebUserId?: string | null;
    /** Format: Text, Required: true */
    OfficeLocationId?: string | null;
    /** Format: Text, Required: true */
    ModuleName?: string | null;
    /** Format: Text */
    ActiveViewFields?: string | null;
    /** Format: UTCDateTime */
    DateStamp?: string | null;
    /** Format: Text */
    ExportFields?: string | null;
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
export type WebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFieldsRead = {
    /** Format: Integer, IsPrimaryKey: true */
    Id?: number | null;
    /** Format: Text, Required: true */
    WebUserId?: string | null;
    /** Format: Text, Required: true */
    OfficeLocationId?: string | null;
    /** Format: Text, Required: true */
    ModuleName?: string | null;
    /** Format: Text */
    ActiveViewFields?: string | null;
    /** Format: UTCDateTime */
    DateStamp?: string | null;
    /** Format: Text */
    ExportFields?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFieldsLogic = {
    Items?: WebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFields[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFieldsLogicRead = {
    Items?: WebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFieldsRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesInventoryInventoryChangeICodeRequest = {
    ItemId?: string | null;
    InventoryId?: string | null;
};
export type WebApiModulesInventoryInventoryChangeICodeResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesAgentOrderChangeOrderStatusRequest = {
    OrderId?: string | null;
    NewStatus?: string | null;
};
export type WebApiModulesAgentOrderChangeOrderStatusResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesSettingsWidgetSettingsWidgetWidgetDataSet = {
    label?: string | null;
    data?: number[] | null;
    backgroundColor?: string[] | null;
    borderColor?: string[] | null;
    borderWidth?: number;
};
export type WebApiModulesSettingsWidgetSettingsWidgetWidgetData = {
    labels?: string[] | null;
    datasets?: WebApiModulesSettingsWidgetSettingsWidgetWidgetDataSet[] | null;
};
export type WebApiModulesSettingsWidgetSettingsWidgetWidgetTitle = {
    fontSize?: number;
    display?: boolean;
    text?: string | null;
};
export type WebApiModulesSettingsWidgetSettingsWidgetWidgetLegend = {
    display?: boolean;
};
export type WebApiModulesSettingsWidgetSettingsWidgetWidgetAxisTicks = {
    beginAtZero?: boolean;
};
export type WebApiModulesSettingsWidgetSettingsWidgetWidgetAxis = {
    ticks?: WebApiModulesSettingsWidgetSettingsWidgetWidgetAxisTicks;
    stacked?: boolean;
};
export type WebApiModulesSettingsWidgetSettingsWidgetWidgetScales = {
    xAxes?: WebApiModulesSettingsWidgetSettingsWidgetWidgetAxis[] | null;
    yAxes?: WebApiModulesSettingsWidgetSettingsWidgetWidgetAxis[] | null;
};
export type WebApiModulesSettingsWidgetSettingsWidgetWidgetOptions = {
    title?: WebApiModulesSettingsWidgetSettingsWidgetWidgetTitle;
    legend?: WebApiModulesSettingsWidgetSettingsWidgetWidgetLegend;
    scales?: WebApiModulesSettingsWidgetSettingsWidgetWidgetScales;
    responsive?: boolean;
    maintainAspectRatio?: boolean;
};
export type WebApiModulesSettingsWidgetSettingsWidgetWidget = {
    locationId?: string | null;
    warehouseId?: string | null;
    departmentId?: string | null;
    locationCodes?: string | null;
    locations?: string | null;
    dateBehaviorId?: string | null;
    dateField?: string | null;
    fromDate?: string | null;
    toDate?: string | null;
    "type"?: string | null;
    data?: WebApiModulesSettingsWidgetSettingsWidgetWidgetData;
    options?: WebApiModulesSettingsWidgetSettingsWidgetWidgetOptions;
    dataPoints?: number;
    apiName?: string | null;
    procedureName?: string | null;
    counterFieldName?: string | null;
    label1FieldName?: string | null;
    label2FieldName?: string | null;
    backgroundColorFieldName?: string | null;
    borderColorFieldName?: string | null;
    opacity?: number;
    stacked?: boolean;
};
export type WebApiModulesSettingsAvailableWidgetAvailableWidget = {
    WidgetId?: string | null;
    Widget?: string | null;
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
export type WebApiModulesSettingsAvailableWidgetAvailableWidgetRead = {
    WidgetId?: string | null;
    Widget?: string | null;
    value?: string | null;
    text?: string | null;
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
export type WebApiModulesUtilitiesDashboardSettingsDashboardSettingsLogicUserDashboardSetting = {
    userWidgetId?: string | null;
    value?: string | null;
    text?: string | null;
    selected?: boolean | null;
    apiname?: string | null;
    modulename?: string | null;
    clickpath?: string | null;
    defaulttype?: string | null;
    widgettype?: string | null;
    defaultDataPoints?: number | null;
    dataPoints?: number | null;
    defaultAxisNumberFormatId?: string | null;
    defaultAxisNumberFormat?: string | null;
    defaultAxisNumberFormatMask?: string | null;
    axisNumberFormatId?: string | null;
    axisNumberFormat?: string | null;
    axisNumberFormatMask?: string | null;
    defaultDataNumberFormatId?: string | null;
    defaultDataNumberFormat?: string | null;
    defaultDataNumberFormatMask?: string | null;
    dataNumberFormatId?: string | null;
    dataNumberFormat?: string | null;
    dataNumberFormatMask?: string | null;
    defaultDateBehaviorId?: string | null;
    defaultDateBehavior?: string | null;
    dateBehaviorId?: string | null;
    dateBehavior?: string | null;
    dateFieldDisplayNames?: string | null;
    dateFields?: string | null;
    defaultDateField?: string | null;
    dateField?: string | null;
    defaultFromDate?: string | null;
    fromDate?: string | null;
    defaultToDate?: string | null;
    toDate?: string | null;
    officeLocationId?: string | null;
    officeLocation?: string | null;
    officeLocationCode?: string | null;
    defaultStacked?: boolean | null;
    stacked?: boolean | null;
};
export type WebApiModulesUtilitiesDashboardSettingsDashboardSettings = {
    UserId?: string | null;
    WidgetsPerRow?: number | null;
    AvailableWidgets?: WebApiModulesSettingsAvailableWidgetAvailableWidget[] | null;
    UserWidgets?: WebApiModulesUtilitiesDashboardSettingsDashboardSettingsLogicUserDashboardSetting[] | null;
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
export type WebApiModulesUtilitiesDashboardSettingsDashboardSettingsRead = {
    UserId?: string | null;
    WidgetsPerRow?: number | null;
    AvailableWidgets?: WebApiModulesSettingsAvailableWidgetAvailableWidgetRead[] | null;
    UserWidgets?: WebApiModulesUtilitiesDashboardSettingsDashboardSettingsLogicUserDashboardSetting[] | null;
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
export type WebApiModulesUtilitiesInventoryLocationItemInventoryLocationItem = {
    /** Format: Text, IsPrimaryKey: true */
    InventoryId?: string | null;
    /** Format: Text, IsPrimaryKey: true */
    WarehouseId?: string | null;
    ICode?: string | null;
    Description?: string | null;
    AvailableFor?: string | null;
    Rank?: string | null;
    CategoryId?: string | null;
    Category?: string | null;
    SubCategoryId?: string | null;
    SubCategory?: string | null;
    InventoryTypeId?: string | null;
    InventoryType?: string | null;
    WarehouseCode?: string | null;
    Warehouse?: string | null;
    Quantity?: number | null;
    /** Format: Text */
    AisleLocation?: string | null;
    /** Format: Text */
    ShelfLocation?: string | null;
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
export type WebApiModulesUtilitiesInventoryLocationItemInventoryLocationItemRead = {
    /** Format: Text, IsPrimaryKey: true */
    InventoryId?: string | null;
    /** Format: Text, IsPrimaryKey: true */
    WarehouseId?: string | null;
    ICode?: string | null;
    Description?: string | null;
    AvailableFor?: string | null;
    Rank?: string | null;
    CategoryId?: string | null;
    Category?: string | null;
    SubCategoryId?: string | null;
    SubCategory?: string | null;
    InventoryTypeId?: string | null;
    InventoryType?: string | null;
    WarehouseCode?: string | null;
    Warehouse?: string | null;
    Quantity?: number | null;
    /** Format: Text */
    AisleLocation?: string | null;
    /** Format: Text */
    ShelfLocation?: string | null;
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
export type MicrosoftAspNetCoreMvcActionResult = object;
export type MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesInventoryLocationItemInventoryLocationItemLogic = {
    Result?: MicrosoftAspNetCoreMvcActionResult;
    Value?: WebApiModulesUtilitiesInventoryLocationItemInventoryLocationItem;
};
export type MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesInventoryLocationItemInventoryLocationItemLogicRead = {
    Result?: MicrosoftAspNetCoreMvcActionResult;
    Value?: WebApiModulesUtilitiesInventoryLocationItemInventoryLocationItemRead;
};
export type WebApiModulesUtilitiesInventoryMergeInventoryMerge = {
    /** Format: Integer, IsPrimaryKey: true */
    InventoryMergeId?: number | null;
    /** Format: Text */
    SessionId?: string | null;
    /** Format: Text */
    FromInventoryId?: string | null;
    FromICode?: string | null;
    FromDescription?: string | null;
    /** Format: Text */
    ToInventoryId?: string | null;
    ToICode?: string | null;
    ToDescription?: string | null;
    /** Format: Text */
    WarehouseId?: string | null;
    Warehouse?: string | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesUtilitiesInventoryMergeInventoryMergeRead = {
    /** Format: Integer, IsPrimaryKey: true */
    InventoryMergeId?: number | null;
    /** Format: Text */
    SessionId?: string | null;
    /** Format: Text */
    FromInventoryId?: string | null;
    FromICode?: string | null;
    FromDescription?: string | null;
    /** Format: Text */
    ToInventoryId?: string | null;
    ToICode?: string | null;
    ToDescription?: string | null;
    /** Format: Text */
    WarehouseId?: string | null;
    Warehouse?: string | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesUtilitiesInventoryMergeUtilityMergeInventoryRequest = {
    SessionId?: string | null;
    MakeInactive?: string | null;
};
export type WebApiLogicTSpStatusResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesUtilitiesInventoryPurchaseUtilityStartInventoryPurchaseSessionRequest = {
    InventoryId?: string | null;
    Quantity?: number;
};
export type WebApiModulesUtilitiesInventoryPurchaseUtilityStartInventoryPurchaseSessionResponse = {
    SessionId?: string | null;
};
export type WebApiModulesUtilitiesInventoryPurchaseUtilityUpdateInventoryPurchaseSessionRequest = {
    SessionId?: string | null;
    InventoryId?: string | null;
    Quantity?: number;
};
export type WebApiModulesUtilitiesInventoryPurchaseUtilityUpdateInventoryPurchaseSessionResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseAssignBarCodesRequest = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    SessionId?: string | null;
    InventoryId?: string | null;
    WarehouseId?: string | null;
};
export type WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseAssignBarCodesResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseCompleteSessionRequest = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    SessionId?: string | null;
    InventoryId?: string | null;
    Quantity?: number;
    WarehouseId?: string | null;
    AisleLocation?: string | null;
    ShelfLocation?: string | null;
    ManufacturerVendorId?: string | null;
    ManufacturerModelNumber?: string | null;
    ManufacturerPartNumber?: string | null;
    CountryId?: string | null;
    WarrantyDays?: number | null;
    WarrantyExpiration?: string | null;
    PurchaseVendorId?: string | null;
    OutsidePoNumber?: string | null;
    PurchaseDate?: string | null;
    ReceiveDate?: string | null;
    ReceiveTime?: string | null;
    VendorPartNumber?: string | null;
    CurrencyId?: string | null;
    UnitCost?: number | null;
    OriginalShowId?: string | null;
};
export type WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseCompleteSessionResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    PurchaseId?: string[] | null;
    ItemId?: string[] | null;
    QuantityAdded?: number;
};
export type WebApiModulesSettingsCurrencySettingsCurrencyCurrency = {
    /** Format: Text, IsPrimaryKey: true */
    CurrencyId?: string | null;
    /** Format: Text, Required: true */
    Currency?: string | null;
    /** Format: Text, Required: true */
    CurrencyISOName?: string | null;
    /** Format: Text, Required: true */
    CurrencyCode?: string | null;
    /** Format: Text, Required: true */
    CurrencySymbol?: string | null;
    /** Format: Boolean */
    DownloadExchangeRates?: boolean | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesSettingsCurrencySettingsCurrencyCurrencyRead = {
    /** Format: Text, IsPrimaryKey: true */
    CurrencyId?: string | null;
    /** Format: Text, Required: true */
    Currency?: string | null;
    /** Format: Text, Required: true */
    CurrencyISOName?: string | null;
    /** Format: Text, Required: true */
    CurrencyCode?: string | null;
    /** Format: Text, Required: true */
    CurrencySymbol?: string | null;
    /** Format: Boolean */
    DownloadExchangeRates?: boolean | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesSettingsCurrencySettingsCurrencyCurrencyLogic = {
    Items?: WebApiModulesSettingsCurrencySettingsCurrencyCurrency[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesSettingsCurrencySettingsCurrencyCurrencyLogicRead = {
    Items?: WebApiModulesSettingsCurrencySettingsCurrencyCurrencyRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAgentDealDeal = {
    /** Format: Text, IsPrimaryKey: true */
    DealId?: string | null;
    /** Format: Text, Required: true */
    Deal?: string | null;
    /** Format: Text */
    DealNumber?: string | null;
    /** Format: Text */
    CustomerId?: string | null;
    Customer?: string | null;
    CustomerNumber?: string | null;
    /** Format: Text */
    OfficeLocationId?: string | null;
    OfficeLocation?: string | null;
    /** Format: Text */
    DealTypeId?: string | null;
    DealType?: string | null;
    /** Format: Text */
    Address1?: string | null;
    /** Format: Text */
    Address2?: string | null;
    /** Format: Text */
    City?: string | null;
    /** Format: Text */
    State?: string | null;
    /** Format: Text */
    ZipCode?: string | null;
    /** Format: Text */
    CountryId?: string | null;
    Country?: string | null;
    CountryCodeIsoAlpha2?: string | null;
    CountryCodePhone?: number | null;
    /** Format: Text */
    Phone?: string | null;
    /** Format: Text */
    PhoneTollFree?: string | null;
    /** Format: Text */
    Fax?: string | null;
    /** Format: Text */
    PhoneOther?: string | null;
    /** Format: Text */
    DepartmentId?: string | null;
    Department?: string | null;
    /** Format: Text */
    CsrId?: string | null;
    Csr?: string | null;
    /** Format: Text */
    DefaultAgentId?: string | null;
    DefaultAgent?: string | null;
    /** Format: Text */
    DefaultProjectManagerId?: string | null;
    DefaultProjectManager?: string | null;
    /** Format: Text */
    DealClassificationId?: string | null;
    DealClassification?: string | null;
    /** Format: Text */
    ProductionTypeId?: string | null;
    ProductionType?: string | null;
    /** Format: Text */
    DealStatusId?: string | null;
    DealStatus?: string | null;
    DealStatusType?: string | null;
    /** Format: Date */
    StatusAsOf?: string | null;
    CustomerStatusId?: string | null;
    CustomerStatus?: string | null;
    CustomerStatusType?: string | null;
    /** Format: Date */
    ExpectedWrapDate?: string | null;
    /** Format: Boolean */
    StagingExcludeOrderAfterWrap?: boolean | null;
    /** Format: Text */
    BillingCycleId?: string | null;
    BillingCycle?: string | null;
    /** Format: Text */
    BillingCycleType?: string | null;
    /** Format: Date */
    EpisodeDateFrom?: string | null;
    /** Format: Date */
    EpisodeDateTo?: string | null;
    /** Format: Boolean */
    BillWeekend?: boolean | null;
    /** Format: Boolean */
    BillHoliday?: boolean | null;
    /** Format: Integer */
    Episodes?: number | null;
    /** Format: Integer */
    StartEpisode?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 2 */
    DaysPerEpisode?: number | null;
    /** Format: Text */
    PaymentTermsId?: string | null;
    PaymentTerms?: string | null;
    /** Format: Text */
    PaymentTypeId?: string | null;
    PaymentType?: string | null;
    /** Format: Text */
    DefaultRate?: string | null;
    /** Format: Boolean */
    MultipleCurrencies?: boolean | null;
    /** Format: Text */
    CurrencyId?: string | null;
    CurrencyCode?: string | null;
    CurrencySymbol?: string | null;
    /** Format: Boolean */
    UseCustomerDiscount?: boolean | null;
    CustomerDiscountTemplateId?: string | null;
    /** Format: Boolean */
    UseDiscountTemplate?: boolean | null;
    /** Format: Text */
    DiscountTemplateId?: string | null;
    DiscountTemplate?: string | null;
    RentalDaysPerWeek?: number | null;
    RentalDiscountPercent?: number | null;
    SalesDiscountPercent?: number | null;
    FacilitiesDaysPerWeek?: number | null;
    FacilitiesDiscountPercent?: number | null;
    /** Format: Text */
    OutsideSalesRepresentativeId?: string | null;
    OutsideSalesRepresentative?: string | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 3 */
    CommissionRate?: number | null;
    /** Format: Boolean */
    CommissionIncludesVendorItems?: boolean | null;
    /** Format: Boolean */
    PoRequired?: boolean | null;
    /** Format: Text */
    PoType?: string | null;
    /** Format: Text */
    BillToAddressType?: string | null;
    /** Format: Text */
    BillToAttention1?: string | null;
    /** Format: Text */
    BillToAttention2?: string | null;
    /** Format: Text */
    BillToAddress1?: string | null;
    /** Format: Text */
    BillToAddress2?: string | null;
    /** Format: Text */
    BillToCity?: string | null;
    /** Format: Text */
    BillToState?: string | null;
    /** Format: Text */
    BillToCountryId?: string | null;
    BillToCountry?: string | null;
    BillToCountryCodeIsoAlpha2?: string | null;
    BillToCountryCodePhone?: number | null;
    /** Format: Text */
    BillToZipCode?: string | null;
    /** Format: Boolean */
    AssessFinanceCharge?: boolean | null;
    /** Format: Boolean */
    AllowBillingScheduleOverride?: boolean | null;
    /** Format: Boolean */
    AllowRebateCreditInvoices?: boolean | null;
    /** Format: Boolean */
    UseCustomerCredit?: boolean | null;
    /** Format: Text */
    CreditStatusId?: string | null;
    CreditStatus?: string | null;
    /** Format: Date */
    CreditStatusThrough?: string | null;
    /** Format: Boolean */
    CreditApplicationOnFile?: boolean | null;
    /** Format: Boolean */
    UnlimitedCredit?: boolean | null;
    /** Format: Integer */
    CreditLimit?: number | null;
    CreditBalance?: number | null;
    CreditAvailable?: number | null;
    CustomerCreditLimit?: number | null;
    CustomerCreditBalance?: number | null;
    CustomerCreditAvailable?: number | null;
    /** Format: Boolean */
    CreditResponsiblePartyOnFile?: boolean | null;
    /** Format: Text */
    CreditResponsibleParty?: string | null;
    /** Format: Boolean */
    TradeReferencesVerified?: boolean | null;
    /** Format: Text */
    TradeReferencesVerifiedBy?: string | null;
    /** Format: Date */
    TradeReferencesVerifiedOn?: string | null;
    /** Format: Text */
    CreditCardTypeId?: string | null;
    CreditCardType?: string | null;
    /** Format: Integer */
    CreditCardLimit?: number | null;
    /** Format: Text */
    CreditCardNumber?: string | null;
    /** Format: Text */
    CreditCardCode?: string | null;
    /** Format: Text */
    CreditCardName?: string | null;
    /** Format: Integer */
    CreditCardExpirationMonth?: number | null;
    /** Format: Integer */
    CreditCardExpirationYear?: number | null;
    /** Format: Boolean */
    CreditCardAuthorizationFormOnFile?: boolean | null;
    /** Format: Decimal, Total digits: 9, Decimal places: 2 */
    DepletingDepositThresholdAmount?: number | null;
    /** Format: Integer */
    DepletingDepositThresholdPercent?: number | null;
    DepletingDepositTotal?: number | null;
    DepletingDepositApplied?: number | null;
    DepletingDepositRemaining?: number | null;
    /** Format: Boolean */
    UseCustomerInsurance?: boolean | null;
    /** Format: Boolean */
    InsuranceCertification?: boolean | null;
    /** Format: Date */
    InsuranceCertificationValidThrough?: string | null;
    /** Format: Integer */
    InsuranceCoverageLiability?: number | null;
    /** Format: Integer */
    InsuranceCoverageLiabilityDeductible?: number | null;
    /** Format: Integer */
    InsuranceCoverageProperty?: number | null;
    /** Format: Integer */
    InsuranceCoveragePropertyDeductible?: number | null;
    SecurityDepositAmount?: number | null;
    /** Format: Text */
    InsuranceCompanyId?: string | null;
    InsuranceCompany?: string | null;
    /** Format: Text */
    InsuranceCompanyAgent?: string | null;
    InsuranceCompanyAddress1?: string | null;
    InsuranceCompanyAddress2?: string | null;
    InsuranceCompanyCity?: string | null;
    InsuranceCompanyState?: string | null;
    InsuranceCompanyZipCode?: string | null;
    InsuranceCompanyCountryId?: string | null;
    InsuranceCompanyCountry?: string | null;
    InsuranceCompanyCountryCodeIsoAlpha2?: string | null;
    InsuranceCompanyCountryCodePhone?: number | null;
    InsuranceCompanyPhone?: string | null;
    InsuranceCompanyFax?: string | null;
    /** Format: Boolean */
    VehicleInsuranceCertification?: boolean | null;
    /** Format: Boolean */
    UseCustomerTax?: boolean | null;
    /** Format: Boolean */
    Taxable?: boolean | null;
    /** Format: Text */
    TaxStateOfIncorporationId?: string | null;
    TaxStateOfIncorporation?: string | null;
    /** Format: Text */
    TaxFederalNo?: string | null;
    /** Format: Text */
    PstExemptionNumber?: string | null;
    /** Format: Integer */
    NonTaxableYear?: number | null;
    /** Format: Text */
    NonTaxableCertificateNo?: string | null;
    /** Format: Date */
    NonTaxableCertificateValidThrough?: string | null;
    /** Format: Boolean */
    NonTaxableCertificateOnFile?: boolean | null;
    /** Format: Boolean */
    DisableQuoteOrderActivity?: boolean | null;
    /** Format: Boolean */
    DisableRental?: boolean | null;
    /** Format: Boolean */
    DisableSales?: boolean | null;
    /** Format: Boolean */
    DisableFacilities?: boolean | null;
    /** Format: Boolean */
    DisableTransportation?: boolean | null;
    /** Format: Boolean */
    DisableLabor?: boolean | null;
    /** Format: Boolean */
    DisableMisc?: boolean | null;
    /** Format: Boolean */
    DisableRentalSale?: boolean | null;
    /** Format: Boolean */
    DisableSubRental?: boolean | null;
    /** Format: Boolean */
    DisableSubSale?: boolean | null;
    /** Format: Boolean */
    DisableSubLabor?: boolean | null;
    /** Format: Boolean */
    DisableSubMisc?: boolean | null;
    /** Format: Text */
    DefaultOutgoingDeliveryType?: string | null;
    /** Format: Text */
    DefaultIncomingDeliveryType?: string | null;
    /** Format: Text */
    ShippingAddressType?: string | null;
    /** Format: Text */
    ShipAttention?: string | null;
    /** Format: Text */
    ShipAddress1?: string | null;
    /** Format: Text */
    ShipAddress2?: string | null;
    /** Format: Text */
    ShipCity?: string | null;
    /** Format: Text */
    ShipState?: string | null;
    /** Format: Text */
    ShipCountryId?: string | null;
    ShipCountry?: string | null;
    ShipCountryCodeIsoAlpha2?: string | null;
    ShipCountryCodePhone?: number | null;
    /** Format: Text */
    ShipZipCode?: string | null;
    /** Format: Boolean */
    RebateRental?: boolean | null;
    /** Format: Text */
    RebateCustomerId?: string | null;
    RebateCustomer?: string | null;
    /** Format: Integer */
    OwnedEquipmentRebateRentalPerecent?: number | null;
    /** Format: Integer */
    SubRentalEquipmentRebateRentalPerecent?: number | null;
    /** Format: Boolean */
    EnableWebQuoteRequest?: boolean | null;
    /** Format: Text */
    Email?: string | null;
    PaymentTypeType?: string | null;
    TaxOption?: string | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesAgentDealDealRead = {
    /** Format: Text, IsPrimaryKey: true */
    DealId?: string | null;
    /** Format: Text, Required: true */
    Deal?: string | null;
    /** Format: Text */
    DealNumber?: string | null;
    /** Format: Text */
    CustomerId?: string | null;
    Customer?: string | null;
    CustomerNumber?: string | null;
    /** Format: Text */
    OfficeLocationId?: string | null;
    OfficeLocation?: string | null;
    /** Format: Text */
    DealTypeId?: string | null;
    DealType?: string | null;
    /** Format: Text */
    Address1?: string | null;
    /** Format: Text */
    Address2?: string | null;
    /** Format: Text */
    City?: string | null;
    /** Format: Text */
    State?: string | null;
    /** Format: Text */
    ZipCode?: string | null;
    /** Format: Text */
    CountryId?: string | null;
    Country?: string | null;
    CountryCodeIsoAlpha2?: string | null;
    CountryCodePhone?: number | null;
    /** Format: Text */
    Phone?: string | null;
    /** Format: Text */
    PhoneTollFree?: string | null;
    /** Format: Text */
    Fax?: string | null;
    /** Format: Text */
    PhoneOther?: string | null;
    /** Format: Text */
    DepartmentId?: string | null;
    Department?: string | null;
    /** Format: Text */
    CsrId?: string | null;
    Csr?: string | null;
    /** Format: Text */
    DefaultAgentId?: string | null;
    DefaultAgent?: string | null;
    /** Format: Text */
    DefaultProjectManagerId?: string | null;
    DefaultProjectManager?: string | null;
    /** Format: Text */
    DealClassificationId?: string | null;
    DealClassification?: string | null;
    /** Format: Text */
    ProductionTypeId?: string | null;
    ProductionType?: string | null;
    /** Format: Text */
    DealStatusId?: string | null;
    DealStatus?: string | null;
    DealStatusType?: string | null;
    /** Format: Date */
    StatusAsOf?: string | null;
    CustomerStatusId?: string | null;
    CustomerStatus?: string | null;
    CustomerStatusType?: string | null;
    /** Format: Date */
    ExpectedWrapDate?: string | null;
    /** Format: Boolean */
    StagingExcludeOrderAfterWrap?: boolean | null;
    /** Format: Text */
    BillingCycleId?: string | null;
    BillingCycle?: string | null;
    /** Format: Text */
    BillingCycleType?: string | null;
    /** Format: Date */
    EpisodeDateFrom?: string | null;
    /** Format: Date */
    EpisodeDateTo?: string | null;
    /** Format: Boolean */
    BillWeekend?: boolean | null;
    /** Format: Boolean */
    BillHoliday?: boolean | null;
    /** Format: Integer */
    Episodes?: number | null;
    /** Format: Integer */
    StartEpisode?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 2 */
    DaysPerEpisode?: number | null;
    /** Format: Text */
    PaymentTermsId?: string | null;
    PaymentTerms?: string | null;
    /** Format: Text */
    PaymentTypeId?: string | null;
    PaymentType?: string | null;
    /** Format: Text */
    DefaultRate?: string | null;
    /** Format: Boolean */
    MultipleCurrencies?: boolean | null;
    /** Format: Text */
    CurrencyId?: string | null;
    CurrencyCode?: string | null;
    CurrencySymbol?: string | null;
    /** Format: Boolean */
    UseCustomerDiscount?: boolean | null;
    CustomerDiscountTemplateId?: string | null;
    /** Format: Boolean */
    UseDiscountTemplate?: boolean | null;
    /** Format: Text */
    DiscountTemplateId?: string | null;
    DiscountTemplate?: string | null;
    RentalDaysPerWeek?: number | null;
    RentalDiscountPercent?: number | null;
    SalesDiscountPercent?: number | null;
    FacilitiesDaysPerWeek?: number | null;
    FacilitiesDiscountPercent?: number | null;
    /** Format: Text */
    OutsideSalesRepresentativeId?: string | null;
    OutsideSalesRepresentative?: string | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 3 */
    CommissionRate?: number | null;
    /** Format: Boolean */
    CommissionIncludesVendorItems?: boolean | null;
    /** Format: Boolean */
    PoRequired?: boolean | null;
    /** Format: Text */
    PoType?: string | null;
    /** Format: Text */
    BillToAddressType?: string | null;
    /** Format: Text */
    BillToAttention1?: string | null;
    /** Format: Text */
    BillToAttention2?: string | null;
    /** Format: Text */
    BillToAddress1?: string | null;
    /** Format: Text */
    BillToAddress2?: string | null;
    /** Format: Text */
    BillToCity?: string | null;
    /** Format: Text */
    BillToState?: string | null;
    /** Format: Text */
    BillToCountryId?: string | null;
    BillToCountry?: string | null;
    BillToCountryCodeIsoAlpha2?: string | null;
    BillToCountryCodePhone?: number | null;
    /** Format: Text */
    BillToZipCode?: string | null;
    /** Format: Boolean */
    AssessFinanceCharge?: boolean | null;
    /** Format: Boolean */
    AllowBillingScheduleOverride?: boolean | null;
    /** Format: Boolean */
    AllowRebateCreditInvoices?: boolean | null;
    /** Format: Boolean */
    UseCustomerCredit?: boolean | null;
    /** Format: Text */
    CreditStatusId?: string | null;
    CreditStatus?: string | null;
    /** Format: Date */
    CreditStatusThrough?: string | null;
    /** Format: Boolean */
    CreditApplicationOnFile?: boolean | null;
    /** Format: Boolean */
    UnlimitedCredit?: boolean | null;
    /** Format: Integer */
    CreditLimit?: number | null;
    CreditBalance?: number | null;
    CreditAvailable?: number | null;
    CustomerCreditLimit?: number | null;
    CustomerCreditBalance?: number | null;
    CustomerCreditAvailable?: number | null;
    /** Format: Boolean */
    CreditResponsiblePartyOnFile?: boolean | null;
    /** Format: Text */
    CreditResponsibleParty?: string | null;
    /** Format: Boolean */
    TradeReferencesVerified?: boolean | null;
    /** Format: Text */
    TradeReferencesVerifiedBy?: string | null;
    /** Format: Date */
    TradeReferencesVerifiedOn?: string | null;
    /** Format: Text */
    CreditCardTypeId?: string | null;
    CreditCardType?: string | null;
    /** Format: Integer */
    CreditCardLimit?: number | null;
    /** Format: Text */
    CreditCardNumber?: string | null;
    /** Format: Text */
    CreditCardCode?: string | null;
    /** Format: Text */
    CreditCardName?: string | null;
    /** Format: Integer */
    CreditCardExpirationMonth?: number | null;
    /** Format: Integer */
    CreditCardExpirationYear?: number | null;
    /** Format: Boolean */
    CreditCardAuthorizationFormOnFile?: boolean | null;
    /** Format: Decimal, Total digits: 9, Decimal places: 2 */
    DepletingDepositThresholdAmount?: number | null;
    /** Format: Integer */
    DepletingDepositThresholdPercent?: number | null;
    DepletingDepositTotal?: number | null;
    DepletingDepositApplied?: number | null;
    DepletingDepositRemaining?: number | null;
    /** Format: Boolean */
    UseCustomerInsurance?: boolean | null;
    /** Format: Boolean */
    InsuranceCertification?: boolean | null;
    /** Format: Date */
    InsuranceCertificationValidThrough?: string | null;
    /** Format: Integer */
    InsuranceCoverageLiability?: number | null;
    /** Format: Integer */
    InsuranceCoverageLiabilityDeductible?: number | null;
    /** Format: Integer */
    InsuranceCoverageProperty?: number | null;
    /** Format: Integer */
    InsuranceCoveragePropertyDeductible?: number | null;
    SecurityDepositAmount?: number | null;
    /** Format: Text */
    InsuranceCompanyId?: string | null;
    InsuranceCompany?: string | null;
    /** Format: Text */
    InsuranceCompanyAgent?: string | null;
    InsuranceCompanyAddress1?: string | null;
    InsuranceCompanyAddress2?: string | null;
    InsuranceCompanyCity?: string | null;
    InsuranceCompanyState?: string | null;
    InsuranceCompanyZipCode?: string | null;
    InsuranceCompanyCountryId?: string | null;
    InsuranceCompanyCountry?: string | null;
    InsuranceCompanyCountryCodeIsoAlpha2?: string | null;
    InsuranceCompanyCountryCodePhone?: number | null;
    InsuranceCompanyPhone?: string | null;
    InsuranceCompanyFax?: string | null;
    /** Format: Boolean */
    VehicleInsuranceCertification?: boolean | null;
    /** Format: Boolean */
    UseCustomerTax?: boolean | null;
    /** Format: Boolean */
    Taxable?: boolean | null;
    /** Format: Text */
    TaxStateOfIncorporationId?: string | null;
    TaxStateOfIncorporation?: string | null;
    /** Format: Text */
    TaxFederalNo?: string | null;
    /** Format: Text */
    PstExemptionNumber?: string | null;
    /** Format: Integer */
    NonTaxableYear?: number | null;
    /** Format: Text */
    NonTaxableCertificateNo?: string | null;
    /** Format: Date */
    NonTaxableCertificateValidThrough?: string | null;
    /** Format: Boolean */
    NonTaxableCertificateOnFile?: boolean | null;
    /** Format: Boolean */
    DisableQuoteOrderActivity?: boolean | null;
    /** Format: Boolean */
    DisableRental?: boolean | null;
    /** Format: Boolean */
    DisableSales?: boolean | null;
    /** Format: Boolean */
    DisableFacilities?: boolean | null;
    /** Format: Boolean */
    DisableTransportation?: boolean | null;
    /** Format: Boolean */
    DisableLabor?: boolean | null;
    /** Format: Boolean */
    DisableMisc?: boolean | null;
    /** Format: Boolean */
    DisableRentalSale?: boolean | null;
    /** Format: Boolean */
    DisableSubRental?: boolean | null;
    /** Format: Boolean */
    DisableSubSale?: boolean | null;
    /** Format: Boolean */
    DisableSubLabor?: boolean | null;
    /** Format: Boolean */
    DisableSubMisc?: boolean | null;
    /** Format: Text */
    DefaultOutgoingDeliveryType?: string | null;
    /** Format: Text */
    DefaultIncomingDeliveryType?: string | null;
    /** Format: Text */
    ShippingAddressType?: string | null;
    /** Format: Text */
    ShipAttention?: string | null;
    /** Format: Text */
    ShipAddress1?: string | null;
    /** Format: Text */
    ShipAddress2?: string | null;
    /** Format: Text */
    ShipCity?: string | null;
    /** Format: Text */
    ShipState?: string | null;
    /** Format: Text */
    ShipCountryId?: string | null;
    ShipCountry?: string | null;
    ShipCountryCodeIsoAlpha2?: string | null;
    ShipCountryCodePhone?: number | null;
    /** Format: Text */
    ShipZipCode?: string | null;
    /** Format: Boolean */
    RebateRental?: boolean | null;
    /** Format: Text */
    RebateCustomerId?: string | null;
    RebateCustomer?: string | null;
    /** Format: Integer */
    OwnedEquipmentRebateRentalPerecent?: number | null;
    /** Format: Integer */
    SubRentalEquipmentRebateRentalPerecent?: number | null;
    /** Format: Boolean */
    EnableWebQuoteRequest?: boolean | null;
    /** Format: Text */
    Email?: string | null;
    PaymentTypeType?: string | null;
    TaxOption?: string | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesAgentDealDealLogic = {
    Items?: WebApiModulesAgentDealDeal[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAgentDealDealLogicRead = {
    Items?: WebApiModulesAgentDealDealRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesSettingsWarehouseSettingsWarehouseWarehouse = {
    /** Format: Text, IsPrimaryKey: true */
    WarehouseId?: string | null;
    /** Format: Text, Required: true */
    Warehouse?: string | null;
    /** Format: Text, Required: true */
    WarehouseCode?: string | null;
    /** Format: Text */
    TaxOptionId?: string | null;
    TaxOption?: string | null;
    TaxCountry?: string | null;
    TaxRule?: string | null;
    RentalTaxRate1?: number | null;
    RentalTaxRate2?: number | null;
    RentalExempt?: boolean | null;
    SalesTaxRate1?: number | null;
    SalesTaxRate2?: number | null;
    SalesExempt?: boolean | null;
    LaborTaxRate1?: number | null;
    LaborTaxRate2?: number | null;
    LaborExempt?: boolean | null;
    /** Format: Text */
    Attention?: string | null;
    /** Format: Text */
    Address1?: string | null;
    /** Format: Text */
    Address2?: string | null;
    /** Format: Text */
    City?: string | null;
    /** Format: Text */
    ZipCode?: string | null;
    /** Format: Text */
    State?: string | null;
    /** Format: Text */
    CountryId?: string | null;
    Country?: string | null;
    CountryCodeIsoAlpha2?: string | null;
    CountryCodePhone?: number | null;
    /** Format: Text */
    Phone?: string | null;
    /** Format: Text */
    Fax?: string | null;
    /** Format: Text */
    AssignBarCodesBy?: string | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 2 */
    SalesMarkupPercent?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 2 */
    PartsMarkupPercent?: number | null;
    /** Format: Boolean */
    MarkupSales?: boolean | null;
    /** Format: Boolean */
    MarkupParts?: boolean | null;
    /** Format: Boolean */
    IncludeFreightInSalesCost?: boolean | null;
    /** Format: Boolean */
    IncludeFreightInPartsCost?: boolean | null;
    /** Format: Boolean */
    ReceiveVendorBarCodes?: boolean | null;
    /** Format: Boolean */
    AllowNegativeInventory?: boolean | null;
    /** Format: Text */
    DefaultDeliveryType?: string | null;
    /** Format: Boolean */
    ExchangedItemsRepairByDefault?: boolean | null;
    /** Format: Text */
    StagingCompleteComponents?: string | null;
    /** Format: Text */
    CheckInSortBy?: string | null;
    /** Format: Text */
    DefaultPackageTruckScheduleMethod?: string | null;
    /** Format: Boolean */
    StageQuantityAccessories?: boolean | null;
    /** Format: Boolean */
    PromptForCheckOutExceptions?: boolean | null;
    /** Format: Boolean */
    PromptForCheckInExceptions?: boolean | null;
    /** Format: Boolean */
    DeleteAssetLocationOnOut?: boolean | null;
    /** Format: Boolean */
    DeleteAssetConditionOnOut?: boolean | null;
    /** Format: Boolean */
    StagingShowCheckedInHoldingItems?: boolean | null;
    /** Format: Text */
    PoDeliveryType?: string | null;
    /** Format: Integer */
    AvailabilityCacheDays?: number | null;
    /** Format: Boolean */
    AvailabilityPreserveConflicts?: boolean | null;
    /** Format: Integer */
    DefaultRepairDays?: number | null;
    /** Format: Text */
    QuikLocateDefaultDeliveryType?: string | null;
    /** Format: Text */
    RepairBillableOrderAgentFrom?: string | null;
    /** Format: Boolean */
    ReturnListPrintInQuantity?: boolean | null;
    /** Format: Boolean */
    ReturnListPrintOutQuantity?: boolean | null;
    /** Format: Boolean */
    AvailabilityIncludePurchaseOrders?: boolean | null;
    /** Format: Integer */
    AvailabilityPurchaseOrderLateDays?: number | null;
    /** Format: Text */
    RegionId?: string | null;
    Region?: string | null;
    /** Format: OleToHtmlColor */
    Color?: string | null;
    /** Format: Integer */
    AvailabilityLateDays?: number | null;
    /** Format: Boolean */
    UseBarCodeLabelDesigner?: boolean | null;
    /** Format: Text */
    InventoryLabelDesignId?: string | null;
    InventoryLabelDesign?: string | null;
    /** Format: Text */
    ItemLabelDesignId?: string | null;
    ItemLabelDesign?: string | null;
    /** Format: Boolean */
    ExcludeFromROA?: boolean | null;
    /** Format: Integer */
    AvailabilityLateHours?: number | null;
    /** Format: Integer */
    AvailabilityStartHour?: number | null;
    /** Format: Integer */
    AvailabilityStopHour?: number | null;
    /** Format: Boolean */
    IncludeTaxInAssetValue?: boolean | null;
    /** Format: Integer */
    ProductionExchangeAvailabilityPercent?: number | null;
    /** Format: Boolean */
    ProductionexchangeEnabled?: boolean | null;
    /** Format: Text */
    ProductionExchangeWarehouseCode?: string | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    Week4RatePercent?: number | null;
    /** Format: Text */
    GlSuffix?: string | null;
    /** Format: Boolean */
    RequireScanVendorBarCodeOnReturn?: boolean | null;
    /** Format: Text */
    GlPrefix?: string | null;
    /** Format: Text */
    InternalDealId?: string | null;
    InternalDeal?: string | null;
    /** Format: Text */
    InternalVendorId?: string | null;
    InternalVendor?: string | null;
    /** Format: Boolean */
    CalculateOnPoAfterApproved?: boolean | null;
    /** Format: Boolean */
    TransferDefaultReturnToWarehouse?: boolean | null;
    /** Format: Boolean */
    AvailabilityCalculateInBackground?: boolean | null;
    /** Format: Boolean */
    QuikLocateCannotTransfer?: boolean | null;
    /** Format: Text */
    QuikLocateDefaultRequiredDate?: string | null;
    /** Format: Integer */
    QuikLocateRequiredDaysBefore?: number | null;
    /** Format: Boolean */
    CalculateDefaultRentalRates?: boolean | null;
    /** Format: Decimal, Total digits: 7, Decimal places: 4 */
    RentalDailyRatePercentOfReplacementCost?: number | null;
    /** Format: Decimal, Total digits: 7, Decimal places: 4 */
    RentalWeeklyRateMultipleOfDailyRate?: number | null;
    /** Format: Boolean */
    CheckInEnableScanningToAisleShelf?: boolean | null;
    /** Format: Text, Required: true */
    CurrencyId?: string | null;
    CurrencyCode?: string | null;
    Currency?: string | null;
    /** Format: Text */
    RentalBarCodeRangeId?: string | null;
    RentalBarCodeRange?: string | null;
    /** Format: Text */
    RentalFixedAssetBarCodeRangeId?: string | null;
    RentalFixedAssetBarCodeRange?: string | null;
    /** Format: Text */
    SalesBarCodeRangeId?: string | null;
    SalesBarCodeRange?: string | null;
    /** Format: Boolean */
    AutoUpdateUnitValueOnReceivingHigherCostItem?: boolean | null;
    /** Format: Boolean */
    MarkupReplacementCost?: boolean | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    ReplacementCostMarkupPercent?: number | null;
    /** Format: Integer */
    AvailabilityHourlyDays?: number | null;
    /** Format: Integer */
    TransferAvailabilityDays?: number | null;
    /** Format: Decimal, Total digits: 9, Decimal places: 2 */
    SalesRestockPercent?: number | null;
    /** Format: Boolean */
    AvailabilityExcludeConsigned?: boolean | null;
    /** Format: Boolean */
    AvailabilityRequireConsignedReserved?: boolean | null;
    /** Format: Boolean */
    AvailabilityEnableQcDelay?: boolean | null;
    /** Format: Boolean */
    AvailabilityQcDelayExcludeWeekend?: boolean | null;
    /** Format: Boolean */
    AvailabilityQcDelayExcludeHoliday?: boolean | null;
    /** Format: Boolean */
    AvailabilityQcDelayIndefinite?: boolean | null;
    /** Format: Boolean */
    DefaultNoChargePrintItemsAddedToOrderAtStaging?: boolean | null;
    /** Format: Boolean */
    QuikReceiptEnable?: boolean | null;
    /** Format: Boolean */
    StorageContainerCheckInEnable?: boolean | null;
    /** Format: Boolean */
    StorageContainerStagingEnable?: boolean | null;
    /** Format: Boolean */
    StorageContainerRescanRequired?: boolean | null;
    /** Format: Text */
    QuikReceiptTermsConditionsId?: string | null;
    /** Format: Text */
    QuikReceiptTermsConditions?: string | null;
    /** Format: Boolean */
    DisableSubstituteNote?: boolean | null;
    /** Format: Integer */
    DaysToExpireSuspendedSessions?: number | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: Boolean */
    VirtualWarehouse?: boolean | null;
    /** Format: UTCDateTime */
    DateStamp?: string | null;
    OfficeLocationIds?: string | null;
    OfficeLocations?: string | null;
    CopyRates?: boolean | null;
    CopyFromWarehouseId?: string | null;
    /** Format: Text */
    InternalOrderOrderTypeId?: string | null;
    InternalOrderOrderType?: string | null;
    /** Format: Text */
    InternalOrderDealId?: string | null;
    InternalOrderDeal?: string | null;
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
export type WebApiModulesSettingsWarehouseSettingsWarehouseWarehouseRead = {
    /** Format: Text, IsPrimaryKey: true */
    WarehouseId?: string | null;
    /** Format: Text, Required: true */
    Warehouse?: string | null;
    /** Format: Text, Required: true */
    WarehouseCode?: string | null;
    /** Format: Text */
    TaxOptionId?: string | null;
    TaxOption?: string | null;
    TaxCountry?: string | null;
    TaxRule?: string | null;
    RentalTaxRate1?: number | null;
    RentalTaxRate2?: number | null;
    RentalExempt?: boolean | null;
    SalesTaxRate1?: number | null;
    SalesTaxRate2?: number | null;
    SalesExempt?: boolean | null;
    LaborTaxRate1?: number | null;
    LaborTaxRate2?: number | null;
    LaborExempt?: boolean | null;
    /** Format: Text */
    Attention?: string | null;
    /** Format: Text */
    Address1?: string | null;
    /** Format: Text */
    Address2?: string | null;
    /** Format: Text */
    City?: string | null;
    /** Format: Text */
    ZipCode?: string | null;
    /** Format: Text */
    State?: string | null;
    /** Format: Text */
    CountryId?: string | null;
    Country?: string | null;
    CountryCodeIsoAlpha2?: string | null;
    CountryCodePhone?: number | null;
    /** Format: Text */
    Phone?: string | null;
    /** Format: Text */
    Fax?: string | null;
    /** Format: Text */
    AssignBarCodesBy?: string | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 2 */
    SalesMarkupPercent?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 2 */
    PartsMarkupPercent?: number | null;
    /** Format: Boolean */
    MarkupSales?: boolean | null;
    /** Format: Boolean */
    MarkupParts?: boolean | null;
    /** Format: Boolean */
    IncludeFreightInSalesCost?: boolean | null;
    /** Format: Boolean */
    IncludeFreightInPartsCost?: boolean | null;
    /** Format: Boolean */
    ReceiveVendorBarCodes?: boolean | null;
    /** Format: Boolean */
    AllowNegativeInventory?: boolean | null;
    /** Format: Text */
    DefaultDeliveryType?: string | null;
    /** Format: Boolean */
    ExchangedItemsRepairByDefault?: boolean | null;
    /** Format: Text */
    StagingCompleteComponents?: string | null;
    /** Format: Text */
    CheckInSortBy?: string | null;
    /** Format: Text */
    DefaultPackageTruckScheduleMethod?: string | null;
    /** Format: Boolean */
    StageQuantityAccessories?: boolean | null;
    /** Format: Boolean */
    PromptForCheckOutExceptions?: boolean | null;
    /** Format: Boolean */
    PromptForCheckInExceptions?: boolean | null;
    /** Format: Boolean */
    DeleteAssetLocationOnOut?: boolean | null;
    /** Format: Boolean */
    DeleteAssetConditionOnOut?: boolean | null;
    /** Format: Boolean */
    StagingShowCheckedInHoldingItems?: boolean | null;
    /** Format: Text */
    PoDeliveryType?: string | null;
    /** Format: Integer */
    AvailabilityCacheDays?: number | null;
    /** Format: Boolean */
    AvailabilityPreserveConflicts?: boolean | null;
    /** Format: Integer */
    DefaultRepairDays?: number | null;
    /** Format: Text */
    QuikLocateDefaultDeliveryType?: string | null;
    /** Format: Text */
    RepairBillableOrderAgentFrom?: string | null;
    /** Format: Boolean */
    ReturnListPrintInQuantity?: boolean | null;
    /** Format: Boolean */
    ReturnListPrintOutQuantity?: boolean | null;
    /** Format: Boolean */
    AvailabilityIncludePurchaseOrders?: boolean | null;
    /** Format: Integer */
    AvailabilityPurchaseOrderLateDays?: number | null;
    /** Format: Text */
    RegionId?: string | null;
    Region?: string | null;
    /** Format: OleToHtmlColor */
    Color?: string | null;
    /** Format: Integer */
    AvailabilityLateDays?: number | null;
    /** Format: Boolean */
    UseBarCodeLabelDesigner?: boolean | null;
    /** Format: Text */
    InventoryLabelDesignId?: string | null;
    InventoryLabelDesign?: string | null;
    /** Format: Text */
    ItemLabelDesignId?: string | null;
    ItemLabelDesign?: string | null;
    /** Format: Boolean */
    ExcludeFromROA?: boolean | null;
    /** Format: Integer */
    AvailabilityLateHours?: number | null;
    /** Format: Integer */
    AvailabilityStartHour?: number | null;
    /** Format: Integer */
    AvailabilityStopHour?: number | null;
    /** Format: Boolean */
    IncludeTaxInAssetValue?: boolean | null;
    /** Format: Integer */
    ProductionExchangeAvailabilityPercent?: number | null;
    /** Format: Boolean */
    ProductionexchangeEnabled?: boolean | null;
    /** Format: Text */
    ProductionExchangeWarehouseCode?: string | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    Week4RatePercent?: number | null;
    /** Format: Text */
    GlSuffix?: string | null;
    /** Format: Boolean */
    RequireScanVendorBarCodeOnReturn?: boolean | null;
    /** Format: Text */
    GlPrefix?: string | null;
    /** Format: Text */
    InternalDealId?: string | null;
    InternalDeal?: string | null;
    /** Format: Text */
    InternalVendorId?: string | null;
    InternalVendor?: string | null;
    /** Format: Boolean */
    CalculateOnPoAfterApproved?: boolean | null;
    /** Format: Boolean */
    TransferDefaultReturnToWarehouse?: boolean | null;
    /** Format: Boolean */
    AvailabilityCalculateInBackground?: boolean | null;
    /** Format: Boolean */
    QuikLocateCannotTransfer?: boolean | null;
    /** Format: Text */
    QuikLocateDefaultRequiredDate?: string | null;
    /** Format: Integer */
    QuikLocateRequiredDaysBefore?: number | null;
    /** Format: Boolean */
    CalculateDefaultRentalRates?: boolean | null;
    /** Format: Decimal, Total digits: 7, Decimal places: 4 */
    RentalDailyRatePercentOfReplacementCost?: number | null;
    /** Format: Decimal, Total digits: 7, Decimal places: 4 */
    RentalWeeklyRateMultipleOfDailyRate?: number | null;
    /** Format: Boolean */
    CheckInEnableScanningToAisleShelf?: boolean | null;
    /** Format: Text, Required: true */
    CurrencyId?: string | null;
    CurrencyCode?: string | null;
    Currency?: string | null;
    /** Format: Text */
    RentalBarCodeRangeId?: string | null;
    RentalBarCodeRange?: string | null;
    /** Format: Text */
    RentalFixedAssetBarCodeRangeId?: string | null;
    RentalFixedAssetBarCodeRange?: string | null;
    /** Format: Text */
    SalesBarCodeRangeId?: string | null;
    SalesBarCodeRange?: string | null;
    /** Format: Boolean */
    AutoUpdateUnitValueOnReceivingHigherCostItem?: boolean | null;
    /** Format: Boolean */
    MarkupReplacementCost?: boolean | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    ReplacementCostMarkupPercent?: number | null;
    /** Format: Integer */
    AvailabilityHourlyDays?: number | null;
    /** Format: Integer */
    TransferAvailabilityDays?: number | null;
    /** Format: Decimal, Total digits: 9, Decimal places: 2 */
    SalesRestockPercent?: number | null;
    /** Format: Boolean */
    AvailabilityExcludeConsigned?: boolean | null;
    /** Format: Boolean */
    AvailabilityRequireConsignedReserved?: boolean | null;
    /** Format: Boolean */
    AvailabilityEnableQcDelay?: boolean | null;
    /** Format: Boolean */
    AvailabilityQcDelayExcludeWeekend?: boolean | null;
    /** Format: Boolean */
    AvailabilityQcDelayExcludeHoliday?: boolean | null;
    /** Format: Boolean */
    AvailabilityQcDelayIndefinite?: boolean | null;
    /** Format: Boolean */
    DefaultNoChargePrintItemsAddedToOrderAtStaging?: boolean | null;
    /** Format: Boolean */
    QuikReceiptEnable?: boolean | null;
    /** Format: Boolean */
    StorageContainerCheckInEnable?: boolean | null;
    /** Format: Boolean */
    StorageContainerStagingEnable?: boolean | null;
    /** Format: Boolean */
    StorageContainerRescanRequired?: boolean | null;
    /** Format: Text */
    QuikReceiptTermsConditionsId?: string | null;
    /** Format: Text */
    QuikReceiptTermsConditions?: string | null;
    /** Format: Boolean */
    DisableSubstituteNote?: boolean | null;
    /** Format: Integer */
    DaysToExpireSuspendedSessions?: number | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: Boolean */
    VirtualWarehouse?: boolean | null;
    /** Format: UTCDateTime */
    DateStamp?: string | null;
    OfficeLocationIds?: string | null;
    OfficeLocations?: string | null;
    CopyRates?: boolean | null;
    CopyFromWarehouseId?: string | null;
    /** Format: Text */
    InternalOrderOrderTypeId?: string | null;
    InternalOrderOrderType?: string | null;
    /** Format: Text */
    InternalOrderDealId?: string | null;
    InternalOrderDeal?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesSettingsWarehouseSettingsWarehouseWarehouseLogic = {
    Items?: WebApiModulesSettingsWarehouseSettingsWarehouseWarehouse[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesSettingsWarehouseSettingsWarehouseWarehouseLogicRead = {
    Items?: WebApiModulesSettingsWarehouseSettingsWarehouseWarehouseRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesInventoryRentalInventoryRentalInventory = {
    /** Format: Boolean */
    ExcludeFromReturnOnAsset?: boolean | null;
    /** Format: Boolean */
    IsFixedAsset?: boolean | null;
    /** Format: Boolean */
    MultiAssignRFIDs?: boolean | null;
    /** Format: Boolean */
    AllowFlexibleContainer?: boolean | null;
    MinimumDaysPerWeek?: number | null;
    ShowAssetAvailability?: boolean | null;
    AssetAvailabilityWarehouseIds?: string | null;
    /** Format: Text */
    OpeningId?: string | null;
    Opening?: string | null;
    /** Format: Text */
    WallTypeId?: string | null;
    WallType?: string | null;
    /** Format: Text */
    SurfaceId?: string | null;
    Surface?: string | null;
    /** Format: Text */
    ConditionId?: string | null;
    Condition?: string | null;
    /** Format: Text */
    OriginalShowId?: string | null;
    OriginalShow?: string | null;
    WallWidthFt?: number | null;
    WallWidthIn?: number | null;
    WallHeightFt?: number | null;
    WallHeightIn?: number | null;
    WallLengthFt?: number | null;
    WallLengthIn?: number | null;
    /** Format: Boolean */
    TreatConsignedQtyAsOwned?: boolean | null;
    DailyRate?: number | null;
    WeeklyRate?: number | null;
    Week2Rate?: number | null;
    Week3Rate?: number | null;
    Week4Rate?: number | null;
    Week5Rate?: number | null;
    MonthlyRate?: number | null;
    UnitValue?: number | null;
    ReplacementCost?: number | null;
    /** Format: Text */
    SourceId?: string | null;
    QcRequiredForMyWarehouse?: boolean | null;
    MyWarehouseId?: string | null;
    QcRequiredForAllWarehouses?: boolean | null;
    UnitValueForAllWarehouses?: number | null;
    ReplacementCostForAllWarehouses?: number | null;
    InventoryId?: string | null;
    InventoryTypeId?: string | null;
    InventoryType?: string | null;
    /** Format: Text */
    AvailableFrom?: string | null;
    /** Format: Text */
    TrackedBy?: string | null;
    ConfirmTrackedBy?: string | null;
    /** Format: Text */
    Rank?: string | null;
    /** Format: Text */
    ManufacturerPartNumber?: string | null;
    /** Format: Text */
    ManufacturerId?: string | null;
    Manufacturer?: string | null;
    /** Format: Text */
    ManufacturerUrl?: string | null;
    /** Format: Boolean */
    ExcludeImageFromQuoteOrderPrint?: boolean | null;
    /** Format: Boolean */
    NoAvailabilityCheck?: boolean | null;
    /** Format: Boolean */
    AvailabilityManuallyResolveConflicts?: boolean | null;
    /** Format: Boolean */
    SendAvailabilityAlert?: boolean | null;
    PrimaryDimensionUniqueId?: string | null;
    /** Format: Text */
    DefaultImperialMetric?: string | null;
    PrimaryDimensionDescription?: string | null;
    PrimaryDimensionShipWeightLbs?: number | null;
    PrimaryDimensionShipWeightOz?: number | null;
    PrimaryDimensionWeightInCaseLbs?: number | null;
    PrimaryDimensionWeightInCaseOz?: number | null;
    PrimaryDimensionWidthFt?: number | null;
    PrimaryDimensionWidthIn?: number | null;
    PrimaryDimensionHeightFt?: number | null;
    PrimaryDimensionHeightIn?: number | null;
    PrimaryDimensionLengthFt?: number | null;
    PrimaryDimensionLengthIn?: number | null;
    PrimaryDimensionShipWeightKg?: number | null;
    PrimaryDimensionShipWeightG?: number | null;
    PrimaryDimensionWeightInCaseKg?: number | null;
    PrimaryDimensionWeightInCaseG?: number | null;
    PrimaryDimensionWidthM?: number | null;
    PrimaryDimensionWidthCm?: number | null;
    PrimaryDimensionHeightM?: number | null;
    PrimaryDimensionHeightCm?: number | null;
    PrimaryDimensionLengthM?: number | null;
    PrimaryDimensionLengthCm?: number | null;
    /** Format: Boolean */
    HasSecondaryDimensions?: boolean | null;
    SecondaryDimensionUniqueId?: string | null;
    SecondaryDimensionDescription?: string | null;
    SecondaryDimensionShipWeightLbs?: number | null;
    SecondaryDimensionShipWeightOz?: number | null;
    SecondaryDimensionWeightInCaseLbs?: number | null;
    SecondaryDimensionWeightInCaseOz?: number | null;
    SecondaryDimensionWidthFt?: number | null;
    SecondaryDimensionWidthIn?: number | null;
    SecondaryDimensionHeightFt?: number | null;
    SecondaryDimensionHeightIn?: number | null;
    SecondaryDimensionLengthFt?: number | null;
    SecondaryDimensionLengthIn?: number | null;
    SecondaryDimensionShipWeightKg?: number | null;
    SecondaryDimensionShipWeightG?: number | null;
    SecondaryDimensionWeightInCaseKg?: number | null;
    SecondaryDimensionWeightInCaseG?: number | null;
    SecondaryDimensionWidthM?: number | null;
    SecondaryDimensionWidthCm?: number | null;
    SecondaryDimensionHeightM?: number | null;
    SecondaryDimensionHeightCm?: number | null;
    SecondaryDimensionLengthM?: number | null;
    SecondaryDimensionLengthCm?: number | null;
    /** Format: Text */
    CountryOfOriginId?: string | null;
    CountryOfOrigin?: string | null;
    /** Format: Boolean */
    DisplayInSummaryModeWhenRateIsZero?: boolean | null;
    /** Format: Boolean */
    QcRequired?: boolean | null;
    /** Format: Text */
    QcTime?: string | null;
    /** Format: Boolean */
    CopyAttributesAsNote?: boolean | null;
    /** Format: Boolean */
    TrackAssetUsage?: boolean | null;
    /** Format: Boolean */
    TrackLampUsage?: boolean | null;
    /** Format: Boolean */
    TrackStrikes?: boolean | null;
    /** Format: Boolean */
    TrackCandles?: boolean | null;
    /** Format: Integer */
    LampCount?: number | null;
    /** Format: Integer */
    MinimumFootCandles?: number | null;
    /** Format: Boolean */
    TrackSoftware?: boolean | null;
    /** Format: Text */
    SoftwareVersion?: string | null;
    /** Format: Date */
    SoftwareEffectiveDate?: string | null;
    /** Format: Boolean */
    WarehouseSpecificPackage?: boolean | null;
    CompletePackagePrice?: string | null;
    KitPackagePrice?: string | null;
    /** Format: Boolean */
    SeparatePackageOnQuoteOrder?: boolean | null;
    /** Format: Text */
    ContainerId?: string | null;
    ContainerScannableInventoryId?: string | null;
    ContainerScannableICode?: string | null;
    ContainerScannableDescription?: string | null;
    /** Format: Boolean */
    AutomaticallyRebuildContainerAtCheckIn?: boolean | null;
    /** Format: Boolean */
    AutomaticallyRebuildContainerAtTransferIn?: boolean | null;
    /** Format: Text */
    ContainerStagingRule?: string | null;
    /** Format: Boolean */
    ExcludeContainedItemsFromAvailability?: boolean | null;
    /** Format: Boolean */
    UseContainerNumber?: boolean | null;
    /** Format: Text */
    ContainerPackingListBehavior?: string | null;
    InventoryTypeIsWardrobe?: boolean | null;
    InventoryTypeIsSets?: boolean | null;
    /** Format: Text */
    PatternId?: string | null;
    Pattern?: string | null;
    /** Format: Text */
    PeriodId?: string | null;
    Period?: string | null;
    /** Format: Text */
    MaterialId?: string | null;
    Material?: string | null;
    /** Format: Text */
    GenderId?: string | null;
    Gender?: string | null;
    /** Format: Text */
    LabelId?: string | null;
    Label?: string | null;
    /** Format: Text */
    WardrobeSize?: string | null;
    /** Format: Integer */
    WardrobePieceCount?: number | null;
    /** Format: Boolean */
    Dyed?: boolean | null;
    /** Format: Text */
    WardrobeSourceId?: string | null;
    WardrobeSource?: string | null;
    /** Format: Text */
    WardrobeCareId?: string | null;
    WardrobeCare?: string | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 2 */
    CleaningFeeAmount?: number | null;
    WardrobeDetailedDescription?: string | null;
    WebDetailedDescription?: string | null;
    TechnicalNotes?: string | null;
    /** Format: Boolean */
    OverrideSystemDefaultRevenueAllocationBehavior?: boolean | null;
    /** Format: Boolean */
    AllocateRevenueForAccessories?: boolean | null;
    /** Format: Text */
    PackageRevenueCalculationFormula?: string | null;
    /** Format: Boolean */
    IsHazardousMaterial?: boolean | null;
    DescriptionWithAkas?: string | null;
    /** Format: Text */
    CostCalculation?: string | null;
    Quantity?: number | null;
    QuantityIn?: number | null;
    QuantityStaged?: number | null;
    QuantityOut?: number | null;
    QuantityInContainer?: number | null;
    QuantityInRepair?: number | null;
    QuantityInTransit?: number | null;
    QuantityOnTruck?: number | null;
    TotalQuantity?: number | null;
    AisleLocation?: string | null;
    ShelfLocation?: string | null;
    Taxable?: boolean | null;
    DateOfLastPhysicalInventory?: string | null;
    HasImage?: boolean | null;
    HasDimensionsImage?: boolean | null;
    /** Format: Boolean */
    StagingUnreadyContainer?: boolean | null;
    /** Format: Boolean */
    DisableMiscDescriptionChange?: boolean | null;
    /** Format: Text */
    ICode?: string | null;
    /** Format: Text */
    Description?: string | null;
    /** Format: Text, Required: true */
    AvailFor?: string | null;
    /** Format: Text */
    CategoryId?: string | null;
    Category?: string | null;
    SubCategoryCount?: number | null;
    /** Format: Text */
    SubCategoryId?: string | null;
    SubCategory?: string | null;
    /** Format: Text */
    Classification?: string | null;
    ClassificationDescription?: string | null;
    ClassificationColor?: string | null;
    /** Format: Text */
    UnitId?: string | null;
    Unit?: string | null;
    UnitType?: string | null;
    /** Format: Boolean */
    NonDiscountable?: boolean | null;
    /** Format: Boolean */
    OverrideProfitAndLossCategory?: boolean | null;
    /** Format: Text */
    ProfitAndLossCategoryId?: string | null;
    ProfitAndLossCategory?: string | null;
    /** Format: Boolean */
    AutoCopyNotesToQuoteOrder?: boolean | null;
    Note?: string | null;
    /** Format: Boolean */
    PrintNoteOnInContract?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnOutContract?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnReceiveContract?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnReturnContract?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnInvoice?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnOrder?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnPickList?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnPO?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnQuote?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnReturnList?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnPoReceiveList?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnPoReturnList?: boolean | null;
    /** Format: Text */
    AssetAccountId?: string | null;
    AssetAccountNo?: string | null;
    AssetAccountDescription?: string | null;
    /** Format: Text */
    IncomeAccountId?: string | null;
    IncomeAccountNo?: string | null;
    IncomeAccountDescription?: string | null;
    /** Format: Text */
    SubIncomeAccountId?: string | null;
    SubIncomeAccountNo?: string | null;
    SubIncomeAccountDescription?: string | null;
    /** Format: Text */
    ConsignmentIncomeAccountId?: string | null;
    ConsignmentIncomeAccountNo?: string | null;
    ConsignmentIncomeAccountDescription?: string | null;
    /** Format: Text */
    LdIncomeAccountId?: string | null;
    LdIncomeAccountNo?: string | null;
    LdIncomeAccountDescription?: string | null;
    /** Format: Text */
    EquipmentSaleIncomeAccountId?: string | null;
    EquipmentSaleIncomeAccountNo?: string | null;
    EquipmentSaleIncomeAccountDescription?: string | null;
    /** Format: Text */
    ExpenseAccountId?: string | null;
    ExpenseAccountNo?: string | null;
    ExpenseAccountDescription?: string | null;
    /** Format: Text */
    CostOfGoodsSoldExpenseAccountId?: string | null;
    CostOfGoodsSoldExpenseAccountNo?: string | null;
    CostOfGoodsSoldExpenseAccountDescription?: string | null;
    /** Format: Text */
    CostOfGoodsRentedExpenseAccountId?: string | null;
    CostOfGoodsRentedExpenseAccountNo?: string | null;
    CostOfGoodsRentedExpenseAccountDescription?: string | null;
    /** Format: Text */
    DepreciationExpenseAccountId?: string | null;
    DepreciationExpenseAccountNo?: string | null;
    DepreciationExpenseAccountDescription?: string | null;
    /** Format: Text */
    AccumulatedDepreciationExpenseAccountId?: string | null;
    AccumulatedDepreciationExpenseAccountNo?: string | null;
    AccumulatedDepreciationExpenseAccountDescription?: string | null;
    /** Format: UTCDateTime */
    InputDate?: string | null;
    /** Format: Text */
    InputByUsersId?: string | null;
    /** Format: Text */
    Category2?: string | null;
    /** Format: Text */
    Class2?: string | null;
    /** Format: Text */
    StockClass?: string | null;
    /** Format: Text */
    WebTitle?: string | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: UTCDateTime */
    DateStamp?: string | null;
    /** Format: Boolean */
    ManifestShippingContainer?: boolean | null;
    /** Format: Boolean */
    ManifestStandAloneItem?: boolean | null;
    TaxableForMyLocation?: boolean | null;
    MyLocationId?: string | null;
    TaxableForAllLocations?: boolean | null;
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
export type WebApiModulesInventoryRentalInventoryRentalInventoryRead = {
    /** Format: Boolean */
    ExcludeFromReturnOnAsset?: boolean | null;
    /** Format: Boolean */
    IsFixedAsset?: boolean | null;
    /** Format: Boolean */
    MultiAssignRFIDs?: boolean | null;
    /** Format: Boolean */
    AllowFlexibleContainer?: boolean | null;
    MinimumDaysPerWeek?: number | null;
    ShowAssetAvailability?: boolean | null;
    AssetAvailabilityWarehouseIds?: string | null;
    /** Format: Text */
    OpeningId?: string | null;
    Opening?: string | null;
    /** Format: Text */
    WallTypeId?: string | null;
    WallType?: string | null;
    /** Format: Text */
    SurfaceId?: string | null;
    Surface?: string | null;
    /** Format: Text */
    ConditionId?: string | null;
    Condition?: string | null;
    /** Format: Text */
    OriginalShowId?: string | null;
    OriginalShow?: string | null;
    WallWidthFt?: number | null;
    WallWidthIn?: number | null;
    WallHeightFt?: number | null;
    WallHeightIn?: number | null;
    WallLengthFt?: number | null;
    WallLengthIn?: number | null;
    /** Format: Boolean */
    TreatConsignedQtyAsOwned?: boolean | null;
    DailyRate?: number | null;
    WeeklyRate?: number | null;
    Week2Rate?: number | null;
    Week3Rate?: number | null;
    Week4Rate?: number | null;
    Week5Rate?: number | null;
    MonthlyRate?: number | null;
    UnitValue?: number | null;
    ReplacementCost?: number | null;
    /** Format: Text */
    SourceId?: string | null;
    QcRequiredForMyWarehouse?: boolean | null;
    MyWarehouseId?: string | null;
    QcRequiredForAllWarehouses?: boolean | null;
    UnitValueForAllWarehouses?: number | null;
    ReplacementCostForAllWarehouses?: number | null;
    InventoryId?: string | null;
    InventoryTypeId?: string | null;
    InventoryType?: string | null;
    /** Format: Text */
    AvailableFrom?: string | null;
    /** Format: Text */
    TrackedBy?: string | null;
    ConfirmTrackedBy?: string | null;
    /** Format: Text */
    Rank?: string | null;
    /** Format: Text */
    ManufacturerPartNumber?: string | null;
    /** Format: Text */
    ManufacturerId?: string | null;
    Manufacturer?: string | null;
    /** Format: Text */
    ManufacturerUrl?: string | null;
    /** Format: Boolean */
    ExcludeImageFromQuoteOrderPrint?: boolean | null;
    /** Format: Boolean */
    NoAvailabilityCheck?: boolean | null;
    /** Format: Boolean */
    AvailabilityManuallyResolveConflicts?: boolean | null;
    /** Format: Boolean */
    SendAvailabilityAlert?: boolean | null;
    PrimaryDimensionUniqueId?: string | null;
    /** Format: Text */
    DefaultImperialMetric?: string | null;
    PrimaryDimensionDescription?: string | null;
    PrimaryDimensionShipWeightLbs?: number | null;
    PrimaryDimensionShipWeightOz?: number | null;
    PrimaryDimensionWeightInCaseLbs?: number | null;
    PrimaryDimensionWeightInCaseOz?: number | null;
    PrimaryDimensionWidthFt?: number | null;
    PrimaryDimensionWidthIn?: number | null;
    PrimaryDimensionHeightFt?: number | null;
    PrimaryDimensionHeightIn?: number | null;
    PrimaryDimensionLengthFt?: number | null;
    PrimaryDimensionLengthIn?: number | null;
    PrimaryDimensionShipWeightKg?: number | null;
    PrimaryDimensionShipWeightG?: number | null;
    PrimaryDimensionWeightInCaseKg?: number | null;
    PrimaryDimensionWeightInCaseG?: number | null;
    PrimaryDimensionWidthM?: number | null;
    PrimaryDimensionWidthCm?: number | null;
    PrimaryDimensionHeightM?: number | null;
    PrimaryDimensionHeightCm?: number | null;
    PrimaryDimensionLengthM?: number | null;
    PrimaryDimensionLengthCm?: number | null;
    /** Format: Boolean */
    HasSecondaryDimensions?: boolean | null;
    SecondaryDimensionUniqueId?: string | null;
    SecondaryDimensionDescription?: string | null;
    SecondaryDimensionShipWeightLbs?: number | null;
    SecondaryDimensionShipWeightOz?: number | null;
    SecondaryDimensionWeightInCaseLbs?: number | null;
    SecondaryDimensionWeightInCaseOz?: number | null;
    SecondaryDimensionWidthFt?: number | null;
    SecondaryDimensionWidthIn?: number | null;
    SecondaryDimensionHeightFt?: number | null;
    SecondaryDimensionHeightIn?: number | null;
    SecondaryDimensionLengthFt?: number | null;
    SecondaryDimensionLengthIn?: number | null;
    SecondaryDimensionShipWeightKg?: number | null;
    SecondaryDimensionShipWeightG?: number | null;
    SecondaryDimensionWeightInCaseKg?: number | null;
    SecondaryDimensionWeightInCaseG?: number | null;
    SecondaryDimensionWidthM?: number | null;
    SecondaryDimensionWidthCm?: number | null;
    SecondaryDimensionHeightM?: number | null;
    SecondaryDimensionHeightCm?: number | null;
    SecondaryDimensionLengthM?: number | null;
    SecondaryDimensionLengthCm?: number | null;
    /** Format: Text */
    CountryOfOriginId?: string | null;
    CountryOfOrigin?: string | null;
    /** Format: Boolean */
    DisplayInSummaryModeWhenRateIsZero?: boolean | null;
    /** Format: Boolean */
    QcRequired?: boolean | null;
    /** Format: Text */
    QcTime?: string | null;
    /** Format: Boolean */
    CopyAttributesAsNote?: boolean | null;
    /** Format: Boolean */
    TrackAssetUsage?: boolean | null;
    /** Format: Boolean */
    TrackLampUsage?: boolean | null;
    /** Format: Boolean */
    TrackStrikes?: boolean | null;
    /** Format: Boolean */
    TrackCandles?: boolean | null;
    /** Format: Integer */
    LampCount?: number | null;
    /** Format: Integer */
    MinimumFootCandles?: number | null;
    /** Format: Boolean */
    TrackSoftware?: boolean | null;
    /** Format: Text */
    SoftwareVersion?: string | null;
    /** Format: Date */
    SoftwareEffectiveDate?: string | null;
    /** Format: Boolean */
    WarehouseSpecificPackage?: boolean | null;
    CompletePackagePrice?: string | null;
    KitPackagePrice?: string | null;
    /** Format: Boolean */
    SeparatePackageOnQuoteOrder?: boolean | null;
    /** Format: Text */
    ContainerId?: string | null;
    ContainerScannableInventoryId?: string | null;
    ContainerScannableICode?: string | null;
    ContainerScannableDescription?: string | null;
    /** Format: Boolean */
    AutomaticallyRebuildContainerAtCheckIn?: boolean | null;
    /** Format: Boolean */
    AutomaticallyRebuildContainerAtTransferIn?: boolean | null;
    /** Format: Text */
    ContainerStagingRule?: string | null;
    /** Format: Boolean */
    ExcludeContainedItemsFromAvailability?: boolean | null;
    /** Format: Boolean */
    UseContainerNumber?: boolean | null;
    /** Format: Text */
    ContainerPackingListBehavior?: string | null;
    InventoryTypeIsWardrobe?: boolean | null;
    InventoryTypeIsSets?: boolean | null;
    /** Format: Text */
    PatternId?: string | null;
    Pattern?: string | null;
    /** Format: Text */
    PeriodId?: string | null;
    Period?: string | null;
    /** Format: Text */
    MaterialId?: string | null;
    Material?: string | null;
    /** Format: Text */
    GenderId?: string | null;
    Gender?: string | null;
    /** Format: Text */
    LabelId?: string | null;
    Label?: string | null;
    /** Format: Text */
    WardrobeSize?: string | null;
    /** Format: Integer */
    WardrobePieceCount?: number | null;
    /** Format: Boolean */
    Dyed?: boolean | null;
    /** Format: Text */
    WardrobeSourceId?: string | null;
    WardrobeSource?: string | null;
    /** Format: Text */
    WardrobeCareId?: string | null;
    WardrobeCare?: string | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 2 */
    CleaningFeeAmount?: number | null;
    WardrobeDetailedDescription?: string | null;
    WebDetailedDescription?: string | null;
    TechnicalNotes?: string | null;
    /** Format: Boolean */
    OverrideSystemDefaultRevenueAllocationBehavior?: boolean | null;
    /** Format: Boolean */
    AllocateRevenueForAccessories?: boolean | null;
    /** Format: Text */
    PackageRevenueCalculationFormula?: string | null;
    /** Format: Boolean */
    IsHazardousMaterial?: boolean | null;
    DescriptionWithAkas?: string | null;
    /** Format: Text */
    CostCalculation?: string | null;
    Quantity?: number | null;
    QuantityIn?: number | null;
    QuantityStaged?: number | null;
    QuantityOut?: number | null;
    QuantityInContainer?: number | null;
    QuantityInRepair?: number | null;
    QuantityInTransit?: number | null;
    QuantityOnTruck?: number | null;
    TotalQuantity?: number | null;
    AisleLocation?: string | null;
    ShelfLocation?: string | null;
    Taxable?: boolean | null;
    DateOfLastPhysicalInventory?: string | null;
    HasImage?: boolean | null;
    HasDimensionsImage?: boolean | null;
    /** Format: Boolean */
    StagingUnreadyContainer?: boolean | null;
    /** Format: Boolean */
    DisableMiscDescriptionChange?: boolean | null;
    /** Format: Text */
    ICode?: string | null;
    /** Format: Text */
    Description?: string | null;
    /** Format: Text, Required: true */
    AvailFor?: string | null;
    /** Format: Text */
    CategoryId?: string | null;
    Category?: string | null;
    SubCategoryCount?: number | null;
    /** Format: Text */
    SubCategoryId?: string | null;
    SubCategory?: string | null;
    /** Format: Text */
    Classification?: string | null;
    ClassificationDescription?: string | null;
    ClassificationColor?: string | null;
    /** Format: Text */
    UnitId?: string | null;
    Unit?: string | null;
    UnitType?: string | null;
    /** Format: Boolean */
    NonDiscountable?: boolean | null;
    /** Format: Boolean */
    OverrideProfitAndLossCategory?: boolean | null;
    /** Format: Text */
    ProfitAndLossCategoryId?: string | null;
    ProfitAndLossCategory?: string | null;
    /** Format: Boolean */
    AutoCopyNotesToQuoteOrder?: boolean | null;
    Note?: string | null;
    /** Format: Boolean */
    PrintNoteOnInContract?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnOutContract?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnReceiveContract?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnReturnContract?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnInvoice?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnOrder?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnPickList?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnPO?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnQuote?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnReturnList?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnPoReceiveList?: boolean | null;
    /** Format: Boolean */
    PrintNoteOnPoReturnList?: boolean | null;
    /** Format: Text */
    AssetAccountId?: string | null;
    AssetAccountNo?: string | null;
    AssetAccountDescription?: string | null;
    /** Format: Text */
    IncomeAccountId?: string | null;
    IncomeAccountNo?: string | null;
    IncomeAccountDescription?: string | null;
    /** Format: Text */
    SubIncomeAccountId?: string | null;
    SubIncomeAccountNo?: string | null;
    SubIncomeAccountDescription?: string | null;
    /** Format: Text */
    ConsignmentIncomeAccountId?: string | null;
    ConsignmentIncomeAccountNo?: string | null;
    ConsignmentIncomeAccountDescription?: string | null;
    /** Format: Text */
    LdIncomeAccountId?: string | null;
    LdIncomeAccountNo?: string | null;
    LdIncomeAccountDescription?: string | null;
    /** Format: Text */
    EquipmentSaleIncomeAccountId?: string | null;
    EquipmentSaleIncomeAccountNo?: string | null;
    EquipmentSaleIncomeAccountDescription?: string | null;
    /** Format: Text */
    ExpenseAccountId?: string | null;
    ExpenseAccountNo?: string | null;
    ExpenseAccountDescription?: string | null;
    /** Format: Text */
    CostOfGoodsSoldExpenseAccountId?: string | null;
    CostOfGoodsSoldExpenseAccountNo?: string | null;
    CostOfGoodsSoldExpenseAccountDescription?: string | null;
    /** Format: Text */
    CostOfGoodsRentedExpenseAccountId?: string | null;
    CostOfGoodsRentedExpenseAccountNo?: string | null;
    CostOfGoodsRentedExpenseAccountDescription?: string | null;
    /** Format: Text */
    DepreciationExpenseAccountId?: string | null;
    DepreciationExpenseAccountNo?: string | null;
    DepreciationExpenseAccountDescription?: string | null;
    /** Format: Text */
    AccumulatedDepreciationExpenseAccountId?: string | null;
    AccumulatedDepreciationExpenseAccountNo?: string | null;
    AccumulatedDepreciationExpenseAccountDescription?: string | null;
    /** Format: UTCDateTime */
    InputDate?: string | null;
    /** Format: Text */
    InputByUsersId?: string | null;
    /** Format: Text */
    Category2?: string | null;
    /** Format: Text */
    Class2?: string | null;
    /** Format: Text */
    StockClass?: string | null;
    /** Format: Text */
    WebTitle?: string | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: UTCDateTime */
    DateStamp?: string | null;
    /** Format: Boolean */
    ManifestShippingContainer?: boolean | null;
    /** Format: Boolean */
    ManifestStandAloneItem?: boolean | null;
    TaxableForMyLocation?: boolean | null;
    MyLocationId?: string | null;
    TaxableForAllLocations?: boolean | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesInventoryRentalInventoryRentalInventoryLogic = {
    Items?: WebApiModulesInventoryRentalInventoryRentalInventory[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesInventoryRentalInventoryRentalInventoryLogicRead = {
    Items?: WebApiModulesInventoryRentalInventoryRentalInventoryRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAgentVendorVendor = {
    /** Format: Text, IsPrimaryKey: true */
    VendorId?: string | null;
    /** Format: Text */
    Vendor?: string | null;
    /** Format: Text */
    VendorDisplayName?: string | null;
    /** Format: Text, Required: true */
    VendorNameType?: string | null;
    /** Format: Text, Required: true */
    VendorNumber?: string | null;
    /** Format: Text */
    FederalIdNumber?: string | null;
    /** Format: Text, Required: true */
    OfficeLocationId?: string | null;
    OfficeLocation?: string | null;
    /** Format: Text */
    Salutation?: string | null;
    /** Format: Text */
    FirstName?: string | null;
    /** Format: Text */
    MiddleInitial?: string | null;
    /** Format: Text */
    LastName?: string | null;
    /** Format: Text */
    Address1?: string | null;
    /** Format: Text */
    Address2?: string | null;
    /** Format: Text */
    City?: string | null;
    /** Format: Text */
    State?: string | null;
    /** Format: Text */
    CountryId?: string | null;
    Country?: string | null;
    CountryCodeIsoAlpha2?: string | null;
    CountryCodePhone?: number | null;
    /** Format: Text */
    ZipCode?: string | null;
    /** Format: Text */
    VendorClassId?: string | null;
    VendorClass?: string | null;
    /** Format: Text */
    Phone?: string | null;
    /** Format: Text */
    Fax?: string | null;
    /** Format: Text */
    PhoneTollFree?: string | null;
    /** Format: Text */
    OtherPhone?: string | null;
    /** Format: Text */
    WebAddress?: string | null;
    /** Format: Text */
    Email?: string | null;
    /** Format: Date */
    ActiveDate?: string | null;
    /** Format: Date */
    InactiveDate?: string | null;
    /** Format: Boolean */
    SubRent?: boolean | null;
    /** Format: Boolean */
    SubSales?: boolean | null;
    /** Format: Boolean */
    SubMisc?: boolean | null;
    /** Format: Boolean */
    SubLabor?: boolean | null;
    /** Format: Boolean */
    SubVehicle?: boolean | null;
    /** Format: Boolean */
    Repair?: boolean | null;
    /** Format: Boolean */
    RentalInventory?: boolean | null;
    /** Format: Boolean */
    SalesPartsInventory?: boolean | null;
    /** Format: Boolean */
    Manufacturer?: boolean | null;
    /** Format: Boolean */
    Freight?: boolean | null;
    /** Format: Boolean */
    Insurance?: boolean | null;
    /** Format: Boolean */
    Consignment?: boolean | null;
    VendorColor?: string | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 3 */
    DefaultSubRentDaysPerWeek?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    DefaultSubRentDiscountPercent?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    DefaultSubSaleDiscountPercent?: number | null;
    /** Format: Text */
    DefaultRate?: string | null;
    /** Format: Text */
    BillingCycleId?: string | null;
    BillingCycle?: string | null;
    /** Format: Text */
    PaymentTermsId?: string | null;
    PaymentTerms?: string | null;
    /** Format: Text */
    AccountNumber?: string | null;
    /** Format: Text */
    DefaultPoClassificationId?: string | null;
    DefaultPoClassification?: string | null;
    /** Format: Text */
    DefaultPoTypeId?: string | null;
    DefaultPoType?: string | null;
    DefaultPoTypeIsInternal?: boolean | null;
    /** Format: Text */
    OrganizationTypeId?: string | null;
    OrganizationType?: string | null;
    /** Format: Boolean */
    MultipleCurrencies?: boolean | null;
    /** Format: Text */
    DefaultCurrencyId?: string | null;
    DefaultCurrencyCode?: string | null;
    DefaultCurrency?: string | null;
    DefaultCurrencySymbol?: string | null;
    /** Format: Text */
    RemitAttention1?: string | null;
    /** Format: Text */
    RemitAttention2?: string | null;
    /** Format: Text */
    RemitAddress1?: string | null;
    /** Format: Text */
    RemitAddress2?: string | null;
    /** Format: Text */
    RemitCity?: string | null;
    /** Format: Text */
    RemitState?: string | null;
    /** Format: Text */
    RemitCountryId?: string | null;
    RemitCountry?: string | null;
    RemitCountryCodeIsoAlpha2?: string | null;
    RemitCountryCodePhone?: number | null;
    /** Format: Text */
    RemitZipCode?: string | null;
    /** Format: Text */
    RemitPayeeNo?: string | null;
    /** Format: Text */
    ExternalId?: string | null;
    /** Format: Boolean */
    AutomaticallyAdjustContractDates?: boolean | null;
    /** Format: Text */
    ShippingTrackingLink?: string | null;
    /** Format: Text */
    DefaultOutgoingDeliveryType?: string | null;
    /** Format: Text */
    DefaultIncomingDeliveryType?: string | null;
    /** Format: Text */
    CustomerId?: string | null;
    Customer?: string | null;
    /** Format: Date */
    InputDate?: string | null;
    /** Format: Date */
    LastModifiedDate?: string | null;
    PrimaryContactId?: string | null;
    PrimaryContact?: string | null;
    PrimaryContactPhone?: string | null;
    PrimaryContactExtension?: string | null;
    IsInternal?: boolean | null;
    /** Format: Text */
    InternalLocationId?: string | null;
    InternalLocation?: string | null;
    /** Format: Text */
    InternalWarehouseId?: string | null;
    InternalWarehouse?: string | null;
    InternalOrderDealId?: string | null;
    TaxOption?: string | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesAgentVendorVendorRead = {
    /** Format: Text, IsPrimaryKey: true */
    VendorId?: string | null;
    /** Format: Text */
    Vendor?: string | null;
    /** Format: Text */
    VendorDisplayName?: string | null;
    /** Format: Text, Required: true */
    VendorNameType?: string | null;
    /** Format: Text, Required: true */
    VendorNumber?: string | null;
    /** Format: Text */
    FederalIdNumber?: string | null;
    /** Format: Text, Required: true */
    OfficeLocationId?: string | null;
    OfficeLocation?: string | null;
    /** Format: Text */
    Salutation?: string | null;
    /** Format: Text */
    FirstName?: string | null;
    /** Format: Text */
    MiddleInitial?: string | null;
    /** Format: Text */
    LastName?: string | null;
    /** Format: Text */
    Address1?: string | null;
    /** Format: Text */
    Address2?: string | null;
    /** Format: Text */
    City?: string | null;
    /** Format: Text */
    State?: string | null;
    /** Format: Text */
    CountryId?: string | null;
    Country?: string | null;
    CountryCodeIsoAlpha2?: string | null;
    CountryCodePhone?: number | null;
    /** Format: Text */
    ZipCode?: string | null;
    /** Format: Text */
    VendorClassId?: string | null;
    VendorClass?: string | null;
    /** Format: Text */
    Phone?: string | null;
    /** Format: Text */
    Fax?: string | null;
    /** Format: Text */
    PhoneTollFree?: string | null;
    /** Format: Text */
    OtherPhone?: string | null;
    /** Format: Text */
    WebAddress?: string | null;
    /** Format: Text */
    Email?: string | null;
    /** Format: Date */
    ActiveDate?: string | null;
    /** Format: Date */
    InactiveDate?: string | null;
    /** Format: Boolean */
    SubRent?: boolean | null;
    /** Format: Boolean */
    SubSales?: boolean | null;
    /** Format: Boolean */
    SubMisc?: boolean | null;
    /** Format: Boolean */
    SubLabor?: boolean | null;
    /** Format: Boolean */
    SubVehicle?: boolean | null;
    /** Format: Boolean */
    Repair?: boolean | null;
    /** Format: Boolean */
    RentalInventory?: boolean | null;
    /** Format: Boolean */
    SalesPartsInventory?: boolean | null;
    /** Format: Boolean */
    Manufacturer?: boolean | null;
    /** Format: Boolean */
    Freight?: boolean | null;
    /** Format: Boolean */
    Insurance?: boolean | null;
    /** Format: Boolean */
    Consignment?: boolean | null;
    VendorColor?: string | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 3 */
    DefaultSubRentDaysPerWeek?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    DefaultSubRentDiscountPercent?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    DefaultSubSaleDiscountPercent?: number | null;
    /** Format: Text */
    DefaultRate?: string | null;
    /** Format: Text */
    BillingCycleId?: string | null;
    BillingCycle?: string | null;
    /** Format: Text */
    PaymentTermsId?: string | null;
    PaymentTerms?: string | null;
    /** Format: Text */
    AccountNumber?: string | null;
    /** Format: Text */
    DefaultPoClassificationId?: string | null;
    DefaultPoClassification?: string | null;
    /** Format: Text */
    DefaultPoTypeId?: string | null;
    DefaultPoType?: string | null;
    DefaultPoTypeIsInternal?: boolean | null;
    /** Format: Text */
    OrganizationTypeId?: string | null;
    OrganizationType?: string | null;
    /** Format: Boolean */
    MultipleCurrencies?: boolean | null;
    /** Format: Text */
    DefaultCurrencyId?: string | null;
    DefaultCurrencyCode?: string | null;
    DefaultCurrency?: string | null;
    DefaultCurrencySymbol?: string | null;
    /** Format: Text */
    RemitAttention1?: string | null;
    /** Format: Text */
    RemitAttention2?: string | null;
    /** Format: Text */
    RemitAddress1?: string | null;
    /** Format: Text */
    RemitAddress2?: string | null;
    /** Format: Text */
    RemitCity?: string | null;
    /** Format: Text */
    RemitState?: string | null;
    /** Format: Text */
    RemitCountryId?: string | null;
    RemitCountry?: string | null;
    RemitCountryCodeIsoAlpha2?: string | null;
    RemitCountryCodePhone?: number | null;
    /** Format: Text */
    RemitZipCode?: string | null;
    /** Format: Text */
    RemitPayeeNo?: string | null;
    /** Format: Text */
    ExternalId?: string | null;
    /** Format: Boolean */
    AutomaticallyAdjustContractDates?: boolean | null;
    /** Format: Text */
    ShippingTrackingLink?: string | null;
    /** Format: Text */
    DefaultOutgoingDeliveryType?: string | null;
    /** Format: Text */
    DefaultIncomingDeliveryType?: string | null;
    /** Format: Text */
    CustomerId?: string | null;
    Customer?: string | null;
    /** Format: Date */
    InputDate?: string | null;
    /** Format: Date */
    LastModifiedDate?: string | null;
    PrimaryContactId?: string | null;
    PrimaryContact?: string | null;
    PrimaryContactPhone?: string | null;
    PrimaryContactExtension?: string | null;
    IsInternal?: boolean | null;
    /** Format: Text */
    InternalLocationId?: string | null;
    InternalLocation?: string | null;
    /** Format: Text */
    InternalWarehouseId?: string | null;
    InternalWarehouse?: string | null;
    InternalOrderDealId?: string | null;
    TaxOption?: string | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesAgentVendorVendorLogic = {
    Items?: WebApiModulesAgentVendorVendor[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAgentVendorVendorLogicRead = {
    Items?: WebApiModulesAgentVendorVendorRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesSettingsAddressSettingsCountryCountry = {
    /** Format: Text, IsPrimaryKey: true */
    CountryId?: string | null;
    /** Format: Text, Required: true */
    Country?: string | null;
    /** Format: Text, Required: true */
    CountryISOName?: string | null;
    /** Format: Text, Required: true */
    CountryCodeISOAlpha2?: string | null;
    /** Format: Text, Required: true */
    CountryCodeISOAlpha3?: string | null;
    /** Format: Integer */
    CountryCodeISONumeric?: number | null;
    /** Format: Integer */
    CountryCodePhone?: number | null;
    /** Format: Text, Required: true */
    FlagImage?: string | null;
    /** Format: Boolean */
    Metric?: boolean | null;
    /** Format: Text */
    CurrencyId?: string | null;
    Currency?: string | null;
    CurrencyCode?: string | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesSettingsAddressSettingsCountryCountryRead = {
    /** Format: Text, IsPrimaryKey: true */
    CountryId?: string | null;
    /** Format: Text, Required: true */
    Country?: string | null;
    /** Format: Text, Required: true */
    CountryISOName?: string | null;
    /** Format: Text, Required: true */
    CountryCodeISOAlpha2?: string | null;
    /** Format: Text, Required: true */
    CountryCodeISOAlpha3?: string | null;
    /** Format: Integer */
    CountryCodeISONumeric?: number | null;
    /** Format: Integer */
    CountryCodePhone?: number | null;
    /** Format: Text, Required: true */
    FlagImage?: string | null;
    /** Format: Boolean */
    Metric?: boolean | null;
    /** Format: Text */
    CurrencyId?: string | null;
    Currency?: string | null;
    CurrencyCode?: string | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesSettingsAddressSettingsCountryCountryLogic = {
    Items?: WebApiModulesSettingsAddressSettingsCountryCountry[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesSettingsAddressSettingsCountryCountryLogicRead = {
    Items?: WebApiModulesSettingsAddressSettingsCountryCountryRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItem = {
    InventoryPurchaseItemId?: number | null;
    /** Format: Text */
    SessionId?: string | null;
    /** Format: Text */
    BarCode?: string | null;
    /** Format: Date */
    ManufactureDate?: string | null;
    /** Format: Integer */
    PrintQuantity?: number | null;
    /** Format: Text */
    SerialNumber?: string | null;
    /** Format: Text */
    RfId?: string | null;
    SerialNumberIsMixedCase?: boolean | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItemRead = {
    InventoryPurchaseItemId?: number | null;
    /** Format: Text */
    SessionId?: string | null;
    /** Format: Text */
    BarCode?: string | null;
    /** Format: Date */
    ManufactureDate?: string | null;
    /** Format: Integer */
    PrintQuantity?: number | null;
    /** Format: Text */
    SerialNumber?: string | null;
    /** Format: Text */
    RfId?: string | null;
    SerialNumberIsMixedCase?: boolean | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItemLogic = {
    Items?: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItem[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItemLogicRead = {
    Items?: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItemRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItemLogic = {
    Result?: MicrosoftAspNetCoreMvcActionResult;
    Value?: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItem;
};
export type MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItemLogicRead = {
    Result?: MicrosoftAspNetCoreMvcActionResult;
    Value?: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItemRead;
};
export type WebApiModulesInventoryInventoryRetireInventoryRequest = {
    InventoryId?: string | null;
    WarehouseId?: string | null;
    ItemId?: string | null;
    RetiredReasonId?: string | null;
    Notes?: string | null;
    Quantity?: number | null;
    ChangeICode?: boolean | null;
    ConsignorId?: string | null;
    ConsignorAgreementId?: string | null;
    CompleteRepair?: boolean | null;
    CompleteRepairId?: string | null;
};
export type WebApiModulesInventoryInventoryRetireInventoryResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    RetiredId?: string | null;
};
export type WebApiModulesInventoryInventoryUnretireInventoryRequest = {
    RetiredId?: string | null;
    ItemId?: string | null;
    UnretiredReasonId?: string | null;
    Notes?: string | null;
    Quantity?: number | null;
};
export type WebApiModulesBillingInvoiceInvoiceProcessBatchRequest = {
    LocationId?: string | null;
    SingleInvoiceId?: string | null;
    AsOfDate?: string | null;
};
export type WebApiModulesUtilitiesInvoiceProcessBatchInvoiceProcessBatch = {
    BatchId?: string | null;
    LocationId?: string | null;
    BatchType?: string | null;
    DivisionCode?: string | null;
    BatchNumber?: string | null;
    BatchDate?: string | null;
    BatchTime?: string | null;
    BatchDateTime?: string | null;
    ExportDate?: string | null;
    Exported?: boolean | null;
    RecordCount?: number | null;
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
export type WebApiModulesUtilitiesInvoiceProcessBatchInvoiceProcessBatchRead = {
    BatchId?: string | null;
    LocationId?: string | null;
    BatchType?: string | null;
    DivisionCode?: string | null;
    BatchNumber?: string | null;
    BatchDate?: string | null;
    BatchTime?: string | null;
    BatchDateTime?: string | null;
    ExportDate?: string | null;
    Exported?: boolean | null;
    RecordCount?: number | null;
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
export type WebApiModulesBillingInvoiceInvoiceProcessBatchResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    Batch?: WebApiModulesUtilitiesInvoiceProcessBatchInvoiceProcessBatch;
    AutoProcessDepeletingDeposit?: boolean;
};
export type WebApiModulesBillingInvoiceInvoiceProcessBatchResponseRead = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    Batch?: WebApiModulesUtilitiesInvoiceProcessBatchInvoiceProcessBatchRead;
    AutoProcessDepeletingDeposit?: boolean;
};
export type WebApiModulesUtilitiesLabelDesignLabelDesign = {
    /** Format: Text, IsPrimaryKey: true */
    LabelId?: string | null;
    /** Format: Text */
    WarehouseId?: string | null;
    Warehouse?: string | null;
    /** Format: Text */
    Format?: string | null;
    /** Format: Text */
    Category?: string | null;
    /** Format: Text */
    Description?: string | null;
    /** Format: Text */
    LabelData?: string | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesUtilitiesLabelDesignLabelDesignRead = {
    /** Format: Text, IsPrimaryKey: true */
    LabelId?: string | null;
    /** Format: Text */
    WarehouseId?: string | null;
    Warehouse?: string | null;
    /** Format: Text */
    Format?: string | null;
    /** Format: Text */
    Category?: string | null;
    /** Format: Text */
    Description?: string | null;
    /** Format: Text */
    LabelData?: string | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesLabelDesignLabelDesignLogic = {
    Items?: WebApiModulesUtilitiesLabelDesignLabelDesign[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesLabelDesignLabelDesignLogicRead = {
    Items?: WebApiModulesUtilitiesLabelDesignLabelDesignRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesUtilitiesLabelDesignBarcodeLabel = {
    BARCODE?: string | null;
    ICODE?: string | null;
    DESCRIPTION?: string | null;
    INVENTORYTYPE?: string | null;
    CATEGORY?: string | null;
    SUBCATEGORY?: string | null;
};
export type WebApiModulesUtilitiesMigrateStartMigrateSessionRequest = {
    DealId?: string | null;
    DepartmentId?: string | null;
    OrderIds?: string | null;
};
export type WebApiModulesUtilitiesMigrateStartMigrateSessionResponse = {
    SessionId?: string | null;
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesUtilitiesMigrateUpdateMigrateItemRequest = {
    SessionId?: string | null;
    OrderId?: string | null;
    OrderItemId?: string | null;
    BarCode?: string | null;
    Quantity?: number | null;
};
export type WebApiModulesUtilitiesMigrateUpdateMigrateItemResponse = {
    NewQuantity?: number | null;
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesUtilitiesMigrateSelectAllNoneMigrateItemRequest = {
    SessionId: string;
};
export type WebApiModulesUtilitiesMigrateSelectAllNoneMigrateItemResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesUtilitiesMigrateCompleteMigrateSessionRequest = {
    SessionId?: string | null;
    MigrateToNewOrder?: boolean | null;
    NewOrderOfficeLocationId?: string | null;
    NewOrderWarehouseId?: string | null;
    NewOrderDealId?: string | null;
    NewOrderDepartmentId?: string | null;
    NewOrderOrderTypeId?: string | null;
    NewOrderDescription?: string | null;
    NewOrderRateType?: string | null;
    NewOrderFromDate?: string | null;
    NewOrderFromTime?: string | null;
    NewOrderToDate?: string | null;
    NewOrderToTime?: string | null;
    NewOrderBillingStopDate?: string | null;
    NewOrderPendingPO?: boolean | null;
    NewOrderFlatPO?: boolean | null;
    NewOrderPurchaseOrderNumber?: string | null;
    NewOrderPurchaseOrderAmount?: number | null;
    MigrateToExistingOrder?: boolean | null;
    ExistingOrderId?: string | null;
    InventoryFulfillIncrement?: string | null;
    FulfillStrictPricingMatch?: boolean | null;
    FulfillStrictNestingLvlMatch?: boolean | null;
    CopyLineItemNotes?: boolean | null;
    CopyOrderNotes?: boolean | null;
    CopyRentalRates?: boolean | null;
    UpdateBillingStopDate?: boolean | null;
    BillingStopDate?: string | null;
    OfficeLocationId?: string | null;
    WarehouseId?: string | null;
    ResponsiblePersonId?: string | null;
    CheckItemsOut?: boolean | null;
};
export type WebApiModulesWarehouseContractContract = {
    /** Format: Text, IsPrimaryKey: true */
    ContractId?: string | null;
    /** Format: Text */
    ContractNumber?: string | null;
    /** Format: Text */
    ContractType?: string | null;
    /** Format: Date */
    ContractDate?: string | null;
    /** Format: Text */
    ContractTime?: string | null;
    /** Format: Text */
    LocationId?: string | null;
    LocationCode?: string | null;
    /** Format: Text */
    Location?: string | null;
    /** Format: Text */
    WarehouseId?: string | null;
    WarehouseCode?: string | null;
    Warehouse?: string | null;
    CustomerId?: string | null;
    Customer?: string | null;
    /** Format: Text */
    DealId?: string | null;
    Deal?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    OrderNumber?: string | null;
    /** Format: Text */
    DepartmentId?: string | null;
    Department?: string | null;
    PurchaseOrderId?: string | null;
    PurchaseOrderNumber?: string | null;
    RequisitionNumber?: string | null;
    VendorId?: string | null;
    Vendor?: string | null;
    /** Format: Boolean */
    IsMigrated?: boolean | null;
    /** Format: Boolean */
    Unassigned?: boolean | null;
    /** Format: Boolean */
    NeedReconcile?: boolean | null;
    /** Format: Boolean */
    PendingExchange?: boolean | null;
    /** Format: Text */
    ExchangeContractId?: string | null;
    HasSwaps?: boolean | null;
    /** Format: Boolean */
    Rental?: boolean | null;
    /** Format: Boolean */
    Sales?: boolean | null;
    /** Format: Boolean */
    Parts?: boolean | null;
    /** Format: Boolean */
    Exchange?: boolean | null;
    /** Format: Text */
    InputByUserId?: string | null;
    InputByUser?: string | null;
    DealInactive?: boolean | null;
    /** Format: Boolean */
    Truck?: boolean | null;
    /** Format: Date */
    BillingDate?: string | null;
    /** Format: Text */
    BillingDateChangeReason?: string | null;
    LastBillingDateChangeReason?: string | null;
    BillingDateAdjusted?: boolean | null;
    HasVoId?: boolean | null;
    HasTransfer?: boolean | null;
    /** Format: Text */
    SessionId?: string | null;
    OrderDescription?: string | null;
    PoOrderDescription?: string | null;
    /** Format: Text, IsPrimaryKey: true */
    DeliveryId?: string | null;
    DeliveryDeliveryType?: string | null;
    DeliveryRequiredDate?: string | null;
    DeliveryRequiredTime?: string | null;
    DeliveryTargetShipDate?: string | null;
    DeliveryTargetShipTime?: string | null;
    DeliveryDirection?: string | null;
    DeliveryAddressType?: string | null;
    DeliveryFromLocation?: string | null;
    DeliveryFromContact?: string | null;
    DeliveryFromContactPhone?: string | null;
    DeliveryFromAlternateContact?: string | null;
    DeliveryFromAlternateContactPhone?: string | null;
    DeliveryFromAttention?: string | null;
    DeliveryFromAddress1?: string | null;
    DeliveryFromAddress2?: string | null;
    DeliveryFromCity?: string | null;
    DeliveryFromState?: string | null;
    DeliveryFromZipCode?: string | null;
    DeliveryFromCountry?: string | null;
    DeliveryFromCountryCodeIsoAlpha2?: string | null;
    DeliveryFromCountryCodePhone?: number | null;
    DeliveryFromCountryId?: string | null;
    DeliveryFromCrossStreets?: string | null;
    DeliveryToLocation?: string | null;
    DeliveryToContact?: string | null;
    DeliveryToContactPhone?: string | null;
    DeliveryToAlternateContact?: string | null;
    DeliveryToAlternateContactPhone?: string | null;
    DeliveryToAttention?: string | null;
    DeliveryToAddress1?: string | null;
    DeliveryToAddress2?: string | null;
    DeliveryToCity?: string | null;
    DeliveryToState?: string | null;
    DeliveryToZipCode?: string | null;
    DeliveryToCountryId?: string | null;
    DeliveryToCountry?: string | null;
    DeliveryToCountryCodeIsoAlpha2?: string | null;
    DeliveryToCountryCodePhone?: number | null;
    DeliveryToContactFax?: string | null;
    DeliveryToCrossStreets?: string | null;
    DeliveryDeliveryNotes?: string | null;
    DeliveryCarrierId?: string | null;
    DeliveryCarrier?: string | null;
    DeliveryCarrierAccount?: string | null;
    DeliveryShipViaId?: string | null;
    DeliveryShipVia?: string | null;
    DeliveryInvoiceId?: string | null;
    DeliveryVendorInvoiceId?: string | null;
    DeliveryEstimatedFreight?: number | null;
    DeliveryFreightInvoiceAmount?: number | null;
    DeliveryChargeType?: string | null;
    DeliveryFreightTrackingNumber?: string | null;
    DeliveryFreightTrackingUrl?: string | null;
    DeliveryDropShip?: boolean | null;
    DeliveryPackageCode?: string | null;
    DeliveryBillPoFreightOnOrder?: boolean | null;
    DeliveryOnlineOrderNumber?: string | null;
    DeliveryOnlineOrderStatus?: string | null;
    DeliveryToVenue?: string | null;
    DeliveryToVenueId?: string | null;
    DeliveryDateStamp?: string | null;
    /** Format: Text */
    Note?: string | null;
    /** Format: Boolean */
    PrintNoteOnOrder?: boolean | null;
    /** Format: Text */
    TermsConditionsId?: string | null;
    /** Format: Text */
    QuikReceiptTermsConditionsId?: string | null;
    QuikReceiptTermsConditions?: string | null;
    TermsConditions?: string | null;
    ContainerId?: string | null;
    ContainerItemId?: string | null;
    ContainerDescription?: string | null;
    ContainerScannableBarCode?: string | null;
    ContainerScannableItemId?: string | null;
    /** Format: Text */
    ResponsiblePersonId?: string | null;
    ResponsiblePerson?: string | null;
    ResponsiblePersonEmail?: string | null;
    ResponsiblePersonMobilePhone?: string | null;
    ResponsiblePersonOfficePhone?: string | null;
    ResponsiblePersonOfficeExtension?: string | null;
    HasPrintableBarCodes?: boolean | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesWarehouseContractContractRead = {
    /** Format: Text, IsPrimaryKey: true */
    ContractId?: string | null;
    /** Format: Text */
    ContractNumber?: string | null;
    /** Format: Text */
    ContractType?: string | null;
    /** Format: Date */
    ContractDate?: string | null;
    /** Format: Text */
    ContractTime?: string | null;
    /** Format: Text */
    LocationId?: string | null;
    LocationCode?: string | null;
    /** Format: Text */
    Location?: string | null;
    /** Format: Text */
    WarehouseId?: string | null;
    WarehouseCode?: string | null;
    Warehouse?: string | null;
    CustomerId?: string | null;
    Customer?: string | null;
    /** Format: Text */
    DealId?: string | null;
    Deal?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    OrderNumber?: string | null;
    /** Format: Text */
    DepartmentId?: string | null;
    Department?: string | null;
    PurchaseOrderId?: string | null;
    PurchaseOrderNumber?: string | null;
    RequisitionNumber?: string | null;
    VendorId?: string | null;
    Vendor?: string | null;
    /** Format: Boolean */
    IsMigrated?: boolean | null;
    /** Format: Boolean */
    Unassigned?: boolean | null;
    /** Format: Boolean */
    NeedReconcile?: boolean | null;
    /** Format: Boolean */
    PendingExchange?: boolean | null;
    /** Format: Text */
    ExchangeContractId?: string | null;
    HasSwaps?: boolean | null;
    /** Format: Boolean */
    Rental?: boolean | null;
    /** Format: Boolean */
    Sales?: boolean | null;
    /** Format: Boolean */
    Parts?: boolean | null;
    /** Format: Boolean */
    Exchange?: boolean | null;
    /** Format: Text */
    InputByUserId?: string | null;
    InputByUser?: string | null;
    DealInactive?: boolean | null;
    /** Format: Boolean */
    Truck?: boolean | null;
    /** Format: Date */
    BillingDate?: string | null;
    /** Format: Text */
    BillingDateChangeReason?: string | null;
    LastBillingDateChangeReason?: string | null;
    BillingDateAdjusted?: boolean | null;
    HasVoId?: boolean | null;
    HasTransfer?: boolean | null;
    /** Format: Text */
    SessionId?: string | null;
    OrderDescription?: string | null;
    PoOrderDescription?: string | null;
    /** Format: Text, IsPrimaryKey: true */
    DeliveryId?: string | null;
    DeliveryDeliveryType?: string | null;
    DeliveryRequiredDate?: string | null;
    DeliveryRequiredTime?: string | null;
    DeliveryTargetShipDate?: string | null;
    DeliveryTargetShipTime?: string | null;
    DeliveryDirection?: string | null;
    DeliveryAddressType?: string | null;
    DeliveryFromLocation?: string | null;
    DeliveryFromContact?: string | null;
    DeliveryFromContactPhone?: string | null;
    DeliveryFromAlternateContact?: string | null;
    DeliveryFromAlternateContactPhone?: string | null;
    DeliveryFromAttention?: string | null;
    DeliveryFromAddress1?: string | null;
    DeliveryFromAddress2?: string | null;
    DeliveryFromCity?: string | null;
    DeliveryFromState?: string | null;
    DeliveryFromZipCode?: string | null;
    DeliveryFromCountry?: string | null;
    DeliveryFromCountryCodeIsoAlpha2?: string | null;
    DeliveryFromCountryCodePhone?: number | null;
    DeliveryFromCountryId?: string | null;
    DeliveryFromCrossStreets?: string | null;
    DeliveryToLocation?: string | null;
    DeliveryToContact?: string | null;
    DeliveryToContactPhone?: string | null;
    DeliveryToAlternateContact?: string | null;
    DeliveryToAlternateContactPhone?: string | null;
    DeliveryToAttention?: string | null;
    DeliveryToAddress1?: string | null;
    DeliveryToAddress2?: string | null;
    DeliveryToCity?: string | null;
    DeliveryToState?: string | null;
    DeliveryToZipCode?: string | null;
    DeliveryToCountryId?: string | null;
    DeliveryToCountry?: string | null;
    DeliveryToCountryCodeIsoAlpha2?: string | null;
    DeliveryToCountryCodePhone?: number | null;
    DeliveryToContactFax?: string | null;
    DeliveryToCrossStreets?: string | null;
    DeliveryDeliveryNotes?: string | null;
    DeliveryCarrierId?: string | null;
    DeliveryCarrier?: string | null;
    DeliveryCarrierAccount?: string | null;
    DeliveryShipViaId?: string | null;
    DeliveryShipVia?: string | null;
    DeliveryInvoiceId?: string | null;
    DeliveryVendorInvoiceId?: string | null;
    DeliveryEstimatedFreight?: number | null;
    DeliveryFreightInvoiceAmount?: number | null;
    DeliveryChargeType?: string | null;
    DeliveryFreightTrackingNumber?: string | null;
    DeliveryFreightTrackingUrl?: string | null;
    DeliveryDropShip?: boolean | null;
    DeliveryPackageCode?: string | null;
    DeliveryBillPoFreightOnOrder?: boolean | null;
    DeliveryOnlineOrderNumber?: string | null;
    DeliveryOnlineOrderStatus?: string | null;
    DeliveryToVenue?: string | null;
    DeliveryToVenueId?: string | null;
    DeliveryDateStamp?: string | null;
    /** Format: Text */
    Note?: string | null;
    /** Format: Boolean */
    PrintNoteOnOrder?: boolean | null;
    /** Format: Text */
    TermsConditionsId?: string | null;
    /** Format: Text */
    QuikReceiptTermsConditionsId?: string | null;
    QuikReceiptTermsConditions?: string | null;
    TermsConditions?: string | null;
    ContainerId?: string | null;
    ContainerItemId?: string | null;
    ContainerDescription?: string | null;
    ContainerScannableBarCode?: string | null;
    ContainerScannableItemId?: string | null;
    /** Format: Text */
    ResponsiblePersonId?: string | null;
    ResponsiblePerson?: string | null;
    ResponsiblePersonEmail?: string | null;
    ResponsiblePersonMobilePhone?: string | null;
    ResponsiblePersonOfficePhone?: string | null;
    ResponsiblePersonOfficeExtension?: string | null;
    HasPrintableBarCodes?: boolean | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesHomeControlsReservedRentalItemReservedRentalItem = {
    ReservedRentalItemId?: number | null;
    OrderId?: string | null;
    OrderItemId?: string | null;
    RentalItemId?: string | null;
    InventoryId?: string | null;
    ICode?: string | null;
    Description?: string | null;
    InventoryTypeId?: string | null;
    CategoryId?: string | null;
    SubCategoryId?: string | null;
    WarehouseId?: string | null;
    ReturnToWarehouseId?: string | null;
    UsersId?: string | null;
    BarCode?: string | null;
    SerialNumber?: string | null;
    TrackedByCode?: string | null;
    Ownership?: string | null;
    OwnershipSort?: string | null;
    ConsignorId?: string | null;
    Consignor?: string | null;
    OrderNumber?: string | null;
    OrderDescription?: string | null;
    OrderType?: string | null;
    OrderStatus?: string | null;
    DealId?: string | null;
    Deal?: string | null;
    NameFml?: string | null;
    FromDateTime?: string;
    ToDateTime?: string;
    Conflict?: string | null;
    ForceConflict?: string | null;
    PositiveConflict?: string | null;
    AvailabilityColor?: string | null;
    AvailabilityOrderColor?: string | null;
    AvailabilityOrderWhiteText?: string | null;
    AvailabilityByHour?: string | null;
    ItemStatus?: string | null;
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
export type WebApiModulesHomeControlsReservedRentalItemReservedRentalItemRead = {
    ReservedRentalItemId?: number | null;
    OrderId?: string | null;
    OrderItemId?: string | null;
    RentalItemId?: string | null;
    InventoryId?: string | null;
    ICode?: string | null;
    Description?: string | null;
    InventoryTypeId?: string | null;
    CategoryId?: string | null;
    SubCategoryId?: string | null;
    WarehouseId?: string | null;
    ReturnToWarehouseId?: string | null;
    UsersId?: string | null;
    BarCode?: string | null;
    SerialNumber?: string | null;
    TrackedByCode?: string | null;
    Ownership?: string | null;
    OwnershipSort?: string | null;
    ConsignorId?: string | null;
    Consignor?: string | null;
    OrderNumber?: string | null;
    OrderDescription?: string | null;
    OrderType?: string | null;
    OrderStatus?: string | null;
    DealId?: string | null;
    Deal?: string | null;
    NameFml?: string | null;
    FromDateTime?: string;
    ToDateTime?: string;
    Conflict?: string | null;
    ForceConflict?: string | null;
    PositiveConflict?: string | null;
    AvailabilityColor?: string | null;
    AvailabilityOrderColor?: string | null;
    AvailabilityOrderWhiteText?: string | null;
    AvailabilityByHour?: string | null;
    ItemStatus?: string | null;
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
export type WebApiModulesUtilitiesMigrateCompleteMigrateSessionResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    ContractIds?: string | null;
    Contracts?: WebApiModulesWarehouseContractContract[] | null;
    ReservedRentalItems?: WebApiModulesHomeControlsReservedRentalItemReservedRentalItem[] | null;
};
export type WebApiModulesUtilitiesMigrateCompleteMigrateSessionResponseRead = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    ContractIds?: string | null;
    Contracts?: WebApiModulesWarehouseContractContractRead[] | null;
    ReservedRentalItems?: WebApiModulesHomeControlsReservedRentalItemReservedRentalItemRead[] | null;
};
export type WebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTracking = {
    /** Format: Text, IsPrimaryKey: true */
    DeliveryShipId?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    /** Format: Text */
    DeliveryId?: string | null;
    OrderNumber?: string | null;
    OrderDate?: string | null;
    OrderDescription?: string | null;
    Status?: string | null;
    StatusDate?: string | null;
    DealId?: string | null;
    Deal?: string | null;
    DealNumber?: string | null;
    /** Format: Text */
    TrackingNumber?: string | null;
    /** Format: Text */
    ShippingVendorId?: string | null;
    ShippingVendor?: string | null;
    CarrierId?: string | null;
    Carrier?: string | null;
    OnlineOrderNumber?: string | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTrackingRead = {
    /** Format: Text, IsPrimaryKey: true */
    DeliveryShipId?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    /** Format: Text */
    DeliveryId?: string | null;
    OrderNumber?: string | null;
    OrderDate?: string | null;
    OrderDescription?: string | null;
    Status?: string | null;
    StatusDate?: string | null;
    DealId?: string | null;
    Deal?: string | null;
    DealNumber?: string | null;
    /** Format: Text */
    TrackingNumber?: string | null;
    /** Format: Text */
    ShippingVendorId?: string | null;
    ShippingVendor?: string | null;
    CarrierId?: string | null;
    Carrier?: string | null;
    OnlineOrderNumber?: string | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTrackingLogic = {
    Items?: WebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTracking[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTrackingLogicRead = {
    Items?: WebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTrackingRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesExportsOnlineOrderTrackingExportOnlineOrderTrackingExportRequest = {
    FromDate?: string;
    ToDate?: string;
    IncludeOrdersWithoutTracking?: boolean | null;
    DataExportFormatId: string;
};
export type WebApiModulesExportsOnlineOrderTrackingExportOnlineOrderTrackingExportResponse = {
    BatchId?: string | null;
    BatchNumber?: string | null;
    downloadUrl?: string | null;
    success?: boolean;
    message?: string | null;
};
export type WebApiModulesExportsOrderExportOrderExportRequest = {
    FromDate?: string;
    ToDate?: string;
    DataExportFormatId: string;
};
export type WebApiModulesExportsOrderExportOrderExportResponse = {
    BatchId?: string | null;
    BatchNumber?: string | null;
    downloadUrl?: string | null;
    success?: boolean;
    message?: string | null;
};
export type WebApiModulesUtilitiesOrderLocationScheduleOrderLocationScheduleRequest = {
    FromDate?: string | null;
    ToDate?: string | null;
    OfficeLocationId?: string | null;
    CustomerId?: string | null;
    DepartmentId?: string | null;
    DealId?: string | null;
    ProjectId?: string | null;
    ProjectManagerId?: string | null;
    IncludeCompleted?: boolean | null;
};
export type WebApiModulesUtilitiesOrderLocationScheduleOrderLocationScheduleResource = {
    name?: string | null;
    id?: string | null;
    backColor?: string | null;
    orderBy?: string | null;
};
export type WebApiModulesUtilitiesOrderLocationScheduleOrderLocationScheduleEvent = {
    start?: string | null;
    end?: string | null;
    text?: string | null;
    backColor?: string | null;
    barColor?: string | null;
    textColor?: string | null;
    resource?: string | null;
    orderId?: string | null;
    orderNumber?: string | null;
    orderType?: string | null;
    orderStatus?: string | null;
    orderDescription?: string | null;
    orderLocation?: string | null;
    deal?: string | null;
    poNumber?: string | null;
    id?: string | null;
    orderBy?: string | null;
};
export type WebApiModulesUtilitiesOrderLocationScheduleOrderLocationScheduleResponse = {
    OrderLocationScheduleResources?: WebApiModulesUtilitiesOrderLocationScheduleOrderLocationScheduleResource[] | null;
    OrderLocationScheduleEvents?: WebApiModulesUtilitiesOrderLocationScheduleOrderLocationScheduleEvent[] | null;
};
export type WebApiModulesUtilitiesProgressMeterProgressMeter = {
    /** Format: Text, IsPrimaryKey: true */
    SessionId?: string | null;
    /** Format: Text */
    Caption?: string | null;
    /** Format: Integer */
    CurrentStep?: number | null;
    /** Format: Integer */
    TotalSteps?: number | null;
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
export type WebApiModulesUtilitiesProgressMeterProgressMeterRead = {
    /** Format: Text, IsPrimaryKey: true */
    SessionId?: string | null;
    /** Format: Text */
    Caption?: string | null;
    /** Format: Integer */
    CurrentStep?: number | null;
    /** Format: Integer */
    TotalSteps?: number | null;
    PercentComplete?: number | null;
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
export type WebApiModulesUtilitiesQuikActivityQuikActivityFuncQuikActivityCalendarRequest = {
    FromDate?: string | null;
    ToDate?: string | null;
    OfficeLocationId?: string | null;
    WarehouseId?: string | null;
    DepartmentId?: string | null;
    DealId?: string | null;
    InventoryTypeId?: string | null;
    ActivityTypeId?: string | null;
    AssignedToUserId?: string | null;
    IncludeCompleted?: boolean | null;
    IncludeUnreserved?: boolean | null;
    IncludeTimes?: boolean | null;
};
export type WebApiModulesUtilitiesQuikActivityQuikActivityFuncQuikActivityCalendarEvent = {
    start?: string | null;
    end?: string | null;
    text?: string | null;
    backColor?: string | null;
    textColor?: string | null;
    activityType?: string | null;
    id?: string | null;
};
export type WebApiModulesUtilitiesQuikActivityQuikActivityFuncTQuikActivityCalendarResponse = {
    SessionId?: string | null;
    QuikActivityCalendarEvents?: WebApiModulesUtilitiesQuikActivityQuikActivityFuncQuikActivityCalendarEvent[] | null;
};
export type WebApiModulesUtilitiesQuikActivityQuikActivityFuncPopulateQuikActivityRequest = {
    FromDate?: string | null;
    ToDate?: string | null;
    OfficeLocationId?: string | null;
    WarehouseId?: string | null;
    DepartmentId?: string | null;
    DealId?: string | null;
    InventoryTypeId?: string | null;
    ActivityTypeId?: string | null;
    AssignedToUserId?: string | null;
    IncludeCompleted?: boolean | null;
    IncludeUnreserved?: boolean | null;
    Summary?: boolean | null;
};
export type WebApiModulesUtilitiesQuikActivityQuikActivityFuncPopulateQuikActivityResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    SessionId?: string | null;
};
export type WebApiModulesUtilitiesQuikActivityQuikActivity = {
    /** Format: Integer, IsPrimaryKey: true */
    ActivityId?: number | null;
    ActivityDate?: string | null;
    ActivityTime?: string | null;
    /** Format: Integer, Required: true */
    ActivityTypeId?: string | null;
    ActivityTypeDescription?: string | null;
    ActivityTypeColor?: string | null;
    ActivityTypeTextColor?: string | null;
    /** Format: Integer, Required: true */
    ActivityStatusId?: number | null;
    ActivityStatus?: string | null;
    ActivityStatusColor?: string | null;
    ActivityStatusTextColor?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    OrderNumber?: string | null;
    OrderType?: string | null;
    OrderTypeController?: string | null;
    OrderDescription?: string | null;
    OrderLocation?: string | null;
    AgentId?: string | null;
    Agent?: string | null;
    DealId?: string | null;
    Deal?: string | null;
    DepartmentId?: string | null;
    Department?: string | null;
    VendorId?: string | null;
    Vendor?: string | null;
    CustomerId?: string | null;
    Customer?: string | null;
    InventoryId?: string | null;
    ICode?: string | null;
    Description?: string | null;
    /** Format: Integer */
    TotalQuantity?: number | null;
    RemainingQuantity?: number | null;
    /** Format: Integer */
    CompleteQuantity?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 3 */
    CompletePercent?: number | null;
    /** Format: Text */
    AssignedToUserId?: string | null;
    AssignedToUserName?: string | null;
    OrderRentalActivity?: boolean | null;
    OrderSalesActivity?: boolean | null;
    OrderMiscellaneousActivity?: boolean | null;
    OrderLaborActivity?: boolean | null;
    OrderRentalSaleActivity?: boolean | null;
    OrderLossAndDamageActivity?: boolean | null;
    OrderRepairActivity?: boolean | null;
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
export type WebApiModulesUtilitiesQuikActivityQuikActivityRead = {
    /** Format: Integer, IsPrimaryKey: true */
    ActivityId?: number | null;
    ActivityDate?: string | null;
    ActivityTime?: string | null;
    /** Format: Integer, Required: true */
    ActivityTypeId?: string | null;
    ActivityTypeDescription?: string | null;
    ActivityTypeColor?: string | null;
    ActivityTypeTextColor?: string | null;
    /** Format: Integer, Required: true */
    ActivityStatusId?: number | null;
    ActivityStatus?: string | null;
    ActivityStatusColor?: string | null;
    ActivityStatusTextColor?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    OrderNumber?: string | null;
    OrderType?: string | null;
    OrderTypeController?: string | null;
    OrderDescription?: string | null;
    OrderLocation?: string | null;
    AgentId?: string | null;
    Agent?: string | null;
    DealId?: string | null;
    Deal?: string | null;
    DepartmentId?: string | null;
    Department?: string | null;
    VendorId?: string | null;
    Vendor?: string | null;
    CustomerId?: string | null;
    Customer?: string | null;
    InventoryId?: string | null;
    ICode?: string | null;
    Description?: string | null;
    /** Format: Integer */
    TotalQuantity?: number | null;
    RemainingQuantity?: number | null;
    /** Format: Integer */
    CompleteQuantity?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 3 */
    CompletePercent?: number | null;
    /** Format: Text */
    AssignedToUserId?: string | null;
    AssignedToUserName?: string | null;
    OrderRentalActivity?: boolean | null;
    OrderSalesActivity?: boolean | null;
    OrderMiscellaneousActivity?: boolean | null;
    OrderLaborActivity?: boolean | null;
    OrderRentalSaleActivity?: boolean | null;
    OrderLossAndDamageActivity?: boolean | null;
    OrderRepairActivity?: boolean | null;
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
export type WebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettings = {
    /** Format: Integer, IsPrimaryKey: true */
    Id?: number | null;
    /** Format: Text, Required: true */
    WebUsersId?: string | null;
    /** Format: Text, Required: true */
    Description?: string | null;
    /** Format: Text, Required: true */
    Settings?: string | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettingsRead = {
    /** Format: Integer, IsPrimaryKey: true */
    Id?: number | null;
    /** Format: Text, Required: true */
    WebUsersId?: string | null;
    /** Format: Text, Required: true */
    Description?: string | null;
    /** Format: Text, Required: true */
    Settings?: string | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettingsLogic = {
    Items?: WebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettings[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettingsLogicRead = {
    Items?: WebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettingsRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesUtilitiesRateUpdateBatchRateUpdateBatch = {
    /** Format: Integer, IsPrimaryKey: true */
    RateUpdateBatchId?: number | null;
    /** Format: Text, Required: true */
    RateUpdateBatch?: string | null;
    /** Format: Text, Required: true */
    UsersId?: string | null;
    UserName?: string | null;
    /** Format: Date */
    Applied?: string | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesUtilitiesRateUpdateBatchRateUpdateBatchRead = {
    /** Format: Integer, IsPrimaryKey: true */
    RateUpdateBatchId?: number | null;
    /** Format: Text, Required: true */
    RateUpdateBatch?: string | null;
    /** Format: Text, Required: true */
    UsersId?: string | null;
    UserName?: string | null;
    /** Format: Date */
    Applied?: string | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesRateUpdateBatchRateUpdateBatchLogic = {
    Items?: WebApiModulesUtilitiesRateUpdateBatchRateUpdateBatch[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesRateUpdateBatchRateUpdateBatchLogicRead = {
    Items?: WebApiModulesUtilitiesRateUpdateBatchRateUpdateBatchRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesUtilitiesRateUpdateBatchItemRateUpdateBatchItem = {
    /** Format: Integer, IsPrimaryKey: true */
    RateUpdateBatchItemId?: number | null;
    /** Format: Text */
    InventoryId?: string | null;
    ICode?: string | null;
    /** Format: Text */
    CurrencyId?: string | null;
    Description?: string | null;
    AvailableFor?: string | null;
    Rank?: boolean | null;
    Classification?: string | null;
    InventoryTypeId?: string | null;
    InventoryType?: string | null;
    CategoryId?: string | null;
    Category?: string | null;
    SubCategoryId?: string | null;
    SubCategory?: string | null;
    /** Format: Text */
    WarehouseId?: string | null;
    WarehouseCode?: string | null;
    Warehouse?: string | null;
    ManufacturerId?: string | null;
    Manufacturer?: string | null;
    UnitId?: string | null;
    PartNumber?: string | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldDefaultCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewDefaultCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldPrice?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewPrice?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldRetail?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewRetail?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldHourlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewHourlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldHourlyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewHourlyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldDailyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewDailyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldDailyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewDailyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeeklyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeek2Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeek3Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeek4Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeek5Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeeklyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeeklyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek2Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek3Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek4Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek5Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeeklyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldMonthlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldMonthlyCost?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 3 */
    OldMaxDiscount?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewMonthlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewMonthlyCost?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 3 */
    NewMaxDiscount?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldUnitValue?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewUnitValue?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldReplacementCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewReplacementCost?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 3 */
    OldMinDaysPerWeek?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 3 */
    NewMinDaysPerWeek?: number | null;
    /** Format: Integer */
    RateUpdateBatchId?: number | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesUtilitiesRateUpdateBatchItemRateUpdateBatchItemRead = {
    /** Format: Integer, IsPrimaryKey: true */
    RateUpdateBatchItemId?: number | null;
    /** Format: Text */
    InventoryId?: string | null;
    ICode?: string | null;
    /** Format: Text */
    CurrencyId?: string | null;
    Description?: string | null;
    AvailableFor?: string | null;
    Rank?: boolean | null;
    Classification?: string | null;
    InventoryTypeId?: string | null;
    InventoryType?: string | null;
    CategoryId?: string | null;
    Category?: string | null;
    SubCategoryId?: string | null;
    SubCategory?: string | null;
    /** Format: Text */
    WarehouseId?: string | null;
    WarehouseCode?: string | null;
    Warehouse?: string | null;
    ManufacturerId?: string | null;
    Manufacturer?: string | null;
    UnitId?: string | null;
    PartNumber?: string | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldDefaultCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewDefaultCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldPrice?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewPrice?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldRetail?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewRetail?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldHourlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewHourlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldHourlyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewHourlyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldDailyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewDailyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldDailyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewDailyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeeklyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeek2Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeek3Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeek4Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeek5Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldWeeklyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeeklyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek2Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek3Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek4Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek5Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeeklyCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldMonthlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldMonthlyCost?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 3 */
    OldMaxDiscount?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewMonthlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewMonthlyCost?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 3 */
    NewMaxDiscount?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldUnitValue?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewUnitValue?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    OldReplacementCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewReplacementCost?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 3 */
    OldMinDaysPerWeek?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 3 */
    NewMinDaysPerWeek?: number | null;
    /** Format: Integer */
    RateUpdateBatchId?: number | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesRateUpdateBatchItemRateUpdateBatchItemLogic = {
    Items?: WebApiModulesUtilitiesRateUpdateBatchItemRateUpdateBatchItem[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesRateUpdateBatchItemRateUpdateBatchItemLogicRead = {
    Items?: WebApiModulesUtilitiesRateUpdateBatchItemRateUpdateBatchItemRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesUtilitiesRateUpdateItemRateUpdateItem = {
    /** Format: Text, IsPrimaryKey: true */
    InventoryId?: string | null;
    /** Format: Text, IsPrimaryKey: true */
    WarehouseId?: string | null;
    Description?: string | null;
    ICode?: string | null;
    WarehouseCode?: string | null;
    Warehouse?: string | null;
    AvailableFor?: string | null;
    Rank?: string | null;
    Classification?: string | null;
    InventoryTypeId?: string | null;
    InventoryType?: string | null;
    CategoryId?: string | null;
    Category?: string | null;
    SubCategoryId?: string | null;
    SubCategory?: string | null;
    UnitId?: string | null;
    PartNumber?: string | null;
    ManufacturerId?: string | null;
    Manufacturer?: string | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    Cost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    NewCost?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    DefaultCost?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    NewDefaultCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    Price?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewPrice?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    HourlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    DailyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    WeeklyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    MonthlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewHourlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewDailyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeeklyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewMonthlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    Week2Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    Week3Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    Week4Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    Week5Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek2Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek3Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek4Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek5Rate?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    MaxDiscount?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    NewMaxDiscount?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    HourlyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    NewHourlyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    DailyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    NewDailyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    WeeklyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    NewWeeklyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    MonthlyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    NewMonthlyCost?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    UnitValue?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    NewUnitValue?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    ReplacementCost?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    NewReplacementCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 2 */
    Retail?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 2 */
    NewRetail?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 3 */
    MinDaysPerWeek?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 3 */
    NewMinDaysPerWeek?: number | null;
    CurrencyId?: string | null;
    Currency?: string | null;
    CurrencySymbol?: string | null;
    CurrencyCode?: string | null;
    IsForeignCurrency?: boolean | null;
    RentalInventoryId?: string | null;
    SalesInventoryId?: string | null;
    PartsInventoryId?: string | null;
    MiscRateId?: string | null;
    LaborRateId?: string | null;
    RateId?: string | null;
    RentalICode?: string | null;
    SalesICode?: string | null;
    PartsICode?: string | null;
    MiscICode?: string | null;
    LaborICode?: string | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesUtilitiesRateUpdateItemRateUpdateItemRead = {
    /** Format: Text, IsPrimaryKey: true */
    InventoryId?: string | null;
    /** Format: Text, IsPrimaryKey: true */
    WarehouseId?: string | null;
    Description?: string | null;
    ICode?: string | null;
    WarehouseCode?: string | null;
    Warehouse?: string | null;
    AvailableFor?: string | null;
    Rank?: string | null;
    Classification?: string | null;
    InventoryTypeId?: string | null;
    InventoryType?: string | null;
    CategoryId?: string | null;
    Category?: string | null;
    SubCategoryId?: string | null;
    SubCategory?: string | null;
    UnitId?: string | null;
    PartNumber?: string | null;
    ManufacturerId?: string | null;
    Manufacturer?: string | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    Cost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    NewCost?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    DefaultCost?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    NewDefaultCost?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    Price?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewPrice?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    HourlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    DailyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    WeeklyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    MonthlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewHourlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewDailyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeeklyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewMonthlyRate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    Week2Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    Week3Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    Week4Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    Week5Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek2Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek3Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek4Rate?: number | null;
    /** Format: Decimal, Total digits: 20, Decimal places: 8 */
    NewWeek5Rate?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    MaxDiscount?: number | null;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    NewMaxDiscount?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    HourlyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    NewHourlyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    DailyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    NewDailyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    WeeklyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    NewWeeklyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    MonthlyCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 3 */
    NewMonthlyCost?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    UnitValue?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    NewUnitValue?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    ReplacementCost?: number | null;
    /** Format: Decimal, Total digits: 12, Decimal places: 3 */
    NewReplacementCost?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 2 */
    Retail?: number | null;
    /** Format: Decimal, Total digits: 11, Decimal places: 2 */
    NewRetail?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 3 */
    MinDaysPerWeek?: number | null;
    /** Format: Decimal, Total digits: 6, Decimal places: 3 */
    NewMinDaysPerWeek?: number | null;
    CurrencyId?: string | null;
    Currency?: string | null;
    CurrencySymbol?: string | null;
    CurrencyCode?: string | null;
    IsForeignCurrency?: boolean | null;
    RentalInventoryId?: string | null;
    SalesInventoryId?: string | null;
    PartsInventoryId?: string | null;
    MiscRateId?: string | null;
    LaborRateId?: string | null;
    RateId?: string | null;
    RentalICode?: string | null;
    SalesICode?: string | null;
    PartsICode?: string | null;
    MiscICode?: string | null;
    LaborICode?: string | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesRateUpdateItemRateUpdateItemLogic = {
    Items?: WebApiModulesUtilitiesRateUpdateItemRateUpdateItem[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesRateUpdateItemRateUpdateItemLogicRead = {
    Items?: WebApiModulesUtilitiesRateUpdateItemRateUpdateItemRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesRateUpdateItemRateUpdateItemLogic = {
    Result?: MicrosoftAspNetCoreMvcActionResult;
    Value?: WebApiModulesUtilitiesRateUpdateItemRateUpdateItem;
};
export type MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesRateUpdateItemRateUpdateItemLogicRead = {
    Result?: MicrosoftAspNetCoreMvcActionResult;
    Value?: WebApiModulesUtilitiesRateUpdateItemRateUpdateItemRead;
};
export type WebApiModulesInventoryInventoryApplyPendingRateUpdateModificationsRequest = {
    RateUpdateBatchName?: string | null;
};
export type WebApiModulesInventoryInventoryApplyPendingRateUpdateModificationsResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    RateUpdateBatch?: WebApiModulesUtilitiesRateUpdateBatchRateUpdateBatch;
};
export type WebApiModulesInventoryInventoryApplyPendingRateUpdateModificationsResponseRead = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    RateUpdateBatch?: WebApiModulesUtilitiesRateUpdateBatchRateUpdateBatchRead;
};
export type WebApiModulesInventoryInventoryCopyPendingModificationsToOtherWarehousesRequest = {
    FromWarehouseId?: string | null;
    ToWarehouseIds?: string | null;
};
export type WebApiModulesInventoryInventoryCopyPendingModificationsToOtherWarehousesResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesUtilitiesReceiptProcessBatchReceiptProcessBatchRequest = {
    OfficeLocationId?: string | null;
    SingleReceiptId?: string | null;
    FromDate?: string;
    ToDate?: string;
};
export type WebApiModulesUtilitiesReceiptProcessBatchReceiptProcessBatch = {
    BatchId?: string | null;
    LocationId?: string | null;
    BatchType?: string | null;
    DivisionCode?: string | null;
    BatchNumber?: string | null;
    BatchDate?: string | null;
    BatchTime?: string | null;
    BatchDateTime?: string | null;
    ExportDate?: string | null;
    Exported?: boolean | null;
    RecordCount?: number | null;
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
export type WebApiModulesUtilitiesReceiptProcessBatchReceiptProcessBatchRead = {
    BatchId?: string | null;
    LocationId?: string | null;
    BatchType?: string | null;
    DivisionCode?: string | null;
    BatchNumber?: string | null;
    BatchDate?: string | null;
    BatchTime?: string | null;
    BatchDateTime?: string | null;
    ExportDate?: string | null;
    Exported?: boolean | null;
    RecordCount?: number | null;
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
export type WebApiModulesUtilitiesReceiptProcessBatchReceiptProcessBatchResponse = {
    Batch?: WebApiModulesUtilitiesReceiptProcessBatchReceiptProcessBatch;
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesUtilitiesReceiptProcessBatchReceiptProcessBatchResponseRead = {
    Batch?: WebApiModulesUtilitiesReceiptProcessBatchReceiptProcessBatchRead;
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type FwStandardModulesAdministratorSecuritySettingsSecuritySettingsLoader = {
    requireminlengthpassword?: string | null;
    hubspotaccesstoken?: string | null;
    hubspotrefreshtoken?: string | null;
    minlengthpassword?: number;
    requiredigitinpassword?: string | null;
    requiresymbolinpassword?: string | null;
    autologoutuser?: string | null;
    autologoutminutes?: number;
    lockuserafterfailedattempts?: string | null;
    lockuserafterfailedattemptsnumber?: number;
    epochlastsynced?: number;
    RecordTitle?: string | null;
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
export type WebApiModulesUtilitiesUnlockMultiOrderContractOrdersUtilityUnlockMultiOrderContractOrdersRequest = {
    OrderIds?: string | null;
};
export type WebApiModulesUtilitiesUnlockMultiOrderContractOrdersUtilityUnlockMultiOrderContractOrdersResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesInventoryUnretiredUnretired = {
    UnretiredId?: string | null;
    RetiredId?: string | null;
    UnretiredDate?: string | null;
    WarehouseId?: string | null;
    WarehouseCode?: string | null;
    Warehouse?: string | null;
    InventoryId?: string | null;
    ICode?: string | null;
    ItemDescription?: string | null;
    ItemId?: string | null;
    BarCode?: string | null;
    SerialNumber?: string | null;
    RfId?: string | null;
    UnretiredById?: string | null;
    UnretiredBy?: string | null;
    UnretiredReasonId?: string | null;
    UnretiredReason?: string | null;
    ReasonType?: string | null;
    UnretiredQuantity?: number | null;
    UnretiredNotes?: string | null;
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
export type WebApiModulesInventoryUnretiredUnretiredRead = {
    UnretiredId?: string | null;
    RetiredId?: string | null;
    UnretiredDate?: string | null;
    WarehouseId?: string | null;
    WarehouseCode?: string | null;
    Warehouse?: string | null;
    InventoryId?: string | null;
    ICode?: string | null;
    ItemDescription?: string | null;
    ItemId?: string | null;
    BarCode?: string | null;
    SerialNumber?: string | null;
    RfId?: string | null;
    UnretiredById?: string | null;
    UnretiredBy?: string | null;
    UnretiredReasonId?: string | null;
    UnretiredReason?: string | null;
    ReasonType?: string | null;
    UnretiredQuantity?: number | null;
    UnretiredNotes?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesInventoryUnretiredUnretiredLogic = {
    Items?: WebApiModulesInventoryUnretiredUnretired[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesInventoryUnretiredUnretiredLogicRead = {
    Items?: WebApiModulesInventoryUnretiredUnretiredRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesUtilitiesUserProfileUserProfile = {
    /** Format: Text, IsPrimaryKey: true */
    WebUserId?: string | null;
    UserName?: string | null;
    /** Format: Text */
    UserId?: string | null;
    LoginName?: string | null;
    /** Format: Integer */
    BrowseDefaultRows?: number | null;
    /** Format: Integer */
    GridDefaultRows?: number | null;
    /** Format: Text */
    ApplicationTheme?: string | null;
    /** Format: Text */
    HomeMenuGuid?: string | null;
    /** Format: Text */
    HomeMenuPath?: string | null;
    LanguageId?: string | null;
    Language?: string | null;
    /** Format: Text */
    SuccessSoundId?: string | null;
    SuccessSound?: string | null;
    SuccessBase64Sound?: string | null;
    /** Format: Text */
    ErrorSoundId?: string | null;
    ErrorSound?: string | null;
    ErrorBase64Sound?: string | null;
    /** Format: Text */
    NotificationSoundId?: string | null;
    NotificationSound?: string | null;
    NotificationBase64Sound?: string | null;
    FavoritesJson?: string | null;
    /** Format: Integer */
    FirstDayOfWeek?: number | null;
    /** Format: Boolean */
    SettingsNavigationMenuVisible?: boolean | null;
    /** Format: Boolean */
    ReportsNavigationMenuVisible?: boolean | null;
    /** Format: Boolean */
    ShowUnreservedQuotes?: boolean | null;
    /** Format: Boolean */
    MainMenuPinned?: boolean | null;
    /** Format: Boolean */
    WebAdministrator?: boolean | null;
    /** Format: Text */
    QuikActivitySetting?: string | null;
    EmailSignature?: string | null;
    NewPassword?: string | null;
    OldPassword?: string | null;
    /** Format: Text */
    Locale?: string | null;
    /** Format: Text */
    AvailabilityPreference?: string | null;
    /** Format: Boolean */
    AvailabilityAllWarehouses?: boolean | null;
    EmailApp?: string | null;
    AddRentalWorksUserSignature?: boolean | null;
    /** Format: Text */
    QuikSearchMode?: string | null;
    /** Format: Boolean */
    ShowRentalItemsOutOnly?: boolean | null;
    /** Format: UTCDateTime, Total digits: 23, Decimal places: 3 */
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
export type WebApiModulesUtilitiesUserProfileUserProfileRead = {
    /** Format: Text, IsPrimaryKey: true */
    WebUserId?: string | null;
    UserName?: string | null;
    /** Format: Text */
    UserId?: string | null;
    LoginName?: string | null;
    /** Format: Integer */
    BrowseDefaultRows?: number | null;
    /** Format: Integer */
    GridDefaultRows?: number | null;
    /** Format: Text */
    ApplicationTheme?: string | null;
    /** Format: Text */
    HomeMenuGuid?: string | null;
    /** Format: Text */
    HomeMenuPath?: string | null;
    LanguageId?: string | null;
    Language?: string | null;
    /** Format: Text */
    SuccessSoundId?: string | null;
    SuccessSound?: string | null;
    SuccessBase64Sound?: string | null;
    /** Format: Text */
    ErrorSoundId?: string | null;
    ErrorSound?: string | null;
    ErrorBase64Sound?: string | null;
    /** Format: Text */
    NotificationSoundId?: string | null;
    NotificationSound?: string | null;
    NotificationBase64Sound?: string | null;
    FavoritesJson?: string | null;
    /** Format: Integer */
    FirstDayOfWeek?: number | null;
    /** Format: Boolean */
    SettingsNavigationMenuVisible?: boolean | null;
    /** Format: Boolean */
    ReportsNavigationMenuVisible?: boolean | null;
    /** Format: Boolean */
    ShowUnreservedQuotes?: boolean | null;
    /** Format: Boolean */
    MainMenuPinned?: boolean | null;
    /** Format: Boolean */
    WebAdministrator?: boolean | null;
    /** Format: Text */
    QuikActivitySetting?: string | null;
    EmailSignature?: string | null;
    NewPassword?: string | null;
    OldPassword?: string | null;
    /** Format: Text */
    Locale?: string | null;
    /** Format: Text */
    AvailabilityPreference?: string | null;
    /** Format: Boolean */
    AvailabilityAllWarehouses?: boolean | null;
    EmailApp?: string | null;
    AddRentalWorksUserSignature?: boolean | null;
    /** Format: Text */
    QuikSearchMode?: string | null;
    /** Format: Boolean */
    ShowRentalItemsOutOnly?: boolean | null;
    /** Format: UTCDateTime, Total digits: 23, Decimal places: 3 */
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
export type WebApiModulesUtilitiesControlsUtilityFunctionsNewSessionIdResponse = {
    SessionId?: string | null;
};
export type WebApiModulesUtilitiesVendorInvoiceProcessBatchVendorInvoiceProcessBatchRequest = {
    LocationId?: string | null;
    SingleVendorInvoiceId?: string | null;
};
export type WebApiModulesUtilitiesVendorInvoiceProcessBatchVendorInvoiceProcessBatch = {
    BatchId?: string | null;
    LocationId?: string | null;
    BatchType?: string | null;
    DivisionCode?: string | null;
    BatchNumber?: string | null;
    BatchDate?: string | null;
    BatchTime?: string | null;
    BatchDateTime?: string | null;
    ExportDate?: string | null;
    Exported?: boolean | null;
    RecordCount?: number | null;
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
export type WebApiModulesUtilitiesVendorInvoiceProcessBatchVendorInvoiceProcessBatchRead = {
    BatchId?: string | null;
    LocationId?: string | null;
    BatchType?: string | null;
    DivisionCode?: string | null;
    BatchNumber?: string | null;
    BatchDate?: string | null;
    BatchTime?: string | null;
    BatchDateTime?: string | null;
    ExportDate?: string | null;
    Exported?: boolean | null;
    RecordCount?: number | null;
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
export type WebApiModulesUtilitiesVendorInvoiceProcessBatchVendorInvoiceProcessBatchResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    Batch?: WebApiModulesUtilitiesVendorInvoiceProcessBatchVendorInvoiceProcessBatch;
};
export type WebApiModulesUtilitiesVendorInvoiceProcessBatchVendorInvoiceProcessBatchResponseRead = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    Batch?: WebApiModulesUtilitiesVendorInvoiceProcessBatchVendorInvoiceProcessBatchRead;
};
export type WebApiModulesUtilitiesWebImportWebImport = {
    /** Format: Integer, IsPrimaryKey: true */
    WebImportId?: number | null;
    /** Format: Text, Required: true */
    UserId?: string | null;
    UserName?: string | null;
    /** Format: Text, Required: true */
    ModuleName?: string | null;
    /** Format: Text, Required: true */
    Description?: string | null;
    /** Format: UTCDateTime */
    ImportDateTime?: string | null;
    TotalRecords?: number | null;
    TotalImported?: number | null;
    TotalFailed?: number | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesUtilitiesWebImportWebImportRead = {
    /** Format: Integer, IsPrimaryKey: true */
    WebImportId?: number | null;
    /** Format: Text, Required: true */
    UserId?: string | null;
    UserName?: string | null;
    /** Format: Text, Required: true */
    ModuleName?: string | null;
    /** Format: Text, Required: true */
    Description?: string | null;
    /** Format: UTCDateTime */
    ImportDateTime?: string | null;
    TotalRecords?: number | null;
    TotalImported?: number | null;
    TotalFailed?: number | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesWebImportWebImportLogic = {
    Items?: WebApiModulesUtilitiesWebImportWebImport[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesWebImportWebImportLogicRead = {
    Items?: WebApiModulesUtilitiesWebImportWebImportRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesUtilitiesWebImportImportExcelRequest = {
    ModuleName?: string | null;
    ModuleId?: string | null;
    ImportDescription?: string | null;
    ExcelObjects?: any[] | null;
    SessionId?: string | null;
};
export type FwStandardModulesUtilitiesWebImportImportExcelResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    WebImportId?: string | null;
    TotalRecords?: number | null;
    TotalImported?: number | null;
    TotalFailed?: number | null;
};
export type WebApiModulesUtilitiesWebImportRecordWebImportRecord = {
    /** Format: Integer, IsPrimaryKey: true */
    WebImportRecordId?: number | null;
    /** Format: Text */
    WebImportId?: string | null;
    ModuleName?: string | null;
    /** Format: Text */
    UniqueId01?: string | null;
    /** Format: Text */
    UniqueId02?: string | null;
    /** Format: Text */
    UniqueId03?: string | null;
    /** Format: Text */
    OriginalJson?: string | null;
    /** Format: Text */
    PreImportJson?: string | null;
    /** Format: Text */
    PostImportJson?: string | null;
    /** Format: Text */
    ErrorMessage?: string | null;
    /** Format: UTCDateTime */
    ImportDateTime?: string | null;
    /** Format: Boolean */
    IsReverted?: boolean | null;
    /** Format: UTCDateTime */
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
export type WebApiModulesUtilitiesWebImportRecordWebImportRecordRead = {
    /** Format: Integer, IsPrimaryKey: true */
    WebImportRecordId?: number | null;
    /** Format: Text */
    WebImportId?: string | null;
    ModuleName?: string | null;
    /** Format: Text */
    UniqueId01?: string | null;
    /** Format: Text */
    UniqueId02?: string | null;
    /** Format: Text */
    UniqueId03?: string | null;
    /** Format: Text */
    OriginalJson?: string | null;
    /** Format: Text */
    PreImportJson?: string | null;
    /** Format: Text */
    PostImportJson?: string | null;
    /** Format: Text */
    ErrorMessage?: string | null;
    /** Format: UTCDateTime */
    ImportDateTime?: string | null;
    /** Format: Boolean */
    IsReverted?: boolean | null;
    /** Format: UTCDateTime */
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
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesWebImportRecordWebImportRecordLogic = {
    Items?: WebApiModulesUtilitiesWebImportRecordWebImportRecord[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesUtilitiesWebImportRecordWebImportRecordLogicRead = {
    Items?: WebApiModulesUtilitiesWebImportRecordWebImportRecordRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesWebImportRecordWebImportRecordLogic = {
    Result?: MicrosoftAspNetCoreMvcActionResult;
    Value?: WebApiModulesUtilitiesWebImportRecordWebImportRecord;
};
export type MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesWebImportRecordWebImportRecordLogicRead = {
    Result?: MicrosoftAspNetCoreMvcActionResult;
    Value?: WebApiModulesUtilitiesWebImportRecordWebImportRecordRead;
};
export function getApiV1AppimageGetimages({ uniqueid1, uniqueid2, uniqueid3, description, rectype, uniqueid1Int }: {
    uniqueid1?: string;
    uniqueid2?: string;
    uniqueid3?: string;
    description?: string;
    rectype?: string;
    uniqueid1Int?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwAppImageModel[];
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
    }>(`/api/v1/appimage/getimages${QS.query(QS.explode({
        uniqueid1,
        uniqueid2,
        uniqueid3,
        description,
        rectype,
        uniqueid1int: uniqueid1Int
    }))}`, {
        ...opts
    }));
}
export function getApiV1AppimageGetimage({ appimageid, thumbnail, download }: {
    appimageid?: string;
    thumbnail?: boolean;
    download?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwAppImageModel[];
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
    }>(`/api/v1/appimage/getimage${QS.query(QS.explode({
        appimageid,
        thumbnail,
        download
    }))}`, {
        ...opts
    }));
}
export function getApiV1AppimageGetimagefor({ thumbnail, uniqueid1, uniqueid2, uniqueid3, uniqueid1Int, orderby, download }: {
    thumbnail?: boolean;
    uniqueid1?: string;
    uniqueid2?: string;
    uniqueid3?: string;
    uniqueid1Int?: number;
    orderby?: string;
    download?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwAppImageModel[];
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
    }>(`/api/v1/appimage/getimagefor${QS.query(QS.explode({
        thumbnail,
        uniqueid1,
        uniqueid2,
        uniqueid3,
        uniqueid1int: uniqueid1Int,
        orderby,
        download
    }))}`, {
        ...opts
    }));
}
export function postApiV1AppimageRepositionimage(webApiControllersSharedControlsAppImageAppImageControllerRepositionAsyncRequest?: WebApiControllersSharedControlsAppImageAppImageControllerRepositionAsyncRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/appimage/repositionimage", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiControllersSharedControlsAppImageAppImageControllerRepositionAsyncRequest
    })));
}
export function postApiV1Appimage(webApiControllersSharedControlsAppImageAppImageControllerAddAsyncRequest?: WebApiControllersSharedControlsAppImageAppImageControllerAddAsyncRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/appimage", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiControllersSharedControlsAppImageAppImageControllerAddAsyncRequest
    })));
}
export function deleteApiV1Appimage(webApiControllersSharedControlsAppImageAppImageControllerDeleteAsyncRequest?: WebApiControllersSharedControlsAppImageAppImageControllerDeleteAsyncRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/appimage", oazapfts.json({
        ...opts,
        method: "DELETE",
        body: webApiControllersSharedControlsAppImageAppImageControllerDeleteAsyncRequest
    })));
}
export function postApiV1AppimageEmail(fwStandardBusinessLogicFwAppImageLogicEmailRequest?: FwStandardBusinessLogicFwAppImageLogicEmailRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/appimage/email", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardBusinessLogicFwAppImageLogicEmailRequest
    })));
}
export function postApiV1BrowseactiveviewfieldsBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/browseactiveviewfields/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1BrowseactiveviewfieldsExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/browseactiveviewfields/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Browseactiveviewfields({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFieldsLogicRead;
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
    }>(`/api/v1/browseactiveviewfields${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Browseactiveviewfields(webApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFields?: WebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFields, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFieldsRead;
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
    }>("/api/v1/browseactiveviewfields", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFields
    })));
}
export function getApiV1BrowseactiveviewfieldsById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFieldsRead;
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
    }>(`/api/v1/browseactiveviewfields/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1BrowseactiveviewfieldsById(id: string, webApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFields?: WebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFields, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFieldsRead;
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
    }>(`/api/v1/browseactiveviewfields/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesControlsBrowseActiveViewFieldsBrowseActiveViewFields
    })));
}
export function deleteApiV1BrowseactiveviewfieldsById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/browseactiveviewfields/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1ChangeicodeutilityChangeicode(webApiModulesInventoryInventoryChangeICodeRequest?: WebApiModulesInventoryInventoryChangeICodeRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesInventoryInventoryChangeICodeResponse;
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
    }>("/api/v1/changeicodeutility/changeicode", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesInventoryInventoryChangeICodeRequest
    })));
}
export function postApiV1ChangeicodeutilityValidaterentalinventoryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/changeicodeutility/validaterentalinventory/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1ChangeicodeutilityValidatesalesinventoryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/changeicodeutility/validatesalesinventory/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1ChangeicodeutilityValidateitemBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/changeicodeutility/validateitem/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1ChangeofficewarehouseValidateofficelocationBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/changeofficewarehouse/validateofficelocation/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1ChangeofficewarehouseValidatewarehouselocationBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/changeofficewarehouse/validatewarehouselocation/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1ChangeofficewarehouseValidatedepartmentBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/changeofficewarehouse/validatedepartment/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1ChangeorderstatusChangestatus(webApiModulesAgentOrderChangeOrderStatusRequest?: WebApiModulesAgentOrderChangeOrderStatusRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAgentOrderChangeOrderStatusResponse;
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
    }>("/api/v1/changeorderstatus/changestatus", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAgentOrderChangeOrderStatusRequest
    })));
}
export function postApiV1ChangeorderstatusValidateorderBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/changeorderstatus/validateorder/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1DashboardLoadwidgetbynameByWidgetapiname(widgetApiName: string, { dataPoints, locationId, warehouseId, departmentId, dateBehaviorId, dateField, fromDate, toDate, stacked }: {
    dataPoints?: number;
    locationId?: string;
    warehouseId?: string;
    departmentId?: string;
    dateBehaviorId?: string;
    dateField?: string;
    fromDate?: string;
    toDate?: string;
    stacked?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesSettingsWidgetSettingsWidgetWidget;
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
    }>(`/api/v1/dashboard/loadwidgetbyname/${encodeURIComponent(widgetApiName)}${QS.query(QS.explode({
        dataPoints,
        locationId,
        warehouseId,
        departmentId,
        dateBehaviorId,
        dateField,
        fromDate,
        toDate,
        stacked
    }))}`, {
        ...opts
    }));
}
export function getApiV1DashboardsettingsById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesDashboardSettingsDashboardSettingsRead;
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
    }>(`/api/v1/dashboardsettings/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1DashboardsettingsById(id: string, webApiModulesUtilitiesDashboardSettingsDashboardSettings?: WebApiModulesUtilitiesDashboardSettingsDashboardSettings, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesDashboardSettingsDashboardSettingsRead;
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
    }>(`/api/v1/dashboardsettings/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesDashboardSettingsDashboardSettings
    })));
}
export function postApiV1Dashboardsettings(webApiModulesUtilitiesDashboardSettingsDashboardSettings?: WebApiModulesUtilitiesDashboardSettingsDashboardSettings, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesDashboardSettingsDashboardSettingsRead;
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
    }>("/api/v1/dashboardsettings", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesDashboardSettingsDashboardSettings
    })));
}
export function getApiV1DatefunctionsAdddays({ date, days }: {
    date?: string;
    days?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/datefunctions/adddays${QS.query(QS.explode({
        date,
        Days: days
    }))}`, {
        ...opts
    }));
}
export function getApiV1DatefunctionsAddmonths({ date, months }: {
    date?: string;
    months?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/datefunctions/addmonths${QS.query(QS.explode({
        date,
        Months: months
    }))}`, {
        ...opts
    }));
}
export function getApiV1DatefunctionsNumberofmonths({ fromDate, toDate }: {
    fromDate?: string;
    toDate?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/datefunctions/numberofmonths${QS.query(QS.explode({
        fromDate,
        toDate
    }))}`, {
        ...opts
    }));
}
export function getApiV1DownloadByFilename(filename: string, { downloadasfilename }: {
    downloadasfilename?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/download/${encodeURIComponent(filename)}${QS.query(QS.explode({
        downloadasfilename
    }))}`, {
        ...opts
    }));
}
export function getHealthcheck(opts?: Oazapfts.RequestOpts) {
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
    }>("/healthcheck", {
        ...opts
    }));
}
export function postApiV1InventorylocationitemBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorylocationitem/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InventorylocationitemExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorylocationitem/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Inventorylocationitem({ pageno, pagesize, sort }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryLocationItemInventoryLocationItemRead[];
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
    }>(`/api/v1/inventorylocationitem${QS.query(QS.explode({
        pageno,
        pagesize,
        sort
    }))}`, {
        ...opts
    }));
}
export function getApiV1InventorylocationitemById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryLocationItemInventoryLocationItemRead;
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
    }>(`/api/v1/inventorylocationitem/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1InventorylocationitemById(id: string, webApiModulesUtilitiesInventoryLocationItemInventoryLocationItem?: WebApiModulesUtilitiesInventoryLocationItemInventoryLocationItem, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryLocationItemInventoryLocationItemRead;
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
    }>(`/api/v1/inventorylocationitem/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesInventoryLocationItemInventoryLocationItem
    })));
}
export function postApiV1InventorylocationitemMany(body?: WebApiModulesUtilitiesInventoryLocationItemInventoryLocationItem[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesInventoryLocationItemInventoryLocationItemLogicRead[];
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
    }>("/api/v1/inventorylocationitem/many", oazapfts.json({
        ...opts,
        method: "POST",
        body
    })));
}
export function postApiV1InventorymergeBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorymerge/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InventorymergeExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorymerge/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1InventorymergeById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryMergeInventoryMergeRead;
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
    }>(`/api/v1/inventorymerge/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1InventorymergeById(id: string, webApiModulesUtilitiesInventoryMergeInventoryMerge?: WebApiModulesUtilitiesInventoryMergeInventoryMerge, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryMergeInventoryMergeRead;
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
    }>(`/api/v1/inventorymerge/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesInventoryMergeInventoryMerge
    })));
}
export function deleteApiV1InventorymergeById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/inventorymerge/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1Inventorymerge(webApiModulesUtilitiesInventoryMergeInventoryMerge?: WebApiModulesUtilitiesInventoryMergeInventoryMerge, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryMergeInventoryMergeRead;
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
    }>("/api/v1/inventorymerge", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesInventoryMergeInventoryMerge
    })));
}
export function postApiV1InventorymergeValidateitemBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorymerge/validateitem/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InventorymergeutilityMergeinventory(webApiModulesUtilitiesInventoryMergeUtilityMergeInventoryRequest?: WebApiModulesUtilitiesInventoryMergeUtilityMergeInventoryRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiLogicTSpStatusResponse;
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
    }>("/api/v1/inventorymergeutility/mergeinventory", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesInventoryMergeUtilityMergeInventoryRequest
    })));
}
export function postApiV1InventorypurchasesessionBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorypurchasesession/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InventorypurchasesessionExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorypurchasesession/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function deleteApiV1InventorypurchasesessionById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/inventorypurchasesession/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1InventorypurchaseutilityStartsession(webApiModulesUtilitiesInventoryPurchaseUtilityStartInventoryPurchaseSessionRequest?: WebApiModulesUtilitiesInventoryPurchaseUtilityStartInventoryPurchaseSessionRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryPurchaseUtilityStartInventoryPurchaseSessionResponse;
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
    }>("/api/v1/inventorypurchaseutility/startsession", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesInventoryPurchaseUtilityStartInventoryPurchaseSessionRequest
    })));
}
export function postApiV1InventorypurchaseutilityUpdatesession(webApiModulesUtilitiesInventoryPurchaseUtilityUpdateInventoryPurchaseSessionRequest?: WebApiModulesUtilitiesInventoryPurchaseUtilityUpdateInventoryPurchaseSessionRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryPurchaseUtilityUpdateInventoryPurchaseSessionResponse;
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
    }>("/api/v1/inventorypurchaseutility/updatesession", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesInventoryPurchaseUtilityUpdateInventoryPurchaseSessionRequest
    })));
}
export function postApiV1InventorypurchaseutilityAssignbarcodes(webApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseAssignBarCodesRequest?: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseAssignBarCodesRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseAssignBarCodesResponse;
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
    }>("/api/v1/inventorypurchaseutility/assignbarcodes", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseAssignBarCodesRequest
    })));
}
export function postApiV1InventorypurchaseutilityCompletesession(webApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseCompleteSessionRequest?: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseCompleteSessionRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseCompleteSessionResponse;
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
    }>("/api/v1/inventorypurchaseutility/completesession", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseCompleteSessionRequest
    })));
}
export function postApiV1InventorypurchaseutilityValidatecurrencyBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorypurchaseutility/validatecurrency/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1InventorypurchaseutilityValidatecurrencyBrowse({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesSettingsCurrencySettingsCurrencyCurrencyLogicRead;
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
    }>(`/api/v1/inventorypurchaseutility/validatecurrency/browse${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1InventorypurchaseutilityValidatedealBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorypurchaseutility/validatedeal/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1InventorypurchaseutilityLookupdealWarehouseByWarehouseid(warehouseid: string, { pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAgentDealDealLogicRead;
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
    }>(`/api/v1/inventorypurchaseutility/lookupdeal/warehouse/${encodeURIComponent(warehouseid)}${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Lookup Warehouses.
 */
export function getApiV1InventorypurchaseutilityLookupwarehouse({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesSettingsWarehouseSettingsWarehouseWarehouseLogicRead;
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
    }>(`/api/v1/inventorypurchaseutility/lookupwarehouse${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Lookup Inventory Items
 */
export function getApiV1InventorypurchaseutilityLookupinventoryitemWarehouseByWarehouseid(warehouseid: string, { pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesInventoryRentalInventoryRentalInventoryLogicRead;
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
    }>(`/api/v1/inventorypurchaseutility/lookupinventoryitem/warehouse/${encodeURIComponent(warehouseid)}${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Lookup Vendors
 */
export function getApiV1InventorypurchaseutilityLookupvendor({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAgentVendorVendorLogicRead;
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
    }>(`/api/v1/inventorypurchaseutility/lookupvendor${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Lookup Manufacturers.
 */
export function getApiV1InventorypurchaseutilityLookupmanufacturer({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAgentVendorVendorLogicRead;
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
    }>(`/api/v1/inventorypurchaseutility/lookupmanufacturer${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Lookup Vendors and Manufacturers.
 */
export function getApiV1InventorypurchaseutilityLookupcountry({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesSettingsAddressSettingsCountryCountryLogicRead;
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
    }>(`/api/v1/inventorypurchaseutility/lookupcountry${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Lookup Currencies.
 */
export function getApiV1InventorypurchaseutilityLookupcurrency({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesSettingsCurrencySettingsCurrencyCurrencyLogicRead;
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
    }>(`/api/v1/inventorypurchaseutility/lookupcurrency${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1InventorypurchaseutilityLookuporiginalshow({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAgentDealDealLogicRead;
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
    }>(`/api/v1/inventorypurchaseutility/lookuporiginalshow${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1InventorypurchaseutilityItemsBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorypurchaseutility/items/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InventorypurchaseutilityItemsExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorypurchaseutility/items/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1InventorypurchaseutilityItems({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItemLogicRead;
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
    }>(`/api/v1/inventorypurchaseutility/items${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1InventorypurchaseutilityItemsById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItemRead;
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
    }>(`/api/v1/inventorypurchaseutility/items/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1InventorypurchaseutilityItemsById(id: string, webApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItem?: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItem, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItemRead;
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
    }>(`/api/v1/inventorypurchaseutility/items/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItem
    })));
}
export function postApiV1InventorypurchaseutilityItemsMany(body?: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItem[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItemLogicRead[];
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
    }>("/api/v1/inventorypurchaseutility/items/many", oazapfts.json({
        ...opts,
        method: "POST",
        body
    })));
}
export function postApiV1InventoryretireutilityRetireinventory(webApiModulesInventoryInventoryRetireInventoryRequest?: WebApiModulesInventoryInventoryRetireInventoryRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesInventoryInventoryRetireInventoryResponse;
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
    }>("/api/v1/inventoryretireutility/retireinventory", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesInventoryInventoryRetireInventoryRequest
    })));
}
export function postApiV1InventoryretireutilityValidateinventoryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventoryretireutility/validateinventory/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InventoryretireutilityValidateitemBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventoryretireutility/validateitem/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InventoryretireutilityValidateconsignoragreementBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventoryretireutility/validateconsignoragreement/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InventorysequenceutilityDonothing(body?: any, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventorysequenceutility/donothing", oazapfts.json({
        ...opts,
        method: "POST",
        body
    })));
}
export function postApiV1InventoryunretireutilityUnretireinventory(webApiModulesInventoryInventoryUnretireInventoryRequest?: WebApiModulesInventoryInventoryUnretireInventoryRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesInventoryInventoryRetireInventoryResponse;
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
    }>("/api/v1/inventoryunretireutility/unretireinventory", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesInventoryInventoryUnretireInventoryRequest
    })));
}
export function postApiV1InventoryunretireutilityValidateinventoryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventoryunretireutility/validateinventory/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InventoryunretireutilityValidateitemBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/inventoryunretireutility/validateitem/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InvoiceprocessbatchCreatebatch(webApiModulesBillingInvoiceInvoiceProcessBatchRequest?: WebApiModulesBillingInvoiceInvoiceProcessBatchRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesBillingInvoiceInvoiceProcessBatchResponseRead;
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
    }>("/api/v1/invoiceprocessbatch/createbatch", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesBillingInvoiceInvoiceProcessBatchRequest
    })));
}
export function postApiV1InvoiceprocessbatchBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/invoiceprocessbatch/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InvoiceprocessbatchExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/invoiceprocessbatch/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1InvoiceprocessbatchValidatebatchBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/invoiceprocessbatch/validatebatch/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Keepalive(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/keepalive", {
        ...opts
    }));
}
/**
 * Browse for label designs.
 */
export function postApiV1LabeldesignBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/labeldesign/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
/**
 * Export label designs to excel.
 */
export function postApiV1LabeldesignExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/labeldesign/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
/**
 * Get barcode labels.
 */
export function getApiV1Labeldesign({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesUtilitiesLabelDesignLabelDesignLogicRead;
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
    }>(`/api/v1/labeldesign${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Create a new barcode label.
 */
export function postApiV1Labeldesign(webApiModulesUtilitiesLabelDesignLabelDesign?: WebApiModulesUtilitiesLabelDesignLabelDesign, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesLabelDesignLabelDesignRead;
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
    }>("/api/v1/labeldesign", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesLabelDesignLabelDesign
    })));
}
/**
 * Get barcode label by id.
 */
export function getApiV1LabeldesignById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesLabelDesignLabelDesignRead;
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
    }>(`/api/v1/labeldesign/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
/**
 * Edit a barcode label.
 */
export function putApiV1LabeldesignById(id: string, webApiModulesUtilitiesLabelDesignLabelDesign?: WebApiModulesUtilitiesLabelDesignLabelDesign, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesLabelDesignLabelDesignRead;
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
    }>(`/api/v1/labeldesign/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesLabelDesignLabelDesign
    })));
}
/**
 * Delete a barcode label.
 */
export function deleteApiV1LabeldesignById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/labeldesign/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
/**
 * Get field names for designing asset labels.
 */
export function getApiV1LabeldesignFieldnamesAssetlabel(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: string[];
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
    }>("/api/v1/labeldesign/fieldnames/assetlabel", {
        ...opts
    }));
}
/**
 * Get a comma separated list of barcodes from a receive contract for printing labels.
 */
export function getApiV1LabeldesignBarcodesContractByReceivecontractidWarehouseAndWarehouseid(receivecontractid: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: string;
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
    }>(`/api/v1/labeldesign/barcodes/contract/${encodeURIComponent(receivecontractid)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
/**
 * Get a comma separated list of barcodes from a purchase order for printing labels.
 */
export function getApiV1LabeldesignBarcodesPurchaseorderByPurchaseorderidWarehouseAndWarehouseid(purchaseorderid: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: string;
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
    }>(`/api/v1/labeldesign/barcodes/purchaseorder/${encodeURIComponent(purchaseorderid)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
/**
 * Get a comma separated list of barcodes from a purchase order for printing labels.
 */
export function getApiV1LabeldesignBarcodesRentalinventoryByRentalinventoryidWarehouseAndWarehouseid(rentalinventoryid: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: string;
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
    }>(`/api/v1/labeldesign/barcodes/rentalinventory/${encodeURIComponent(rentalinventoryid)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
/**
 * Get a comma separated list of barcodes from a purchase order for printing labels.
 */
export function getApiV1LabeldesignBarcodesSalesinventoryBySalesinventoryidWarehouseAndWarehouseid(salesinventoryid: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: string;
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
    }>(`/api/v1/labeldesign/barcodes/salesinventory/${encodeURIComponent(salesinventoryid)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
/**
 * Get a comma separated list of barcodes by a range of barcodes for printing labels.
 */
export function getApiV1LabeldesignBarcodesFromByFrombarcodeToAndTobarcodeWarehouseWarehouseid(frombarcode: string, tobarcode: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: string;
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
    }>(`/api/v1/labeldesign/barcodes/from/${encodeURIComponent(frombarcode)}/to/${encodeURIComponent(tobarcode)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
/**
 * Get a comma separated list of barcodes by inventory purchase utility sessionid for printing labels.
 */
export function getApiV1LabeldesignBarcodesInventorypurchaseBySessionidWarehouseAndWarehouseid(sessionid: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: string;
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
    }>(`/api/v1/labeldesign/barcodes/inventorypurchase/${encodeURIComponent(sessionid)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
/**
 * Get a purchase order number from a purchase order id.
 */
export function getApiV1LabeldesignPurchaseordernumberOrderidByOrderidWarehouseAndWarehouseid(orderid: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: string;
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
    }>(`/api/v1/labeldesign/purchaseordernumber/orderid/${encodeURIComponent(orderid)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
/**
 * Get a contract number by contractid
 */
export function getApiV1LabeldesignContractnumberContractidByContractidWarehouseAndWarehouseid(contractid: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: string;
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
    }>(`/api/v1/labeldesign/contractnumber/contractid/${encodeURIComponent(contractid)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
/**
 * Get field replacements for printing an asset labels.
 */
export function getApiV1LabeldesignLabeldataAssetBarcodeByBarcodeWarehouseAndWarehouseid(barcode: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesLabelDesignBarcodeLabel;
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
    }>(`/api/v1/labeldesign/labeldata/asset/barcode/${encodeURIComponent(barcode)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
/**
 * Get fields replacements for printing a receive contract barcode label.
 */
export function getApiV1LabeldesignLabeldataReceivecontractByContractidBarcodeAndBarcodeWarehouseWarehouseid(contractid: string, barcode: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesLabelDesignBarcodeLabel;
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
    }>(`/api/v1/labeldesign/labeldata/receivecontract/${encodeURIComponent(contractid)}/barcode/${encodeURIComponent(barcode)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
/**
 * Get field replacements for printing purchase order barcodes.
 */
export function getApiV1LabeldesignLabeldataPurchaseorderByOrderidBarcodeAndBarcodeWarehouseWarehouseid(orderid: string, barcode: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesLabelDesignBarcodeLabel;
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
    }>(`/api/v1/labeldesign/labeldata/purchaseorder/${encodeURIComponent(orderid)}/barcode/${encodeURIComponent(barcode)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
/**
 * Get field replacements for inventory purchase session barcodes.
 */
export function getApiV1LabeldesignLabeldataInventorypurchaseBySessionidBarcodeAndBarcodeWarehouseWarehouseid(sessionid: string, barcode: string, warehouseid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesLabelDesignBarcodeLabel;
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
    }>(`/api/v1/labeldesign/labeldata/inventorypurchase/${encodeURIComponent(sessionid)}/barcode/${encodeURIComponent(barcode)}/warehouse/${encodeURIComponent(warehouseid)}`, {
        ...opts
    }));
}
export function postApiV1MigrateStartsession(webApiModulesUtilitiesMigrateStartMigrateSessionRequest?: WebApiModulesUtilitiesMigrateStartMigrateSessionRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesMigrateStartMigrateSessionResponse;
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
    }>("/api/v1/migrate/startsession", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesMigrateStartMigrateSessionRequest
    })));
}
export function postApiV1MigrateUpdateitem(webApiModulesUtilitiesMigrateUpdateMigrateItemRequest?: WebApiModulesUtilitiesMigrateUpdateMigrateItemRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesMigrateUpdateMigrateItemResponse;
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
    }>("/api/v1/migrate/updateitem", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesMigrateUpdateMigrateItemRequest
    })));
}
export function postApiV1MigrateSelectall(webApiModulesUtilitiesMigrateSelectAllNoneMigrateItemRequest?: WebApiModulesUtilitiesMigrateSelectAllNoneMigrateItemRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesMigrateSelectAllNoneMigrateItemResponse;
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
    }>("/api/v1/migrate/selectall", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesMigrateSelectAllNoneMigrateItemRequest
    })));
}
export function postApiV1MigrateSelectnone(webApiModulesUtilitiesMigrateSelectAllNoneMigrateItemRequest?: WebApiModulesUtilitiesMigrateSelectAllNoneMigrateItemRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesMigrateSelectAllNoneMigrateItemResponse;
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
    }>("/api/v1/migrate/selectnone", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesMigrateSelectAllNoneMigrateItemRequest
    })));
}
export function postApiV1MigrateCompletesession2(webApiModulesUtilitiesMigrateCompleteMigrateSessionRequest?: WebApiModulesUtilitiesMigrateCompleteMigrateSessionRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesMigrateCompleteMigrateSessionResponseRead;
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
    }>("/api/v1/migrate/completesession2", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesMigrateCompleteMigrateSessionRequest
    })));
}
export function getApiV1MigrateLegend(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: {
            [key: string]: string;
        };
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
    }>("/api/v1/migrate/legend", {
        ...opts
    }));
}
export function postApiV1MigrateValidatedealBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/migrate/validatedeal/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1MigrateValidatedepartmentBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/migrate/validatedepartment/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1MigrateValidatecreatenewdealBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/migrate/validatecreatenewdeal/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1MigrateValidateratetypeBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/migrate/validateratetype/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1MigrateValidateorderBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/migrate/validateorder/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1MigrateValidateresponsiblepersonBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/migrate/validateresponsibleperson/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1MigrateitemBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/migrateitem/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1MigrateitemExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/migrateitem/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1MigrateitemLegend(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: {
            [key: string]: string;
        };
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
    }>("/api/v1/migrateitem/legend", {
        ...opts
    }));
}
export function postApiV1OnlineordertrackingBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/onlineordertracking/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1OnlineordertrackingExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/onlineordertracking/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Onlineordertracking({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTrackingLogicRead;
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
    }>(`/api/v1/onlineordertracking${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Onlineordertracking(webApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTracking?: WebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTracking, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTrackingRead;
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
    }>("/api/v1/onlineordertracking", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTracking
    })));
}
export function getApiV1OnlineordertrackingById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTrackingRead;
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
    }>(`/api/v1/onlineordertracking/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1OnlineordertrackingById(id: string, webApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTracking?: WebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTracking, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTrackingRead;
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
    }>(`/api/v1/onlineordertracking/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesOnlineOrderTrackingOnlineOrderTracking
    })));
}
export function deleteApiV1OnlineordertrackingById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/onlineordertracking/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1OnlineordertrackingexportExport(webApiModulesExportsOnlineOrderTrackingExportOnlineOrderTrackingExportRequest?: WebApiModulesExportsOnlineOrderTrackingExportOnlineOrderTrackingExportRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesExportsOnlineOrderTrackingExportOnlineOrderTrackingExportResponse;
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
    }>("/api/v1/onlineordertrackingexport/export", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesExportsOnlineOrderTrackingExportOnlineOrderTrackingExportRequest
    })));
}
export function getApiV1OnlineordertrackingexportEmptyobject(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/onlineordertrackingexport/emptyobject", {
        ...opts
    }));
}
export function postApiV1OrderexportExport(webApiModulesExportsOrderExportOrderExportRequest?: WebApiModulesExportsOrderExportOrderExportRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesExportsOrderExportOrderExportResponse;
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
    }>("/api/v1/orderexport/export", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesExportsOrderExportOrderExportRequest
    })));
}
export function getApiV1OrderexportEmptyobject(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/orderexport/emptyobject", {
        ...opts
    }));
}
export function postApiV1OrderlocationscheduleScheduledata(webApiModulesUtilitiesOrderLocationScheduleOrderLocationScheduleRequest?: WebApiModulesUtilitiesOrderLocationScheduleOrderLocationScheduleRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesOrderLocationScheduleOrderLocationScheduleResponse;
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
    }>("/api/v1/orderlocationschedule/scheduledata", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesOrderLocationScheduleOrderLocationScheduleRequest
    })));
}
export function postApiV1OrderlocationscheduleValidateofficelocationBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/orderlocationschedule/validateofficelocation/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1ProgressmeterById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesProgressMeterProgressMeterRead;
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
    }>(`/api/v1/progressmeter/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function postApiV1QuikactivityCalendardata(webApiModulesUtilitiesQuikActivityQuikActivityFuncQuikActivityCalendarRequest?: WebApiModulesUtilitiesQuikActivityQuikActivityFuncQuikActivityCalendarRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesQuikActivityQuikActivityFuncTQuikActivityCalendarResponse;
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
    }>("/api/v1/quikactivity/calendardata", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesQuikActivityQuikActivityFuncQuikActivityCalendarRequest
    })));
}
export function postApiV1QuikactivityPopulate(webApiModulesUtilitiesQuikActivityQuikActivityFuncPopulateQuikActivityRequest?: WebApiModulesUtilitiesQuikActivityQuikActivityFuncPopulateQuikActivityRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesQuikActivityQuikActivityFuncPopulateQuikActivityResponse;
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
    }>("/api/v1/quikactivity/populate", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesQuikActivityQuikActivityFuncPopulateQuikActivityRequest
    })));
}
export function postApiV1QuikactivityBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikactivity/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1QuikactivityExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikactivity/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function putApiV1QuikactivityById(id: string, webApiModulesUtilitiesQuikActivityQuikActivity?: WebApiModulesUtilitiesQuikActivityQuikActivity, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesQuikActivityQuikActivityRead;
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
    }>(`/api/v1/quikactivity/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesQuikActivityQuikActivity
    })));
}
export function postApiV1QuikactivityValidatewarehouseBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikactivity/validatewarehouse/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1QuikactivitysettingsBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikactivitysettings/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1QuikactivitysettingsExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikactivitysettings/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Quikactivitysettings({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettingsLogicRead;
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
    }>(`/api/v1/quikactivitysettings${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Quikactivitysettings(webApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettings?: WebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettings, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettingsRead;
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
    }>("/api/v1/quikactivitysettings", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettings
    })));
}
export function getApiV1QuikactivitysettingsById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettingsRead;
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
    }>(`/api/v1/quikactivitysettings/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1QuikactivitysettingsById(id: string, webApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettings?: WebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettings, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettingsRead;
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
    }>(`/api/v1/quikactivitysettings/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesControlsQuikActivitySettingsQuikActivitySettings
    })));
}
export function deleteApiV1QuikactivitysettingsById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/quikactivitysettings/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1RateupdatebatchBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdatebatch/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1RateupdatebatchExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdatebatch/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Rateupdatebatch({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesUtilitiesRateUpdateBatchRateUpdateBatchLogicRead;
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
    }>(`/api/v1/rateupdatebatch${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1RateupdatebatchById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesRateUpdateBatchRateUpdateBatchRead;
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
    }>(`/api/v1/rateupdatebatch/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function postApiV1RateupdatebatchitemBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdatebatchitem/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1RateupdatebatchitemExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdatebatchitem/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Rateupdatebatchitem({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesUtilitiesRateUpdateBatchItemRateUpdateBatchItemLogicRead;
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
    }>(`/api/v1/rateupdatebatchitem${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1RateupdatebatchitemById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesRateUpdateBatchItemRateUpdateBatchItemRead;
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
    }>(`/api/v1/rateupdatebatchitem/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function getApiV1RateupdateitemLegend(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: {
            [key: string]: string;
        };
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
    }>("/api/v1/rateupdateitem/legend", {
        ...opts
    }));
}
export function postApiV1RateupdateitemBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdateitem/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1RateupdateitemExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdateitem/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Rateupdateitem({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesUtilitiesRateUpdateItemRateUpdateItemLogicRead;
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
    }>(`/api/v1/rateupdateitem${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1RateupdateitemById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesRateUpdateItemRateUpdateItemRead;
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
    }>(`/api/v1/rateupdateitem/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1RateupdateitemById(id: string, webApiModulesUtilitiesRateUpdateItemRateUpdateItem?: WebApiModulesUtilitiesRateUpdateItemRateUpdateItem, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesRateUpdateItemRateUpdateItemRead;
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
    }>(`/api/v1/rateupdateitem/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesRateUpdateItemRateUpdateItem
    })));
}
export function postApiV1RateupdateitemMany(body?: WebApiModulesUtilitiesRateUpdateItemRateUpdateItem[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesRateUpdateItemRateUpdateItemLogicRead[];
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
    }>("/api/v1/rateupdateitem/many", oazapfts.json({
        ...opts,
        method: "POST",
        body
    })));
}
export function postApiV1RateupdateutilityApply(webApiModulesInventoryInventoryApplyPendingRateUpdateModificationsRequest?: WebApiModulesInventoryInventoryApplyPendingRateUpdateModificationsRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesInventoryInventoryApplyPendingRateUpdateModificationsResponseRead;
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
    }>("/api/v1/rateupdateutility/apply", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesInventoryInventoryApplyPendingRateUpdateModificationsRequest
    })));
}
export function postApiV1RateupdateutilityCopypendingmodificationstootherwarehouses(webApiModulesInventoryInventoryCopyPendingModificationsToOtherWarehousesRequest?: WebApiModulesInventoryInventoryCopyPendingModificationsToOtherWarehousesRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesInventoryInventoryCopyPendingModificationsToOtherWarehousesResponse;
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
    }>("/api/v1/rateupdateutility/copypendingmodificationstootherwarehouses", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesInventoryInventoryCopyPendingModificationsToOtherWarehousesRequest
    })));
}
export function postApiV1RateupdateutilityValidatewarehouseBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdateutility/validatewarehouse/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1RateupdateutilityValidateinventorytypeBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdateutility/validateinventorytype/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1RateupdateutilityValidatecategoryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdateutility/validatecategory/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1RateupdateutilityValidatesubcategoryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdateutility/validatesubcategory/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1RateupdateutilityValidateinventoryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdateutility/validateinventory/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1RateupdateutilityValidateunitBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdateutility/validateunit/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1RateupdateutilityValidatemanufacturerBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdateutility/validatemanufacturer/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1RateupdateutilityValidatecurrencyBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/rateupdateutility/validatecurrency/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1ReceiptprocessbatchCreatebatch(webApiModulesUtilitiesReceiptProcessBatchReceiptProcessBatchRequest?: WebApiModulesUtilitiesReceiptProcessBatchReceiptProcessBatchRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesReceiptProcessBatchReceiptProcessBatchResponseRead;
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
    }>("/api/v1/receiptprocessbatch/createbatch", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesReceiptProcessBatchReceiptProcessBatchRequest
    })));
}
export function postApiV1ReceiptprocessbatchBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/receiptprocessbatch/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1ReceiptprocessbatchExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/receiptprocessbatch/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1ReceiptprocessbatchValidatebatchBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/receiptprocessbatch/validatebatch/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1SecuritysettingsByControlid(controlid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorSecuritySettingsSecuritySettingsLoader;
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
    }>(`/api/v1/securitysettings/${encodeURIComponent(controlid)}`, {
        ...opts
    }));
}
export function putApiV1SecuritysettingsById(id: string, fwStandardModulesAdministratorSecuritySettingsSecuritySettingsLoader?: FwStandardModulesAdministratorSecuritySettingsSecuritySettingsLoader, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/securitysettings/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorSecuritySettingsSecuritySettingsLoader
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
export function postApiV1UnlockmultiordercontractordersutilityUnlockorders(webApiModulesUtilitiesUnlockMultiOrderContractOrdersUtilityUnlockMultiOrderContractOrdersRequest?: WebApiModulesUtilitiesUnlockMultiOrderContractOrdersUtilityUnlockMultiOrderContractOrdersRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesUnlockMultiOrderContractOrdersUtilityUnlockMultiOrderContractOrdersResponse;
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
    }>("/api/v1/unlockmultiordercontractordersutility/unlockorders", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesUnlockMultiOrderContractOrdersUtilityUnlockMultiOrderContractOrdersRequest
    })));
}
export function postApiV1UnretiredBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/unretired/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UnretiredExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/unretired/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Unretired({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesInventoryUnretiredUnretiredLogicRead;
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
    }>(`/api/v1/unretired${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1UnretiredById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesInventoryUnretiredUnretiredRead;
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
    }>(`/api/v1/unretired/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function getApiV1UserprofileById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesUserProfileUserProfileRead;
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
    }>(`/api/v1/userprofile/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1UserprofileById(id: string, webApiModulesUtilitiesUserProfileUserProfile?: WebApiModulesUtilitiesUserProfileUserProfile, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesUserProfileUserProfileRead;
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
    }>(`/api/v1/userprofile/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesUserProfileUserProfile
    })));
}
export function postApiV1Userprofile(webApiModulesUtilitiesUserProfileUserProfile?: WebApiModulesUtilitiesUserProfileUserProfile, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesUserProfileUserProfileRead;
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
    }>("/api/v1/userprofile", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesUserProfileUserProfile
    })));
}
export function getApiV1UtilityfunctionsNewsessionid(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesControlsUtilityFunctionsNewSessionIdResponse;
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
    }>("/api/v1/utilityfunctions/newsessionid", {
        ...opts
    }));
}
export function postApiV1UtilityfunctionsSendmail({ $from, to, cc, subject, body }: {
    $from?: string;
    to?: string;
    cc?: string;
    subject?: string;
    body?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/utilityfunctions/sendmail${QS.query(QS.explode({
        "from": $from,
        to,
        cc,
        subject,
        body
    }))}`, {
        ...opts,
        method: "POST"
    }));
}
export function postApiV1VendorinvoiceprocessbatchCreatebatch(webApiModulesUtilitiesVendorInvoiceProcessBatchVendorInvoiceProcessBatchRequest?: WebApiModulesUtilitiesVendorInvoiceProcessBatchVendorInvoiceProcessBatchRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesVendorInvoiceProcessBatchVendorInvoiceProcessBatchResponseRead;
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
    }>("/api/v1/vendorinvoiceprocessbatch/createbatch", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesVendorInvoiceProcessBatchVendorInvoiceProcessBatchRequest
    })));
}
export function postApiV1VendorinvoiceprocessbatchBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/vendorinvoiceprocessbatch/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1VendorinvoiceprocessbatchExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/vendorinvoiceprocessbatch/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1WebimportBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/webimport/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1WebimportExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/webimport/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Webimport({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesUtilitiesWebImportWebImportLogicRead;
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
    }>(`/api/v1/webimport${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Webimport(webApiModulesUtilitiesWebImportWebImport?: WebApiModulesUtilitiesWebImportWebImport, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesWebImportWebImportRead;
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
    }>("/api/v1/webimport", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesWebImportWebImport
    })));
}
export function getApiV1WebimportById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesWebImportWebImportRead;
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
    }>(`/api/v1/webimport/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1WebimportById(id: string, webApiModulesUtilitiesWebImportWebImport?: WebApiModulesUtilitiesWebImportWebImport, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesWebImportWebImportRead;
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
    }>(`/api/v1/webimport/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesWebImportWebImport
    })));
}
export function deleteApiV1WebimportById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/webimport/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1WebimportImportexcel(fwStandardModulesUtilitiesWebImportImportExcelRequest?: FwStandardModulesUtilitiesWebImportImportExcelRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesUtilitiesWebImportImportExcelResponse;
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
    }>("/api/v1/webimport/importexcel", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesUtilitiesWebImportImportExcelRequest
    })));
}
export function postApiV1WebimportrecordBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/webimportrecord/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1WebimportrecordExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/webimportrecord/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Webimportrecord({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesUtilitiesWebImportRecordWebImportRecordLogicRead;
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
    }>(`/api/v1/webimportrecord${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Webimportrecord(webApiModulesUtilitiesWebImportRecordWebImportRecord?: WebApiModulesUtilitiesWebImportRecordWebImportRecord, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesWebImportRecordWebImportRecordRead;
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
    }>("/api/v1/webimportrecord", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesWebImportRecordWebImportRecord
    })));
}
export function getApiV1WebimportrecordById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesWebImportRecordWebImportRecordRead;
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
    }>(`/api/v1/webimportrecord/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1WebimportrecordById(id: string, webApiModulesUtilitiesWebImportRecordWebImportRecord?: WebApiModulesUtilitiesWebImportRecordWebImportRecord, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesUtilitiesWebImportRecordWebImportRecordRead;
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
    }>(`/api/v1/webimportrecord/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesWebImportRecordWebImportRecord
    })));
}
export function deleteApiV1WebimportrecordById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/webimportrecord/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1WebimportrecordMany(body?: WebApiModulesUtilitiesWebImportRecordWebImportRecord[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: MicrosoftAspNetCoreMvcActionResultWebApiModulesUtilitiesWebImportRecordWebImportRecordLogicRead[];
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
    }>("/api/v1/webimportrecord/many", oazapfts.json({
        ...opts,
        method: "POST",
        body
    })));
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
