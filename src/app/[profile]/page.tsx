import React from "react";
import getData from "@/helpers/getData";
import { renderTemplates } from "@/helpers/render-templates";

export default async function ProfilePage({
  params,
}: {
  params: { profile: string };
}) {
  let excluded_routes = ["refund-policy", "privacy-policy", "terms-and-conditions"];

  if (!excluded_routes?.includes(params?.profile)) {
    console.log('test');
    
    let profile = await getData(params?.profile);
    return <div>{renderTemplates(profile)}</div>;
  }
}
