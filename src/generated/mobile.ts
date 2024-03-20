/**
 * RentalWorks QuikScan API v1
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
export type WebApiModulesMobileAssetDispositionLookupRetiredReasonResponse = {
    /** Retired Reason Identifier */
    RetiredReasonId?: string | null;
    /** Reason for retiring an item */
    RetiredReason?: string | null;
};
export type FwStandardModelsGetResponseWebApiModulesMobileAssetDispositionLookupRetiredReasonResponse = {
    Items?: WebApiModulesMobileAssetDispositionLookupRetiredReasonResponse[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalRows?: number;
    Sort?: string | null;
};
export type FwCoreApiSwashbuckleBadRequestResponse = {
    [key: string]: string[];
};
export type FwStandardModelsFwApiException = {
    StatusCode?: number;
    Message?: string;
    StackTrace?: string;
};
export type WebApiModulesWarehouseContractCancelContractRequest = {
    ContractId?: string | null;
};
export type WebApiLogicTSpStatusResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
};
export type FwStandardModelsFwQueryFilter = {
    /** The DataField name to filter on. */
    Field: string;
    /** Comparison operator: = (equals), <> (not equals) */
    Op: string;
    /** The value of the DataField to filter on. */
    Value?: string | null;
};
export type WebApiModulesContainersContainerLookupScannableItemRentalInventoryResponse = {
    /** Rental Inventory Identifier */
    InventoryId?: string | null;
    /** Rental Inventory Description */
    Description?: string | null;
};
export type FwStandardModelsFwQueryResponseWebApiModulesContainersContainerLookupScannableItemRentalInventoryResponse = {
    Items?: WebApiModulesContainersContainerLookupScannableItemRentalInventoryResponse[] | null;
    PageNo?: number;
    PageSize?: number;
    TotalItems?: number;
    Sort?: string | null;
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
export type WebApiModulesMobileQuikAssetQuikAssetFuncUpdateUnitValueRequest = {
    WarehouseId?: string | null;
    InventoryId?: string | null;
    UnitValue?: number | null;
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
export type WebApiModulesMobileQuikAssetQuikAssetFuncQuikAssetInsertImagesRequest = {
    IsWall?: boolean | null;
    InventoryId?: string | null;
    Image?: string | null;
    ImageDesc?: string | null;
    ImageNo?: string | null;
};
export type WebApiModulesMobileQuikAssetQuikAssetFuncQuikAssetInsertImageResponse = {
    status?: number;
    success?: boolean;
    msg?: string | null;
    appimageid?: string | null;
};
export type WebApiModulesMobileQuikAssetQuikAssetFuncGetImagesRequest = {
    UniqueId1?: string | null;
};
export type WebApiModulesMobileQuikAssetQuikAssetFuncGetImageModel = {
    Image?: string | null;
    AppImageId?: string | null;
    ImageDesc?: string | null;
    ImageNo?: string | null;
};
export type WebApiModulesMobileQuikAssetQuikAssetFuncGetImagesResponse = {
    Images?: WebApiModulesMobileQuikAssetQuikAssetFuncGetImageModel[] | null;
};
export type WebApiModulesMobileQuikAssetQuikAssetFuncDeleteImageRequest = {
    AppImageId?: string | null;
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
export type WebApiModulesMobileQuikAssetQuikAssetFuncGetCategoryRequest = {
    InventoryDepartmentId?: string | null;
};
export type WebApiModulesMobileQuikAssetQuikAssetFuncGetSubCategoryRequest = {
    CategoryId?: string | null;
};
export type WebApiModulesMobileQuikAssetQuikAssetFuncSearchItemsByDescriptionRequest = {
    SearchValue?: string | null;
    WarehouseId?: string | null;
    DepartmentId?: string | null;
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
 * Get a list of valid Retired Reasons
 */
export function getApiV1QuikscanAssetdispositionLookupretiredreason(reasonType: string, { retiredReasonId, retiredReason, pageNo, pageSize, sort }: {
    retiredReasonId?: string;
    retiredReason?: string;
    pageNo?: number;
    pageSize?: number;
    sort?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsGetResponseWebApiModulesMobileAssetDispositionLookupRetiredReasonResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/quikscan/assetdisposition/lookupretiredreason${QS.query(QS.explode({
        RetiredReasonId: retiredReasonId,
        RetiredReason: retiredReason,
        ReasonType: reasonType,
        PageNo: pageNo,
        PageSize: pageSize,
        Sort: sort
    }))}`, {
        ...opts
    }));
}
export function postApiV1QuikscanExchangeCancelcontract(webApiModulesWarehouseContractCancelContractRequest?: WebApiModulesWarehouseContractCancelContractRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/exchange/cancelcontract", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesWarehouseContractCancelContractRequest
    })));
}
/**
 * Get a list of valid Container Descriptions.
 */
export function getApiV1QuikscanFillcontainerScannableitemByScannableinventoryidLookuprentalinventory(scannableinventoryid: string, { pageno, pagesize, sort, filter }: {
    pageno?: number;
    pagesize?: number;
    sort?: string;
    filter?: FwStandardModelsFwQueryFilter[];
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: FwStandardModelsFwQueryResponseWebApiModulesContainersContainerLookupScannableItemRentalInventoryResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/quikscan/fillcontainer/scannableitem/${encodeURIComponent(scannableinventoryid)}/lookuprentalinventory${QS.query(QS.explode({
        pageno,
        pagesize,
        sort,
        filter
    }))}`, {
        ...opts
    }));
}
export function postApiV1Mobile({ path }: {
    path?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: {
            [key: string]: any;
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
    }>(`/api/v1/mobile${QS.query(QS.explode({
        path
    }))}`, {
        ...opts,
        method: "POST"
    }));
}
export function postApiV1QuikscanQuikasset(webApiModulesInventoryRentalInventoryRentalInventory?: WebApiModulesInventoryRentalInventoryRentalInventory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesInventoryRentalInventoryRentalInventoryRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/quikscan/quikasset", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesInventoryRentalInventoryRentalInventory
    })));
}
export function postApiV1QuikscanQuikassetUpdateunitvalue(webApiModulesMobileQuikAssetQuikAssetFuncUpdateUnitValueRequest?: WebApiModulesMobileQuikAssetQuikAssetFuncUpdateUnitValueRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/updateunitvalue", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesMobileQuikAssetQuikAssetFuncUpdateUnitValueRequest
    })));
}
export function putApiV1QuikscanQuikassetById(id: string, webApiModulesInventoryRentalInventoryRentalInventory?: WebApiModulesInventoryRentalInventoryRentalInventory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesInventoryRentalInventoryRentalInventoryRead;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>(`/api/v1/quikscan/quikasset/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesInventoryRentalInventoryRentalInventory
    })));
}
export function postApiV1QuikscanQuikassetInventorypurchaseitembrowse(fwStandardModelsBrowseRequest?: FwStandardModelsBrowseRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/inventorypurchaseitembrowse", oazapfts.json({
        ...opts,
        method: "POST",
        body: fwStandardModelsBrowseRequest
    })));
}
export function putApiV1QuikscanQuikassetInventorypurchaseitemById(id: string, webApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItem?: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItem, opts?: Oazapfts.RequestOpts) {
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
    }>(`/api/v1/quikscan/quikasset/inventorypurchaseitem/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseItem
    })));
}
export function postApiV1QuikscanQuikassetStartsession(webApiModulesUtilitiesInventoryPurchaseUtilityStartInventoryPurchaseSessionRequest?: WebApiModulesUtilitiesInventoryPurchaseUtilityStartInventoryPurchaseSessionRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/startsession", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesInventoryPurchaseUtilityStartInventoryPurchaseSessionRequest
    })));
}
export function postApiV1QuikscanQuikassetUpdatesession(webApiModulesUtilitiesInventoryPurchaseUtilityUpdateInventoryPurchaseSessionRequest?: WebApiModulesUtilitiesInventoryPurchaseUtilityUpdateInventoryPurchaseSessionRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/updatesession", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesInventoryPurchaseUtilityUpdateInventoryPurchaseSessionRequest
    })));
}
export function postApiV1QuikscanQuikassetInsertimage(webApiModulesMobileQuikAssetQuikAssetFuncQuikAssetInsertImagesRequest?: WebApiModulesMobileQuikAssetQuikAssetFuncQuikAssetInsertImagesRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesMobileQuikAssetQuikAssetFuncQuikAssetInsertImageResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/quikscan/quikasset/insertimage", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesMobileQuikAssetQuikAssetFuncQuikAssetInsertImagesRequest
    })));
}
export function postApiV1QuikscanQuikassetGetimages(webApiModulesMobileQuikAssetQuikAssetFuncGetImagesRequest?: WebApiModulesMobileQuikAssetQuikAssetFuncGetImagesRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(oazapfts.fetchJson<{
        status: 200;
        data: WebApiModulesMobileQuikAssetQuikAssetFuncGetImagesResponse;
    } | {
        status: 400;
        data: FwCoreApiSwashbuckleBadRequestResponse;
    } | {
        status: 401;
    } | {
        status: 403;
    } | {
        status: 500;
        data: FwStandardModelsFwApiException;
    }>("/api/v1/quikscan/quikasset/getimages", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesMobileQuikAssetQuikAssetFuncGetImagesRequest
    })));
}
export function postApiV1QuikscanQuikassetDeleteimage(webApiModulesMobileQuikAssetQuikAssetFuncDeleteImageRequest?: WebApiModulesMobileQuikAssetQuikAssetFuncDeleteImageRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/deleteimage", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesMobileQuikAssetQuikAssetFuncDeleteImageRequest
    })));
}
export function postApiV1QuikscanQuikassetCompletesession(webApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseCompleteSessionRequest?: WebApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseCompleteSessionRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/completesession", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesUtilitiesInventoryPurchaseUtilityInventoryPurchaseCompleteSessionRequest
    })));
}
export function postApiV1QuikscanQuikassetInventorydepartment(body?: string, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/inventorydepartment", oazapfts.json({
        ...opts,
        method: "POST",
        body
    })));
}
export function postApiV1QuikscanQuikassetCategory(webApiModulesMobileQuikAssetQuikAssetFuncGetCategoryRequest?: WebApiModulesMobileQuikAssetQuikAssetFuncGetCategoryRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/category", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesMobileQuikAssetQuikAssetFuncGetCategoryRequest
    })));
}
export function postApiV1QuikscanQuikassetSubcategory(webApiModulesMobileQuikAssetQuikAssetFuncGetSubCategoryRequest?: WebApiModulesMobileQuikAssetQuikAssetFuncGetSubCategoryRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/subcategory", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesMobileQuikAssetQuikAssetFuncGetSubCategoryRequest
    })));
}
export function postApiV1QuikscanQuikassetDeals(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/deals", {
        ...opts,
        method: "POST"
    }));
}
export function postApiV1QuikscanQuikassetVendor(opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/vendor", {
        ...opts,
        method: "POST"
    }));
}
export function postApiV1QuikscanQuikassetSearchitemsbydesc(webApiModulesMobileQuikAssetQuikAssetFuncSearchItemsByDescriptionRequest?: WebApiModulesMobileQuikAssetQuikAssetFuncSearchItemsByDescriptionRequest, opts?: Oazapfts.RequestOpts) {
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
    }>("/api/v1/quikscan/quikasset/searchitemsbydesc", oazapfts.json({
        ...opts,
        method: "POST",
        body: webApiModulesMobileQuikAssetQuikAssetFuncSearchItemsByDescriptionRequest
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
