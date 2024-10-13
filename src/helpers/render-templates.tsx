import Template1 from "@/app/templates/template1/page";
import Template2 from "@/app/templates/template2/page";
import Template3 from "@/app/templates/template3/page";
import Template4 from "@/app/templates/template4/page";
import Template5 from "@/app/templates/template5/page";
import Template6 from "@/app/templates/template6/page";
import Template7 from "@/app/templates/template7/page";
import Template8 from "@/app/templates/template8/page";
import Template9 from "@/app/templates/template9/page";
import Template10 from "@/app/templates/template10/page";
import Template12 from "@/app/templates/template12/page";
import Template13 from "@/app/templates/template13/page";
import Template14 from "@/app/templates/template14/page";

export const renderTemplates = (profile: any) => {
  switch (profile?.selected_template) {
    case "tpl_002":
      return <Template14 profile={profile} />;

    default:
      return <h1>PROFILE</h1>; // or return a fallback component, error, or null
  }
};
