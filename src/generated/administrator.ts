/**
 * RentalWorks Administrator API v1
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
export type FwCoreApiSwashbuckleBadRequestResponse = {
    [key: string]: string[];
};
export type FwStandardModelsFwApiException = {
    StatusCode?: number;
    Message?: string;
    StackTrace?: string;
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
export type FwStandardModulesAdministratorAlertAlertCondition = {
    AlertConditionId?: string | null;
    AlertId?: string | null;
    FieldName1?: string | null;
    FieldName2?: string | null;
    Condition?: string | null;
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
export type FwStandardModulesAdministratorAlertAlertLogic = {
    AlertId?: string | null;
    AlertName?: string | null;
    ModuleName?: string | null;
    ActionNew?: boolean | null;
    ActionEdit?: boolean | null;
    ActionDelete?: boolean | null;
    AlertSubject?: string | null;
    AlertBody?: string | null;
    Inactive?: boolean | null;
    AlertConditionList?: FwStandardModulesAdministratorAlertAlertCondition[] | null;
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
export type FwStandardModulesAdministratorAlertAlertLogicRead = {
    AlertId?: string | null;
    AlertName?: string | null;
    ModuleName?: string | null;
    ActionNew?: boolean | null;
    ActionEdit?: boolean | null;
    ActionDelete?: boolean | null;
    AlertSubject?: string | null;
    AlertBody?: string | null;
    Inactive?: boolean | null;
    AlertConditionList?: FwStandardModulesAdministratorAlertAlertCondition[] | null;
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
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorAlertAlertLogic = {
    Items?: FwStandardModulesAdministratorAlertAlertLogic[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorAlertAlertLogicRead = {
    Items?: FwStandardModulesAdministratorAlertAlertLogicRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorAlertConditionAlertConditionLogic = {
    AlertId?: string | null;
    AlertConditionId?: string | null;
    FieldName1?: string | null;
    Condition?: string | null;
    FieldName2?: string | null;
    Value?: string | null;
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
export type FwStandardModulesAdministratorAlertConditionAlertConditionLogicRead = {
    AlertId?: string | null;
    AlertConditionId?: string | null;
    FieldName1?: string | null;
    Condition?: string | null;
    FieldName2?: string | null;
    Value?: string | null;
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
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorAlertConditionAlertConditionLogic = {
    Items?: FwStandardModulesAdministratorAlertConditionAlertConditionLogic[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorAlertConditionAlertConditionLogicRead = {
    Items?: FwStandardModulesAdministratorAlertConditionAlertConditionLogicRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogic = {
    AlertWebUserId?: string | null;
    AlertId?: string | null;
    Description?: string | null;
    WebUserId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
    Email?: string | null;
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
export type FwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogicRead = {
    AlertWebUserId?: string | null;
    AlertId?: string | null;
    Description?: string | null;
    WebUserId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
    Email?: string | null;
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
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogic = {
    Items?: FwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogic[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogicRead = {
    Items?: FwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogicRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorCreateNewSystemCreateNewSystemRequest = {
    CompanyName?: string | null;
    DatabaseName?: string | null;
    Url?: string | null;
    ApplicationPool?: string | null;
    SQLServerName?: string | null;
    DefaultDatabaseName?: string | null;
    SQLUserId?: string | null;
    SQLPassword?: string | null;
    DefaultApiPath?: string | null;
    DefaultApplicationPool?: string | null;
    ApplicationPoolIdentity?: string | null;
    ApplicationPoolUserName?: string | null;
    ApplicationPoolPassword?: string | null;
};
export type FwStandardModulesAdministratorCreateNewSystemCreateNewSystemResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type FwStandardModulesAdministratorCreateNewSystemGetDefaultsRequest = {
    CompanyName?: string | null;
};
export type FwStandardModulesAdministratorCreateNewSystemGetDefaultsResponse = {
    DatabaseName?: string | null;
    ApplicationPool?: string | null;
    Url?: string | null;
};
export type WebApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistory = {
    /** Format: Integer, IsPrimaryKey: true */
    CreateNewSystemHistoryId?: number | null;
    /** Format: Text */
    UsersId?: string | null;
    UserName?: string | null;
    /** Format: Text */
    CompanyName?: string | null;
    /** Format: Text */
    DatabaseName?: string | null;
    /** Format: Text */
    Url?: string | null;
    /** Format: Text */
    ApplicationPool?: string | null;
    /** Format: Text */
    ErrorMessage?: string | null;
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
export type WebApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistoryRead = {
    /** Format: Integer, IsPrimaryKey: true */
    CreateNewSystemHistoryId?: number | null;
    /** Format: Text */
    UsersId?: string | null;
    UserName?: string | null;
    /** Format: Text */
    CompanyName?: string | null;
    /** Format: Text */
    DatabaseName?: string | null;
    /** Format: Text */
    Url?: string | null;
    /** Format: Text */
    ApplicationPool?: string | null;
    /** Format: Text */
    ErrorMessage?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistoryLogic = {
    Items?: WebApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistory[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistoryLogicRead = {
    Items?: WebApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistoryRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAdministratorCreateNewSystemHistoryLogCreateNewSystemHistoryLog = {
    /** Format: Integer, IsPrimaryKey: true */
    CreateNewSystemHistoryLogId?: number | null;
    /** Format: Integer */
    CreateNewSystemHistoryId?: number | null;
    /** Format: Text */
    Message?: string | null;
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
export type WebApiModulesAdministratorCreateNewSystemHistoryLogCreateNewSystemHistoryLogRead = {
    /** Format: Integer, IsPrimaryKey: true */
    CreateNewSystemHistoryLogId?: number | null;
    /** Format: Integer */
    CreateNewSystemHistoryId?: number | null;
    /** Format: Text */
    Message?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorCreateNewSystemHistoryLogCreateNewSystemHistoryLogLogic = {
    Items?: WebApiModulesAdministratorCreateNewSystemHistoryLogCreateNewSystemHistoryLog[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorCreateNewSystemHistoryLogCreateNewSystemHistoryLogLogicRead = {
    Items?: WebApiModulesAdministratorCreateNewSystemHistoryLogCreateNewSystemHistoryLogRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAdministratorCustomFieldCustomField = {
    /** Format: Text, IsPrimaryKey: true */
    CustomFieldId?: string | null;
    /** Format: Text, Required: true */
    ModuleName?: string | null;
    /** Format: Text, Required: true */
    FieldName?: string | null;
    /** Format: Text, Required: true */
    CustomTableName?: string | null;
    /** Format: Text */
    CustomFieldName?: string | null;
    FieldType?: string | null;
    ControlType?: string | null;
    /** Format: Integer */
    StringLength?: number | null;
    /** Format: Integer */
    FloatDecimalDigits?: number | null;
    /** Format: Text */
    ValidationModule?: string | null;
    /** Format: Text */
    ValidationFieldId?: string | null;
    /** Format: Text */
    ValidationFieldName?: string | null;
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
export type WebApiModulesAdministratorCustomFieldCustomFieldRead = {
    /** Format: Text, IsPrimaryKey: true */
    CustomFieldId?: string | null;
    /** Format: Text, Required: true */
    ModuleName?: string | null;
    /** Format: Text, Required: true */
    FieldName?: string | null;
    /** Format: Text, Required: true */
    CustomTableName?: string | null;
    /** Format: Text */
    CustomFieldName?: string | null;
    FieldType?: string | null;
    ControlType?: string | null;
    /** Format: Integer */
    StringLength?: number | null;
    /** Format: Integer */
    FloatDecimalDigits?: number | null;
    /** Format: Text */
    ValidationModule?: string | null;
    /** Format: Text */
    ValidationFieldId?: string | null;
    /** Format: Text */
    ValidationFieldName?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorCustomFieldCustomFieldLogic = {
    Items?: WebApiModulesAdministratorCustomFieldCustomField[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorCustomFieldCustomFieldLogicRead = {
    Items?: WebApiModulesAdministratorCustomFieldCustomFieldRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorCustomFormCustomFormLogic = {
    CustomFormId?: string | null;
    WebUserId?: string | null;
    UserName?: string | null;
    BaseForm?: string | null;
    Description?: string | null;
    Html?: string | null;
    Active?: boolean | null;
    Inactive?: boolean | null;
    AssignTo?: string | null;
    SelfAssign?: boolean | null;
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
export type FwStandardModulesAdministratorCustomFormCustomFormLogicRead = {
    CustomFormId?: string | null;
    WebUserId?: string | null;
    UserName?: string | null;
    BaseForm?: string | null;
    Description?: string | null;
    Html?: string | null;
    Active?: boolean | null;
    Inactive?: boolean | null;
    AssignTo?: string | null;
    SelfAssign?: boolean | null;
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
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomFormCustomFormLogic = {
    Items?: FwStandardModulesAdministratorCustomFormCustomFormLogic[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomFormCustomFormLogicRead = {
    Items?: FwStandardModulesAdministratorCustomFormCustomFormLogicRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogic = {
    CustomFormGroupId?: string | null;
    CustomFormId?: string | null;
    CustomFormDescription?: string | null;
    GroupId?: string | null;
    GroupName?: string | null;
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
export type FwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogicRead = {
    CustomFormGroupId?: string | null;
    CustomFormId?: string | null;
    CustomFormDescription?: string | null;
    GroupId?: string | null;
    GroupName?: string | null;
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
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogic = {
    Items?: FwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogic[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogicRead = {
    Items?: FwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogicRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorCustomFormUserCustomFormUserLogic = {
    CustomFormUserId?: string | null;
    CustomFormId?: string | null;
    CustomFormDescription?: string | null;
    WebUserId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
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
export type FwStandardModulesAdministratorCustomFormUserCustomFormUserLogicRead = {
    CustomFormUserId?: string | null;
    CustomFormId?: string | null;
    CustomFormDescription?: string | null;
    WebUserId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
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
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomFormUserCustomFormUserLogic = {
    Items?: FwStandardModulesAdministratorCustomFormUserCustomFormUserLogic[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomFormUserCustomFormUserLogicRead = {
    Items?: FwStandardModulesAdministratorCustomFormUserCustomFormUserLogicRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAdministratorControlsCustomModuleCustomModule = {
    ModuleName?: string | null;
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
export type WebApiModulesAdministratorControlsCustomModuleCustomModuleRead = {
    ModuleName?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorControlsCustomModuleCustomModuleLogic = {
    Items?: WebApiModulesAdministratorControlsCustomModuleCustomModule[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorControlsCustomModuleCustomModuleLogicRead = {
    Items?: WebApiModulesAdministratorControlsCustomModuleCustomModuleRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorCustomReportCssCustomReportCssLogic = {
    CustomReportCssId?: number | null;
    Description?: string | null;
    Css?: string | null;
    IsGlobal?: boolean | null;
    Inactive?: boolean | null;
    Active?: boolean | null;
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
export type FwStandardModulesAdministratorCustomReportCssCustomReportCssLogicRead = {
    CustomReportCssId?: number | null;
    Description?: string | null;
    Css?: string | null;
    IsGlobal?: boolean | null;
    Inactive?: boolean | null;
    Active?: boolean | null;
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
export type FwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogic = {
    CustomReportLayoutId?: string | null;
    WebUserId?: string | null;
    UserName?: string | null;
    BaseReport?: string | null;
    Description?: string | null;
    Category?: string | null;
    Html?: string | null;
    CustomReportCssIds?: string | null;
    CustomReportCssDescriptions?: string | null;
    CustomReportCssRules?: string | null;
    CustomReportGlobalCssRules?: string | null;
    Active?: boolean | null;
    Inactive?: boolean | null;
    AssignTo?: string | null;
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
export type FwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogicRead = {
    CustomReportLayoutId?: string | null;
    WebUserId?: string | null;
    UserName?: string | null;
    BaseReport?: string | null;
    Description?: string | null;
    Category?: string | null;
    Html?: string | null;
    CustomReportCssIds?: string | null;
    CustomReportCssDescriptions?: string | null;
    CustomReportCssRules?: string | null;
    CustomReportGlobalCssRules?: string | null;
    Active?: boolean | null;
    Inactive?: boolean | null;
    AssignTo?: string | null;
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
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogic = {
    Items?: FwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogic[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogicRead = {
    Items?: FwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogicRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAdministratorCustomReportLayoutCustomReportLayoutControllerCustomReportLayoutResponse = {
    ReportTemplate?: string | null;
    WebpackReportCss?: string | null;
    ReportCss?: string | null;
};
export type WebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroup = {
    /** Format: Text, IsPrimaryKey: true */
    CustomReportLayoutGroupId?: string | null;
    /** Format: Text */
    CustomReportLayoutId?: string | null;
    CustomReportLayoutDescription?: string | null;
    /** Format: Text */
    GroupId?: string | null;
    GroupName?: string | null;
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
export type WebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroupRead = {
    /** Format: Text, IsPrimaryKey: true */
    CustomReportLayoutGroupId?: string | null;
    /** Format: Text */
    CustomReportLayoutId?: string | null;
    CustomReportLayoutDescription?: string | null;
    /** Format: Text */
    GroupId?: string | null;
    GroupName?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroupLogic = {
    Items?: WebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroup[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroupLogicRead = {
    Items?: WebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroupRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUser = {
    /** Format: Text, IsPrimaryKey: true */
    CustomReportLayoutUserId?: string | null;
    /** Format: Text */
    CustomReportLayoutId?: string | null;
    CustomReportLayoutDescription?: string | null;
    /** Format: Text */
    WebUserId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
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
export type WebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUserRead = {
    /** Format: Text, IsPrimaryKey: true */
    CustomReportLayoutUserId?: string | null;
    /** Format: Text */
    CustomReportLayoutId?: string | null;
    CustomReportLayoutDescription?: string | null;
    /** Format: Text */
    WebUserId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUserLogic = {
    Items?: WebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUser[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUserLogicRead = {
    Items?: WebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUserRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAdministratorDataHealthDataHealth = {
    /** Format: Integer, IsPrimaryKey: true */
    DataHealthId?: number | null;
    /** Format: Text */
    DataHealthType?: string | null;
    /** Format: Date */
    CaptureDateTime?: string | null;
    CaptureDate?: string | null;
    /** Format: Text */
    Json?: string | null;
    /** Format: Text */
    Severity?: string | null;
    SeverityColor?: string | null;
    /** Format: Text */
    Notes?: string | null;
    /** Format: Boolean */
    Resolved?: boolean | null;
    /** Format: Integer */
    Quantity?: number | null;
    /** Format: Text */
    KnowledgeBaseArticleId?: string | null;
    KnowledgeBaseArticleUrl?: string | null;
    Inactive?: boolean | null;
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
export type WebApiModulesAdministratorDataHealthDataHealthRead = {
    /** Format: Integer, IsPrimaryKey: true */
    DataHealthId?: number | null;
    /** Format: Text */
    DataHealthType?: string | null;
    /** Format: Date */
    CaptureDateTime?: string | null;
    CaptureDate?: string | null;
    /** Format: Text */
    Json?: string | null;
    /** Format: Text */
    Severity?: string | null;
    SeverityColor?: string | null;
    /** Format: Text */
    Notes?: string | null;
    /** Format: Boolean */
    Resolved?: boolean | null;
    /** Format: Integer */
    Quantity?: number | null;
    /** Format: Text */
    KnowledgeBaseArticleId?: string | null;
    KnowledgeBaseArticleUrl?: string | null;
    Inactive?: boolean | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorDataHealthDataHealthLogic = {
    Items?: WebApiModulesAdministratorDataHealthDataHealth[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorDataHealthDataHealthLogicRead = {
    Items?: WebApiModulesAdministratorDataHealthDataHealthRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAdministratorDataHealthCheckDataHealthRequest = {
    SessionId?: string | null;
};
export type WebApiLogicTSpStatusResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type FwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogic = {
    DuplicateRuleId?: string | null;
    ModuleName?: string | null;
    RuleName?: string | null;
    CaseSensitive?: boolean | null;
    SystemRule?: boolean | null;
    Fields?: string | null;
    FieldTypes?: string | null;
    RuleNameColor?: string | null;
    ConsiderBlanks?: boolean | null;
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
export type FwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogicRead = {
    DuplicateRuleId?: string | null;
    ModuleName?: string | null;
    RuleName?: string | null;
    CaseSensitive?: boolean | null;
    SystemRule?: boolean | null;
    Fields?: string | null;
    FieldTypes?: string | null;
    RuleNameColor?: string | null;
    ConsiderBlanks?: boolean | null;
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
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogic = {
    Items?: FwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogic[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogicRead = {
    Items?: FwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogicRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleField = {
    /** Format: Text, IsPrimaryKey: true */
    DuplicateRuleFieldId?: string | null;
    /** Format: Text, Required: true */
    DuplicateRuleId?: string | null;
    /** Format: Text */
    FieldName?: string | null;
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
export type WebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleFieldRead = {
    /** Format: Text, IsPrimaryKey: true */
    DuplicateRuleFieldId?: string | null;
    /** Format: Text, Required: true */
    DuplicateRuleId?: string | null;
    /** Format: Text */
    FieldName?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleFieldLogic = {
    Items?: WebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleField[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleFieldLogicRead = {
    Items?: WebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleFieldRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAdministratorEmailHistoryEmailHistory = {
    /** Format: Text, IsPrimaryKey: true */
    EmailHistoryId?: string | null;
    /** Format: Text */
    ReportId?: string | null;
    /** Format: Text */
    FromUserId?: string | null;
    FromWebUserId?: string | null;
    FromUser?: string | null;
    /** Format: Date */
    EmailDate?: string | null;
    /** Format: Text */
    Status?: string | null;
    /** Format: Text */
    EmailText?: string | null;
    /** Format: Text */
    EmailTo?: string | null;
    /** Format: Text */
    EmailSubject?: string | null;
    /** Format: Text */
    EmailCC?: string | null;
    /** Format: Text */
    Title?: string | null;
    /** Format: Text */
    RelatedToId?: string | null;
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
export type WebApiModulesAdministratorEmailHistoryEmailHistoryRead = {
    /** Format: Text, IsPrimaryKey: true */
    EmailHistoryId?: string | null;
    /** Format: Text */
    ReportId?: string | null;
    /** Format: Text */
    FromUserId?: string | null;
    FromWebUserId?: string | null;
    FromUser?: string | null;
    /** Format: Date */
    EmailDate?: string | null;
    /** Format: Text */
    Status?: string | null;
    /** Format: Text */
    EmailText?: string | null;
    /** Format: Text */
    EmailTo?: string | null;
    /** Format: Text */
    EmailSubject?: string | null;
    /** Format: Text */
    EmailCC?: string | null;
    /** Format: Text */
    Title?: string | null;
    /** Format: Text */
    RelatedToId?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorEmailHistoryEmailHistoryLogic = {
    Items?: WebApiModulesAdministratorEmailHistoryEmailHistory[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorEmailHistoryEmailHistoryLogicRead = {
    Items?: WebApiModulesAdministratorEmailHistoryEmailHistoryRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorEmailTemplateEmailToLogic = {
    AppEmailToId?: string | null;
    AppEmailId?: string | null;
    Email?: string | null;
    EmailType?: string | null;
    UserId?: string | null;
    DepartmentId?: string | null;
    LocationId?: string | null;
    InventoryDepartmentId?: string | null;
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
export type FwStandardModulesAdministratorEmailTemplateEmailToLogicRead = {
    AppEmailToId?: string | null;
    AppEmailId?: string | null;
    Email?: string | null;
    EmailType?: string | null;
    UserId?: string | null;
    DepartmentId?: string | null;
    LocationId?: string | null;
    InventoryDepartmentId?: string | null;
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
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorEmailTemplateEmailToLogic = {
    Items?: FwStandardModulesAdministratorEmailTemplateEmailToLogic[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorEmailTemplateEmailToLogicRead = {
    Items?: FwStandardModulesAdministratorEmailTemplateEmailToLogicRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorEmailTemplateEmailTemplateLogic = {
    AppEmailId?: string | null;
    Description?: string | null;
    FilterId?: string | null;
    Subject?: string | null;
    EmailText?: string | null;
    Category?: string | null;
    BodyFormat?: string | null;
    EmailType?: string | null;
    Inactive?: boolean | null;
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
export type FwStandardModulesAdministratorEmailTemplateEmailTemplateLogicRead = {
    AppEmailId?: string | null;
    Description?: string | null;
    FilterId?: string | null;
    Subject?: string | null;
    EmailText?: string | null;
    Category?: string | null;
    BodyFormat?: string | null;
    EmailType?: string | null;
    Inactive?: boolean | null;
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
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorEmailTemplateEmailTemplateLogic = {
    Items?: FwStandardModulesAdministratorEmailTemplateEmailTemplateLogic[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorEmailTemplateEmailTemplateLogicRead = {
    Items?: FwStandardModulesAdministratorEmailTemplateEmailTemplateLogicRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorEmailTemplateEmailTemplateCategoriesResponse = {
    categories?: string[] | null;
};
export type FwStandardModulesAdministratorEmailTemplateGetEmailTemplateFieldsRequest = {
    category?: string | null;
};
export type FwStandardModulesAdministratorEmailTemplateEmailTemplateFieldsResponse = {
    fields?: string[] | null;
};
export type WebApiModulesAdministratorGroupGroup = {
    /** Format: Text, IsPrimaryKey: true */
    GroupId?: string | null;
    /** Format: Text, Required: true */
    Name?: string | null;
    /** Format: Text */
    Memo?: string | null;
    /** Format: Text */
    Security?: string | null;
    /** Format: Boolean */
    HideNewMenuOptionsByDefault?: boolean | null;
    IsMyGroup?: boolean | null;
    GroupColor?: string | null;
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
export type WebApiModulesAdministratorGroupGroupRead = {
    /** Format: Text, IsPrimaryKey: true */
    GroupId?: string | null;
    /** Format: Text, Required: true */
    Name?: string | null;
    /** Format: Text */
    Memo?: string | null;
    /** Format: Text */
    Security?: string | null;
    /** Format: Boolean */
    HideNewMenuOptionsByDefault?: boolean | null;
    IsMyGroup?: boolean | null;
    GroupColor?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorGroupGroupLogic = {
    Items?: WebApiModulesAdministratorGroupGroup[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorGroupGroupLogicRead = {
    Items?: WebApiModulesAdministratorGroupGroupRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
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
export type FwCoreModulesAdministratorGroupCopySecurityNodeRequest = {
    /** ID of Group to copy from */
    FromGroupId?: string | null;
    /** ID of Group to copy to */
    ToGroupIds?: string | null;
    /** ID of security node to copy from the FromGroupId to the ToGroupId */
    SecurityId?: string | null;
};
export type FwCoreModulesAdministratorGroupLookupGroupResponse = {
    /** Identifier */
    GroupId?: string | null;
    /** Name of Group */
    Name?: string | null;
};
export type FwStandardModelsGetResponseFwCoreModulesAdministratorGroupLookupGroupResponse = {
    Items?: FwCoreModulesAdministratorGroupLookupGroupResponse[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalRows?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogic = {
    HandlebarsTemplateId?: number | null;
    Description?: string | null;
    Template?: string | null;
    ModuleName?: string | null;
    TemplateType?: string | null;
    Inactive?: boolean | null;
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
export type FwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogicRead = {
    HandlebarsTemplateId?: number | null;
    Description?: string | null;
    Template?: string | null;
    ModuleName?: string | null;
    TemplateType?: string | null;
    Inactive?: boolean | null;
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
export type WebApiModulesAdministratorHotfixHotfix = {
    /** Format: Text, IsPrimaryKey: true */
    HotfixId?: string | null;
    /** Format: Text */
    FileName?: string | null;
    /** Format: Text */
    Description?: string | null;
    /** Format: DateTime */
    HotfixBegin?: string | null;
    /** Format: DateTime */
    HotfixEnd?: string | null;
    HotfixSeconds?: number | null;
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
export type WebApiModulesAdministratorHotfixHotfixRead = {
    /** Format: Text, IsPrimaryKey: true */
    HotfixId?: string | null;
    /** Format: Text */
    FileName?: string | null;
    /** Format: Text */
    Description?: string | null;
    /** Format: DateTime */
    HotfixBegin?: string | null;
    /** Format: DateTime */
    HotfixEnd?: string | null;
    HotfixSeconds?: number | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorHotfixHotfixLogic = {
    Items?: WebApiModulesAdministratorHotfixHotfix[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorHotfixHotfixLogicRead = {
    Items?: WebApiModulesAdministratorHotfixHotfixRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAccountServicesHubSpotGetHubSpotContactsRequest = {
    accessToken?: string | null;
};
export type WebApiModulesAccountServicesHubSpotPostHubSpotContactRequest = {
    accessToken?: string | null;
    email?: string | null;
    firstname?: string | null;
    lastname?: string | null;
};
export type WebApiModulesAccountServicesHubSpotGetHubSpotTokensRequest = {
    authorizationCode?: string | null;
};
export type WebApiModulesAccountServicesHubSpotGetWriteTokensResponse = {
    message?: string | null;
};
export type WebApiModulesAccountServicesHubSpotSearchHubSpotContactsWithinPeriodRequest = {
    webusersid?: string | null;
    accessToken?: string | null;
    lastSyncEpoch?: number | null;
};
export type WebApiModulesAdministratorPluginPlugin = {
    /** Format: Integer, IsPrimaryKey: true */
    PluginId?: number;
    /** Format: Text */
    Category?: string | null;
    /** Format: Text */
    Description?: string | null;
    /** Format: Text */
    Settings?: string | null;
    /** Format: UTCDateTime */
    DateStamp?: string | null;
    Enabled?: boolean;
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
export type WebApiModulesAdministratorPluginPluginRead = {
    /** Format: Integer, IsPrimaryKey: true */
    PluginId?: number;
    /** Format: Text */
    Category?: string | null;
    /** Format: Text */
    Description?: string | null;
    /** Format: Text */
    Settings?: string | null;
    /** Format: UTCDateTime */
    DateStamp?: string | null;
    Enabled?: boolean;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorPluginPluginLogic = {
    Items?: WebApiModulesAdministratorPluginPlugin[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorPluginPluginLogicRead = {
    Items?: WebApiModulesAdministratorPluginPluginRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAdministratorPluginStatusResponse = {
    Success?: boolean;
    ResponseText?: string | null;
};
export type WebApiModulesAdministratorStorefrontSetupCacheImagesRequest = {
    CacheThumbnails?: boolean;
    CacheImages?: boolean;
};
export type WebApiModulesAdministratorStorefrontSetupClearImageCacheRequest = {
    DeleteThumbnails?: boolean;
    DeleteImages?: boolean;
};
export type FwStandardModulesAdministratorSystemUpdateGetVersionHotfixRequest = {
    Version?: string | null;
};
export type FwStandardModulesAdministratorSystemUpdateGetVersionHotfixResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    Hotfix?: string | null;
};
export type FwStandardModulesAdministratorSystemUpdateAvailableVersionsRequest = {
    CurrentVersion?: string | null;
    OnlyIncludeNewerVersions?: boolean;
};
export type FwStandardModulesAdministratorSystemUpdateAvailableVersion = {
    value?: string | null;
    text?: string | null;
    Version?: string | null;
    VersionDate?: string | null;
    VersionTime?: string | null;
};
export type FwStandardModulesAdministratorSystemUpdateAvailableVersionsResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    Versions?: FwStandardModulesAdministratorSystemUpdateAvailableVersion[] | null;
};
export type FwStandardModulesAdministratorSystemUpdateBuildDocumentsRequest = {
    CurrentVersion?: string | null;
    OnlyIncludeNewerVersions?: boolean;
};
export type FwStandardModulesAdministratorSystemUpdateBuildDocument = {
    BuildNumber?: string | null;
    BuildDate?: string | null;
};
export type FwStandardModulesAdministratorSystemUpdateBuildDocumentsResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    DocumentsList?: string[] | null;
    Documents?: FwStandardModulesAdministratorSystemUpdateBuildDocument[] | null;
};
export type FwStandardModulesAdministratorSystemUpdateDownloadBuildDocumentRequest = {
    Version?: string | null;
};
export type FwStandardModulesAdministratorSystemUpdateDownloadBuildDocumentResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    downloadUrl?: string | null;
};
export type FwStandardModulesAdministratorSystemUpdateApplyUpdateRequest = {
    SessionId?: string | null;
    CurrentVersion?: string | null;
    ToVersion?: string | null;
    SqlLogin?: string | null;
    SqlPassword?: string | null;
};
export type FwStandardModulesAdministratorSystemUpdateApplyUpdateResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type FwStandardModulesAdministratorSystemUpdateNextQaVersionRequest = {
    CurrentVersion?: string | null;
};
export type FwStandardModulesAdministratorSystemUpdateNextQaVersionResponse = {
    NextQaVersion?: string | null;
};
export type FwStandardModulesAdministratorSystemUpdateRestartRequest = {
    ApiApplicationPool?: string | null;
};
export type FwStandardModulesAdministratorSystemUpdateRestartResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesAdministratorSystemUpdateHistorySystemUpdateHistory = {
    /** Format: Integer, IsPrimaryKey: true */
    SystemUpdateHistoryId?: number | null;
    /** Format: Text */
    UsersId?: string | null;
    UserName?: string | null;
    /** Format: DateTime */
    UpdateDateTime?: string;
    /** Format: Text */
    FromVersion?: string | null;
    /** Format: Text */
    ToVersion?: string | null;
    /** Format: Text */
    ErrorMessage?: string | null;
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
export type WebApiModulesAdministratorSystemUpdateHistorySystemUpdateHistoryRead = {
    /** Format: Integer, IsPrimaryKey: true */
    SystemUpdateHistoryId?: number | null;
    /** Format: Text */
    UsersId?: string | null;
    UserName?: string | null;
    /** Format: DateTime */
    UpdateDateTime?: string;
    /** Format: Text */
    FromVersion?: string | null;
    /** Format: Text */
    ToVersion?: string | null;
    /** Format: Text */
    ErrorMessage?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorSystemUpdateHistorySystemUpdateHistoryLogic = {
    Items?: WebApiModulesAdministratorSystemUpdateHistorySystemUpdateHistory[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorSystemUpdateHistorySystemUpdateHistoryLogicRead = {
    Items?: WebApiModulesAdministratorSystemUpdateHistorySystemUpdateHistoryRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAdministratorSystemUpdateHistoryLogSystemUpdateHistoryLog = {
    /** Format: Integer, IsPrimaryKey: true */
    SystemUpdateHistoryLogId?: number | null;
    /** Format: Integer */
    SystemUpdateHistoryId?: number | null;
    /** Format: Text */
    Messsage?: string | null;
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
export type WebApiModulesAdministratorSystemUpdateHistoryLogSystemUpdateHistoryLogRead = {
    /** Format: Integer, IsPrimaryKey: true */
    SystemUpdateHistoryLogId?: number | null;
    /** Format: Integer */
    SystemUpdateHistoryId?: number | null;
    /** Format: Text */
    Messsage?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorSystemUpdateHistoryLogSystemUpdateHistoryLogLogic = {
    Items?: WebApiModulesAdministratorSystemUpdateHistoryLogSystemUpdateHistoryLog[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorSystemUpdateHistoryLogSystemUpdateHistoryLogLogicRead = {
    Items?: WebApiModulesAdministratorSystemUpdateHistoryLogSystemUpdateHistoryLogRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
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
export type WebApiModulesAdministratorUserUser = {
    /** Format: Text */
    UserId?: string | null;
    /** Format: Text */
    ContactId?: string | null;
    /** Format: Text */
    Name?: string | null;
    /** Format: Text */
    LoginName?: string | null;
    FullName?: string | null;
    /** Format: Text, Required: true */
    FirstName?: string | null;
    /** Format: Text */
    MiddleInitial?: string | null;
    /** Format: Text, Required: true */
    LastName?: string | null;
    Password?: string | null;
    /** Format: Text */
    BarCode?: string | null;
    /** Format: Text, Required: true */
    GroupId?: string | null;
    GroupName?: string | null;
    /** Format: OleToHtmlColor */
    ScheduleColor?: string | null;
    /** Format: Text */
    UserTitleId?: string | null;
    UserTitle?: string | null;
    /** Format: Text */
    Email?: string | null;
    /** Format: Text */
    EmailApp?: string | null;
    /** Format: Boolean */
    AddRentalWorksUserSignature?: boolean | null;
    /** Format: Text, Required: true */
    OfficeLocationId?: string | null;
    OfficeLocation?: string | null;
    /** Format: Text, Required: true */
    WarehouseId?: string | null;
    Warehouse?: string | null;
    /** Format: Text */
    Address1?: string | null;
    /** Format: Text */
    Address2?: string | null;
    /** Format: Text */
    City?: string | null;
    /** Format: Text */
    StateId?: string | null;
    StateCode?: string | null;
    State?: string | null;
    /** Format: Text */
    ZipCode?: string | null;
    /** Format: Text */
    CountryId?: string | null;
    Country?: string | null;
    CountryCodeIsoAlpha2?: string | null;
    CountryCodePhone?: number | null;
    /** Format: Text */
    OfficePhone?: string | null;
    /** Format: Text */
    OfficeExtension?: string | null;
    /** Format: Text */
    Fax?: string | null;
    /** Format: Text */
    DirectPhone?: string | null;
    /** Format: Text */
    Pager?: string | null;
    /** Format: Text */
    PagerPin?: string | null;
    /** Format: Text */
    Cellular?: string | null;
    /** Format: Text */
    HomePhone?: string | null;
    /** Format: Text */
    DefaultDepartmentType?: string | null;
    PrimaryDepartmentId?: string | null;
    PrimaryDepartment?: string | null;
    /** Format: Text */
    LanguageId?: string | null;
    Language?: string | null;
    /** Format: Text */
    RentalDepartmentId?: string | null;
    RentalDepartment?: string | null;
    /** Format: Text */
    SalesDepartmentId?: string | null;
    SalesDepartment?: string | null;
    /** Format: Text */
    PartsDepartmentId?: string | null;
    PartsDepartment?: string | null;
    /** Format: Text */
    MiscDepartmentId?: string | null;
    MiscDepartment?: string | null;
    /** Format: Text */
    LaborDepartmentId?: string | null;
    LaborDepartment?: string | null;
    /** Format: Text */
    FacilityDepartmentId?: string | null;
    FacilityDepartment?: string | null;
    /** Format: Text */
    TransportationDepartmentId?: string | null;
    TransportationDepartment?: string | null;
    /** Format: Text */
    RentalInventoryTypeId?: string | null;
    RentalInventoryType?: string | null;
    /** Format: Text */
    SalesInventoryTypeId?: string | null;
    SalesInventoryType?: string | null;
    /** Format: Text */
    PartsInventoryTypeId?: string | null;
    PartsInventoryType?: string | null;
    /** Format: Text */
    MiscTypeId?: string | null;
    MiscType?: string | null;
    /** Format: Text */
    LaborTypeId?: string | null;
    LaborType?: string | null;
    /** Format: Text */
    FacilityTypeId?: string | null;
    FacilityType?: string | null;
    /** Format: Text */
    TransportationTypeId?: string | null;
    TransportationType?: string | null;
    /** Format: Boolean */
    NoMiscellaneousOnQuotes?: boolean | null;
    /** Format: Boolean */
    NoMiscellaneousOnOrders?: boolean | null;
    /** Format: Boolean */
    NoMiscellaneousOnPurchaseOrders?: boolean | null;
    /** Format: Boolean */
    LimitDaysPerWeek?: boolean | null;
    /** Format: Decimal, Total digits: 4, Decimal places: 2 */
    MinimumDaysPerWeek?: number | null;
    /** Format: Boolean */
    AllowCreditLimitOverride?: boolean | null;
    /** Format: Boolean */
    LimitDiscount?: boolean | null;
    /** Format: Decimal, Total digits: 8, Decimal places: 2 */
    MaximumDiscount?: number | null;
    /** Format: Boolean */
    LimitSubDiscount?: boolean | null;
    /** Format: Decimal, Total digits: 8, Decimal places: 2 */
    MaximumSubDiscount?: number | null;
    /** Format: Text */
    DiscountRule?: string | null;
    /** Format: Boolean */
    StagingAllowIncreaseDecreaseOrderQuantity?: boolean | null;
    /** Format: Boolean */
    StagingAllowIncreaseDecreaseOrderQuantityWithoutPrompt?: boolean | null;
    /** Format: Boolean */
    AllowStagingOfItemsWhenReservedOnOtherOrdersQuotes?: boolean | null;
    /** Format: Boolean */
    AllowContractIfDealRequiresPOAndOrderHasPendingPO?: boolean | null;
    /** Format: Boolean */
    AllowContractIfPendingItemsExist?: boolean | null;
    /** Format: Boolean */
    AllowContractIfCustomerDealDoesNotHaveApprovedCredit?: boolean | null;
    /** Format: Boolean */
    AllowContractIfCustomerDealIsOverTheirCreditLimit?: boolean | null;
    /** Format: Boolean */
    AllowContractIfCustomerDealInsuranceCoverageIsLess?: boolean | null;
    /** Format: Boolean */
    AllowContractIfCustomerDealDoesNotHaveValidInsuranceCertificate?: boolean | null;
    /** Format: Boolean */
    AllowContractIfCustomerDealDoesNotHaveValidNonTaxCertificate?: boolean | null;
    /** Format: Boolean */
    AllowReceiveSubsWhenPositiveConflictExists?: boolean | null;
    /** Format: Boolean */
    AllowStagingOfUnreservedConsignedItems?: boolean | null;
    /** Format: Boolean */
    AllowStagingOfUnapprovedItems?: boolean | null;
    /** Format: Boolean */
    AllowSubstitutesAtStaging?: boolean | null;
    /** Format: Boolean */
    DeleteOriginalOnSubstitution?: boolean | null;
    /** Format: Boolean */
    QuikActivityAllowPrintDollarAmounts?: boolean | null;
    /** Format: Boolean */
    QuikScanAllowCreateContract?: boolean | null;
    /** Format: Boolean */
    QuikScanAllowApplyAll?: boolean | null;
    /** Format: Boolean */
    AllowCrossICodeExchange?: boolean | null;
    /** Format: Boolean */
    AllowCrossICodePendingExchange?: boolean | null;
    /** Format: Boolean */
    AllowChangeAvailabilityPriority?: boolean | null;
    /** Format: Boolean */
    AllowSwapItems?: boolean | null;
    /** Format: Boolean */
    UserMustChangePassword?: boolean | null;
    /** Format: Boolean */
    PasswordExpires?: boolean | null;
    /** Format: Integer */
    PasswordExpireDays?: number | null;
    /** Format: Date */
    PasswordUpdatedDateTime?: string | null;
    /** Format: Boolean */
    LockAccount?: boolean | null;
    /** Format: Text */
    Memo?: string | null;
    /** Format: Boolean */
    AllowCrossLocationEditAndDelete?: boolean | null;
    LastLoggedOn?: string | null;
    /** Format: Boolean */
    DisableInsertIntoActiveOrder?: boolean | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: UTCDateTime, Total digits: 23, Decimal places: 3 */
    DateStamp?: string | null;
    /** Format: Text, IsPrimaryKey: true */
    WebUserId?: string | null;
    /** Format: Boolean */
    WebAccess?: boolean | null;
    /** Format: Boolean */
    WebAdministrator?: boolean | null;
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
    /** Format: Integer */
    FirstDayOfWeek?: number | null;
    /** Format: Boolean */
    SettingsNavigationMenuVisible?: boolean | null;
    /** Format: Boolean */
    ReportsNavigationMenuVisible?: boolean | null;
    /** Format: Boolean */
    WebQuoteRequest?: boolean | null;
    EmailSignature?: string | null;
    /** Format: Text */
    Locale?: string | null;
    /** Format: Text */
    AvailabilityPreference?: string | null;
    /** Format: Boolean */
    AvailabilityAllWarehouses?: boolean | null;
    /** Format: Text */
    SourceId?: string | null;
    /** Format: Text */
    QuikSearchMode?: string | null;
    /** Format: Boolean */
    ShowRentalItemsOutOnly?: boolean | null;
    /** Format: Integer */
    CreditCardPinPadId?: number | null;
    /** Format: Text */
    ExportCode?: string | null;
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
export type WebApiModulesAdministratorUserUserRead = {
    /** Format: Text */
    UserId?: string | null;
    /** Format: Text */
    ContactId?: string | null;
    /** Format: Text */
    Name?: string | null;
    /** Format: Text */
    LoginName?: string | null;
    FullName?: string | null;
    /** Format: Text, Required: true */
    FirstName?: string | null;
    /** Format: Text */
    MiddleInitial?: string | null;
    /** Format: Text, Required: true */
    LastName?: string | null;
    Password?: string | null;
    PasswordChanged?: boolean | null;
    /** Format: Text */
    BarCode?: string | null;
    /** Format: Text, Required: true */
    GroupId?: string | null;
    GroupName?: string | null;
    /** Format: OleToHtmlColor */
    ScheduleColor?: string | null;
    /** Format: Text */
    UserTitleId?: string | null;
    UserTitle?: string | null;
    /** Format: Text */
    Email?: string | null;
    /** Format: Text */
    EmailApp?: string | null;
    /** Format: Boolean */
    AddRentalWorksUserSignature?: boolean | null;
    /** Format: Text, Required: true */
    OfficeLocationId?: string | null;
    OfficeLocation?: string | null;
    /** Format: Text, Required: true */
    WarehouseId?: string | null;
    Warehouse?: string | null;
    /** Format: Text */
    Address1?: string | null;
    /** Format: Text */
    Address2?: string | null;
    /** Format: Text */
    City?: string | null;
    /** Format: Text */
    StateId?: string | null;
    StateCode?: string | null;
    State?: string | null;
    /** Format: Text */
    ZipCode?: string | null;
    /** Format: Text */
    CountryId?: string | null;
    Country?: string | null;
    CountryCodeIsoAlpha2?: string | null;
    CountryCodePhone?: number | null;
    /** Format: Text */
    OfficePhone?: string | null;
    /** Format: Text */
    OfficeExtension?: string | null;
    /** Format: Text */
    Fax?: string | null;
    /** Format: Text */
    DirectPhone?: string | null;
    /** Format: Text */
    Pager?: string | null;
    /** Format: Text */
    PagerPin?: string | null;
    /** Format: Text */
    Cellular?: string | null;
    /** Format: Text */
    HomePhone?: string | null;
    /** Format: Text */
    DefaultDepartmentType?: string | null;
    PrimaryDepartmentId?: string | null;
    PrimaryDepartment?: string | null;
    /** Format: Text */
    LanguageId?: string | null;
    Language?: string | null;
    /** Format: Text */
    RentalDepartmentId?: string | null;
    RentalDepartment?: string | null;
    /** Format: Text */
    SalesDepartmentId?: string | null;
    SalesDepartment?: string | null;
    /** Format: Text */
    PartsDepartmentId?: string | null;
    PartsDepartment?: string | null;
    /** Format: Text */
    MiscDepartmentId?: string | null;
    MiscDepartment?: string | null;
    /** Format: Text */
    LaborDepartmentId?: string | null;
    LaborDepartment?: string | null;
    /** Format: Text */
    FacilityDepartmentId?: string | null;
    FacilityDepartment?: string | null;
    /** Format: Text */
    TransportationDepartmentId?: string | null;
    TransportationDepartment?: string | null;
    /** Format: Text */
    RentalInventoryTypeId?: string | null;
    RentalInventoryType?: string | null;
    /** Format: Text */
    SalesInventoryTypeId?: string | null;
    SalesInventoryType?: string | null;
    /** Format: Text */
    PartsInventoryTypeId?: string | null;
    PartsInventoryType?: string | null;
    /** Format: Text */
    MiscTypeId?: string | null;
    MiscType?: string | null;
    /** Format: Text */
    LaborTypeId?: string | null;
    LaborType?: string | null;
    /** Format: Text */
    FacilityTypeId?: string | null;
    FacilityType?: string | null;
    /** Format: Text */
    TransportationTypeId?: string | null;
    TransportationType?: string | null;
    /** Format: Boolean */
    NoMiscellaneousOnQuotes?: boolean | null;
    /** Format: Boolean */
    NoMiscellaneousOnOrders?: boolean | null;
    /** Format: Boolean */
    NoMiscellaneousOnPurchaseOrders?: boolean | null;
    /** Format: Boolean */
    LimitDaysPerWeek?: boolean | null;
    /** Format: Decimal, Total digits: 4, Decimal places: 2 */
    MinimumDaysPerWeek?: number | null;
    /** Format: Boolean */
    AllowCreditLimitOverride?: boolean | null;
    /** Format: Boolean */
    LimitDiscount?: boolean | null;
    /** Format: Decimal, Total digits: 8, Decimal places: 2 */
    MaximumDiscount?: number | null;
    /** Format: Boolean */
    LimitSubDiscount?: boolean | null;
    /** Format: Decimal, Total digits: 8, Decimal places: 2 */
    MaximumSubDiscount?: number | null;
    /** Format: Text */
    DiscountRule?: string | null;
    /** Format: Boolean */
    StagingAllowIncreaseDecreaseOrderQuantity?: boolean | null;
    /** Format: Boolean */
    StagingAllowIncreaseDecreaseOrderQuantityWithoutPrompt?: boolean | null;
    /** Format: Boolean */
    AllowStagingOfItemsWhenReservedOnOtherOrdersQuotes?: boolean | null;
    /** Format: Boolean */
    AllowContractIfDealRequiresPOAndOrderHasPendingPO?: boolean | null;
    /** Format: Boolean */
    AllowContractIfPendingItemsExist?: boolean | null;
    /** Format: Boolean */
    AllowContractIfCustomerDealDoesNotHaveApprovedCredit?: boolean | null;
    /** Format: Boolean */
    AllowContractIfCustomerDealIsOverTheirCreditLimit?: boolean | null;
    /** Format: Boolean */
    AllowContractIfCustomerDealInsuranceCoverageIsLess?: boolean | null;
    /** Format: Boolean */
    AllowContractIfCustomerDealDoesNotHaveValidInsuranceCertificate?: boolean | null;
    /** Format: Boolean */
    AllowContractIfCustomerDealDoesNotHaveValidNonTaxCertificate?: boolean | null;
    /** Format: Boolean */
    AllowReceiveSubsWhenPositiveConflictExists?: boolean | null;
    /** Format: Boolean */
    AllowStagingOfUnreservedConsignedItems?: boolean | null;
    /** Format: Boolean */
    AllowStagingOfUnapprovedItems?: boolean | null;
    /** Format: Boolean */
    AllowSubstitutesAtStaging?: boolean | null;
    /** Format: Boolean */
    DeleteOriginalOnSubstitution?: boolean | null;
    /** Format: Boolean */
    QuikActivityAllowPrintDollarAmounts?: boolean | null;
    /** Format: Boolean */
    QuikScanAllowCreateContract?: boolean | null;
    /** Format: Boolean */
    QuikScanAllowApplyAll?: boolean | null;
    /** Format: Boolean */
    AllowCrossICodeExchange?: boolean | null;
    /** Format: Boolean */
    AllowCrossICodePendingExchange?: boolean | null;
    /** Format: Boolean */
    AllowChangeAvailabilityPriority?: boolean | null;
    /** Format: Boolean */
    AllowSwapItems?: boolean | null;
    /** Format: Boolean */
    UserMustChangePassword?: boolean | null;
    /** Format: Boolean */
    PasswordExpires?: boolean | null;
    /** Format: Integer */
    PasswordExpireDays?: number | null;
    /** Format: Date */
    PasswordUpdatedDateTime?: string | null;
    /** Format: Boolean */
    LockAccount?: boolean | null;
    /** Format: Text */
    Memo?: string | null;
    /** Format: Boolean */
    AllowCrossLocationEditAndDelete?: boolean | null;
    LastLoggedOn?: string | null;
    /** Format: Boolean */
    DisableInsertIntoActiveOrder?: boolean | null;
    /** Format: Boolean */
    Inactive?: boolean | null;
    /** Format: UTCDateTime, Total digits: 23, Decimal places: 3 */
    DateStamp?: string | null;
    /** Format: Text, IsPrimaryKey: true */
    WebUserId?: string | null;
    /** Format: Boolean */
    WebAccess?: boolean | null;
    /** Format: Boolean */
    WebAdministrator?: boolean | null;
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
    /** Format: Integer */
    FirstDayOfWeek?: number | null;
    /** Format: Boolean */
    SettingsNavigationMenuVisible?: boolean | null;
    /** Format: Boolean */
    ReportsNavigationMenuVisible?: boolean | null;
    /** Format: Boolean */
    WebQuoteRequest?: boolean | null;
    EmailSignature?: string | null;
    /** Format: Text */
    Locale?: string | null;
    /** Format: Text */
    AvailabilityPreference?: string | null;
    /** Format: Boolean */
    AvailabilityAllWarehouses?: boolean | null;
    /** Format: Text */
    SourceId?: string | null;
    /** Format: Text */
    QuikSearchMode?: string | null;
    /** Format: Boolean */
    ShowRentalItemsOutOnly?: boolean | null;
    /** Format: Integer */
    CreditCardPinPadId?: number | null;
    /** Format: Text */
    ExportCode?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorUserUserLogic = {
    Items?: WebApiModulesAdministratorUserUser[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesAdministratorUserUserLogicRead = {
    Items?: WebApiModulesAdministratorUserUserRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesAdministratorUserCreateUserSalesRepresentativeContactResponse = {
    ContactId?: string | null;
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type WebApiModulesAdministratorUserUserCountResponse = {
    MaxConnections?: number;
    UserCount?: number;
};
export type FwStandardModulesAdministratorWebAlertLogWebAlertLogLogic = {
    WebAlertLogId?: number | null;
    AlertId?: string | null;
    CreateDateTime?: string | null;
    AlertSubject?: string | null;
    AlertBody?: string | null;
    AlertFrom?: string | null;
    AlertTo?: string | null;
    Status?: string | null;
    ErrorMessage?: string | null;
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
export type FwStandardModulesAdministratorWebAlertLogWebAlertLogLogicRead = {
    WebAlertLogId?: number | null;
    AlertId?: string | null;
    CreateDateTime?: string | null;
    AlertSubject?: string | null;
    AlertBody?: string | null;
    AlertFrom?: string | null;
    AlertTo?: string | null;
    Status?: string | null;
    ErrorMessage?: string | null;
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
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorWebAlertLogWebAlertLogLogic = {
    Items?: FwStandardModulesAdministratorWebAlertLogWebAlertLogLogic[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseFwStandardModulesAdministratorWebAlertLogWebAlertLogLogicRead = {
    Items?: FwStandardModulesAdministratorWebAlertLogWebAlertLogLogicRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModulesAdministratorWebAuditJsonWebAuditJsonLogic = {
    WebAuditId?: number | null;
    ModuleName?: string | null;
    Title?: string | null;
    AuditType?: string | null;
    UniqueId1?: string | null;
    UniqueId2?: string | null;
    UniqueId3?: string | null;
    WebUserId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
    Json?: string | null;
    MetaData1?: string | null;
    MetaData2?: string | null;
    MetaData3?: string | null;
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
export type FwStandardModulesAdministratorWebAuditJsonWebAuditJsonLogicRead = {
    WebAuditId?: number | null;
    ModuleName?: string | null;
    Title?: string | null;
    AuditType?: string | null;
    UniqueId1?: string | null;
    UniqueId2?: string | null;
    UniqueId3?: string | null;
    WebUserId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
    Json?: string | null;
    MetaData1?: string | null;
    MetaData2?: string | null;
    MetaData3?: string | null;
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
export type FwStandardModulesAdministratorWebEventLogWebEventLogLogic = {
    Id?: number | null;
    ServerName?: string | null;
    WebUsersId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
    LogType?: string | null;
    Message?: string | null;
    Data?: string | null;
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
export type FwStandardModulesAdministratorWebEventLogWebEventLogLogicRead = {
    Id?: number | null;
    ServerName?: string | null;
    WebUsersId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
    LogType?: string | null;
    Message?: string | null;
    Data?: string | null;
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
export type WebApiModulesSettingsWidgetGroupWidgetGroup = {
    /** Format: Text, IsPrimaryKey: true */
    WidgetGroupId?: string | null;
    /** Format: Text */
    WidgetId?: string | null;
    WidgetDescription?: string | null;
    /** Format: Text */
    GroupId?: string | null;
    GroupName?: string | null;
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
export type WebApiModulesSettingsWidgetGroupWidgetGroupRead = {
    /** Format: Text, IsPrimaryKey: true */
    WidgetGroupId?: string | null;
    /** Format: Text */
    WidgetId?: string | null;
    WidgetDescription?: string | null;
    /** Format: Text */
    GroupId?: string | null;
    GroupName?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesSettingsWidgetGroupWidgetGroupLogic = {
    Items?: WebApiModulesSettingsWidgetGroupWidgetGroup[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesSettingsWidgetGroupWidgetGroupLogicRead = {
    Items?: WebApiModulesSettingsWidgetGroupWidgetGroupRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesSettingsWidgetUserWidgetUser = {
    /** Format: Text, IsPrimaryKey: true */
    WidgetUserId?: string | null;
    /** Format: Text */
    WidgetId?: string | null;
    WidgetDescription?: string | null;
    /** Format: Text */
    WebUserId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
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
export type WebApiModulesSettingsWidgetUserWidgetUserRead = {
    /** Format: Text, IsPrimaryKey: true */
    WidgetUserId?: string | null;
    /** Format: Text */
    WidgetId?: string | null;
    WidgetDescription?: string | null;
    /** Format: Text */
    WebUserId?: string | null;
    UserId?: string | null;
    UserName?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesSettingsWidgetUserWidgetUserLogic = {
    Items?: WebApiModulesSettingsWidgetUserWidgetUser[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesSettingsWidgetUserWidgetUserLogicRead = {
    Items?: WebApiModulesSettingsWidgetUserWidgetUserRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export function postApiV1AlertBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/alert/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1AlertExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/alert/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Alert({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseFwStandardModulesAdministratorAlertAlertLogicRead;
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
    }>(`/api/v1/alert${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Alert(fwStandardModulesAdministratorAlertAlertLogic?: FwStandardModulesAdministratorAlertAlertLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorAlertAlertLogicRead;
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
    }>("/api/v1/alert", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorAlertAlertLogic
    })));
}
export function getApiV1AlertById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorAlertAlertLogicRead;
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
    }>(`/api/v1/alert/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1AlertById(id: string, fwStandardModulesAdministratorAlertAlertLogic?: FwStandardModulesAdministratorAlertAlertLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorAlertAlertLogicRead;
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
    }>(`/api/v1/alert/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorAlertAlertLogic
    })));
}
export function deleteApiV1AlertById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/alert/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1AlertconditionBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/alertcondition/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1AlertconditionExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/alertcondition/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Alertcondition({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseFwStandardModulesAdministratorAlertConditionAlertConditionLogicRead;
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
    }>(`/api/v1/alertcondition${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Alertcondition(fwStandardModulesAdministratorAlertConditionAlertConditionLogic?: FwStandardModulesAdministratorAlertConditionAlertConditionLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorAlertConditionAlertConditionLogicRead;
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
    }>("/api/v1/alertcondition", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorAlertConditionAlertConditionLogic
    })));
}
export function getApiV1AlertconditionById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorAlertConditionAlertConditionLogicRead;
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
    }>(`/api/v1/alertcondition/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1AlertconditionById(id: string, fwStandardModulesAdministratorAlertConditionAlertConditionLogic?: FwStandardModulesAdministratorAlertConditionAlertConditionLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorAlertConditionAlertConditionLogicRead;
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
    }>(`/api/v1/alertcondition/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorAlertConditionAlertConditionLogic
    })));
}
export function deleteApiV1AlertconditionById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/alertcondition/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1AlertwebusersBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/alertwebusers/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1AlertwebusersExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/alertwebusers/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Alertwebusers({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseFwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogicRead;
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
    }>(`/api/v1/alertwebusers${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Alertwebusers(fwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogic?: FwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogicRead;
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
    }>("/api/v1/alertwebusers", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogic
    })));
}
export function getApiV1AlertwebusersById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogicRead;
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
    }>(`/api/v1/alertwebusers/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1AlertwebusersById(id: string, fwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogic?: FwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogicRead;
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
    }>(`/api/v1/alertwebusers/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorAlertWebUsersAlertWebUsersLogic
    })));
}
export function deleteApiV1AlertwebusersById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/alertwebusers/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1AlertwebusersValidateuserBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/alertwebusers/validateuser/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1AssignedcustomformBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/assignedcustomform/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1AssignedcustomformExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/assignedcustomform/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1Createnewsystem(fwStandardModulesAdministratorCreateNewSystemCreateNewSystemRequest?: FwStandardModulesAdministratorCreateNewSystemCreateNewSystemRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCreateNewSystemCreateNewSystemResponse;
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
    }>("/api/v1/createnewsystem", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorCreateNewSystemCreateNewSystemRequest
    })));
}
export function postApiV1CreatenewsystemGetdefaults(fwStandardModulesAdministratorCreateNewSystemGetDefaultsRequest?: FwStandardModulesAdministratorCreateNewSystemGetDefaultsRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCreateNewSystemGetDefaultsResponse;
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
    }>("/api/v1/createnewsystem/getdefaults", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorCreateNewSystemGetDefaultsRequest
    })));
}
export function postApiV1CreatenewsystemhistoryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/createnewsystemhistory/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CreatenewsystemhistoryExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/createnewsystemhistory/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Createnewsystemhistory({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistoryLogicRead;
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
    }>(`/api/v1/createnewsystemhistory${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Createnewsystemhistory(webApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistory?: WebApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistoryRead;
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
    }>("/api/v1/createnewsystemhistory", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistory
    })));
}
export function getApiV1CreatenewsystemhistoryById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorCreateNewSystemHistoryCreateNewSystemHistoryRead;
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
    }>(`/api/v1/createnewsystemhistory/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function postApiV1CreatenewsystemhistorylogBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/createnewsystemhistorylog/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CreatenewsystemhistorylogExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/createnewsystemhistorylog/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Createnewsystemhistorylog({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorCreateNewSystemHistoryLogCreateNewSystemHistoryLogLogicRead;
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
    }>(`/api/v1/createnewsystemhistorylog${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1CreatenewsystemhistorylogById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorCreateNewSystemHistoryLogCreateNewSystemHistoryLogRead;
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
    }>(`/api/v1/createnewsystemhistorylog/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function postApiV1CustomfieldBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customfield/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustomfieldExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customfield/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Customfield({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorCustomFieldCustomFieldLogicRead;
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
    }>(`/api/v1/customfield${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Customfield(webApiModulesAdministratorCustomFieldCustomField?: WebApiModulesAdministratorCustomFieldCustomField, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorCustomFieldCustomFieldRead;
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
    }>("/api/v1/customfield", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAdministratorCustomFieldCustomField
    })));
}
export function getApiV1CustomfieldById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorCustomFieldCustomFieldRead;
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
    }>(`/api/v1/customfield/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1CustomfieldById(id: string, webApiModulesAdministratorCustomFieldCustomField?: WebApiModulesAdministratorCustomFieldCustomField, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorCustomFieldCustomFieldRead;
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
    }>(`/api/v1/customfield/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesAdministratorCustomFieldCustomField
    })));
}
export function deleteApiV1CustomfieldById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/customfield/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1CustomformBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customform/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustomformExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customform/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Customform({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomFormCustomFormLogicRead;
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
    }>(`/api/v1/customform${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Customform(fwStandardModulesAdministratorCustomFormCustomFormLogic?: FwStandardModulesAdministratorCustomFormCustomFormLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomFormCustomFormLogicRead;
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
    }>("/api/v1/customform", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorCustomFormCustomFormLogic
    })));
}
export function getApiV1CustomformById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomFormCustomFormLogicRead;
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
    }>(`/api/v1/customform/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1CustomformById(id: string, fwStandardModulesAdministratorCustomFormCustomFormLogic?: FwStandardModulesAdministratorCustomFormCustomFormLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomFormCustomFormLogicRead;
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
    }>(`/api/v1/customform/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorCustomFormCustomFormLogic
    })));
}
export function deleteApiV1CustomformById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/customform/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1CustomformSelfassign(fwStandardModulesAdministratorCustomFormCustomFormLogic?: FwStandardModulesAdministratorCustomFormCustomFormLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomFormCustomFormLogicRead;
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
    }>("/api/v1/customform/selfassign", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorCustomFormCustomFormLogic
    })));
}
export function putApiV1CustomformSelfassignById(id: string, fwStandardModulesAdministratorCustomFormCustomFormLogic?: FwStandardModulesAdministratorCustomFormCustomFormLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomFormCustomFormLogicRead;
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
    }>(`/api/v1/customform/selfassign/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorCustomFormCustomFormLogic
    })));
}
export function postApiV1CustomformgroupBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customformgroup/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustomformgroupExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customformgroup/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Customformgroup({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogicRead;
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
    }>(`/api/v1/customformgroup${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Customformgroup(fwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogic?: FwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogicRead;
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
    }>("/api/v1/customformgroup", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogic
    })));
}
export function getApiV1CustomformgroupById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogicRead;
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
    }>(`/api/v1/customformgroup/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1CustomformgroupById(id: string, fwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogic?: FwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogicRead;
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
    }>(`/api/v1/customformgroup/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorCustomFormGroupCustomFormGroupLogic
    })));
}
export function deleteApiV1CustomformgroupById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/customformgroup/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1CustomformgroupValidategroupnameBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customformgroup/validategroupname/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustomformuserBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customformuser/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustomformuserExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customformuser/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Customformuser({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomFormUserCustomFormUserLogicRead;
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
    }>(`/api/v1/customformuser${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Customformuser(fwStandardModulesAdministratorCustomFormUserCustomFormUserLogic?: FwStandardModulesAdministratorCustomFormUserCustomFormUserLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomFormUserCustomFormUserLogicRead;
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
    }>("/api/v1/customformuser", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorCustomFormUserCustomFormUserLogic
    })));
}
export function getApiV1CustomformuserById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomFormUserCustomFormUserLogicRead;
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
    }>(`/api/v1/customformuser/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1CustomformuserById(id: string, fwStandardModulesAdministratorCustomFormUserCustomFormUserLogic?: FwStandardModulesAdministratorCustomFormUserCustomFormUserLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomFormUserCustomFormUserLogicRead;
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
    }>(`/api/v1/customformuser/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorCustomFormUserCustomFormUserLogic
    })));
}
export function deleteApiV1CustomformuserById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/customformuser/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1CustomformuserValidateuserBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customformuser/validateuser/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustommoduleBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/custommodule/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustommoduleExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/custommodule/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Custommodule({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorControlsCustomModuleCustomModuleLogicRead;
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
    }>(`/api/v1/custommodule${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1CustomreportcssBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customreportcss/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustomreportcssExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customreportcss/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Customreportcss({ pageno, pagesize, sort }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomReportCssCustomReportCssLogicRead[];
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
    }>(`/api/v1/customreportcss${QS.query(QS.explode({
        pageno,
        pagesize,
        sort
    }))}`, {
        ...opts
    }));
}
export function postApiV1Customreportcss(fwStandardModulesAdministratorCustomReportCssCustomReportCssLogic?: FwStandardModulesAdministratorCustomReportCssCustomReportCssLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomReportCssCustomReportCssLogicRead;
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
    }>("/api/v1/customreportcss", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorCustomReportCssCustomReportCssLogic
    })));
}
export function getApiV1CustomreportcssById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomReportCssCustomReportCssLogicRead;
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
    }>(`/api/v1/customreportcss/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1CustomreportcssById(id: string, fwStandardModulesAdministratorCustomReportCssCustomReportCssLogic?: FwStandardModulesAdministratorCustomReportCssCustomReportCssLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomReportCssCustomReportCssLogicRead;
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
    }>(`/api/v1/customreportcss/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorCustomReportCssCustomReportCssLogic
    })));
}
export function deleteApiV1CustomreportcssById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/customreportcss/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1CustomreportlayoutBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customreportlayout/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustomreportlayoutExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customreportlayout/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Customreportlayout({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseFwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogicRead;
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
    }>(`/api/v1/customreportlayout${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Customreportlayout(fwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogic?: FwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogicRead;
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
    }>("/api/v1/customreportlayout", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogic
    })));
}
export function getApiV1CustomreportlayoutById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogicRead;
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
    }>(`/api/v1/customreportlayout/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1CustomreportlayoutById(id: string, fwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogic?: FwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogicRead;
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
    }>(`/api/v1/customreportlayout/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorCustomReportLayoutCustomReportLayoutLogic
    })));
}
export function deleteApiV1CustomreportlayoutById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/customreportlayout/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getApiV1CustomreportlayoutTemplateByReport(report: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorCustomReportLayoutCustomReportLayoutControllerCustomReportLayoutResponse;
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
    }>(`/api/v1/customreportlayout/template/${encodeURIComponent(report)}`, {
        ...opts
    }));
}
export function postApiV1CustomreportlayoutValidatecustomcssBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customreportlayout/validatecustomcss/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustomreportlayoutgroupBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customreportlayoutgroup/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustomreportlayoutgroupExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customreportlayoutgroup/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Customreportlayoutgroup({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroupLogicRead;
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
    }>(`/api/v1/customreportlayoutgroup${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Customreportlayoutgroup(webApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroup?: WebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroup, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroupRead;
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
    }>("/api/v1/customreportlayoutgroup", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroup
    })));
}
export function getApiV1CustomreportlayoutgroupById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroupRead;
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
    }>(`/api/v1/customreportlayoutgroup/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1CustomreportlayoutgroupById(id: string, webApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroup?: WebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroup, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroupRead;
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
    }>(`/api/v1/customreportlayoutgroup/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesAdministratorControlsCustomReportLayoutGroupCustomReportLayoutGroup
    })));
}
export function deleteApiV1CustomreportlayoutgroupById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/customreportlayoutgroup/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1CustomreportlayoutgroupValidategroupnameBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customreportlayoutgroup/validategroupname/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustomreportlayoutuserBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customreportlayoutuser/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1CustomreportlayoutuserExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customreportlayoutuser/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Customreportlayoutuser({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUserLogicRead;
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
    }>(`/api/v1/customreportlayoutuser${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Customreportlayoutuser(webApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUser?: WebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUser, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUserRead;
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
    }>("/api/v1/customreportlayoutuser", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUser
    })));
}
export function getApiV1CustomreportlayoutuserById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUserRead;
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
    }>(`/api/v1/customreportlayoutuser/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1CustomreportlayoutuserById(id: string, webApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUser?: WebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUser, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUserRead;
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
    }>(`/api/v1/customreportlayoutuser/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesSharedControlsCustomReportLayoutUserCustomReportLayoutUser
    })));
}
export function deleteApiV1CustomreportlayoutuserById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/customreportlayoutuser/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1CustomreportlayoutuserValidateuserBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/customreportlayoutuser/validateuser/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1DatahealthLegend(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/datahealth/legend", {
        ...opts
    }));
}
export function postApiV1DatahealthBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/datahealth/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1DatahealthExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/datahealth/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Datahealth({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorDataHealthDataHealthLogicRead;
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
    }>(`/api/v1/datahealth${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1DatahealthById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorDataHealthDataHealthRead;
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
    }>(`/api/v1/datahealth/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1DatahealthById(id: string, webApiModulesAdministratorDataHealthDataHealth?: WebApiModulesAdministratorDataHealthDataHealth, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorDataHealthDataHealthRead;
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
    }>(`/api/v1/datahealth/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesAdministratorDataHealthDataHealth
    })));
}
export function postApiV1DatahealthCheckdatahealth(webApiModulesAdministratorDataHealthCheckDataHealthRequest?: WebApiModulesAdministratorDataHealthCheckDataHealthRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/datahealth/checkdatahealth", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAdministratorDataHealthCheckDataHealthRequest
    })));
}
export function postApiV1DuplicateruleBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/duplicaterule/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1DuplicateruleExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/duplicaterule/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Duplicaterule({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseFwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogicRead;
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
    }>(`/api/v1/duplicaterule${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Duplicaterule(fwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogic?: FwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogicRead;
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
    }>("/api/v1/duplicaterule", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogic
    })));
}
export function getApiV1DuplicateruleById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogicRead;
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
    }>(`/api/v1/duplicaterule/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1DuplicateruleById(id: string, fwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogic?: FwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogicRead;
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
    }>(`/api/v1/duplicaterule/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorDuplicateRuleDuplicateRuleLogic
    })));
}
export function deleteApiV1DuplicateruleById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/duplicaterule/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1DuplicaterulefieldBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/duplicaterulefield/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1DuplicaterulefieldExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/duplicaterulefield/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Duplicaterulefield({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleFieldLogicRead;
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
    }>(`/api/v1/duplicaterulefield${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Duplicaterulefield(webApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleField?: WebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleField, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleFieldRead;
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
    }>("/api/v1/duplicaterulefield", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleField
    })));
}
export function getApiV1DuplicaterulefieldById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleFieldRead;
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
    }>(`/api/v1/duplicaterulefield/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1DuplicaterulefieldById(id: string, webApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleField?: WebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleField, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleFieldRead;
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
    }>(`/api/v1/duplicaterulefield/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesAdministratorControlsDuplicateRuleFieldDuplicateRuleField
    })));
}
export function deleteApiV1DuplicaterulefieldById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/duplicaterulefield/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1EmailhistoryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/emailhistory/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1EmailhistoryExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/emailhistory/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Emailhistory({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorEmailHistoryEmailHistoryLogicRead;
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
    }>(`/api/v1/emailhistory${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1EmailhistoryById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorEmailHistoryEmailHistoryRead;
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
    }>(`/api/v1/emailhistory/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function postApiV1EmailtemplateEmailtoBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/emailtemplate/emailto/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1EmailtemplateEmailto({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseFwStandardModulesAdministratorEmailTemplateEmailToLogicRead;
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
    }>(`/api/v1/emailtemplate/emailto${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1EmailtemplateEmailto(fwStandardModulesAdministratorEmailTemplateEmailTemplateLogic?: FwStandardModulesAdministratorEmailTemplateEmailTemplateLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorEmailTemplateEmailToLogicRead;
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
    }>("/api/v1/emailtemplate/emailto", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorEmailTemplateEmailTemplateLogic
    })));
}
export function getApiV1EmailtemplateEmailtoById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorEmailTemplateEmailToLogicRead;
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
    }>(`/api/v1/emailtemplate/emailto/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function deleteApiV1EmailtemplateEmailtoById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/emailtemplate/emailto/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function putApiV1EmailtemplateEmailtoById(id: string, fwStandardModulesAdministratorEmailTemplateEmailTemplateLogic?: FwStandardModulesAdministratorEmailTemplateEmailTemplateLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorEmailTemplateEmailToLogicRead;
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
    }>(`/api/v1/emailtemplate/emailto/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorEmailTemplateEmailTemplateLogic
    })));
}
export function postApiV1EmailtemplateBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/emailtemplate/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Emailtemplate({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseFwStandardModulesAdministratorEmailTemplateEmailTemplateLogicRead;
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
    }>(`/api/v1/emailtemplate${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Emailtemplate(fwStandardModulesAdministratorEmailTemplateEmailTemplateLogic?: FwStandardModulesAdministratorEmailTemplateEmailTemplateLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorEmailTemplateEmailTemplateLogicRead;
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
    }>("/api/v1/emailtemplate", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorEmailTemplateEmailTemplateLogic
    })));
}
export function getApiV1EmailtemplateById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorEmailTemplateEmailTemplateLogicRead;
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
    }>(`/api/v1/emailtemplate/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function deleteApiV1EmailtemplateById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/emailtemplate/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function putApiV1EmailtemplateById(id: string, fwStandardModulesAdministratorEmailTemplateEmailTemplateLogic?: FwStandardModulesAdministratorEmailTemplateEmailTemplateLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorEmailTemplateEmailTemplateLogicRead;
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
    }>(`/api/v1/emailtemplate/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorEmailTemplateEmailTemplateLogic
    })));
}
export function postApiV1EmailtemplateTemplatecategories(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorEmailTemplateEmailTemplateCategoriesResponse;
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
    }>("/api/v1/emailtemplate/templatecategories", {
        ...opts,
        method: "POST"
    }));
}
export function postApiV1EmailtemplateTemplatefields(fwStandardModulesAdministratorEmailTemplateGetEmailTemplateFieldsRequest?: FwStandardModulesAdministratorEmailTemplateGetEmailTemplateFieldsRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorEmailTemplateEmailTemplateFieldsResponse;
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
    }>("/api/v1/emailtemplate/templatefields", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorEmailTemplateGetEmailTemplateFieldsRequest
    })));
}
export function postApiV1GroupBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/group/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1GroupExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/group/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Group({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorGroupGroupLogicRead;
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
    }>(`/api/v1/group${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Group(webApiModulesAdministratorGroupGroup?: WebApiModulesAdministratorGroupGroup, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorGroupGroupRead;
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
    }>("/api/v1/group", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAdministratorGroupGroup
    })));
}
export function getApiV1GroupById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorGroupGroupRead;
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
    }>(`/api/v1/group/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1GroupById(id: string, webApiModulesAdministratorGroupGroup?: WebApiModulesAdministratorGroupGroup, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorGroupGroupRead;
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
    }>(`/api/v1/group/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesAdministratorGroupGroup
    })));
}
export function deleteApiV1GroupById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/group/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getApiV1GroupApplicationtreeById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardAppManagerFwAmSecurityTreeNode;
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
    }>(`/api/v1/group/applicationtree/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function postApiV1GroupCopysecuritynode(fwCoreModulesAdministratorGroupCopySecurityNodeRequest?: FwCoreModulesAdministratorGroupCopySecurityNodeRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardAppManagerFwAmSecurityTreeNode;
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
    }>("/api/v1/group/copysecuritynode", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwCoreModulesAdministratorGroupCopySecurityNodeRequest
    })));
}
export function getApiV1GroupLookupgroup({ groupId, name, pageNo, pageSize, sort }: {
    groupId?: string;
    name?: string;
    pageNo?: number;
    pageSize?: number;
    sort?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsGetResponseFwCoreModulesAdministratorGroupLookupGroupResponse;
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
    }>(`/api/v1/group/lookupgroup${QS.query(QS.explode({
        GroupId: groupId,
        Name: name,
        PageNo: pageNo,
        PageSize: pageSize,
        Sort: sort
    }))}`, {
        ...opts
    }));
}
export function getApiV1GroupLegend(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/group/legend", {
        ...opts
    }));
}
export function postApiV1HandlebarstemplateBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/handlebarstemplate/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1HandlebarstemplateExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/handlebarstemplate/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Handlebarstemplate({ pageno, pagesize, sort }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogicRead[];
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
    }>(`/api/v1/handlebarstemplate${QS.query(QS.explode({
        pageno,
        pagesize,
        sort
    }))}`, {
        ...opts
    }));
}
export function postApiV1Handlebarstemplate(fwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogic?: FwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogicRead;
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
    }>("/api/v1/handlebarstemplate", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogic
    })));
}
export function getApiV1HandlebarstemplateById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogicRead;
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
    }>(`/api/v1/handlebarstemplate/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1HandlebarstemplateById(id: string, fwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogic?: FwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogic, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogicRead;
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
    }>(`/api/v1/handlebarstemplate/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: fwStandardModulesAdministratorHandlebarsTemplateHandlebarsTemplateLogic
    })));
}
export function deleteApiV1HandlebarstemplateById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/handlebarstemplate/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1HotfixBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/hotfix/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1HotfixExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/hotfix/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Hotfix({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorHotfixHotfixLogicRead;
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
    }>(`/api/v1/hotfix${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1HotfixById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorHotfixHotfixRead;
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
    }>(`/api/v1/hotfix/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function postApiV1HubspotAllcontacts(webApiModulesAccountServicesHubSpotGetHubSpotContactsRequest?: WebApiModulesAccountServicesHubSpotGetHubSpotContactsRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/hubspot/allcontacts", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAccountServicesHubSpotGetHubSpotContactsRequest
    })));
}
export function postApiV1HubspotNewcontact(webApiModulesAccountServicesHubSpotPostHubSpotContactRequest?: WebApiModulesAccountServicesHubSpotPostHubSpotContactRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/hubspot/newcontact", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAccountServicesHubSpotPostHubSpotContactRequest
    })));
}
export function postApiV1HubspotGettokens(webApiModulesAccountServicesHubSpotGetHubSpotTokensRequest?: WebApiModulesAccountServicesHubSpotGetHubSpotTokensRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAccountServicesHubSpotGetWriteTokensResponse;
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
    }>("/api/v1/hubspot/gettokens", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAccountServicesHubSpotGetHubSpotTokensRequest
    })));
}
export function postApiV1HubspotGetcontactsepoch(webApiModulesAccountServicesHubSpotSearchHubSpotContactsWithinPeriodRequest?: WebApiModulesAccountServicesHubSpotSearchHubSpotContactsWithinPeriodRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/hubspot/getcontactsepoch", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAccountServicesHubSpotSearchHubSpotContactsWithinPeriodRequest
    })));
}
export function postApiV1PersonBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/person/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1PersonExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/person/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
/**
 * Returns an array of plugin names that are available to this instance.
 */
export function getApiV1Plugin({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorPluginPluginLogicRead;
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
    }>(`/api/v1/plugin${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Get a single plugin record by pluginid.
 */
export function getApiV1PluginByPluginid(pluginid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorPluginPluginRead;
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
    }>(`/api/v1/plugin/${encodeURIComponent(pluginid)}`, {
        ...opts
    }));
}
/**
 * Get a single plugin record by name (Description).
 */
export function getApiV1PluginDescriptionByDescription(description: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorPluginPluginRead;
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
    }>(`/api/v1/plugin/description/${encodeURIComponent(description)}`, {
        ...opts
    }));
}
/**
 * Install a plugin by name (Description).
 */
export function postApiV1PluginInstallByPluginname(pluginname: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorPluginStatusResponse;
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
    }>(`/api/v1/plugin/install/${encodeURIComponent(pluginname)}`, {
        ...opts,
        method: "POST"
    }));
}
/**
 * Edit a plugin's settings.
 */
export function putApiV1PluginById(id: string, webApiModulesAdministratorPluginPlugin?: WebApiModulesAdministratorPluginPlugin, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorPluginPluginRead;
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
    }>(`/api/v1/plugin/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesAdministratorPluginPlugin
    })));
}
/**
 * Delete a plugin's settings. (remove the plugin)
 */
export function deleteApiV1PluginById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/plugin/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
/**
 * Returns a boolean indicating if storefront app is enabled.
 */
export function getApiV1StorefrontsetupIsstorefrontenabled(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/storefrontsetup/isstorefrontenabled", {
        ...opts
    }));
}
/**
 * Gets thumbnail size in pixels (for new image uploads).
 */
export function getApiV1StorefrontsetupThumbnailsize(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: number;
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
    }>("/api/v1/storefrontsetup/thumbnailsize", {
        ...opts
    }));
}
/**
 * Regenerate thumbnails
 */
export function postApiV1StorefrontsetupRegeneratethumbnails(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/storefrontsetup/regeneratethumbnails", {
        ...opts,
        method: "POST"
    }));
}
/**
 * Cache thumbnails
 */
export function postApiV1StorefrontsetupCacheimages(webApiModulesAdministratorStorefrontSetupCacheImagesRequest?: WebApiModulesAdministratorStorefrontSetupCacheImagesRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/storefrontsetup/cacheimages", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAdministratorStorefrontSetupCacheImagesRequest
    })));
}
/**
 * Clear image cache
 */
export function postApiV1StorefrontsetupClearimagecache(webApiModulesAdministratorStorefrontSetupClearImageCacheRequest?: WebApiModulesAdministratorStorefrontSetupClearImageCacheRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/storefrontsetup/clearimagecache", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAdministratorStorefrontSetupClearImageCacheRequest
    })));
}
export function postApiV1SystemupdateVersionhotfix(fwStandardModulesAdministratorSystemUpdateGetVersionHotfixRequest?: FwStandardModulesAdministratorSystemUpdateGetVersionHotfixRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorSystemUpdateGetVersionHotfixResponse;
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
    }>("/api/v1/systemupdate/versionhotfix", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorSystemUpdateGetVersionHotfixRequest
    })));
}
export function postApiV1SystemupdateAvailableversions(fwStandardModulesAdministratorSystemUpdateAvailableVersionsRequest?: FwStandardModulesAdministratorSystemUpdateAvailableVersionsRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorSystemUpdateAvailableVersionsResponse;
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
    }>("/api/v1/systemupdate/availableversions", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorSystemUpdateAvailableVersionsRequest
    })));
}
export function postApiV1SystemupdateBuilddocuments(fwStandardModulesAdministratorSystemUpdateBuildDocumentsRequest?: FwStandardModulesAdministratorSystemUpdateBuildDocumentsRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorSystemUpdateBuildDocumentsResponse;
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
    }>("/api/v1/systemupdate/builddocuments", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorSystemUpdateBuildDocumentsRequest
    })));
}
export function postApiV1SystemupdateDownloadbuilddocument(fwStandardModulesAdministratorSystemUpdateDownloadBuildDocumentRequest?: FwStandardModulesAdministratorSystemUpdateDownloadBuildDocumentRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorSystemUpdateDownloadBuildDocumentResponse;
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
    }>("/api/v1/systemupdate/downloadbuilddocument", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorSystemUpdateDownloadBuildDocumentRequest
    })));
}
export function postApiV1SystemupdateApplyupdate(fwStandardModulesAdministratorSystemUpdateApplyUpdateRequest?: FwStandardModulesAdministratorSystemUpdateApplyUpdateRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorSystemUpdateApplyUpdateResponse;
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
    }>("/api/v1/systemupdate/applyupdate", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorSystemUpdateApplyUpdateRequest
    })));
}
export function postApiV1SystemupdateNextqaversion(fwStandardModulesAdministratorSystemUpdateNextQaVersionRequest?: FwStandardModulesAdministratorSystemUpdateNextQaVersionRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorSystemUpdateNextQaVersionResponse;
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
    }>("/api/v1/systemupdate/nextqaversion", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorSystemUpdateNextQaVersionRequest
    })));
}
export function postApiV1SystemupdateRestart(fwStandardModulesAdministratorSystemUpdateRestartRequest?: FwStandardModulesAdministratorSystemUpdateRestartRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorSystemUpdateRestartResponse;
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
    }>("/api/v1/systemupdate/restart", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModulesAdministratorSystemUpdateRestartRequest
    })));
}
export function getApiV1SystemupdateCurrentversion(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/systemupdate/currentversion", {
        ...opts
    }));
}
export function postApiV1SystemupdatehistoryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/systemupdatehistory/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1SystemupdatehistoryExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/systemupdatehistory/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Systemupdatehistory({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorSystemUpdateHistorySystemUpdateHistoryLogicRead;
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
    }>(`/api/v1/systemupdatehistory${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Systemupdatehistory(webApiModulesAdministratorSystemUpdateHistorySystemUpdateHistory?: WebApiModulesAdministratorSystemUpdateHistorySystemUpdateHistory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorSystemUpdateHistorySystemUpdateHistoryRead;
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
    }>("/api/v1/systemupdatehistory", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAdministratorSystemUpdateHistorySystemUpdateHistory
    })));
}
export function getApiV1SystemupdatehistoryById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorSystemUpdateHistorySystemUpdateHistoryRead;
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
    }>(`/api/v1/systemupdatehistory/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function postApiV1SystemupdatehistorylogBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/systemupdatehistorylog/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1SystemupdatehistorylogExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/systemupdatehistorylog/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Systemupdatehistorylog({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorSystemUpdateHistoryLogSystemUpdateHistoryLogLogicRead;
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
    }>(`/api/v1/systemupdatehistorylog${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1SystemupdatehistorylogById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorSystemUpdateHistoryLogSystemUpdateHistoryLogRead;
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
    }>(`/api/v1/systemupdatehistorylog/${encodeURIComponent(id)}`, {
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
export function postApiV1UserBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1User({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesAdministratorUserUserLogicRead;
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
    }>(`/api/v1/user${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1User(webApiModulesAdministratorUserUser?: WebApiModulesAdministratorUserUser, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorUserUserRead;
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
    }>("/api/v1/user", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesAdministratorUserUser
    })));
}
export function getApiV1UserById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorUserUserRead;
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
    }>(`/api/v1/user/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1UserById(id: string, webApiModulesAdministratorUserUser?: WebApiModulesAdministratorUserUser, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorUserUserRead;
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
    }>(`/api/v1/user/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesAdministratorUserUser
    })));
}
export function deleteApiV1UserById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/user/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1UserCreateusersalesrepresentativecontactById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorUserCreateUserSalesRepresentativeContactResponse;
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
    }>(`/api/v1/user/createusersalesrepresentativecontact/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST"
    }));
}
export function postApiV1UserValidategroupBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validategroup/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidateusertitleBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validateusertitle/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidateofficelocationBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validateofficelocation/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatewarehouselocationBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatewarehouselocation/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatestateBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatestate/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatecountryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatecountry/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidaterentaldepartmentBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validaterentaldepartment/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatesalesdepartmentBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatesalesdepartment/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatelabordepartmentBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatelabordepartment/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatemiscdepartmentBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatemiscdepartment/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatepartsdepartmentBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatepartsdepartment/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatefacilitydepartmentBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatefacilitydepartment/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatetransportationdepartmentBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatetransportationdepartment/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidaterentalinventoryBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validaterentalinventory/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatesalesinventorytypeBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatesalesinventorytype/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatepartsinventorytypeBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatepartsinventorytype/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatetransportationtypeBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatetransportationtype/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatelabortypeBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatelabortype/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatemisctypeBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatemisctype/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatefacilitytypeBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatefacilitytype/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatesuccesssoundBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatesuccesssound/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidateerrorsoundBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validateerrorsound/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1UserValidatenotificationsoundBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/user/validatenotificationsound/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1UserGetusercounts(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAdministratorUserUserCountResponse;
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
    }>("/api/v1/user/getusercounts", {
        ...opts
    }));
}
export function postApiV1WebalertlogBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/webalertlog/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1WebalertlogExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/webalertlog/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Webalertlog({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseFwStandardModulesAdministratorWebAlertLogWebAlertLogLogicRead;
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
    }>(`/api/v1/webalertlog${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function getApiV1WebalertlogById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorWebAlertLogWebAlertLogLogicRead;
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
    }>(`/api/v1/webalertlog/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function postApiV1WebauditjsonBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/webauditjson/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1WebauditjsonExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/webauditjson/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1WebauditjsonById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorWebAuditJsonWebAuditJsonLogicRead;
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
    }>(`/api/v1/webauditjson/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function postApiV1WebeventlogBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/webeventlog/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1WebeventlogExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/webeventlog/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Webeventlog({ pageno, pagesize, sort }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorWebEventLogWebEventLogLogicRead[];
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
    }>(`/api/v1/webeventlog${QS.query(QS.explode({
        pageno,
        pagesize,
        sort
    }))}`, {
        ...opts
    }));
}
export function getApiV1WebeventlogById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModulesAdministratorWebEventLogWebEventLogLogicRead;
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
    }>(`/api/v1/webeventlog/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function postApiV1WidgetgroupBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/widgetgroup/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1WidgetgroupExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/widgetgroup/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Widgetgroup({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesSettingsWidgetGroupWidgetGroupLogicRead;
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
    }>(`/api/v1/widgetgroup${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Widgetgroup(webApiModulesSettingsWidgetGroupWidgetGroup?: WebApiModulesSettingsWidgetGroupWidgetGroup, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesSettingsWidgetGroupWidgetGroupRead;
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
    }>("/api/v1/widgetgroup", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesSettingsWidgetGroupWidgetGroup
    })));
}
export function getApiV1WidgetgroupById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesSettingsWidgetGroupWidgetGroupRead;
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
    }>(`/api/v1/widgetgroup/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1WidgetgroupById(id: string, webApiModulesSettingsWidgetGroupWidgetGroup?: WebApiModulesSettingsWidgetGroupWidgetGroup, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesSettingsWidgetGroupWidgetGroupRead;
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
    }>(`/api/v1/widgetgroup/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesSettingsWidgetGroupWidgetGroup
    })));
}
export function deleteApiV1WidgetgroupById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/widgetgroup/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1WidgetgroupValidategroupBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/widgetgroup/validategroup/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1WidgetuserBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/widgetuser/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function postApiV1WidgetuserExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/widgetuser/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function getApiV1Widgetuser({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesSettingsWidgetUserWidgetUserLogicRead;
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
    }>(`/api/v1/widgetuser${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Widgetuser(webApiModulesSettingsWidgetUserWidgetUser?: WebApiModulesSettingsWidgetUserWidgetUser, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesSettingsWidgetUserWidgetUserRead;
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
    }>("/api/v1/widgetuser", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesSettingsWidgetUserWidgetUser
    })));
}
export function getApiV1WidgetuserById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesSettingsWidgetUserWidgetUserRead;
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
    }>(`/api/v1/widgetuser/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function putApiV1WidgetuserById(id: string, webApiModulesSettingsWidgetUserWidgetUser?: WebApiModulesSettingsWidgetUserWidgetUser, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesSettingsWidgetUserWidgetUserRead;
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
    }>(`/api/v1/widgetuser/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesSettingsWidgetUserWidgetUser
    })));
}
export function deleteApiV1WidgetuserById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/widgetuser/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function postApiV1WidgetuserValidateuserBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/widgetuser/validateuser/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
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
