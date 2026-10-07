import { Business } from "./schema";

export const business: Business = {
  legalName: "Zee Plumbing World Nig Ltd",
  brandName: "Zee Plumbing World",
  // TODO(client): Provide official CAC Registration / RC Number
  rcNumber: null,
  // TODO(client): Confirm year established
  foundedYear: 2018,
  shortDescription:
    "Expert plumbing services delivered to your doorstep in Abuja. Leak detection, emergency repairs, water heating, and modern sanitary installations.",
  longDescription:
    "Zee Plumbing World Nig Ltd is a leading plumbing and sanitary engineering contractor in Abuja, Nigeria. We specialize in residential and commercial plumbing installations, rapid emergency repairs, borehole piping, water treatment systems, and luxury bathroom upgrades.",
  address: {
    street: "Suite 001, Plot 1377 Havilah Plaza, FHA, Lugbe",
    city: "Abuja",
    state: "FCT",
    country: "Nigeria",
    postalCode: "900107",
  },
};
