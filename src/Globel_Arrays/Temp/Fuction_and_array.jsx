const Listings = [];
const Offers = [];
const Transaction = [];

const sampleAddress = {
  category: "Residential",
  type: "House",
  number: "123",
  street: "Main St",
  unit: "1A",
  country: "Canada",
  province: "Ontario",
  city: "Toronto",
  postalCode: "M5V 2N8",
};
const sampleAddress2 = {
  category: "couter",
  type: "House",
  number: "123",
  street: "light st",
  unit: "1A",
  country: "Canada",
  province: "Ontario",
  city: "Toronto",
  postalCode: "M5V 2N8",
};
// ✅ Create a Listing
function createListing({ address, listingInfo, agentIds, clientIds }) {
  const newListing = {
    id: `L${Listings.length + 1}`,
    address,
    listingInfo,
    agents: agentIds,
    clients: clientIds,
    createdAt: new Date().toISOString(),
  };
  Listings.push(newListing);
  console.log("✅ Listing Created:", newListing);
}

// ✅ Create an Offer independently
function createOffer({ address, offerInfo, agentIds, clientIds }) {
  const newOffer = {
    id: `O${Offers.length + 1}`,
    address,
    offerInfo,
    agents: agentIds,
    clients: clientIds,
    fromListingId: null,
    createdAt: new Date().toISOString(),
  };
  Offers.push(newOffer);
  console.log("✅ Offer Created:", newOffer);
}

// 🔄 Convert Listing to Offer
function convertListingToOffer(
  listingId,
  offerInfo,
  additionalAgentIds = [],
  additionalClientIds = []
) {
  const listing = Listings.find((l) => l.id === listingId);
  if (!listing) {
    console.error("❌ Listing not found!");
    return;
  }

  const dedupedAgents = [
    ...new Set([...listing.agents, ...additionalAgentIds]),
  ];
  const dedupedClients = [
    ...new Set([...listing.clients, ...additionalClientIds]),
  ];

  const newOffer = {
    id: `O${Offers.length + 1}`,
    address: listing.address,
    offerInfo,
    agents: dedupedAgents,
    clients: dedupedClients,
    fromListingId: listing.id,
    createdAt: new Date().toISOString(),
  };

  Offers.push(newOffer);
}
// 🔄 Convert Listing to Offer
function convertOffertoTransaction(offerId) {
  const Offer = Offers.find((l) => l.id === offerId);
  if (!Offers) {
    console.error("❌ Listing not found!");
    return;
  }
  const newTransaction = {
    id: `T${Transaction.length + 1}`,
    address: Offer.address,
    fromOfferId: Offer.id,
    createdAt: new Date().toISOString(),
  };

  Transaction.push(newTransaction);
}
// ✅ Run All Sample Operations
function runSampleWorkflow() {
  createListing({
    address: sampleAddress,
    listingInfo: {
      mls: "MLS99999",
      price: "800000",
      totalCommission: "4000",
      isCommissionInPercentage: "No",
      type: "Sale",
      status: "Active",
      registrationDate: "2025-05-01",
      expireDate: "2025-11-01",
    },
    agentIds: ["A1"],
    clientIds: ["C2"],
  });
  createListing({
    address: sampleAddress2,
    listingInfo: {
      mls: "MLS5555",
      price: "600000",
      totalCommission: "3000",
      isCommissionInPercentage: "No",
      type: "lease",
      status: "Active",
      registrationDate: "2025-05-01",
      expireDate: "2025-11-01",
    },
    agentIds: ["A3"],
    clientIds: ["C7"],
  });
  createOffer({
    address: sampleAddress,
    offerInfo: {
      askingPrice: "800000",
      offerPrice: "780000",
      deposit: "10000",
      isDirectByOwner: "No",
      offerDate: "2025-05-02",
      irrevocabilityDate: "2025-05-04",
      coOpCommission: "2000",
      isCommissionInPercentage: "Yes",
      areThereAnyConditions: "Yes",
    },
    agentIds: ["A2"],
    clientIds: ["C1"],
  });
  convertListingToOffer(
    "L2",
    {
      askingPrice: "800000",
      offerPrice: "790000",
      deposit: "15000",
      isDirectByOwner: "No",
      offerDate: "2025-05-03",
      irrevocabilityDate: "2025-05-06",
      coOpCommission: "3000",
      isCommissionInPercentage: "No",
      areThereAnyConditions: "No",
    },
    ["A3"],
    ["C3"]
  );
  convertOffertoTransaction("O2");
  console.log("\n📦 All Listings:", Listings);
  console.log("\n📦 All Offers:", Offers);
  console.log("\n📦 All Offers:", Transaction);
  const check = Offers.find((l) => l.id === "O2");
  console.log(check);
}

runSampleWorkflow();
