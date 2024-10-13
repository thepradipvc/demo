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
  console.log(profile?.selected_template);
  
  switch (profile?.selected_template) {
    case "tpl_001":
      return <Template1 profile={profile} />;

    case "tpl_002":
      return <Template2 profile={profile} />;

    case "tpl_003":
      return <Template3 profile={profile} />;

    case "tpl_004":
      return <Template4 profile={profile} />;

    case "tpl_005":
      return <Template5 profile={profile} />;

    case "tpl_006":
      return <Template6 profile={profile} />;

    case "tpl_007":
      return <Template7 profile={profile} />;

    case "tpl_008":
      return <Template8 profile={profile} />;

    case "tpl_009":
      return <Template9 profile={profile} />;

    case "tpl_010":
      return <Template10 profile={profile} />;

    case "tpl_012":
      return <Template12 profile={profile} />;

    case "tpl_013":
      return <Template13 profile={profile} />;

    case "tpl_014":
      return <Template14 profile={profile} />;

    default:
      return <Template2 profile={profile} />;; // or return a fallback component, error, or null
  }
};
