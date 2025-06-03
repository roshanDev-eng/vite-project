import Fileds from "./Fileds";

const input_Heading = {
  All_Heading: {
    optionBasedFields: ["Category", "Type", "City", "Complete", "Closed"],
    fieldHeadings: [
      [Fileds.CATEGORY.label],
      [Fileds.Country.label],
      [Fileds.TYPE_address.label],
      [Fileds.Province.label],
      [Fileds.Number.label],
      [Fileds.City.label],
      [Fileds.Number_End.label],
      [Fileds.City_Not_Listed.label],
      [Fileds.Street.label],
      [Fileds.Postal_Code.label],
      [Fileds.Unit.label],
    ],
    fieldKeys: [
      [Fileds.CATEGORY.key],
      [Fileds.Country.key],
      [Fileds.TYPE_address.key],
      [Fileds.Province.key],
      [Fileds.Number.key],
      [Fileds.City.key],
      [Fileds.Number_End.key],
      [Fileds.City_Not_Listed.key],
      [Fileds.Street.key],
      [Fileds.Postal_Code.key],
      [Fileds.Unit.key],
    ],
  },
  Listing_Heading: {
    optionBasedFields: [
      Fileds.Type.label,
      Fileds.STATUS.label,
      Fileds.Iscommission.label,
    ],
    dateFields: [Fileds.REGISTRATION_DATE.label, Fileds.EXPIRE.label],
    fieldHeadings: [
      Fileds.Type.label,
      Fileds.PRICE.label,
      Fileds.MLS.label,
      Fileds.STATUS.label,
      Fileds.Commission_total.label,
      Fileds.Contract.label,
      Fileds.REGISTRATION_DATE.label,
      Fileds.Iscommission.label,
      Fileds.BUILTYEAR.label,
      Fileds.EXPIRE.label,
    ],
    fieldKeys: [
      Fileds.Type.label,
      Fileds.PRICE.label,
      Fileds.MLS.label,
      Fileds.STATUS.label,
      Fileds.Commission_total.label,
      Fileds.Contract.label,
      Fileds.REGISTRATION_DATE.label,
      Fileds.Iscommission.label,
      Fileds.BUILTYEAR.label,
      Fileds.EXPIRE.label,
    ],
    options: {
      [Fileds.Type.label]: ["Lease", "Sales"],
      [Fileds.STATUS.label]: [
        "In progress",
        "Leased",
        "Expired",
        "Off market",
        "Cancelled",
        "Pending",
      ],
      [Fileds.Iscommission.label]: ["Yes", "No"],
    },
  },
  Offer_Heading: {
    optionBasedFields: [
      Fileds.Type.label,
      Fileds.STATUS.key,
      Fileds.Iscommission.key,
      Fileds.ARE_THERE_ANY_CONDITIONS.key,
    ],
    dateFields: [
      Fileds.OFFERDATE.key,
      Fileds.FINANCING_DATE.key,
      Fileds.ACCEPTANCE_DATE.key,
      Fileds.IRREVOCABILITY_DATE.key,
      Fileds.RELEASEDATE.key,
      Fileds.INSPECTION_DATE.key,
    ],
    fieldHeadings: [
      Fileds.Type.label,
      Fileds.OFFERDATE.label,
      Fileds.COMMISSIONCO_OP.label, // "CO-OP COMMISSION"
      Fileds.STATUS.label,
      Fileds.IRREVOCABILITY_DATE.label, // "IRREVOCABILITY DATE"
      Fileds.Iscommission.label, // "IS COMMISSION IN PERCENTAGE"
      Fileds.PRICE_ASKING.label, // "ASKING PRICE"
      Fileds.RELEASEDATE.label, // "RELEASE DATE"
      Fileds.COLLABORATION_ENABLED.label, // "COLLABORATION ENABLE"
      Fileds.OFFER_PRICE.label, // "OFFER PRICE"
      Fileds.ACCEPTANCE_DATE.label, // "ACCEPTANCE DATE"
      Fileds.ARE_THERE_ANY_CONDITIONS.label, // "ARE THERE ANY CONDITIONS"
      Fileds.DEPOSIT.label, // "DEPOSIT"
      Fileds.FINANCING_DATE.label, // "FINANCING DATE"
      Fileds.IS_THIS_SOLD_BY_OWNER.label, // "IS THIS BEING SOLD DIRECTLY BY THE OWNER"
      Fileds.INSPECTION_DATE.label, // "INSPECTION DATE"
    ],
    fieldKeys: [
      Fileds.Type.key,
      Fileds.OFFERDATE.key,
      Fileds.COMMISSIONCO_OP.key, // "CO-OP COMMISSION"
      Fileds.STATUS.key,
      Fileds.IRREVOCABILITY_DATE.key, // "IRREVOCABILITY DATE"
      Fileds.Iscommission.key, // "IS COMMISSION IN PERCENTAGE"
      Fileds.PRICE_ASKING.key, // "ASKING PRICE"
      Fileds.RELEASEDATE.key, // "RELEASE DATE"
      Fileds.COLLABORATION_ENABLED.key, // "COLLABORATION ENABLE"
      Fileds.OFFER_PRICE.key, // "OFFER PRICE"
      Fileds.ACCEPTANCE_DATE.key, // "ACCEPTANCE DATE"
      Fileds.ARE_THERE_ANY_CONDITIONS.key, // "ARE THERE ANY CONDITIONS"
      Fileds.DEPOSIT.key, // "DEPOSIT"
      Fileds.FINANCING_DATE.key, // "FINANCING DATE"
      Fileds.IS_THIS_SOLD_BY_OWNER.key, // "IS THIS BEING SOLD DIRECTLY BY THE OWNER"
      Fileds.INSPECTION_DATE.key, // "INSPECTION DATE"
    ],
    options: {
      [Fileds.Type.label]: ["Lease", "Sales"],
      [Fileds.STATUS.key]: [
        "In progress",
        "Leased",
        "Expired",
        "Off market",
        "Cancelled",
        "Pending",
      ],
      [Fileds.Iscommission.key]: ["Yes", "No"],
      [Fileds.ARE_THERE_ANY_CONDITIONS.key]: ["Yes", "No"],
    },
  },
  Transaction_Heading: {
    fieldHeadings: [
      Fileds.Type.label,
      Fileds.OFFERDATE.label,
      Fileds.IRREVOCABILITY_DATE.label,
      Fileds.STATUS.label,
      Fileds.ACCEPTANCE_DATE.label,
      Fileds.Cancellation_Date.label,
      Fileds.LISTEDPRICE.label,
      Fileds.FINANCEINGDATE.label,
      Fileds.LEASETERM.label,
      Fileds.FINALPRICE.label,
      Fileds.INSPECTIONDATE.label,
      Fileds.Contract.label,
      Fileds.Commission.label,
      Fileds.FIRMDATE.label,
      Fileds.MORTGAGEE.label,
      Fileds.ISCOMMISSIONINPERCENTAGE.label,
      Fileds.CLOSINGDATE.label,
      Fileds.FINANCING.label,
      Fileds.TRUST.label,
      Fileds.MUTUALREALEASECLOASED.label,
      Fileds.ARETHEREANYCONDITIONS.label,
      Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.label,
      Fileds.TrustInclude.label,
    ],
    fieldKeys: [
      Fileds.Type.label,
      Fileds.OFFERDATE.label,
      Fileds.IRREVOCABILITY_DATE.label,
      Fileds.STATUS.label,
      Fileds.ACCEPTANCE_DATE.label,
      Fileds.Cancellation_Date.label,
      Fileds.LISTEDPRICE.label,
      Fileds.FINANCEINGDATE.label,
      Fileds.LEASETERM.label,
      Fileds.OFFER_PRICE.key,
      Fileds.INSPECTIONDATE.label,
      Fileds.Contract.label,
      Fileds.Commission.label,
      Fileds.FIRMDATE.label,
      Fileds.MORTGAGEE.label,
      Fileds.ISCOMMISSIONINPERCENTAGE.key,
      Fileds.CLOSINGDATE.label,
      Fileds.FINANCING.label,
      Fileds.DEPOSIT.key,
      Fileds.MUTUALREALEASECLOASED.label,
      Fileds.ARETHEREANYCONDITIONS.label,
      Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.label,
      Fileds.TrustInclude.label,
    ],
    optionBasedFields: [
      Fileds.Type.label,
      Fileds.STATUS.label,
      Fileds.Iscommission.label,
      Fileds.TrustInclude.label,
      Fileds.ISCOMMISSIONINPERCENTAGE.key,
      Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.label,
      Fileds.ARETHEREANYCONDITIONS.label,
    ],
    dateFields: [
      Fileds.OFFERDATE.label,
      Fileds.IRREVOCABILITY_DATE.label,
      Fileds.ACCEPTANCE_DATE.label,
      Fileds.Cancellation_Date.label,
      Fileds.FINANCEINGDATE.label,
      Fileds.INSPECTIONDATE.label,
      Fileds.FIRMDATE.label,
      Fileds.CLOSINGDATE.label,
    ],
    options: {
      [Fileds.Type.label]: ["Lease", "Sales"],
      [Fileds.STATUS.label]: [
        "In progress",
        "Leased",
        "Expired",
        "Off market",
        "Cancelled",
        "Pending",
      ],
      [Fileds.Iscommission.label]: ["Yes", "No"],
      [Fileds.ARE_THERE_ANY_CONDITIONS.label]: ["Yes", "No"],
      [Fileds.TrustInclude.label]: ["Yes", "No"],
      [Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.label]: ["Yes", "No"],
      [Fileds.ISCOMMISSIONINPERCENTAGE.key]: ["Yes", "No"],
      [Fileds.ARETHEREANYCONDITIONS.label]: ["Yes", "No"],
    },
  },
};
const Create_Fileds = {
  Address_Heading: {
    objects: {
      [Fileds.CATEGORY.label]: "",
      [Fileds.Country.label]: "",
      [Fileds.TYPE_address.label]: "",
      [Fileds.Number.label]: "",
      [Fileds.Province.label]: "",
      [Fileds.City.label]: "",
      [Fileds.Number_End.label]: "",
      [Fileds.City_Not_Listed.label]: "",
      [Fileds.Postal_Code.label]: "",
      [Fileds.Street.label]: "",
      [Fileds.Unit.label]: "",
    },
    fieldHeadings: [
      Fileds.CATEGORY.label,
      Fileds.Country.label,
      Fileds.TYPE_address.label,
      Fileds.Number.label,
      Fileds.Province.label,
      Fileds.City.label,
      Fileds.Number_End.label,
      Fileds.City_Not_Listed.label,
      Fileds.Postal_Code.label,
      Fileds.Street.label,
      Fileds.Unit.label,
    ],
    fieldKeys: [
      [Fileds.CATEGORY.key],
      [Fileds.Country.key],
      [Fileds.TYPE_address.key],
      [Fileds.Province.key],
      [Fileds.Number.key],
      [Fileds.City.key],
      [Fileds.Number_End.key],
      [Fileds.City_Not_Listed.key],
      [Fileds.Street.key],
      [Fileds.Postal_Code.key],
      [Fileds.Unit.key],
    ],
    optionBasedFields: [Fileds.CATEGORY.label, Fileds.TYPE_address.label],
    dateFields: [],
    options: {
      [Fileds.CATEGORY.label]: ["residential", "house"],
      [Fileds.TYPE_address.label]: [
        "In progress",
        "Leased",
        "Expired",
        "Off market",
        "Cancelled",
        "Pending",
      ],
    },
  },
  Listinginfo_Heading: {
    objects: {
      [Fileds.Type.label]: "",
      [Fileds.PRICE.label]: "",
      [Fileds.MLS.label]: "",
      [Fileds.STATUS.label]: "",
      [Fileds.Commission_total.label]: "",
      [Fileds.Contract.label]: "",
      [Fileds.REGISTRATION_DATE.label]: "",
      [Fileds.Commission.label]: "",
      [Fileds.BUILTYEAR.label]: "",
      [Fileds.EXPIRE.label]: "",
    },
    fieldHeadings: [
      Fileds.Type.label,
      Fileds.PRICE.label,
      Fileds.MLS.label,
      Fileds.STATUS.label,
      Fileds.Commission_total.label,
      Fileds.Contract.label,
      Fileds.REGISTRATION_DATE.label,
      Fileds.Commission.label,
      Fileds.BUILTYEAR.label,
      Fileds.EXPIRE.label,
    ],
    fieldKeys: [
      Fileds.Type.label,
      Fileds.PRICE.label,
      Fileds.MLS.label,
      Fileds.STATUS.label,
      Fileds.Commission_total.label,
      Fileds.Contract.label,
      Fileds.REGISTRATION_DATE.label,
      Fileds.Commission.label,
      Fileds.BUILTYEAR.label,
      Fileds.EXPIRE.label,
    ],
    optionBasedFields: [Fileds.STATUS.label, Fileds.Type.label],
    dateFields: [Fileds.REGISTRATION_DATE.label, Fileds.EXPIRE.label],
    options: {
      [Fileds.Type.label]: ["Purchase", "sele"],
      [Fileds.STATUS.label]: [
        "In progress",
        "Leased",
        "Expired",
        "Off market",
        "Cancelled",
        "Pending",
      ],
    },
  },
  Offerinfo_Heading: {
    objects: {
      [Fileds.Type.key]: "",
      [Fileds.OFFERDATE.key]: "",
      [Fileds.PRICE_ASKING.key]: "",
      [Fileds.IRREVOCABILITY_DATE.key]: "",
      [Fileds.OFFER_PRICE.key]: "",
      [Fileds.COMMISSIONCO_OP.key]: "",
      [Fileds.DEPOSIT.key]: "",
      [Fileds.Commission.key]: "",
      [Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.key]: "",
      [Fileds.ISCOMMISSIONINPERCENTAGE.key]: "",
    },
    fieldHeadings: [
      Fileds.Type.label,
      Fileds.OFFERDATE.label,
      Fileds.PRICE_ASKING.label,
      Fileds.IRREVOCABILITY_DATE.label,
      Fileds.OFFER_PRICE.label,
      Fileds.COMMISSIONCO_OP.label,
      Fileds.DEPOSIT.label,
      Fileds.Commission.label,
      Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.label,
      Fileds.ISCOMMISSIONINPERCENTAGE.label,
    ],
    fieldKeys: [
      Fileds.Type.key,
      Fileds.OFFERDATE.key,
      Fileds.PRICE_ASKING.key,
      Fileds.IRREVOCABILITY_DATE.key,
      Fileds.OFFER_PRICE.key,
      Fileds.COMMISSIONCO_OP.key,
      Fileds.DEPOSIT.key,
      Fileds.Commission.key,
      Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.key,
      Fileds.ISCOMMISSIONINPERCENTAGE.key,
    ],
    optionBasedFields: [
      Fileds.Type.key,
      Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.key,
      Fileds.ISCOMMISSIONINPERCENTAGE.key,
    ],
    dateFields: [Fileds.OFFERDATE.key, Fileds.IRREVOCABILITY_DATE.key],
    options: {
      [Fileds.Type.key]: [Fileds.Purchase.key, Fileds.Sale.key],
      [Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.key]: [
        Fileds.Yes.key,
        Fileds.No.key,
      ],
      [Fileds.ISCOMMISSIONINPERCENTAGE.key]: [Fileds.Yes.key, Fileds.No.key],
    },
  },
};
const Trust_Model = {
  Trust_steps_2: {
    part_1: {
      objects: { [Fileds.STATUS.label]: "" },
      fieldHeadings: [
        Fileds.STATUS.key,
        Fileds.BALANCE.label,
        Fileds.Invoice.label,
      ],
      fieldKeys: [Fileds.STATUS.key, Fileds.BALANCE.key, Fileds.Invoice.key],
      optionBasedFields: [Fileds.STATUS.key],
      dateFields: [],
      options: {
        [Fileds.STATUS.key]: [
          Fileds.New.key,
          Fileds.cancel.key,
          Fileds.Paid.key,
        ],
      },
    },
    part_2: {
      objects: { [Fileds.STATUS.label]: "" },
      fieldHeadings: [
        Fileds.DATE.label,
        Fileds.DATEDUE.label,
        Fileds.currency.label,
        Fileds.Payments_types.label,
        Fileds.Received_as.label,
      ],
      fieldKeys: [
        Fileds.DATE.key,
        Fileds.DATEDUE.key,
        Fileds.currency.key,
        Fileds.Payments_types.key,
        Fileds.Received_as.key,
      ],
      optionBasedFields: [Fileds.STATUS.key],
      dateFields: [Fileds.DATE.key],
      options: {
        [Fileds.STATUS.key]: [
          Fileds.New.key,
          Fileds.cancel.key,
          Fileds.Paid.key,
        ],
      },
    },
    part_3: {
      objects: {},
      fieldHeadings: [
        Fileds.Name.label,
        Fileds.PRICE.label,
        Fileds.QUANTITY.label,
        Fileds.SUBTOTAL.label,
        Fileds.HST.label,
        Fileds.USE_SALES.label,
      ],
      fieldKeys: [
        Fileds.Name.key,
        Fileds.PRICE.key,
        Fileds.QUANTITY.label,
        Fileds.SUBTOTAL.label,
        Fileds.HST.label,
        Fileds.USE_SALES.label,
      ],
      optionBasedFields: [Fileds.STATUS.key],
      dateFields: [],
      options: {
        [Fileds.STATUS.key]: [
          Fileds.New.key,
          Fileds.cancel.key,
          Fileds.Paid.key,
        ],
      },
    },
  },
};
const Invoice_update_model = {
  Trust_steps_2: {
    part_1: {
      objects: { [Fileds.STATUS.label]: "", [Fileds.Name.label]: "" },
      fieldHeadings: [
        Fileds.STATUS.key,
        Fileds.BALANCE.label,
        Fileds.Name.label,
        Fileds.DATE.label,
      ],
      fieldKeys: [
        Fileds.STATUS.key,
        Fileds.BALANCE.key,
        Fileds.Name.key,
        Fileds.DATE.key,
      ],
      optionBasedFields: [Fileds.STATUS.key, Fileds.Name.label],
      dateFields: [Fileds.DATE.key],
      options: {
        [Fileds.STATUS.key]: [
          Fileds.New.key,
          Fileds.cancel.key,
          Fileds.Paid.key,
        ],
      },
    },
  },
};
export default input_Heading;
export { Create_Fileds, Trust_Model, Invoice_update_model };
