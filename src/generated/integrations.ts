/**
 * RentalWorksIntegrations API v1
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
    DealId?: string | null;
    DepartmentId?: string | null;
    LocationId?: string | null;
    WarehouseId?: string | null;
    AllowAddingUnavailableItems?: boolean | null;
    HasRental?: boolean | null;
    HasSales?: boolean | null;
    GridFields?: WebApiModulesIntegrationsStorefrontWebCatalogResponseField[] | null;
    ListFields?: WebApiModulesIntegrationsStorefrontWebCatalogResponseField[] | null;
    DetailFields?: WebApiModulesIntegrationsStorefrontWebCatalogResponseField[] | null;
    ShoppingCartFields?: WebApiModulesIntegrationsStorefrontWebCatalogResponseField[] | null;
    Images?: string | null;
    LandingPageHtml?: string | null;
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
    SalesPrice?: number | null;
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
    SalesPrice?: number | null;
    CurrencySymbol?: string | null;
    CurrencyCode?: string | null;
    PackageItems?: StorefrontPackageItem[] | null;
    Manufacturer?: string | null;
    ManufacturerPartNumber?: string | null;
    ManufacturerUrl?: string | null;
    UnitValue?: number | null;
    ReplacementCost?: number | null;
    ShipWeightLbs?: number | null;
    ShipWeightOz?: number | null;
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
    SalesPrice?: number | null;
    CurrencySymbol?: string | null;
    CurrencyCode?: string | null;
    PackageItems?: StorefrontPackageItem[] | null;
    Manufacturer?: string | null;
    ManufacturerPartNumber?: string | null;
    ManufacturerUrl?: string | null;
    UnitValue?: number | null;
    ReplacementCost?: number | null;
    ShipWeightLbs?: number | null;
    ShipWeightOz?: number | null;
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
export type ShopifySharpAddress = {
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    company?: string | null;
    country?: string | null;
    country_code?: string | null;
    country_name?: string | null;
    "default"?: boolean | null;
    first_name?: string | null;
    last_name?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    name?: string | null;
    phone?: string | null;
    province?: string | null;
    province_code?: string | null;
    zip?: string | null;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpClientDetails = {
    accept_language?: string | null;
    browser_height?: number | null;
    browser_ip?: string | null;
    browser_width?: number | null;
    session_hash?: string | null;
    user_agent?: string | null;
};
export type ShopifySharpCustomerSmsMarketingConsent = {
    state?: string | null;
    opt_in_level?: string | null;
    consent_updated_at?: string | null;
    consent_collected_from?: string | null;
};
export type ShopifySharpMetaField = {
    created_at?: string | null;
    updated_at?: string | null;
    key?: string | null;
    value?: any | null;
    "type"?: string | null;
    "namespace"?: string | null;
    description?: string | null;
    owner_id?: number | null;
    owner_resource?: string | null;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpCustomerEmailMarketingConsent = {
    state?: string | null;
    opt_in_level?: string | null;
    consent_updated_at?: string | null;
};
export type ShopifySharpCustomer = {
    addresses?: ShopifySharpAddress[] | null;
    created_at?: string | null;
    currency?: string | null;
    default_address?: ShopifySharpAddress;
    email?: string | null;
    first_name?: string | null;
    multipass_identifier?: string | null;
    last_name?: string | null;
    last_order_id?: number | null;
    last_order_name?: string | null;
    note?: string | null;
    orders_count?: number | null;
    phone?: string | null;
    state?: string | null;
    tags?: string | null;
    tax_exempt?: boolean | null;
    tax_exemptions?: string[] | null;
    total_spent?: number | null;
    updated_at?: string | null;
    verified_email?: boolean | null;
    sms_marketing_consent?: ShopifySharpCustomerSmsMarketingConsent;
    metafields?: ShopifySharpMetaField[] | null;
    email_marketing_consent?: ShopifySharpCustomerEmailMarketingConsent;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpDiscountCode = {
    amount?: string | null;
    code?: string | null;
    "type"?: string | null;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpDiscountApplication = {
    "type"?: string | null;
    code?: string | null;
    title?: string | null;
    description?: string | null;
    value?: string | null;
    value_type?: string | null;
    allocation_method?: string | null;
    target_selection?: string | null;
    target_type?: string | null;
};
export type ShopifySharpPrice = {
    currency_code?: string | null;
    amount?: number | null;
};
export type ShopifySharpPriceSet = {
    shop_money?: ShopifySharpPrice;
    presentment_money?: ShopifySharpPrice;
};
export type ShopifySharpTaxLine = {
    price?: number | null;
    rate?: number | null;
    title?: string | null;
    price_set?: ShopifySharpPriceSet;
};
export type ShopifySharpDiscountAllocation = {
    amount?: string | null;
    discount_application_index?: number;
    amount_set?: ShopifySharpPriceSet;
};
export type ShopifySharpLineItemProperty = {
    name?: any | null;
    value?: any | null;
};
export type ShopifySharpLineItemDuty = {
    harmonized_system_code?: string | null;
    country_code_of_origin?: string | null;
    price_set?: ShopifySharpPriceSet;
    tax_lines?: ShopifySharpTaxLine[] | null;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpLineItemAttributedStaff = {
    id?: string | null;
    quantity?: number | null;
};
export type ShopifySharpLineItem = {
    fulfillable_quantity?: number | null;
    fulfillment_service?: string | null;
    fulfillment_status?: string | null;
    grams?: number | null;
    price?: number | null;
    product_id?: number | null;
    quantity?: number | null;
    requires_shipping?: boolean | null;
    sku?: string | null;
    title?: string | null;
    variant_id?: number | null;
    variant_title?: string | null;
    name?: string | null;
    vendor?: string | null;
    gift_card?: boolean | null;
    taxable?: boolean | null;
    tax_lines?: ShopifySharpTaxLine[] | null;
    tip_payment_gateway?: string | null;
    tip_payment_method?: string | null;
    total_discount?: number | null;
    total_discount_set?: ShopifySharpPriceSet;
    discount_allocations?: ShopifySharpDiscountAllocation[] | null;
    properties?: ShopifySharpLineItemProperty[] | null;
    variant_inventory_management?: string | null;
    product_exists?: boolean | null;
    price_set?: ShopifySharpPriceSet;
    pre_tax_price?: number | null;
    pre_tax_price_set?: ShopifySharpPriceSet;
    duties?: ShopifySharpLineItemDuty[] | null;
    fulfillment_line_item_id?: number | null;
    attributed_staffs?: ShopifySharpLineItemAttributedStaff[] | null;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpFulfillmentOriginAddress = {
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    country_code?: string | null;
    province_code?: string | null;
    zip?: string | null;
};
export type ShopifySharpFulfillment = {
    created_at?: string | null;
    line_items?: ShopifySharpLineItem[] | null;
    order_id?: number | null;
    receipt?: any | null;
    status?: string | null;
    location_id?: number | null;
    email?: string | null;
    notify_customer?: boolean | null;
    destination?: ShopifySharpAddress;
    tracking_company?: string | null;
    tracking_number?: string | null;
    tracking_numbers?: string[] | null;
    tracking_url?: string | null;
    tracking_urls?: string[] | null;
    updated_at?: string | null;
    variant_inventory_management?: string | null;
    service?: string | null;
    shipment_status?: string | null;
    name?: string | null;
    origin_address?: ShopifySharpFulfillmentOriginAddress;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpNoteAttribute = {
    name?: string | null;
    value?: any | null;
};
export type ShopifySharpShipping = {
    full_refund?: boolean | null;
    amount?: number | null;
    maximum_refundable?: number | null;
};
export type ShopifySharpRefundOrderAdjustment = {
    order_id?: number | null;
    refund_id?: number | null;
    amount?: number | null;
    tax_amount?: number | null;
    kind?: string | null;
    Reason?: string | null;
    amount_set?: ShopifySharpPriceSet;
    tax_amount_set?: ShopifySharpPriceSet;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpRefundLineItem = {
    line_item?: ShopifySharpLineItem;
    line_item_id?: number | null;
    quantity?: number | null;
    total_tax?: number | null;
    subtotal?: number | null;
    subtotal_set?: ShopifySharpPriceSet;
    total_tax_set?: ShopifySharpPriceSet;
    restock_type?: string | null;
    location_id?: number | null;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpPaymentDetails = {
    avs_result_code?: string | null;
    credit_card_bin?: string | null;
    cvv_result_code?: string | null;
    credit_card_number?: string | null;
    credit_card_company?: string | null;
    credit_card_name?: string | null;
    credit_card_wallet?: string | null;
    credit_card_expiration_month?: number | null;
    credit_card_expiration_year?: number | null;
    payment_method_name?: string | null;
    buyer_action_info?: any | null;
};
export type ShopifySharpCurrencyExchangeAdjustment = {
    adjustment?: number | null;
    original_amount?: number | null;
    final_amount?: number | null;
    currency?: string | null;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpPaymentsRefundAttributes = {
    status?: string | null;
    acquirer_reference_number?: string | null;
};
export type ShopifySharpTransaction = {
    amount?: number | null;
    authorization?: string | null;
    authorization_expires_at?: string | null;
    created_at?: string | null;
    device_id?: number | null;
    gateway?: string | null;
    source_name?: string | null;
    source?: string | null;
    payment_details?: ShopifySharpPaymentDetails;
    kind?: string | null;
    order_id?: number | null;
    receipt?: any | null;
    error_code?: string | null;
    status?: string | null;
    test?: boolean | null;
    user_id?: number | null;
    currency?: string | null;
    message?: string | null;
    location_id?: number | null;
    parent_id?: number | null;
    processed_at?: string | null;
    maximum_refundable?: number | null;
    currency_exchange_adjustment?: ShopifySharpCurrencyExchangeAdjustment;
    payments_refund_attributes?: ShopifySharpPaymentsRefundAttributes;
    payment_id?: string | null;
    total_unsettled_set?: ShopifySharpPriceSet;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpRefundDuty = {
    duty_id?: number | null;
    amount_set?: ShopifySharpPriceSet;
};
export type ShopifySharpRefundDutyType = {
    duty_id?: number | null;
    refund_type?: string | null;
};
export type ShopifySharpEntitiesReturn = {
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpRefund = {
    order_id?: number | null;
    created_at?: string | null;
    notify?: boolean | null;
    shipping?: ShopifySharpShipping;
    currency?: string | null;
    order_adjustments?: ShopifySharpRefundOrderAdjustment[] | null;
    processed_at?: string | null;
    note?: string | null;
    discrepancy_reason?: string | null;
    refund_line_items?: ShopifySharpRefundLineItem[] | null;
    transactions?: ShopifySharpTransaction[] | null;
    user_id?: number | null;
    duties?: ShopifySharpRefundDuty[] | null;
    refund_duties?: ShopifySharpRefundDutyType[] | null;
    "return"?: ShopifySharpEntitiesReturn;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpShippingLine = {
    carrier_identifier?: string | null;
    code?: string | null;
    is_removed?: boolean | null;
    phone?: string | null;
    price?: number | null;
    discounted_price?: number | null;
    discount_allocations?: ShopifySharpDiscountAllocation[] | null;
    source?: string | null;
    title?: string | null;
    tax_lines?: ShopifySharpTaxLine[] | null;
    price_set?: ShopifySharpPriceSet;
    discounted_price_set?: ShopifySharpPriceSet;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type ShopifySharpPaymentSchedule = {
    amount?: number | null;
    currency?: string | null;
    issued_at?: string | null;
    due_at?: string | null;
    completed_at?: string | null;
    expected_payment_method?: string | null;
};
export type ShopifySharpPaymentTerms = {
    amount?: number | null;
    currency?: string | null;
    due_in_days?: number | null;
    payment_terms_name?: string | null;
    payment_terms_type?: string | null;
    payment_schedules?: ShopifySharpPaymentSchedule[] | null;
};
export type ShopifySharpOrderCompany = {
    id?: number | null;
    location_id?: number | null;
};
export type ShopifySharpOrder = {
    app_id?: number | null;
    billing_address?: ShopifySharpAddress;
    browser_ip?: string | null;
    buyer_accepts_marketing?: boolean | null;
    cancel_reason?: string | null;
    cancelled_at?: string | null;
    cart_token?: string | null;
    checkout_token?: string | null;
    checkout_id?: number | null;
    client_details?: ShopifySharpClientDetails;
    closed_at?: string | null;
    confirmed?: boolean | null;
    created_at?: string | null;
    currency?: string | null;
    customer?: ShopifySharpCustomer;
    customer_locale?: string | null;
    device_id?: number | null;
    discount_codes?: ShopifySharpDiscountCode[] | null;
    discount_applications?: ShopifySharpDiscountApplication[] | null;
    email?: string | null;
    financial_status?: string | null;
    fulfillments?: ShopifySharpFulfillment[] | null;
    fulfillment_status?: string | null;
    phone?: string | null;
    tags?: string | null;
    landing_site?: string | null;
    line_items?: ShopifySharpLineItem[] | null;
    location_id?: number | null;
    name?: string | null;
    note?: string | null;
    note_attributes?: ShopifySharpNoteAttribute[] | null;
    "number"?: number | null;
    order_number?: number | null;
    order_status_url?: string | null;
    payment_gateway_names?: string[] | null;
    processed_at?: string | null;
    processing_method?: string | null;
    referring_site?: string | null;
    refunds?: ShopifySharpRefund[] | null;
    shipping_address?: ShopifySharpAddress;
    shipping_lines?: ShopifySharpShippingLine[] | null;
    source_identifier?: string | null;
    source_name?: string | null;
    subtotal_price?: number | null;
    tax_lines?: ShopifySharpTaxLine[] | null;
    taxes_included?: boolean | null;
    test?: boolean | null;
    token?: string | null;
    total_discounts?: number | null;
    total_line_items_price?: number | null;
    total_tip_received?: number | null;
    total_price?: number | null;
    total_tax?: number | null;
    total_weight?: number | null;
    updated_at?: string | null;
    user_id?: number | null;
    transactions?: ShopifySharpTransaction[] | null;
    metafields?: ShopifySharpMetaField[] | null;
    current_total_duties_set?: ShopifySharpPriceSet;
    original_total_duties_set?: ShopifySharpPriceSet;
    presentment_currency?: string | null;
    total_line_items_price_set?: ShopifySharpPriceSet;
    total_discounts_set?: ShopifySharpPriceSet;
    total_shipping_price_set?: ShopifySharpPriceSet;
    subtotal_price_set?: ShopifySharpPriceSet;
    total_price_set?: ShopifySharpPriceSet;
    total_outstanding?: string | null;
    total_tax_set?: ShopifySharpPriceSet;
    estimated_taxes?: boolean | null;
    current_subtotal_price?: number | null;
    current_subtotal_price_set?: ShopifySharpPriceSet;
    current_total_discounts?: number | null;
    current_total_discounts_set?: ShopifySharpPriceSet;
    current_total_price?: number | null;
    current_total_price_set?: ShopifySharpPriceSet;
    current_total_tax?: number | null;
    current_total_tax_set?: ShopifySharpPriceSet;
    payment_terms?: ShopifySharpPaymentTerms;
    current_total_additional_fees_set?: ShopifySharpPriceSet;
    original_total_additional_fees_set?: ShopifySharpPriceSet;
    po_number?: string | null;
    tax_exempt?: boolean | null;
    company?: ShopifySharpOrderCompany;
    id?: number | null;
    admin_graphql_api_id?: string | null;
};
export type WebApiModulesIntegrationsStorefrontStorefrontSettingsPropertySchema = {
    Group?: string | null;
    Caption?: string | null;
    PropertyName?: string | null;
    DataType?: WebApiModulesIntegrationsStorefrontStorefrontSettingsPropertyDataTypes;
    Description?: string | null;
};
export type WebApiModulesIntegrationsStorefrontStorefrontSettings = {
    IsStorefrontEnabled?: boolean | null;
    IsUniversity?: boolean | null;
    IsAnonymousAccessEnabled?: boolean | null;
    SeparateQuoteRequestsByCatalog?: boolean | null;
    MakeQuoteRequestIntoOrderOnSubmission?: boolean | null;
    AutoplaySpeed?: number | null;
    AutoplayImagesOnLandingPage?: boolean | null;
    AutoplayImagesOnProductBrowser?: boolean | null;
    AutoplayImagesOnProductDetails?: boolean | null;
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
    WebCatalogId?: string | null;
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
export function postApiV1ShopifyCreateOrderWebhookLocationByLocationid(locationid: string, shopifySharpOrder?: ShopifySharpOrder, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/shopify/create_order_webhook/location/${encodeURIComponent(locationid)}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: shopifySharpOrder
    })));
}
export function getApiV1ShopifyThemeInstallInstructions(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/shopify/theme-install-instructions", {
        ...opts
    }));
}
/**
 * Returns storefront settings.
 */
export function getApiV1StorefrontSettingsSchema(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontStorefrontSettingsPropertySchema[];
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/storefront/settings/schema", {
        ...opts
    }));
}
/**
 * Returns storefront settings.
 */
export function getApiV1StorefrontSettings(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesIntegrationsStorefrontStorefrontSettings;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/storefront/settings", {
        ...opts
    }));
}
/**
 * Update storefront settings.
 */
export function putApiV1StorefrontSettings(webApiModulesIntegrationsStorefrontStorefrontSettings?: WebApiModulesIntegrationsStorefrontStorefrontSettings, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/storefront/settings", oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesIntegrationsStorefrontStorefrontSettings
    })));
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
 * Send email to Reset Password (for Contacts)
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
 * Send email to Reset Password (for Contacts)
 */
export function postApiV1StorefrontSendchangepasswordemail(webApiModulesIntegrationsStorefrontSendResetPasswordEmailRequest?: WebApiModulesIntegrationsStorefrontSendResetPasswordEmailRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/storefront/sendchangepasswordemail", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesIntegrationsStorefrontSendResetPasswordEmailRequest
    })));
}
/**
 * Send email to Reset Password (for Contacts)
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
/**
 * Returns the storefront api version.
 */
export function getApiV1StorefrontVersion(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/storefront/version", {
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
export enum WebApiModulesIntegrationsStorefrontStorefrontSettingsPropertyDataTypes {
    Boolean = "Boolean",
    Text = "Text",
    Number = "Number"
}
