const Fileds = {
  // ── Address ─────────────────────────────────────────────
  Address: { label: "Address", key: "Address" },
  Code: { label: "Code", key: "Code" },
  City: { label: "City", key: "City" },
  MLS: { label: "MLS", key: "MLS" },

  Number: { label: "Number", key: "Number" },
  RECEIPT: { label: "RECEIPT", key: "RECEIPT" },
  POSITION: { label: "Position", key: "POSITION" },
  // ── Agent / Brokerage ───────────────────────────────────
  Agents: { label: "Agents", key: "Agents" },
  BROKERAGE: { label: "Brokerage", key: "BROKERAGE" },
  // ── Balance ─────────────────────────────────────────────
  BALANCE: { label: "Balance", key: "BALANCE" },
  BALANCE_To: { label: "Balance Total", key: "BALANCE_To" },

  // ── Commission ──────────────────────────────────────────
  REMAINING: { label: "REMAINING", key: "REMAINING" },
  Commission: { label: "Commission", key: "Commission" },
  Commission_total: { label: "Commission Total", key: "Commission_total" },
  COMMISSIONCO_OP: {
    label: "Co-op Commission",
    key: "COMMISSIONCO_OP",
  },
  Iscommission: { label: "Is Commission", key: "%" },
  ISCOMMISSIONINPERCENTAGE: {
    label: "IS COMMISSION IN PERCENTAGE",
    key: "ISCOMMISSIONINPERCENTAGE",
  },
  // ── Condition / Contract ────────────────────────────────
  CONDITION: { label: "Condition", key: "CONDITION" },
  Contract: { label: "Contract", key: "Contract" },
  ARE_THERE_ANY_CONDITIONS: {
    label: "Are There Any Conditions",
    key: "ARE_THERE_ANY_CONDITIONS",
  },
  //......quantity
  QUANTITY: { label: "QUANTITY", key: "QUANTITY" },
  SUBTOTAL: { label: "SUBTOTAL", key: "SUBTOTAL" },
  HST: { label: "HST", key: "HST" },
  USE_SALES: { label: "USE SALES", key: "USE_SALES" },
  // ── Dates ───────────────────────────────────────────────
  CREATED: { label: "Created", key: "CREATED" },
  CLOSING: { label: "Closing", key: "CLOSING" },
  DATE: { label: "Date", key: "DATE" },
  DATEDUE: { label: " DUE DATE", key: "DUE Date" },
  FINANCEINGDATE: { label: "FINANCEING DATE", key: "FINANCEINGDATE" },
  EXPIRE: { label: "Expire", key: "EXPIRE" },
  IRREVOCABILITY_DATE: {
    label: "Irrevocability Date",
    key: "IRREVOCABILITY_DATE",
  },
  CLOSINGDATE: { label: "CLOSING DATE", key: "CLOSINGDATE" },
  FIRMDATE: { label: "FIRM DATE", key: "FIRMDATE" },
  OFFERDATE: { label: "Offer Date", key: "OFFERDATE" },
  REGISTERED: { label: "Registered", key: "REGISTERED" },
  REGISTRATION_DATE: {
    label: "Registration Date",
    key: "REGISTRATION_DATE",
  },
  RELEASEDATE: { label: "Release Date", key: "RELEASEDATE" },
  ACCEPTANCE_DATE: {
    label: "Acceptance Date",
    key: "ACCEPTANCE_DATE",
  },
  FINANCING_DATE: {
    label: "Financing Date",
    key: "FINANCING_DATE",
  },
  INSPECTION_DATE: {
    label: "INSPECTION DATE",
    key: "INSPECTION_DATE",
  },
  INSPECTIONDATE: { label: "INSPECTION DATE", key: "INSPECTIONDATE" },
  Cancellation_Date: { label: "Cancellation Date", key: "Cancellation_Date" },
  // ── ID / Meta ───────────────────────────────────────────
  ID: { label: "ID", key: "ID" },
  Name: { label: "Name", key: "Name" },
  SYNC: { label: "Sync", key: "SYNC" },
  LEASETERM: { label: "LEASE TERM", key: "LEASETERM" },
  // ── Price ───────────────────────────────────────────────
  DEPOSIT: { label: "Deposit", key: "DEPOSIT" },
  WITHDRAWAL: { label: "WITHDRAWAL", key: "WITHDRAWAL" },
  PRICE: { label: "Price", key: "PRICE" },
  PRICE_ASKING: { label: "Asking Price", key: "PRICE_ASKING" },
  OFFER_PRICE: { label: "Offer Price", key: "OFFER_PRICE" },
  LISTEDPRICE: { label: "LISTEDPRICE", key: "LISTEDPRICE" },
  FINALPRICE: { label: "FINAL PRICE", key: "FINALPRICE" },
  // ── Collaboration / Ownership ───────────────────────────
  COLLABORATION_ENABLED: {
    label: "Collaboration Enabled",
    key: "COLLABORATION_ENABLED",
  },
  IS_THIS_SOLD_BY_OWNER: {
    label: "Is This Being Sold Directly by the Owner",
    key: "IS_THIS_SOLD_BY_OWNER",
  },

  // ── Range / Values ──────────────────────────────────────
  MAX: { label: "Max", key: "MAX" },
  MIN: { label: "Min", key: "MIN" },
  VALUE: { label: "Value", key: "VALUE" },
  VAR: { label: "Var", key: "VAR" },
  START: { label: "Start", key: "START" },
  END: { label: "End", key: "END" },

  // ── Status ──────────────────────────────────────────────
  RE_STATUS: { label: "RE Status", key: "RE_STATUS" },
  STATUS: { label: "Status", key: "STATUS" },
  Sale: { label: "Sale", key: "Sale" },
  Purchase: { label: "Purchase", key: "Purchase" },
  Lease: { label: "Lease", key: "Lease" },
  ACTIVE: { label: "Active", key: "ACTIVE" },
  PENDING: { label: "Pending", key: "PENDING" },
  SOLD: { label: "Sold", key: "SOLD" },
  // ── Miscellaneous ───────────────────────────────────────
  RECEIPT: { label: "RECEIPT", key: "RECEIPT" },
  FINANCING: { label: "FINANCING", key: "FINANCING" },
  TRUST: { label: "TRUST", key: "TRUST" },
  MUTUALREALEASECLOASED: {
    label: "MUTUALREALEASECLOASED",
    key: "MUTUALREALEASECLOASED",
  },
  TrustInclude: { label: "Trust Include", key: "TrustInclude" },
  ARETHEREANYCONDITIONS: {
    label: "ARE THERE ANY CONDITIONS",
    key: "ARETHEREANYCONDITIONS",
  },
  ISTHEBEINGSOLDDIRECTLYBYTHEOWNER: {
    label: "IS THE BEING SOLD DIRECTLYBY THE OWNER",
    key: "ISTHEBEINGSOLDDIRECTLYBYTHEOWNER",
  },
  MORTGAGEE: { label: "MORTGAGEE", key: "MORTGAGEE" },
  Amount: { label: "Amount", key: "Amount" },
  Applied: { label: "Applied", key: "Applied" },
  BUILTYEAR: { label: "Built Year", key: "BUILTYEAR" },
  Per: { label: "%", key: "Per" },
  PRODUCT: { label: "Product", key: "PRODUCT" },
  TRAN: { label: "Transaction", key: "TRAN" },
  Type: { label: "Type", key: "Type" },
  //........yes or no
  Yes: { label: "Yes", key: "Yes" },
  No: { label: "No", key: "No" },
  //..........new_cancel_Paid
  New: { label: "New", key: "New" },
  cancel: { label: "Cancel", key: "cancel" },
  Paid: { label: "Paid", key: "Paid" },
  //.........payments
  currency: { label: "CURRENCY", key: "currency" },
  Payments_types: { label: "PAYMENTS TYPES", key: "Payments_types" },
  Received_as: { label: "RECEIVED AS", key: "Received_as" },
  cash: { label: "cash", value: "cash" },
  credit_cards: { label: "credit cards", value: "credit_cards" },
  debit_cards: { label: "debit cards", value: "debit_cards" },
  mobile_payments: { label: "mobile payments", value: "mobile_payments" },
  bank_transfers: { label: "bank transfers", value: "bank_transfers" },
  //...........Address
  Invoice: { label: "Invoice", key: "Invoice" },
  CATEGORY: { label: "Category", key: "CATEGORY" },
  Country: { label: "Country", key: "Country" },
  TYPE_address: { label: "Type Address", key: "TYPE_address" },
  Province: { label: "Province", key: "Province" },
  Number: { label: "Number", key: "Number" },
  City: { label: "City", key: "City" },
  Number_End: { label: "Number End", key: "Number_End" },
  City_Not_Listed: { label: "City Not Listed", key: "City_Not_Listed" },
  Street: { label: "Street", key: "Street" },
  Postal_Code: { label: "Postal Code", key: "Postal_Code" },
  Unit: { label: "Unit", key: "Unit" },
};

export default Fileds;
