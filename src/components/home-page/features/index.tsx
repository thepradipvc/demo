import {
    IconLink,
    IconCalendar,
    IconMail,
    IconSchool,
    IconTemplate,
    IconBook,
  } from "@tabler/icons-react";
  
  const features = [
    {
      title: "Mobile Optimized 'Link-in-Bio' Store",
      description:
        "Easily create a mobile-optimized 'Link-in-Bio' store to sell products, book services, and showcase content all in one place.",
      icon: <IconLink className="text-white" />,
    },
    {
      title: "Calendar Invite and Booking",
      description:
        "Enable seamless calendar invites and booking to manage appointments and events directly through your store.",
      icon: <IconCalendar className="text-white" />,
    },
    {
      title: "Course Builder",
      description:
        "Create and sell courses effortlessly with our integrated course builder, designed to manage lessons, track progress, and engage students.",
      icon: <IconBook className="text-white" />,
    },
    {
      title: "EmailList/Newsletter",
      description:
        "Build and grow your audience with an integrated email list and newsletter feature, perfect for staying connected and driving engagement.",
      icon: <IconMail className="text-white" />,
    },
    {
      title: "Social Media Templates",
      description:
        "Access customizable social media templates to enhance your brand presence and effortlessly share your offerings across platforms.",
      icon: <IconTemplate className="text-white" />,
    },
    {
      title: "1:1 Creator Strategy Coaching",
      description:
        "Offer personalized 1:1 creator strategy coaching to help clients grow their brand, monetize their skills, and achieve their goals.",
      icon: <IconSchool className="text-white" />,
    },
  ];
  
  const Features = () => {
    return (
      <div className="mt-16 md:mt-0">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          Everything you need to setup your digital storefronts
        </h2>
        <p className="text-lg mt-4 text-slate-600">
          Lnkr is the easiest way to make money online. All of your courses, digital products, and bookings are now hosted within your link-in-bio.
        </p>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0 flex items-center justify-center ">
                {/* Render the icon directly */}
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-slate-500 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Features;
  