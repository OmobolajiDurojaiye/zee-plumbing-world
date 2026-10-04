import { Testimonial } from "./schema";

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Engr. Babatunde Alabi",
    location: "Maitama, Abuja",
    quote:
      "I had an emergency water line burst underneath my living room floor at night. Zee Plumbing World dispatched a specialist in under 45 minutes, pinpointed the fracture with acoustic tools, and fixed it without tearing up all my Italian tiles. Exceptional craftsmanship!",
    photo: null, // fallback avatar/stacked card
    rating: 5,
    service: "Leak Detection & Repair",
    date: "2024-08-15",
  },
  {
    id: "test-2",
    name: "Mrs. Nkechi Okonkwo",
    location: "Asokoro, Abuja",
    quote:
      "Zee Plumbing World handled the entire bathroom upgrade for our duplex in Asokoro. From wall-hung Geberit toilet frames to rainfall thermostatic showers, every seal is immaculate and the water pressure is perfectly balanced. Highly recommended.",
    photo: null,
    rating: 5,
    service: "Bathroom & Sanitary Fittings",
    date: "2024-09-02",
  },
  {
    id: "test-3",
    name: "Dr. Femi Adeleke",
    location: "Gwarinpa Estate, Abuja",
    quote:
      "After dealing with brown, iron-heavy borehole water for months, Zee Plumbing World installed a dedicated filtration and aeration plant. Our tap water is now crystal clear and odorless. Honest pricing and polite technicians.",
    photo: null,
    rating: 5,
    service: "Borehole & Water Treatment",
    date: "2024-09-20",
  },
];
