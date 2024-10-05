import Template1 from "@/app/templates/template1/page";

export const renderTemplates = (profile: any) => {
  switch (profile?.selected_template) {
    case "tpl_004":
      return <Template1 profile={profile} />;
      break;

    default:
      break;
  }
};
