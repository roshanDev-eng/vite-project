import { CiFileOn } from "react-icons/ci";
import { VscFiles } from "react-icons/vsc";
import { TbReportSearch } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

const Sidebar_Links = {
  Files: {
    Arrays: [
      {
        Show: "All",
        name: "All/All_show",
      },
      {
        Show: "Listings",
        name: "Listings/Listing_Show",
        ListingsCreate: "ListingsCreate",
        ListingUpdate: "Listing_Update",
        ListingConver: "Convert_Listing_to_Offer",
      },
      {
        Show: "BRAs",
        name: "BRAs",
      },
      {
        Show: "Offers",
        name: "Offers/Offers_Show",
        offerceate: "Offerceate",
        offerceateUpdate: "UpdateOffer",
      },
      {
        Show: "Transactions",
        name: "Transactions/Transactions_Show",
        TransactionUpdate: "TransactionUpdate",
      },
    ],
    Logo: (
      <div className="w-9 -ml-1 text-[1.6rem]">
        <CiFileOn />
      </div>
    ),
    LogoH: <CiFileOn />,
    File: "Files",
  },
  Contact: {
    Arrays: [
      // {
      //   Show: "Association Boards",
      //   name: "AssociationBoards",
      // },
      // {
      //   Show: "Franchisors",
      //   name: "Franchisors",
      // },
      // {
      //   Show: "Brokerages",
      //   name: "Brokerages",
      // },
      {
        Show: "Agents",
        name: "Agents/Agents_Show",
      },
      // {
      //   Show: "Teams",
      //   name: "Teams",
      // },
      {
        Show: "Clients",
        name: "Clients",
      },
      {
        Show: "Lawyers",
        name: "Lawyers",
      },
      // {
      //   Show: "Companies",
      //   name: "Companies",
      // },
      // {
      //   Show: "Employees",
      //   name: "Employees",
      // },
    ],
    Logo: (
      <div className="w-9 -ml-1">
        <img src="https://ca.docem.net/css/image/contacts.svg" alt="" />
      </div>
    ),
    File: "Contacts",
  },
  Invoicing: {
    Arrays: [
      {
        Show: "Invoices",
        name: "Invoices",
      },
      {
        Show: "Statements",
        name: "Statements",
      },
      {
        Show: "Trusts",
        name: "Trusts",
      },
      {
        Show: "Payments",
        name: "Payments",
      },
      {
        Show: "Products",
        name: "Products",
      },
      // {
      //   Show: "Taxes",
      //   name: "Taxes",
      // },
    ],
    Logo: (
      <div className="w-9 -ml-1">
        <img src="https://ca.docem.net/css/image/invoicing.svg" alt="" />
      </div>
    ),
    File: "Invoicing",
  },
  Accounting: {
    Arrays: [
      // {
      //   Show: "T4A",
      //   name: "T4A",
      // },
      // {
      //   Show: "Disconnect QBO",
      //   name: "DisconnectQBO",
      // },
      // {
      //   Show: "Map QBO Accounts",
      //   name: "MapQBOAccounts",
      // },
      // {
      //   Show: "Map QBO Products",
      //   name: "MapQBOProducts",
      // },
    ],
    Logo: (
      <div className="w-9 -ml-1">
        <img src="https://ca.docem.net/css/image/accounting.svg" alt="" />
      </div>
    ),
    File: "Accounting",
  },
  Online_Payment: {
    Arrays: [
      {
        Show: "Direct deposit",
        name: "Directdeposit",
      },
      {
        Show: "RAP",
        name: "RAP",
      },
      {
        Show: "Recurring Payments",
        name: "RecurringPayments",
      },
      {
        Show: "Returned Payments",
        name: "ReturnedPayments",
      },
      {
        Show: "Payments Requests",
        name: "PaymentsRequests",
      },
    ],
    Logo: (
      <div className="w-9 -ml-1">
        <img src="https://ca.docem.net/css/image/online-payments.svg" alt="" />
      </div>
    ),
    File: "Online Payments",
  },
  Ledgers: {
    Arrays: [
      {
        Show: "Agents",
        name: "Agents_Ledgers",
      },
      {
        Show: "Disclosures",
        name: "Disclosures_Ledgers",
      },
      {
        Show: "Listings",
        name: "Listings_Ledgers",
      },
      {
        Show: "BRA",
        name: "BRA_Ledgers",
      },
      {
        Show: "Transaction",
        name: "Transaction_Ledgers",
      },
      {
        Show: "Trusts",
        name: "Trusts_Ledgers",
      },
    ],
    Logo: (
      <div className="w-9 -ml-1">
        <img src="https://ca.docem.net/css/image/registers.svg" alt="" />
      </div>
    ),
    File: "Ledgers",
  },
  ESign: {
    Arrays: [
      {
        Show: "Packages",
        name: "Packages",
      },
    ],
    Logo: (
      <div className="w-9 -ml-1">
        <img src="https://ca.docem.net/css/image/e-signature.svg" alt="" />
      </div>
    ),
    File: "eSign",
  },
  Fintrac: {
    Arrays: [
      {
        Show: "Polices",
        name: "Polices",
      },
      {
        Show: "Control Procedures",
        name: "ControlProcedures",
      },
      {
        Show: "Risks",
        name: "Risks",
      },
      {
        Show: "Clients Assessments",
        name: "ClientsAssessments",
      },
      {
        Show: "Fund Receipts",
        name: "FundReceipts",
      },
      {
        Show: "Brokerage Assessments",
        name: "BrokerageAssessments",
      },
      {
        Show: "Compliance Trainings",
        name: "ComplianceTrainings",
      },
    ],
    Logo: (
      <div className="w-9 -ml-1">
        <img src="https://ca.docem.net/css/image/compliance-icon.svg" alt="" />
      </div>
    ),
    File: "Fintrac",
  },
  Reports: {
    Arrays: [
      {
        Show: "Listings",
        name: "Listings_Report",
      },
      {
        Show: "Transactions",
        name: "Transactions_Report",
      },
      {
        Show: "Sales",
        name: "Sales_Report",
      },
    ],
    Logo: (
      <div className="w-9 text-[1.6rem] -ml-1">
        <TbReportSearch />
      </div>
    ),
    File: "Reports",
  },
  Setting: {
    Arrays: [
      {
        Show: "Email Templates",
        name: "EmailTemplates",
      },
      {
        Show: "Inoivces",
        name: "Inoivces_Settings",
      },
      {
        Show: "Payments",
        name: "Payments_Settings",
      },
      {
        Show: "Ledgers",
        name: "Ledgers_Settings",
      },
      {
        Show: "Required documents",
        name: "Requireddocuments_Settings",
      },
      {
        Show: "Notifications",
        name: "Notifications_Settings",
      },
      {
        Show: "eForm Admin",
        name: "eFormAdmin",
      },
      {
        Show: "Clauses",
        name: "Clauses_Settings",
      },
      {
        Show: "eForm Templates",
        name: "eFormTemplates",
      },
      {
        Show: "Trusts",
        name: "Trusts_Settings",
      },
    ],
    Logo: (
      <div className="text-[1.6rem]">
        <CiSettings />
      </div>
    ),
    File: "Settings",
  },
  About: {
    Arrays: [
      {
        Show: "Help",
        name: "Help",
      },
    ],
    Logo: (
      <div className="text-[1.6rem]">
        <VscFiles />
      </div>
    ),
    File: "About",
  },
};

export default Sidebar_Links;
