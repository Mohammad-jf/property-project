export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/property/add", "/property/saved", "/messages"],
};
