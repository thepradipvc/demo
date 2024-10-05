import React from "react";
import getData from "@/helpers/getData";
import { renderTemplates } from "@/helpers/render-templates";

export default async function ProfilePage({
  params,
}: {
  params: { profile: string };
}) {
  let profile = await getData(params?.profile);
  return <div>{renderTemplates(profile)}</div>;
}
