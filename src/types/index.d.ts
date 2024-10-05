// Represents individual product type
export type Product = {
  id: string;
  user_id: string;
  section_type: string | null;
  thumbnail_image_base64: string;
  thumbnail_page_heading: string;
  thumbnail_page_sub_heading: string;
  thumbnail_page_button_title: string;
  freebie_type: "file" | "redirect" | null;
  checkout_button_title: string | null;
  redirect_url: string | null;
  file_name: string | null;
  product_type: "collect_emails" | "e_course" | "session_booking" | null;
  is_published: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  published_at?: string; // Optional field
  form_fields?: string[]; // Optional field
  course_id?: string; // Optional for e_course type products
  price: string | null;
  discount_price: string | null;
  collect_emails: string | null;
  checkout_page_header_image_base64: string | null;
  checkout_page_heading: string | null;
  checkout_page_description: string | null;
  checkout_page_button_title: string | null;
};

// Represents individual link type
export type Link = {
  name: string;
  url: string;
  username: string;
  id: string;
  user_id: string;
  updated_at: string;
  created_at: string;
};

// Represents the profile type
export type Profile = {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  updated_at: string;
  bio: string;
  profile_picture: string;
  selected_template: string;
  member_type: "pro" | "free"; // New field for member type
  products: Product[];
  links: Link[]; // New field for social media links
};
