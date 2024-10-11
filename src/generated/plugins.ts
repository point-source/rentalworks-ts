/**
 * RentalWorksPlugins API v1
 * v1
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import { Oazapfts, QS } from "../../deps.ts";
export const defaults: Oazapfts.Defaults<Oazapfts.CustomHeaders> = {
    headers: {},
    baseUrl: "/",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export type WebApiModulesPluginsAzureAdGetAzureAdGroupsRequest = {
    GroupSearch?: string | null;
};
export type WebApiModulesPluginsAzureAdAzureAdGroup = {
    id?: string | null;
    displayName?: string | null;
};
export type WebApiModulesPluginsAzureAdGetAzureAdGroupsResponse = {
    Groups?: WebApiModulesPluginsAzureAdAzureAdGroup[] | null;
    TooManyResults?: boolean;
    StatusCode?: number;
    Message?: string | null;
};
export type FwCoreApiSwashbuckleBadRequestResponse = {
    [key: string]: string[];
};
export type FwStandardModelsFwApiException = {
    StatusCode?: number;
    Message?: string;
    StackTrace?: string;
};
export type WebApiModulesPluginsAzureAdContactsImportGroupRequest = {
    AzureADGroupId?: string | null;
    ContactTitleId?: string | null;
};
export type WebApiModulesPluginsAzureAdContactData = {
    ContactId?: string | null;
    FirstName?: string | null;
    LastName?: string | null;
    Email?: string | null;
    SourceId?: string | null;
};
export type WebApiModulesPluginsAzureAdContactsImportGroupResponse = {
    LastImported?: string | null;
    Users?: WebApiModulesPluginsAzureAdContactData[] | null;
    StatusCode?: number;
    Message?: string | null;
};
export type WebApiModulesPluginsAzureAdUsersImportGroupRequest = {
    AzureADGroupId?: string | null;
};
export type WebApiModulesPluginsAzureAdUserData = {
    UsersId?: string | null;
    FirstName?: string | null;
    LastName?: string | null;
    Email?: string | null;
    SourceId?: string | null;
};
export type WebApiModulesPluginsAzureAdUsersImportGroupResponse = {
    Users?: WebApiModulesPluginsAzureAdUserData[] | null;
    StatusCode?: number;
    Message?: string | null;
};
export type WebApiModulesPluginsBoxedUpBoxedUpSignUpUserErp = {
    integ_access_endpoint: string;
    integ_access_token: string;
    integ_source_id: string;
    integ_user_id: string;
};
export type WebApiModulesPluginsBoxedUpBoxedUpSignUpUser = {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    password_confirmation: string;
    erp_integration: WebApiModulesPluginsBoxedUpBoxedUpSignUpUserErp;
};
export type WebApiModulesPluginsBoxedUpBoxedUpSignUpRequest = {
    user?: WebApiModulesPluginsBoxedUpBoxedUpSignUpUser;
};
export type WebApiModulesPluginsBoxedUpRwBoxedUpRequestWebApiModulesPluginsBoxedUpBoxedUpSignUpRequest = {
    BoxedUpBaseUrl: string;
    BoxedUpRequest: WebApiModulesPluginsBoxedUpBoxedUpSignUpRequest;
};
export type WebApiModulesPluginsBoxedUpBoxedUpSignUpResponseUserErp = {
    integ_access_endpoint?: string | null;
    integ_access_token?: string | null;
    integ_source_id?: string | null;
};
export type WebApiModulesPluginsBoxedUpBoxedUpSignUpResponseUser = {
    first_name?: string | null;
    last_name?: string | null;
    email?: string | null;
    username?: string | null;
    password?: string | null;
    password_confirmation?: string | null;
    erp_integration?: WebApiModulesPluginsBoxedUpBoxedUpSignUpResponseUserErp;
};
export type WebApiModulesPluginsBoxedUpBoxedUpSignUpResponse = {
    user?: WebApiModulesPluginsBoxedUpBoxedUpSignUpResponseUser;
    error?: {
        [key: string]: string[] | null;
    } | null;
};
export type WebApiModulesPluginsBoxedUpRwBoxedUpTokenResponseWebApiModulesPluginsBoxedUpBoxedUpSignUpResponse = {
    RentalWorksAccessToken?: string | null;
    RentalWorksAccessTokenExpiration?: string | null;
    BoxedUpResponse?: WebApiModulesPluginsBoxedUpBoxedUpSignUpResponse;
};
export type WebApiModulesPluginsBoxedUpStatusResponseWebApiModulesPluginsBoxedUpRwBoxedUpTokenResponseWebApiModulesPluginsBoxedUpBoxedUpSignUpResponse = {
    Success?: boolean;
    StatusText?: string | null;
    TokenResponse?: WebApiModulesPluginsBoxedUpRwBoxedUpTokenResponseWebApiModulesPluginsBoxedUpBoxedUpSignUpResponse;
};
export type WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequestUserErp = {
    integ_access_endpoint: string;
    integ_access_token: string;
    integ_source_id: string;
    integ_user_id: string;
};
export type WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequestUser = {
    username?: string | null;
    password?: string | null;
    erp_integration?: WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequestUserErp;
};
export type WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequest = {
    user?: WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequestUser;
};
export type WebApiModulesPluginsBoxedUpRwBoxedUpRequestWebApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequest = {
    BoxedUpBaseUrl: string;
    BoxedUpRequest: WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequest;
};
export type WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenResponseErpIntegration = {
    integ_access_endpoint?: string | null;
    integ_access_token?: string | null;
    integ_source_id?: string | null;
};
export type WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenResponse = {
    user_id?: string | null;
    username?: string | null;
    email?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    timezone?: string | null;
    erp_integration?: WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenResponseErpIntegration;
    boxedup_endpoint?: string | null;
};
export type WebApiModulesPluginsBoxedUpStatusResponseWebApiModulesPluginsBoxedUpBoxedUpUpdateTokenResponse = {
    Success?: boolean;
    StatusText?: string | null;
    TokenResponse?: WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenResponse;
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
export type WebApiModulesPluginsCreditCardCreditCardLog = {
    /** Format: Text, IsPrimaryKey: true */
    CreditCardLogId?: number;
    /** Format: Text */
    CreditCardPlugin?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    /** Format: Date */
    TransactionDate?: string | null;
    /** Format: Date */
    ExpirationDate?: string | null;
    /** Format: Integer */
    HoldDays?: number;
    /** Format: Text */
    TransactionId?: string | null;
    /** Format: Decimal */
    Amount?: number | null;
    /** Format: Text */
    TransactionType?: string | null;
    /** Format: Text */
    PinPadCode?: string | null;
    /** Format: Text */
    ApiUrl?: string | null;
    /** Format: Text */
    ApiRequestMethod?: string | null;
    /** Format: Text */
    ApiRequestHeader?: string | null;
    /** Format: Text */
    ApiRequestBody?: string | null;
    /** Format: Text */
    ApiResponseStatusCode?: string | null;
    /** Format: Text */
    ApiResponseHeader?: string | null;
    /** Format: Text */
    ApiResponseBody?: string | null;
    /** Format: Boolean */
    ResponseSuccess?: boolean;
    /** Format: Text */
    ResponseStatus?: string | null;
    /** Format: Text */
    ResponseStatusText?: string | null;
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
export type WebApiModulesPluginsCreditCardCreditCardLogRead = {
    /** Format: Text, IsPrimaryKey: true */
    CreditCardLogId?: number;
    /** Format: Text */
    CreditCardPlugin?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    /** Format: Date */
    TransactionDate?: string | null;
    /** Format: Date */
    ExpirationDate?: string | null;
    /** Format: Integer */
    HoldDays?: number;
    /** Format: Text */
    TransactionId?: string | null;
    /** Format: Decimal */
    Amount?: number | null;
    /** Format: Text */
    TransactionType?: string | null;
    /** Format: Text */
    PinPadCode?: string | null;
    /** Format: Text */
    ApiUrl?: string | null;
    /** Format: Text */
    ApiRequestMethod?: string | null;
    /** Format: Text */
    ApiRequestHeader?: string | null;
    /** Format: Text */
    ApiRequestBody?: string | null;
    /** Format: Text */
    ApiResponseStatusCode?: string | null;
    /** Format: Text */
    ApiResponseHeader?: string | null;
    /** Format: Text */
    ApiResponseBody?: string | null;
    /** Format: Boolean */
    ResponseSuccess?: boolean;
    /** Format: Text */
    ResponseStatus?: string | null;
    /** Format: Text */
    ResponseStatusText?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardCreditCardLogLogic = {
    Items?: WebApiModulesPluginsCreditCardCreditCardLog[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardCreditCardLogLogicRead = {
    Items?: WebApiModulesPluginsCreditCardCreditCardLogRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
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
    ServerVersion?: string | null;
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
    ServerVersion?: string | null;
    _Translation?: FwStandardDataFwTranslatedValue[] | null;
};
export type FwCoreControllersFwDataControllerDoExportExcelXlsxExportFileAsyncResult = {
    downloadUrl?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPreAuthorization = {
    /** Format: Integer, IsPrimaryKey: true */
    CreditCardPreAuthorizationId?: number;
    /** Format: Text */
    TransactionId?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    /** Format: Date */
    TransactionDate?: string | null;
    /** Format: Date */
    ExpirationDate?: string | null;
    /** Format: Integer */
    HoldDays?: number | null;
    HoldDaysRemaining?: number | null;
    /** Format: Decimal */
    Amount?: number | null;
    /** Format: Decimal */
    FeePercent?: number | null;
    /** Format: Decimal */
    FeeAmount?: number | null;
    /** Format: Decimal */
    CapturedAmount?: number | null;
    /** Format: Text */
    Status?: string | null;
    /** Format: Integer */
    CreditCardPinPadId?: number | null;
    CreditCardPinPadCode?: string | null;
    CreditCardPinPadDescription?: string | null;
    /** Format: Text */
    CreditCardNumber?: string | null;
    /** Format: Date */
    CreditCardExpirationDate?: string | null;
    /** Format: Integer */
    CreditCardName?: string | null;
    /** Format: UTCDateTime, Required: true */
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
export type WebApiModulesPluginsCreditCardCreditCardPreAuthorizationRead = {
    /** Format: Integer, IsPrimaryKey: true */
    CreditCardPreAuthorizationId?: number;
    /** Format: Text */
    TransactionId?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    /** Format: Date */
    TransactionDate?: string | null;
    /** Format: Date */
    ExpirationDate?: string | null;
    /** Format: Integer */
    HoldDays?: number | null;
    HoldDaysRemaining?: number | null;
    /** Format: Decimal */
    Amount?: number | null;
    /** Format: Decimal */
    FeePercent?: number | null;
    /** Format: Decimal */
    FeeAmount?: number | null;
    AmountWithFee?: number | null;
    /** Format: Decimal */
    CapturedAmount?: number | null;
    /** Format: Text */
    Status?: string | null;
    /** Format: Integer */
    CreditCardPinPadId?: number | null;
    CreditCardPinPadCode?: string | null;
    CreditCardPinPadDescription?: string | null;
    /** Format: Text */
    CreditCardNumber?: string | null;
    /** Format: Date */
    CreditCardExpirationDate?: string | null;
    /** Format: Integer */
    CreditCardName?: string | null;
    /** Format: UTCDateTime, Required: true */
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
export type FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardCreditCardPreAuthorizationLogic = {
    Items?: WebApiModulesPluginsCreditCardCreditCardPreAuthorization[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardCreditCardPreAuthorizationLogicRead = {
    Items?: WebApiModulesPluginsCreditCardCreditCardPreAuthorizationRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPreAuthorizationRequest = {
    PayWith: WebApiModulesPluginsCreditCardCreditCardPreAuthorizationRequest_PaymentTypes;
    OrderId: string;
    AmountToPay: number;
    FeePercent?: number;
    FeeAmount?: number;
    CreditCardPinPadId?: number | null;
    DealNumber: string;
    /** Either 'CUSTOMER' or 'DEAL'.  This gets set on the invoice. */
    PaymentBy?: string | null;
    DealId?: string | null;
    CustomerId?: string | null;
    /** The AccountId of the CreditCard to Use */
    AccountId?: string | null;
    /** The tokenized card number or blank if this initiates a process to collect input from a PIN Pad. */
    Account?: string | null;
    /** Required if passing Account */
    ExpirationDate?: string | null;
    CardholderName?: string | null;
    /** Save the credit card on either the 'CUSTOMER' or 'DEAL' record. */
    CreditCardSource?: string | null;
    SaveCreditCard?: boolean;
    DefaultAccount?: boolean;
    AuthorizationOnFile?: boolean;
    Address?: string | null;
    Address2?: string | null;
    City?: string | null;
    Region?: string | null;
    PostalCode?: string | null;
    CountryId?: string | null;
    /** The tokenized track data from a credit card reader */
    TrackData?: string | null;
    /** Required when RequestType is TokenizedCardNumber */
    EmailFrom?: string | null;
    /** Required when RequestType is TokenizedCardNumber */
    EmailTo?: string | null;
    /** Required when RequestType is TokenizedCardNumber */
    EmailSubject?: string | null;
    /** Required when RequestType is TokenizedCardNumber */
    EmailBody?: string | null;
};
export type WebApiModulesBillingReceiptReceiptInvoice = {
    InvoiceReceiptId?: string | null;
    InvoiceId?: string | null;
    Amount?: number;
};
export type WebApiModulesBillingReceiptReceiptCredit = {
    CreditReceiptId?: string | null;
    CreditId?: string | null;
    CheckNumber?: string | null;
    Amount?: number;
    RefundCreditCardTransactionId?: string | null;
};
export type WebApiModulesBillingReceiptReceipt = {
    /** Format: Text, IsPrimaryKey: true */
    ReceiptId?: string | null;
    /** Format: Date */
    ReceiptDate?: string | null;
    /** Format: Text */
    LocationId?: string | null;
    LocationCode?: string | null;
    Location?: string | null;
    /** Format: Text */
    CustomerId?: string | null;
    Customer?: string | null;
    /** Format: Text */
    DealId?: string | null;
    Deal?: string | null;
    /** Format: Text */
    PaymentBy?: string | null;
    CustomerDealId?: string | null;
    CustomerDeal?: string | null;
    /** Format: Text, Required: true */
    PaymentTypeId?: string | null;
    PaymentType?: string | null;
    PaymentTypeType?: string | null;
    PaymentTypeExportPaymentMethod?: string | null;
    /** Format: Text */
    CheckNumber?: string | null;
    /** Format: Decimal, Total digits: 9, Decimal places: 2 */
    PaymentAmount?: number | null;
    /** Format: Text, Required: true */
    AppliedById?: string | null;
    AppliedBy?: string | null;
    /** Format: Text */
    ModifiedById?: string | null;
    ModifiedBy?: string | null;
    /** Format: Text */
    PaymentMemo?: string | null;
    /** Format: Text */
    RecType?: string | null;
    ChargeBatchId?: string | null;
    ChargeBatchNumber?: string | null;
    /** Format: Text, Required: true */
    CurrencyId?: string | null;
    CurrencyCode?: string | null;
    CurrencySymbol?: string | null;
    OfficeLocationDefaultCurrencyId?: string | null;
    /** Format: Text */
    OverPaymentId?: string | null;
    InvoiceDataList?: WebApiModulesBillingReceiptReceiptInvoice[] | null;
    CreditDataList?: WebApiModulesBillingReceiptReceiptCredit[] | null;
    CreateOverpayment?: boolean | null;
    CreateDepletingDeposit?: boolean | null;
    DealDepositId?: string | null;
    DealDepositCheckNumber?: string | null;
    CustomerDepositId?: string | null;
    CustomerDepositCheckNumber?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    OrderDescription?: string | null;
    /** Format: Text */
    TransactionId?: string | null;
    /** Format: Text */
    RefundingTransactionId?: string | null;
    /** Format: Text */
    CreditCardNumber?: string | null;
    /** Format: Date */
    CreditCardExpirationDate?: string | null;
    /** Format: Text */
    CreditCardName?: string | null;
    CreditCardAccountId?: string | null;
    /** 'NEWCARD', 'SAVEDCARD', 'PINPAD' Only used for submitting new credit card receipts.
    NEWCARD - you are submitting a tokenized new credit card that was input manually.
    SAVEDCARD - you are paying with a saved credit card profile.
    PINPAD - Customer is inputing their card with a PINPad device */
    CreditCardPaymentMode?: string | null;
    CreditCardPinPadId?: number | null;
    /** The tokenized credit card number. Only used for submitting new credit card receipts. */
    NewCreditCardAccountToken?: string | null;
    /** Credit card expiration date MM/YY. Only used for submitting new credit card receipts. */
    NewCreditCardExpirationDate?: string | null;
    /** Card holder name. Only used for submitting new credit card receipts. */
    NewCreditCardCardholderName?: string | null;
    /** A flag indicating whether to create a saved credit card profile. Only used for submitting new credit card receipts when CreditCardPaymentMode is 'NEWCARD'. */
    NewCreditCardSaveCreditCard?: boolean | null;
    CreditCardDefaultAccount?: boolean | null;
    /** A flag indicating that customer has given consent to use a saved credit card. Only used for submitting new credit card receipts when NewCreditCardSaveCreditCard is true. */
    NewCreditCardAuthorizationOnFile?: boolean | null;
    /** Address for AVS check. Only used for submitting new credit card receipts. */
    NewCreditCardAddress?: string | null;
    /** Address 2 for AVS check. Only used fwhenor submitting new credit card receipts. */
    NewCreditCardAddress2?: string | null;
    /** City for AVS check. (only used when submitting new credit card receipts) */
    NewCreditCardCity?: string | null;
    /** Region/State for AVS check. Only used when submitting new credit card receipts. */
    NewCreditCardRegion?: string | null;
    /** Postal/Zip Code for AVS check. Only used when submitting new credit card receipts. */
    NewCreditCardPostalCode?: string | null;
    /** A RentalWorks CountryId for AVS check. Only used when submitting new credit card receipts. */
    NewCreditCardCountryId?: string | null;
    /** Format: UTCDateTime */
    DateStamp?: string;
    RefundingReceiptId?: string | null;
    IsCreditCardReceiptVoided?: boolean;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    FeePercent?: number | null;
    /** Format: Decimal, Total digits: 9, Decimal places: 2 */
    PaymentTypeFee?: number | null;
    TotalWithPaymentTypeFee?: number | null;
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
export type WebApiModulesBillingReceiptReceiptRead = {
    /** Format: Text, IsPrimaryKey: true */
    ReceiptId?: string | null;
    /** Format: Date */
    ReceiptDate?: string | null;
    /** Format: Text */
    LocationId?: string | null;
    LocationCode?: string | null;
    Location?: string | null;
    /** Format: Text */
    CustomerId?: string | null;
    Customer?: string | null;
    /** Format: Text */
    DealId?: string | null;
    Deal?: string | null;
    /** Format: Text */
    PaymentBy?: string | null;
    CustomerDealId?: string | null;
    CustomerDeal?: string | null;
    /** Format: Text, Required: true */
    PaymentTypeId?: string | null;
    PaymentType?: string | null;
    PaymentTypeType?: string | null;
    PaymentTypeExportPaymentMethod?: string | null;
    /** Format: Text */
    CheckNumber?: string | null;
    /** Format: Decimal, Total digits: 9, Decimal places: 2 */
    PaymentAmount?: number | null;
    /** Format: Text, Required: true */
    AppliedById?: string | null;
    AppliedBy?: string | null;
    /** Format: Text */
    ModifiedById?: string | null;
    ModifiedBy?: string | null;
    /** Format: Text */
    PaymentMemo?: string | null;
    /** Format: Text */
    RecType?: string | null;
    ChargeBatchId?: string | null;
    ChargeBatchNumber?: string | null;
    /** Format: Text, Required: true */
    CurrencyId?: string | null;
    CurrencyCode?: string | null;
    CurrencySymbol?: string | null;
    OfficeLocationDefaultCurrencyId?: string | null;
    /** Format: Text */
    OverPaymentId?: string | null;
    InvoiceDataList?: WebApiModulesBillingReceiptReceiptInvoice[] | null;
    CreditDataList?: WebApiModulesBillingReceiptReceiptCredit[] | null;
    CreateOverpayment?: boolean | null;
    CreateDepletingDeposit?: boolean | null;
    DealDepositId?: string | null;
    DealDepositCheckNumber?: string | null;
    CustomerDepositId?: string | null;
    CustomerDepositCheckNumber?: string | null;
    /** Format: Text */
    OrderId?: string | null;
    OrderDescription?: string | null;
    /** Format: Text */
    TransactionId?: string | null;
    /** Format: Text */
    RefundingTransactionId?: string | null;
    /** Format: Text */
    CreditCardNumber?: string | null;
    /** Format: Date */
    CreditCardExpirationDate?: string | null;
    /** Format: Text */
    CreditCardName?: string | null;
    CreditCardAccountId?: string | null;
    /** 'NEWCARD', 'SAVEDCARD', 'PINPAD' Only used for submitting new credit card receipts.
    NEWCARD - you are submitting a tokenized new credit card that was input manually.
    SAVEDCARD - you are paying with a saved credit card profile.
    PINPAD - Customer is inputing their card with a PINPad device */
    CreditCardPaymentMode?: string | null;
    CreditCardPinPadId?: number | null;
    /** The tokenized credit card number. Only used for submitting new credit card receipts. */
    NewCreditCardAccountToken?: string | null;
    /** Credit card expiration date MM/YY. Only used for submitting new credit card receipts. */
    NewCreditCardExpirationDate?: string | null;
    /** Card holder name. Only used for submitting new credit card receipts. */
    NewCreditCardCardholderName?: string | null;
    /** A flag indicating whether to create a saved credit card profile. Only used for submitting new credit card receipts when CreditCardPaymentMode is 'NEWCARD'. */
    NewCreditCardSaveCreditCard?: boolean | null;
    CreditCardDefaultAccount?: boolean | null;
    /** A flag indicating that customer has given consent to use a saved credit card. Only used for submitting new credit card receipts when NewCreditCardSaveCreditCard is true. */
    NewCreditCardAuthorizationOnFile?: boolean | null;
    /** Address for AVS check. Only used for submitting new credit card receipts. */
    NewCreditCardAddress?: string | null;
    /** Address 2 for AVS check. Only used fwhenor submitting new credit card receipts. */
    NewCreditCardAddress2?: string | null;
    /** City for AVS check. (only used when submitting new credit card receipts) */
    NewCreditCardCity?: string | null;
    /** Region/State for AVS check. Only used when submitting new credit card receipts. */
    NewCreditCardRegion?: string | null;
    /** Postal/Zip Code for AVS check. Only used when submitting new credit card receipts. */
    NewCreditCardPostalCode?: string | null;
    /** A RentalWorks CountryId for AVS check. Only used when submitting new credit card receipts. */
    NewCreditCardCountryId?: string | null;
    /** Format: UTCDateTime */
    DateStamp?: string;
    RefundingReceiptId?: string | null;
    IsCreditCardReceiptVoided?: boolean;
    /** Format: Decimal, Total digits: 5, Decimal places: 2 */
    FeePercent?: number | null;
    /** Format: Decimal, Total digits: 9, Decimal places: 2 */
    PaymentTypeFee?: number | null;
    TotalWithPaymentTypeFee?: number | null;
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
export type WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponse = {
    PluginSpecificFields?: {
        [key: string]: any | null;
    } | null;
    Amount: number;
    FeePercent?: number;
    FeeAmount?: number;
    Receipt?: WebApiModulesBillingReceiptReceipt;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponseStatusCodes;
    CardType?: WebApiModulesPluginsCreditCardProcessCreditCardPaymentCardTypes;
    CardEntryMode?: string | null;
    StatusText?: string | null;
    CreditCardName?: string | null;
    CreditCardNumber?: string | null;
    CreditCardExpirationDate?: string | null;
    TransactionId?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponseRead = {
    PluginSpecificFields?: {
        [key: string]: any | null;
    } | null;
    Amount: number;
    FeePercent?: number;
    FeeAmount?: number;
    Receipt?: WebApiModulesBillingReceiptReceiptRead;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponseStatusCodes;
    CardType?: WebApiModulesPluginsCreditCardProcessCreditCardPaymentCardTypes;
    CardEntryMode?: string | null;
    StatusText?: string | null;
    CreditCardName?: string | null;
    CreditCardNumber?: string | null;
    CreditCardExpirationDate?: string | null;
    TransactionId?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPreAuthorizationResponse = {
    PluginResponse?: WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponse;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponseStatusCodes;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPreAuthorizationResponseRead = {
    PluginResponse?: WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponseRead;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponseStatusCodes;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationForOrderRequest = {
    OrderId: string;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginCaptureResponse = {
    TransactionId?: string | null;
    Amount?: number;
    Receipt?: WebApiModulesBillingReceiptReceipt;
    CardEntryMode?: string | null;
    CardType?: WebApiModulesPluginsCreditCardProcessCreditCardPaymentCardTypes;
    CardName?: string | null;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginCaptureResponseStatusCodes;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginCaptureResponseRead = {
    TransactionId?: string | null;
    Amount?: number;
    Receipt?: WebApiModulesBillingReceiptReceiptRead;
    CardEntryMode?: string | null;
    CardType?: WebApiModulesPluginsCreditCardProcessCreditCardPaymentCardTypes;
    CardName?: string | null;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginCaptureResponseStatusCodes;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationForOrderResponse = {
    CapturePreAuthorizationResults?: WebApiModulesPluginsCreditCardCreditCardPluginCaptureResponse[] | null;
};
export type WebApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationForOrderResponseRead = {
    CapturePreAuthorizationResults?: WebApiModulesPluginsCreditCardCreditCardPluginCaptureResponseRead[] | null;
};
export type WebApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationRequest = {
    CreditCardPreAuthorizationId: number;
    Amount: number;
    FeeAmount?: number | null;
    FeePercent?: number | null;
};
export type WebApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationResponse = {
    PluginResponse?: WebApiModulesPluginsCreditCardCreditCardPluginCaptureResponse;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginCaptureResponseStatusCodes;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationResponseRead = {
    PluginResponse?: WebApiModulesPluginsCreditCardCreditCardPluginCaptureResponseRead;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginCaptureResponseStatusCodes;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardUpdatePreAuthorizationStatusRequest = {
    CreditCardPreAuthorizationId?: number;
    TransactionId?: string | null;
    Status?: WebApiModulesPluginsCreditCardUpdatePreAuthorizationStatusCodes;
};
export type WebApiModulesPluginsCreditCardCreditCardUpdatePreAuthorizationStatusResponse = {
    Success?: boolean;
    Status?: string | null;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardVoidPreAuthorizationRequest = {
    CreditCardPreAuthorizationId: number;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginVoidResponse = {
    /** true when the StatusCode is Approved, otherwise false */
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginVoidResponseStatusCodes;
    StatusText?: string | null;
    TransactionId?: string | null;
    IsPartial?: boolean;
};
export type WebApiModulesPluginsCreditCardCreditCardVoidPreAuthorizationResponse = {
    PluginResponse?: WebApiModulesPluginsCreditCardCreditCardPluginVoidResponse;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginVoidResponseStatusCodes;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardAccount = {
    ProfileId?: string | null;
    AccountId?: string | null;
    Nickname?: string | null;
    CardType?: WebApiModulesPluginsCreditCardProcessCreditCardPaymentCardTypes;
    Expiration?: string | null;
    Last4Digits?: string | null;
    CardOnFilePermission?: boolean | null;
    DefaultAccount?: boolean | null;
    CardholderName?: string | null;
    Address?: string | null;
    Address2?: string | null;
    City?: string | null;
    Region?: string | null;
    PostalCode?: string | null;
    Country?: string | null;
    Token?: string | null;
    ChargePaymentTypeId?: string | null;
    ChargePaymentType?: string | null;
    CardUseType?: WebApiModulesPluginsCreditCardProcessCreditCardCardUsageTypes;
    CardUseString?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardAccount = {
    Items?: WebApiModulesPluginsCreditCardAccount[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateAccountRequest = {
    AccountId?: string | null;
    /** 20-digit profile ID and (optional) 3-digit account ID string in the format <profile id>/<account id>, required to update an existing profile. */
    Profile?: string | null;
    /** "Y" to assign as default account */
    IsDefaultAccount?: boolean | null;
    /** "Y" to update profile data with non-empty request data only as opposed to full profile replacement including empty values */
    ProfileUpdate?: boolean | null;
    /** Optionally specifies whether or not the cardholder provided consent to store their payment details in a profile.
    Specify one of the following values:
    Y - The cardholder provided their consent to store and reuse their payment details.
    N - The cardholder did not provide their consent.
    Defaults to N if not provided. */
    CardOnFilePermission?: boolean | null;
    /** Specifies whether or not the profile is set to opt out of the CardPointe Account Updater service. Requires the merchant account to be enrolled in the Card Account Updater add-on.
    Specify one of the following values:
    [Y - Yes; updates are not retrieved for this profile.]
    [N - No; updates are retrieved for this profile.]
    [Defaults to N if not provided.] */
    AccountUpdaterOptOut?: boolean | null;
    /** One of PPAL, PAID, GIFT, PDEBIT, otherwise not required */
    AccountType?: string | null;
    /** One of the following:
    [CardSecure Token - See the CardSecure Developer Guide for more information.]
    [Clear-text card number]
    [Bank Account Number - Account(s) must be entitled with electronic check capability. When using this field, the bankaba field is also required.] */
    Account?: string | null;
    /** Bank routing (ABA) number, ECHK only */
    BankAba?: string | null;
    /** Card expiration in one of the following formats:
    [MMYY]
    [YYYYM (for single-digit months)]
    [YYYYMM]
    [YYYYMMDD]
    [Not required for eCheck (ACH) or digital wallet (for example, Apple Pay or Google Pay) payments.] */
    Expiry?: string | null;
    /** Account name; optional for credit cards, but required for E-check/ACH authorizations. */
    Name?: string | null;
    /** Account street address. */
    Address?: string | null;
    /** Account street address 2. */
    Address2?: string | null;
    /** Account city. */
    City?: string | null;
    /** Account US state, Mexican state, or Canadian province. */
    Region?: string | null;
    /** Country foreign key identifier */
    CountryId?: string | null;
    /** Account phone; optional for credit cards, but required for ACH(ECHK or ESAV) transactions. */
    Phone?: string | null;
    /** Account postal code. */
    PostalCode?: string | null;
    /** Company name associated with the account. if country is "US", must be 5 or 9 digits, otherwise any alphanumeric string is accepted. */
    Company?: string | null;
    /** E-Mail address of the account holder */
    Email?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateAccountResponse = {
    /** true when the StatusCode is Approved, otherwise false */
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateProfileResponseStatusCodes;
    StatusText?: string | null;
    /** Primary identifier to access profiles */
    ProfileId?: string | null;
    /** Account identifier within a profile */
    AccountId?: string | null;
    /** A - Approved
    B - Retry
    C - Declined */
    ResponseStatus?: string | null;
    /** The token included in the request. If a card number or bank account number was included in the request, returns a new token generated for that account. */
    Token?: string | null;
    /** Alpha-numeric response code that represents the description of the response. */
    ResponseCode?: string | null;
    /** Text description of response. */
    ResponseText?: string | null;
    CardType?: WebApiModulesPluginsCreditCardProcessCreditCardPaymentCardTypes;
    /** Card Expiration. */
    Expiry?: string | null;
    /** Account name. */
    CardholderName?: string | null;
    /** Account street address. */
    Address?: string | null;
    /** Account street address 2. */
    Address2?: string | null;
    /** Account city. */
    City?: string | null;
    /** US State, Mexican State, Canadian Province. */
    Region?: string | null;
    /** Account country(2 character country code). */
    Country?: string | null;
    /** Account phone. */
    Phone?: string | null;
    /** Account postal code. */
    Postal?: string | null;
    /** Email address of the account holder. */
    Email?: string | null;
    /** Company name associated with the account. */
    Company?: string | null;
    /** Y marks the default account referenced when a profile ID is used without an associated account ID. */
    DefaultAccount?: boolean | null;
    /** Identifies if the card is a government issued card. */
    GsaCard?: boolean | null;
    /** Identifies whether or not the profile is set to opt out of the CardPointe Account Updater service.
    Y = Yes (updates are not retrieved for this profile)
    N = No (updates are retrieved for this profile) */
    AccountUpdaterOptOut?: boolean | null;
    /** Identifies whether or not the cardholder provided consent to store their payment details in a profile. One of the following values:
    [Y - The cardholder provided their consent to store and reuse their payment details.]
    [N - The cardholder did not provide their consent.] */
    CardOnFilePermission?: boolean | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginDeleteAccountResponse = {
    /** true when the StatusCode is Ok, otherwise false */
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginDeleteProfileResponseStatusCodes;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardOrderDeposit = {
    OrderId?: string | null;
    TransactionDate?: string | null;
    PayType?: string | null;
    CheckOrReferenceNumber?: string | null;
    Amount?: number | null;
    FeePercent?: number | null;
    PaymentTypeFee?: number | null;
    AmountWithFee?: number | null;
    CreditCardName?: string | null;
    CreditCardExpiration?: string | null;
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
export type WebApiModulesPluginsCreditCardOrderDepositRead = {
    OrderId?: string | null;
    TransactionDate?: string | null;
    PayType?: string | null;
    CheckOrReferenceNumber?: string | null;
    Amount?: number | null;
    FeePercent?: number | null;
    PaymentTypeFee?: number | null;
    AmountWithFee?: number | null;
    CreditCardName?: string | null;
    CreditCardExpiration?: string | null;
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
export type FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardOrderDepositLogic = {
    Items?: WebApiModulesPluginsCreditCardOrderDeposit[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardOrderDepositLogicRead = {
    Items?: WebApiModulesPluginsCreditCardOrderDepositRead[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardOrderDepositRequest = {
    PayWith: WebApiModulesPluginsCreditCardCreditCardOrderDepositRequest_PayWithTypes;
    OrderId: string;
    AmountToPay: number;
    FeePercent?: number | null;
    FeeAmount?: number | null;
    CreditCardPinPadId?: number | null;
    DealNumber: string;
    PaymentTypeId?: string | null;
    EmailFrom?: string | null;
    EmailTo?: string | null;
    EmailSubject?: string | null;
    EmailBody?: string | null;
    /** The AccountId of the CreditCard to Use */
    AccountId?: string | null;
    /** The tokenized card number or blank if this initiates a process to collect input from a PIN Pad. */
    Account?: string | null;
    /** Required if passing Account */
    ExpirationDate?: string | null;
    CardholderName?: string | null;
    /** Save the credit card on either the 'CUSTOMER' or 'DEAL' record. */
    CreditCardSource?: string | null;
    SaveCreditCard?: boolean;
    DefaultAccount?: boolean;
    AuthorizationOnFile?: boolean;
    Address?: string | null;
    Address2?: string | null;
    City?: string | null;
    Region?: string | null;
    PostalCode?: string | null;
    CountryId?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardOrderDepositResponse = {
    PluginResponse?: WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponse;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponseStatusCodes;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardOrderDepositResponseRead = {
    PluginResponse?: WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponseRead;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponseStatusCodes;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardRefundRequest = {
    ReceiptId: string;
    CreditCardPinPadId: number;
    RefundAmount: number;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginRefundResponse = {
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginRefundResponseStatusCodes;
    StatusText?: string | null;
    TransactionId?: string | null;
    CardEntryMode?: string | null;
    CardType?: WebApiModulesPluginsCreditCardProcessCreditCardPaymentCardTypes;
    Amount?: number | null;
    IsPartial?: boolean;
    IsVoid?: boolean;
};
export type WebApiModulesPluginsCreditCardCreditCardRefundResponse = {
    PluginResponse?: WebApiModulesPluginsCreditCardCreditCardPluginRefundResponse;
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginRefundResponseStatusCodes;
    StatusText?: string | null;
};
export type WebApiModulesPluginsCreditCardProcessCreditCardInfo = {
    OrderId?: string | null;
    OrderNumber?: string | null;
    OrderDescription?: string | null;
    OrderStatus?: string | null;
    DealId?: string | null;
    DealNumber?: string | null;
    Deal?: string | null;
    CustomerId?: string | null;
    CustomerNumber?: string | null;
    Customer?: string | null;
    Totals_Weekly_GrossTotal?: number;
    Totals_Weekly_Discount?: number;
    Totals_Weekly_SubTotal?: number;
    Totals_Weekly_Tax?: number;
    Totals_Weekly_GrandTotal?: number;
    Totals_Period_GrossTotal?: number;
    Totals_Period_Discount?: number;
    Totals_Period_SubTotal?: number;
    Totals_Period_Tax?: number;
    Totals_Period_GrandTotal?: number;
    Totals_Replacement_ReplacementCost?: number;
    Totals_Replacement_DepositPercentage?: number;
    Totals_Replacement_PreAuthorization_RequiredAmount?: number;
    Totals_Replacement_PreAuthorization_CurrentTotal?: number;
    Totals_Replacement_PreAuthorization_AmountDue?: number;
    Payment_TotalAmount?: number;
    Payment_AmountToPay?: number;
    PINPad_Code?: string | null;
    PINPad_Description?: string | null;
    LocationCode?: string | null;
    AgentBarcode?: string | null;
    CurrencyId?: string | null;
    CurrencyCode?: string | null;
    LocationId?: string | null;
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
export type WebApiModulesPluginsCreditCardProcessCreditCardInfoRead = {
    RecordTitle?: string | null;
    OrderId?: string | null;
    OrderNumber?: string | null;
    OrderDescription?: string | null;
    OrderStatus?: string | null;
    DealId?: string | null;
    DealNumber?: string | null;
    Deal?: string | null;
    CustomerId?: string | null;
    CustomerNumber?: string | null;
    Customer?: string | null;
    Totals_Weekly_GrossTotal?: number;
    Totals_Weekly_Discount?: number;
    Totals_Weekly_SubTotal?: number;
    Totals_Weekly_Tax?: number;
    Totals_Weekly_GrandTotal?: number;
    Totals_Period_GrossTotal?: number;
    Totals_Period_Discount?: number;
    Totals_Period_SubTotal?: number;
    Totals_Period_Tax?: number;
    Totals_Period_GrandTotal?: number;
    Totals_Replacement_ReplacementCost?: number;
    Totals_Replacement_DepositPercentage?: number;
    Totals_Replacement_DepositDue?: number;
    Totals_Replacement_PreAuthorization_RequiredAmount?: number;
    Totals_Replacement_PreAuthorization_CurrentTotal?: number;
    Totals_Replacement_PreAuthorization_AmountDue?: number;
    Payment_TotalAmount?: number;
    Payment_AmountToPay?: number;
    PINPad_Code?: string | null;
    PINPad_Description?: string | null;
    LocationCode?: string | null;
    AgentBarcode?: string | null;
    CurrencyId?: string | null;
    CurrencyCode?: string | null;
    LocationId?: string | null;
    AuditNote?: string | null;
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
export type WebApiModulesPluginsCreditCardProcessCreditCardPaymentType = {
    PaymentTypeId?: string | null;
    PaymentType?: string | null;
    PaymentTypeType?: string | null;
    FeePercent?: number | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardProcessCreditCardPaymentType = {
    Items?: WebApiModulesPluginsCreditCardProcessCreditCardPaymentType[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginVoidReceiptRequest = {
    ReceiptId: string;
    Amount?: number | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginGetSettingsResponse = {
    /** Indicates if CVV is enabled on the merchant account */
    UseCvv?: boolean;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginLocation = {
    LocationId?: string | null;
    Location?: string | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginGetDefaultSurchargeAmountResponse = {
    /** true when the StatusCode is Ok, otherwise false */
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginGetDefaultSurchargeAmountResponseStatusCodes;
    StatusText?: string | null;
    FeePercent?: number | null;
    FeeAmount?: number | null;
    TotalWithFee?: number | null;
};
export type WebApiModulesPluginsCreditCardCreditCardPluginBinResponse = {
    Success?: boolean;
    Status?: WebApiModulesPluginsCreditCardCreditCardPluginBinResponseStatusCodes;
    StatusText?: string | null;
    PaymentTypeId?: string | null;
    PaymentType?: string | null;
    CardType?: string | null;
    CardUseType?: string | null;
    CardUseString?: string | null;
};
export type WebApiModulesAccountServicesHubSpotGetHubSpotRefreshTokenBool = {
    hasRefreshToken?: boolean;
};
export type WebApiModulesAccountServicesHubSpotDeleteHubSpotTokens = {
    message?: string | null;
};
export type WebApiModulesPluginsQuickbooksOnlineQuickBooksOnlinePluginLogicLocation = {
    LocationId?: string | null;
    LocationName?: string | null;
    LastConnected?: string | null;
    ExpiresIn?: string | null;
    Expired?: boolean;
};
export type WebApiModulesPluginsQuickbooksOnlineQuickBooksOnlinePluginLogicRwToQboLocations = {
    Locations?: WebApiModulesPluginsQuickbooksOnlineQuickBooksOnlinePluginLogicLocation[] | null;
};
export type WebApiModulesPluginsQuickbooksOnlineQuickBooksOnlinePluginLogicQboAuth = {
    Code?: string | null;
    RealmId?: string | null;
    LocationId?: string | null;
};
export type WebApiModulesPluginsShopifyLocation = {
    LocationId?: string | null;
    LocationName?: string | null;
    StoreURL?: string | null;
    AdminAPIAccessToken?: string | null;
    SecretKey?: string | null;
    ShopifyStoreId?: string | null;
};
export type WebApiModulesPluginsShopifyShopifyLocations = {
    Locations?: WebApiModulesPluginsShopifyLocation[] | null;
};
export type WebApiModulesPluginsShopifyValidateShopUrlRequest = {
    Shop_URL?: string | null;
};
export type WebApiModulesPluginsShopifyValidateShopUrlResponse = {
    Shop_URL_Valid?: boolean;
};
export type WebApiModulesPluginsShopifyShopifyIntegrationStatusValue = {
    Installed?: boolean;
    Status?: string | null;
};
export type WebApiModulesPluginsShopifyShopifyIntegrationStatus = {
    StoreUrl?: WebApiModulesPluginsShopifyShopifyIntegrationStatusValue;
    AdminApiAccessToken?: WebApiModulesPluginsShopifyShopifyIntegrationStatusValue;
    StoreId?: WebApiModulesPluginsShopifyShopifyIntegrationStatusValue;
    SecretKey?: WebApiModulesPluginsShopifyShopifyIntegrationStatusValue;
    AccessScopes?: WebApiModulesPluginsShopifyShopifyIntegrationStatusValue;
    Theme?: WebApiModulesPluginsShopifyShopifyIntegrationStatusValue;
    CreateOrderWebhook?: WebApiModulesPluginsShopifyShopifyIntegrationStatusValue;
};
export type WebApiModulesPluginsShopifyEnableCreateOrderWebhookResponse = object;
export type WebApiModulesPluginsShopifyDisableCreateOrderWebhookResponse = object;
export type WebApiModulesIntegrationsShopifyShopifyInstallThemeResponse = object;
export type WebApiModulesIntegrationsShopifyShopifyUninstallThemeResponse = object;
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
export function postApiV1AzureadpluginLoadadcontactgroups(webApiModulesPluginsAzureAdGetAzureAdGroupsRequest?: WebApiModulesPluginsAzureAdGetAzureAdGroupsRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsAzureAdGetAzureAdGroupsResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/azureadplugin/loadadcontactgroups", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsAzureAdGetAzureAdGroupsRequest
    })));
}
export function postApiV1AzureadpluginImportgroupcontacts(webApiModulesPluginsAzureAdContactsImportGroupRequest?: WebApiModulesPluginsAzureAdContactsImportGroupRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsAzureAdContactsImportGroupResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/azureadplugin/importgroupcontacts", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsAzureAdContactsImportGroupRequest
    })));
}
export function postApiV1AzureadpluginLoadadusergroups(webApiModulesPluginsAzureAdGetAzureAdGroupsRequest?: WebApiModulesPluginsAzureAdGetAzureAdGroupsRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsAzureAdGetAzureAdGroupsResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/azureadplugin/loadadusergroups", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsAzureAdGetAzureAdGroupsRequest
    })));
}
export function postApiV1AzureadpluginImportgroupusers(webApiModulesPluginsAzureAdUsersImportGroupRequest?: WebApiModulesPluginsAzureAdUsersImportGroupRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsAzureAdUsersImportGroupResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/azureadplugin/importgroupusers", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsAzureAdUsersImportGroupRequest
    })));
}
/**
 * Call BoxedUp to signup for an account and provide a RentalWorks access token.
 */
export function postApiV1BoxeduppluginSignUp(webApiModulesPluginsBoxedUpRwBoxedUpRequestWebApiModulesPluginsBoxedUpBoxedUpSignUpRequest?: WebApiModulesPluginsBoxedUpRwBoxedUpRequestWebApiModulesPluginsBoxedUpBoxedUpSignUpRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsBoxedUpStatusResponseWebApiModulesPluginsBoxedUpRwBoxedUpTokenResponseWebApiModulesPluginsBoxedUpBoxedUpSignUpResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/boxedupplugin/sign_up", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsBoxedUpRwBoxedUpRequestWebApiModulesPluginsBoxedUpBoxedUpSignUpRequest
    })));
}
/**
 * Call BoxedUp to update their RentalWorks access token.
 */
export function postApiV1BoxeduppluginUpdateAccessToken(webApiModulesPluginsBoxedUpRwBoxedUpRequestWebApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequest?: WebApiModulesPluginsBoxedUpRwBoxedUpRequestWebApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsBoxedUpStatusResponseWebApiModulesPluginsBoxedUpBoxedUpUpdateTokenResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/boxedupplugin/update_access_token", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsBoxedUpRwBoxedUpRequestWebApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequest
    })));
}
/**
 * Mock service for testing BoxedUp's /user/3p/sign_up endpoint
 */
export function postApiV1BoxeduppluginQaUser3PSignUp(webApiModulesPluginsBoxedUpBoxedUpSignUpResponse?: WebApiModulesPluginsBoxedUpBoxedUpSignUpResponse, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsBoxedUpBoxedUpSignUpResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/boxedupplugin/qa/user/3p/sign_up", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsBoxedUpBoxedUpSignUpResponse
    })));
}
/**
 * Mock service for testing BoxedUp's /user/3p/update_access_token endpoint
 */
export function postApiV1BoxeduppluginQaUser3PUpdateAccessToken(webApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequest?: WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsBoxedUpBoxedUpUpdateTokenResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/boxedupplugin/qa/user/3p/update_access_token", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsBoxedUpBoxedUpUpdateTokenRequest
    })));
}
/**
 * Gets credit card transaction log records.
 */
export function getApiV1CreditcardpluginLog({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardCreditCardLogLogicRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/log${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Browse the credit card transaction log.
 */
export function postApiV1CreditcardpluginLogBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/creditcardplugin/log/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
/**
 * Return credit card transaction log as an excel spreadsheet.
 */
export function postApiV1CreditcardpluginLogExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/creditcardplugin/log/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
/**
 * Get an empty credit card transaction log object.
 */
export function getApiV1CreditcardpluginLogEmptyobject(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/creditcardplugin/log/emptyobject", {
        ...opts
    }));
}
/**
 * Returns a boolean if an order has credit card transaction log records.
 */
export function getApiV1CreditcardpluginLogOrderByOrderidHasrecords(orderId: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/creditcardplugin/log/order/${encodeURIComponent(orderid)}/hasrecords`, {
        ...opts
    }));
}
export function getApiV1CreditcardpluginLogLegend(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/creditcardplugin/log/legend", {
        ...opts
    }));
}
/**
 * Get credit card pre-authorizations.
 */
export function getApiV1CreditcardpluginPreauthorization({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardCreditCardPreAuthorizationLogicRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/preauthorization${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Create a credit card pre-authorization record and do a credit card authorize transaction (unless there's an approval step).
 */
export function postApiV1CreditcardpluginPreauthorization(webApiModulesPluginsCreditCardCreditCardPreAuthorizationRequest?: WebApiModulesPluginsCreditCardCreditCardPreAuthorizationRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPreAuthorizationResponseRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/creditcardplugin/preauthorization", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsCreditCardCreditCardPreAuthorizationRequest
    })));
}
/**
 * Browse credit card pre-authorization records.
 */
export function postApiV1CreditcardpluginPreauthorizationBrowse(orderId: string, fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/creditcardplugin/preauthorization/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
/**
 * Export credit card pre-authorization records to excel.
 */
export function postApiV1CreditcardpluginPreauthorizationExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/creditcardplugin/preauthorization/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
/**
 * Get an empty credit card pre-authorization record.
 */
export function getApiV1CreditcardpluginPreauthorizationEmptyobject(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/creditcardplugin/preauthorization/emptyobject", {
        ...opts
    }));
}
/**
 * Get total of all credit card pre-authorization records for an order where status is APPROVED.
 */
export function getApiV1CreditcardpluginPreauthorizationOrderByOrderidTotalpreauthorizationamount(orderId: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/creditcardplugin/preauthorization/order/${encodeURIComponent(orderid)}/totalpreauthorizationamount`, {
        ...opts
    }));
}
/**
 * Returns a boolean if an order has any pre-authorization records (no status filter).
 */
export function getApiV1CreditcardpluginPreauthorizationOrderByOrderidHaspreauthorizationrecords(orderId: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/creditcardplugin/preauthorization/order/${encodeURIComponent(orderid)}/haspreauthorizationrecords`, {
        ...opts
    }));
}
/**
 * Capture pre-authorizations for an order and create depleting deposits.
 */
export function postApiV1CreditcardpluginPreauthorizationOrderByOrderidCapturepreauthorizations(orderid: string, webApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationForOrderRequest?: WebApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationForOrderRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationForOrderResponseRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/preauthorization/order/${encodeURIComponent(orderid)}/capturepreauthorizations`, oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationForOrderRequest
    })));
}
/**
 * Capture a pre-authorization and create a depleting deposit.
 */
export function postApiV1CreditcardpluginPreauthorizationByPreauthorizationidCapture(preauthorizationid: string, webApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationRequest?: WebApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationResponseRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/preauthorization/${encodeURIComponent(preauthorizationid)}/capture`, oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsCreditCardCreditCardCapturePreAuthorizationRequest
    })));
}
/**
 * Approve a credit card pre-authorization.
 */
export function postApiV1CreditcardpluginPreauthorizationByPreauthorizationidUpdatestatus(preauthorizationid: string, webApiModulesPluginsCreditCardCreditCardUpdatePreAuthorizationStatusRequest?: WebApiModulesPluginsCreditCardCreditCardUpdatePreAuthorizationStatusRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardUpdatePreAuthorizationStatusResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/preauthorization/${encodeURIComponent(preauthorizationid)}/updatestatus`, oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsCreditCardCreditCardUpdatePreAuthorizationStatusRequest
    })));
}
/**
 * Void a credit card pre-authorization.
 */
export function postApiV1CreditcardpluginPreauthorizationByPreauthorizationidVoid(preauthorizationid: string, webApiModulesPluginsCreditCardCreditCardVoidPreAuthorizationRequest?: WebApiModulesPluginsCreditCardCreditCardVoidPreAuthorizationRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardVoidPreAuthorizationResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/preauthorization/${encodeURIComponent(preauthorizationid)}/void`, oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsCreditCardCreditCardVoidPreAuthorizationRequest
    })));
}
/**
 * Get customer credit card accounts.
 */
export function getApiV1CreditcardpluginProfileCustomerByCustomeridAccount(customerid: string, { pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardAccount;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/customer/${encodeURIComponent(customerid)}/account${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Create/update a customer credit card account.
 */
export function postApiV1CreditcardpluginProfileCustomerByCustomeridAccount(customerid: string, webApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateAccountRequest?: WebApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateAccountRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateAccountResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/customer/${encodeURIComponent(customerid)}/account`, oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateAccountRequest
    })));
}
/**
 * Get customer credit card accounts that have card on file permission from the customer.
 */
export function getApiV1CreditcardpluginProfileCustomerByCustomeridAuthorizedaccount(customerid: string, { pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardAccount;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/customer/${encodeURIComponent(customerid)}/authorizedaccount${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Get customer default credit card account. Returns null if not found.
 */
export function getApiV1CreditcardpluginProfileCustomerByCustomeridDefaultaccount(customerid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 204;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/customer/${encodeURIComponent(customerid)}/defaultaccount`, {
        ...opts
    }));
}
/**
 * Get customer credit card account.
 */
export function getApiV1CreditcardpluginProfileCustomerByCustomeridAccountAndAccountid(customerid: string, accountid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardAccount;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/customer/${encodeURIComponent(customerid)}/account/${encodeURIComponent(accountid)}`, {
        ...opts
    }));
}
/**
 * Delete a customer credit card.
 */
export function deleteApiV1CreditcardpluginProfileCustomerByCustomeridAccountAndAccountid(customerid: string, accountid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginDeleteAccountResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/customer/${encodeURIComponent(customerid)}/account/${encodeURIComponent(accountid)}`, {
        ...opts,
        method: "DELETE"
    }));
}
/**
 * Get deal credit card accounts.
 */
export function getApiV1CreditcardpluginProfileDealByDealidAccount(dealid: string, { pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardAccount;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/deal/${encodeURIComponent(dealid)}/account${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Create/update a deal credit card account.
 */
export function postApiV1CreditcardpluginProfileDealByDealidAccount(dealid: string, webApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateAccountRequest?: WebApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateAccountRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateAccountResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/deal/${encodeURIComponent(dealid)}/account`, oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateAccountRequest
    })));
}
/**
 * Get deal credit card accounts that have card on file permission from the customer.
 */
export function getApiV1CreditcardpluginProfileDealByDealidAuthorizedaccount(dealid: string, { pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardAccount;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/deal/${encodeURIComponent(dealid)}/authorizedaccount${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Get deal default credit card account.
 */
export function getApiV1CreditcardpluginProfileDealByDealidDefaultaccount(dealid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 204;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/deal/${encodeURIComponent(dealid)}/defaultaccount`, {
        ...opts
    }));
}
/**
 * Get deal credit card account.
 */
export function getApiV1CreditcardpluginProfileDealByDealidAccountAndAccountid(dealid: string, accountid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardAccount;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/deal/${encodeURIComponent(dealid)}/account/${encodeURIComponent(accountid)}`, {
        ...opts
    }));
}
/**
 * Delete a deal credit card account.
 */
export function deleteApiV1CreditcardpluginProfileDealByDealidAccountAndAccountid(dealid: string, accountid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginDeleteAccountResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/profile/deal/${encodeURIComponent(dealid)}/account/${encodeURIComponent(accountid)}`, {
        ...opts,
        method: "DELETE"
    }));
}
/**
 * Get credit card deposit records.
 */
export function getApiV1CreditcardpluginDeposit({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardOrderDepositLogicRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/deposit${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Do a credit card authorize and capture transaction and create a depleting deposit receipt.
 */
export function postApiV1CreditcardpluginDeposit(webApiModulesPluginsCreditCardCreditCardOrderDepositRequest?: WebApiModulesPluginsCreditCardCreditCardOrderDepositRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardOrderDepositResponseRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/creditcardplugin/deposit", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsCreditCardCreditCardOrderDepositRequest
    })));
}
/**
 * Browse credit card deposit records.
 */
export function postApiV1CreditcardpluginDepositBrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/creditcardplugin/deposit/browse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
/**
 * Export credit card deposit records to excel.
 */
export function postApiV1CreditcardpluginDepositExportexcelxlsx(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/creditcardplugin/deposit/exportexcelxlsx", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
/**
 * Get an empty credit card deposit record.
 */
export function getApiV1CreditcardpluginDepositEmptyobject(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/creditcardplugin/deposit/emptyobject", {
        ...opts
    }));
}
/**
 * Do a credit card refund against a depleting deposit.
 */
export function postApiV1CreditcardpluginDepositByReceiptidRefund(receiptid: string, webApiModulesPluginsCreditCardCreditCardRefundRequest?: WebApiModulesPluginsCreditCardCreditCardRefundRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardRefundResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/deposit/${encodeURIComponent(receiptid)}/refund`, oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsCreditCardCreditCardRefundRequest
    })));
}
/**
 * Returns a boolean used to toggle the View Deposits button on an Order.  The value is true when there is data to see.
 */
export function getApiV1CreditcardpluginDepositOrderByOrderidHasdepositrecords(orderId: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/creditcardplugin/deposit/order/${encodeURIComponent(orderid)}/hasdepositrecords`, {
        ...opts
    }));
}
/**
 * Load order info for processing credit card payments.
 */
export function getApiV1CreditcardpluginProcesscreditcardinfoByOrderid(orderId: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardProcessCreditCardInfoRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/processcreditcardinfo/${encodeURIComponent(orderid)}`, {
        ...opts
    }));
}
/**
 * Lookup payment type field on process credit card form (on Order).
 */
export function getApiV1CreditcardpluginProcesscreditcardinfoLookuppaymenttype({ pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesPluginsCreditCardProcessCreditCardPaymentType;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/processcreditcardinfo/lookuppaymenttype${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
/**
 * Returns a PaymentType record with fees given a tokenized card number.
 */
export function getApiV1CreditcardpluginProcesscreditcardinfoPaymenttypebytokenByToken(token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardProcessCreditCardPaymentType;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/processcreditcardinfo/paymenttypebytoken/${encodeURIComponent(token)}`, {
        ...opts
    }));
}
/**
 * Returns a PaymentType record with fees given a PaymentTypeId
 */
export function getApiV1CreditcardpluginProcesscreditcardinfoPaymenttypeByPaymenttypeid(paymenttypeid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardProcessCreditCardPaymentType;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/processcreditcardinfo/paymenttype/${encodeURIComponent(paymenttypeid)}`, {
        ...opts
    }));
}
/**
 * Voids a credit card payment receipt if the transaction has not been settled and the receipt has not been exported
 */
export function postApiV1CreditcardpluginVoidReceiptByReceiptid(receiptid: string, webApiModulesPluginsCreditCardCreditCardPluginVoidReceiptRequest?: WebApiModulesPluginsCreditCardCreditCardPluginVoidReceiptRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginVoidResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/void/receipt/${encodeURIComponent(receiptid)}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsCreditCardCreditCardPluginVoidReceiptRequest
    })));
}
/**
 * Get settings for interacting with the credit card api
 */
export function getApiV1CreditcardpluginSettings(receiptid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginGetSettingsResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/creditcardplugin/settings", {
        ...opts
    }));
}
export function getApiV1CreditcardpluginLocations(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginLocation[];
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/creditcardplugin/locations", {
        ...opts
    }));
}
/**
 * Calls InquireMerchant on the CardPointe GatewayApi to get the surcharge fee percentage.
 */
export function getApiV1CreditcardpluginCardpointeGatewayapiSurchargefee(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginGetDefaultSurchargeAmountResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/creditcardplugin/cardpointe/gatewayapi/surchargefee", {
        ...opts
    }));
}
/**
 * Calls the Cardpointe Gateway API Surcharge endpoint to determine if there is a surcharge for this postal code.  Accountid should be the saved card number from the proifle.  If so, then calls CardPointe Gateway API InquireMerchant to determine the surcharge percent and returns the percentages and totals.
 */
export function getApiV1CreditcardpluginCardpointeGatewayapiSurchargefeeCustomerByCustomeridAccountidAndAccountidPostalcodePostalcodeAmountAmount(customerid: string, accountid: string, postalcode: string, amount: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginGetDefaultSurchargeAmountResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/cardpointe/gatewayapi/surchargefee/customer/${encodeURIComponent(customerid)}/accountid/${encodeURIComponent(accountid)}/postalcode/${encodeURIComponent(postalcode)}/amount/${encodeURIComponent(amount)}`, {
        ...opts
    }));
}
/**
 * Calls the Cardpointe Gateway API Surcharge endpoint to determine if there is a surcharge for this postal code.  If so, then calls CardPointe Gateway API InquireMerchant to determine the surcharge percent and returns the percentages and totals.
 */
export function getApiV1CreditcardpluginCardpointeGatewayapiSurchargefeeDealByDealidAccountidAndAccountidPostalcodePostalcodeAmountAmount(dealid: string, accountid: string, postalcode: string, amount: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginGetDefaultSurchargeAmountResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/cardpointe/gatewayapi/surchargefee/deal/${encodeURIComponent(dealid)}/accountid/${encodeURIComponent(accountid)}/postalcode/${encodeURIComponent(postalcode)}/amount/${encodeURIComponent(amount)}`, {
        ...opts
    }));
}
/**
 * Calls the Cardpointe Gateway API Surcharge endpoint to determine if there is a surcharge for an account (tokenized card #).
 */
export function getApiV1CreditcardpluginCardpointeGatewayapiSurchargefeeAccountByAccountidPostalcodeAndPostalcodeAmountAmount(accountid: string, postalcode: string, amount: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginGetDefaultSurchargeAmountResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/cardpointe/gatewayapi/surchargefee/account/${encodeURIComponent(accountid)}/postalcode/${encodeURIComponent(postalcode)}/amount/${encodeURIComponent(amount)}`, {
        ...opts
    }));
}
/**
 * Calls the Cardpointe Gateway API BIN endpoint to get info about the card such as whether it's credit or debit.
 */
export function getApiV1CreditcardpluginCardpointeGatewayapiCarddetailsAccountByAccountid(accountid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsCreditCardCreditCardPluginBinResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/creditcardplugin/cardpointe/gatewayapi/carddetails/account/${encodeURIComponent(accountid)}`, {
        ...opts
    }));
}
/**
 * This determines if MerchId (Surcharge) is configured in CardPointe plugin settings.
 */
export function getApiV1CreditcardpluginCardpointeIscreditcardfeeenabled(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/creditcardplugin/cardpointe/iscreditcardfeeenabled", {
        ...opts
    }));
}
export function postApiV1HubspotpluginHashubspotrefreshtoken(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAccountServicesHubSpotGetHubSpotRefreshTokenBool;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/hubspotplugin/hashubspotrefreshtoken", {
        ...opts,
        method: "POST"
    }));
}
export function postApiV1HubspotpluginDeletehubspottokens(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesAccountServicesHubSpotDeleteHubSpotTokens;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/hubspotplugin/deletehubspottokens", {
        ...opts,
        method: "POST"
    }));
}
export function getJspm({ timestamp }: {
    timestamp?: string;
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
    }>(`/jspm${QS.query(QS.explode({
        timestamp
    }))}`, {
        ...opts
    }));
}
export function getApiV1QuickbooksonlinepluginLocations(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsQuickbooksOnlineQuickBooksOnlinePluginLogicRwToQboLocations;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/quickbooksonlineplugin/locations", {
        ...opts
    }));
}
export function getApiV1QuickbooksonlinepluginGetauthorizationrequest({ locationid }: {
    locationid?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/quickbooksonlineplugin/getauthorizationrequest${QS.query(QS.explode({
        locationid
    }))}`, {
        ...opts
    }));
}
export function postApiV1QuickbooksonlinepluginAuthorize(webApiModulesPluginsQuickbooksOnlineQuickBooksOnlinePluginLogicQboAuth?: WebApiModulesPluginsQuickbooksOnlineQuickBooksOnlinePluginLogicQboAuth, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quickbooksonlineplugin/authorize", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsQuickbooksOnlineQuickBooksOnlinePluginLogicQboAuth
    })));
}
export function postApiV1QuickbooksonlinepluginDisconnect({ locationid }: {
    locationid?: string;
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
    }>(`/api/v1/quickbooksonlineplugin/disconnect${QS.query(QS.explode({
        locationid
    }))}`, {
        ...opts,
        method: "POST"
    }));
}
export function getApiV1ShopifypluginLocations(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsShopifyShopifyLocations;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/shopifyplugin/locations", {
        ...opts
    }));
}
export function postApiV1ShopifypluginSavelocations(webApiModulesPluginsShopifyShopifyLocations?: WebApiModulesPluginsShopifyShopifyLocations, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/shopifyplugin/savelocations", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsShopifyShopifyLocations
    })));
}
export function postApiV1ShopifypluginValidateshopifyurl(webApiModulesPluginsShopifyValidateShopUrlRequest?: WebApiModulesPluginsShopifyValidateShopUrlRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsShopifyValidateShopUrlResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/shopifyplugin/validateshopifyurl", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesPluginsShopifyValidateShopUrlRequest
    })));
}
export function getApiV1ShopifypluginIntegrationStatusLocationByLocationid(locationid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsShopifyShopifyIntegrationStatus;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/shopifyplugin/integration_status/location/${encodeURIComponent(locationid)}`, {
        ...opts
    }));
}
export function postApiV1ShopifypluginEnableCreateOrderWebhookLocationByLocationid(locationid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsShopifyEnableCreateOrderWebhookResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/shopifyplugin/enable_create_order_webhook/location/${encodeURIComponent(locationid)}`, {
        ...opts,
        method: "POST"
    }));
}
export function postApiV1ShopifypluginDisableCreateOrderWebhookLocationByLocationid(locationid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesPluginsShopifyDisableCreateOrderWebhookResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/shopifyplugin/disable_create_order_webhook/location/${encodeURIComponent(locationid)}`, {
        ...opts,
        method: "POST"
    }));
}
export function postApiV1ShopifypluginInstallThemeLocationByLocationid(locationid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsShopifyShopifyInstallThemeResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/shopifyplugin/install_theme/location/${encodeURIComponent(locationid)}`, {
        ...opts,
        method: "POST"
    }));
}
export function postApiV1ShopifypluginUninstallThemeLocationByLocationid(locationid: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsShopifyShopifyUninstallThemeResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/shopifyplugin/uninstall_theme/location/${encodeURIComponent(locationid)}`, {
        ...opts,
        method: "POST"
    }));
}
export function postApiV1ShopifypluginCreateQuoteFromShopifyOrderLocationByLocationidOrderNumberAndOrderNumber(locationid: string, orderNumber: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/shopifyplugin/create_quote_from_shopify_order/location/${encodeURIComponent(locationid)}/order_number/${encodeURIComponent(orderNumber)}`, {
        ...opts,
        method: "POST"
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
export enum WebApiModulesPluginsCreditCardCreditCardPreAuthorizationRequest_PaymentTypes {
    Pinpad = "PINPAD",
    Tokenizedcardnumber = "TOKENIZEDCARDNUMBER",
    Savedcard = "SAVEDCARD",
    Newcard = "NEWCARD",
    Trackdata = "TRACKDATA",
    Email = "EMAIL",
    Webpay = "WEBPAY"
}
export enum WebApiModulesPluginsCreditCardCreditCardPluginAuthorizeResponseStatusCodes {
    Pending = "Pending",
    Approved = "Approved",
    Retry = "Retry",
    Declined = "Declined",
    Error = "Error",
    Sent = "Sent"
}
export enum WebApiModulesPluginsCreditCardProcessCreditCardPaymentCardTypes {
    Other = "OTHER",
    Amex = "AMEX",
    Visa = "VISA",
    Mc = "MC",
    Disc = "DISC"
}
export enum WebApiModulesPluginsCreditCardCreditCardPluginCaptureResponseStatusCodes {
    Authorized = "Authorized",
    Declined = "Declined",
    QueuedForCapture = "QueuedForCapture",
    Voided = "Voided",
    ZeroAmount = "ZeroAmount",
    Unauthorized = "Unauthorized",
    BadRequest = "BadRequest",
    Error = "Error",
    InternalServerError = "InternalServerError"
}
export enum WebApiModulesPluginsCreditCardUpdatePreAuthorizationStatusCodes {
    Approved = "Approved",
    Declined = "Declined",
    FraudDetected = "FraudDetected",
    Void = "Void",
    VoidFailed = "VoidFailed"
}
export enum WebApiModulesPluginsCreditCardCreditCardPluginVoidResponseStatusCodes {
    Approved = "Approved",
    Retry = "Retry",
    Declined = "Declined",
    Error = "Error"
}
export enum WebApiModulesPluginsCreditCardProcessCreditCardCardUsageTypes {
    Credit = "CREDIT",
    Debit = "DEBIT"
}
export enum WebApiModulesPluginsCreditCardCreditCardPluginCreateOrUpdateProfileResponseStatusCodes {
    Approved = "Approved",
    Retry = "Retry",
    Declined = "Declined",
    Error = "Error"
}
export enum WebApiModulesPluginsCreditCardCreditCardPluginDeleteProfileResponseStatusCodes {
    Ok = "Ok",
    Error = "Error"
}
export enum WebApiModulesPluginsCreditCardCreditCardOrderDepositRequest_PayWithTypes {
    Notset = "NOTSET",
    Tokenizedcardnumber = "TOKENIZEDCARDNUMBER",
    Savedcard = "SAVEDCARD",
    Newcard = "NEWCARD",
    Trackdata = "TRACKDATA",
    Email = "EMAIL",
    Webpay = "WEBPAY",
    Pinpad = "PINPAD"
}
export enum WebApiModulesPluginsCreditCardCreditCardPluginRefundResponseStatusCodes {
    Approved = "Approved",
    Retry = "Retry",
    Declined = "Declined",
    Error = "Error"
}
export enum WebApiModulesPluginsCreditCardCreditCardPluginGetDefaultSurchargeAmountResponseStatusCodes {
    Ok = "Ok",
    Error = "Error"
}
export enum WebApiModulesPluginsCreditCardCreditCardPluginBinResponseStatusCodes {
    Ok = "Ok",
    Error = "Error"
}
