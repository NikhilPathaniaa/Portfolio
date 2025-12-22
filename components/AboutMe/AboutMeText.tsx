import WhyMe from "./WhyMe";

const AboutMeText = () => {
  return (
    <div className="lg:grid grid-cols-12 cursor-default md:gap-10 pt-4 md:pt-[30px] items-center sm:hidden">
      <div className="col-span-12 space-y-2.5">
        <div className="">
          <div className="text-[#212b36] text-justify dark:text-white font-['Poppins'] dark:text-color-910 leading-7">
            <h1 className="text-xl dark:text-white font-semibold font-['Poppins'] ">I build thoughtful web experiences focused on performance, usability, and long-term maintainability.</h1>
            <br />
            <p>
             I’m a front-end focused developer with a strong design sense, working primarily with modern web technologies like React, Next.js, and design systems. I enjoy turning complex ideas into clean, reliable interfaces that feel intuitive to use and easy to maintain.
            </p>
            <p className="mt-5">
              Over time, I’ve worked on a mix of personal projects, internal company platforms, and client-facing websites, contributing across UI implementation, performance improvements, SEO foundations, and design consistency. I care deeply about how real users experience products—not just how they look in mockups.
              </p>
            <p className="mt-5">
              I prefer clarity over trends, structure over shortcuts, and decisions backed by reasoning rather than guesswork.
            </p>

            <br />
            {/* <h2 className="text-xl dark:text-white font-bold font-['Poppins'] ">✅ Why Work With Me?</h2>
            <br /> */}
            <WhyMe />
            {/* <ul>
              <li className="mb-2">
                ✅ <b className="font-semibold">Business-First Approach –</b> Every project I take on is designed to <b className="font-semibold">drive results</b>, whether it&apos;s boosting sales, increasing engagement, or improving brand
                credibility.
              </li>
              <li className="mb-2">
                ✅ <b className="font-semibold">Multi-Skill Advantage –</b> I combine <b className="font-semibold">development, design, and video expertise</b> to create a seamless, high-impact digital presence. No need to hire multiple
                professionals—I do it all.
              </li>
              <li className="mb-2">
                ✅ <b className="font-semibold">Custom, High-Performance Solutions –</b> No cookie-cutter templates. Every website, video, and design is <b className="font-semibold">crafted for your unique business needs</b>.
              </li>
              <li className="mb-2">
                ✅ <b className="font-semibold">User Experience That Converts –</b> A website isn&apos;t just about looking good. I focus on speed, responsiveness, and intuitive design, ensuring visitors stay, explore, and take action.
              </li>
              <li className="mb-2">
                ✅ <b className="font-semibold">A Complete Digital Package –</b> Whether you need a website, UI/UX design, or a powerful promo video, I ensure a <b className="font-semibold">cohesive brand experience</b> across all platforms.
              </li>
            </ul> */}
            <br />
            <p className="text-xl dark:text-white font-bold font-['Poppins'] ">Common challenges I’ve worked on</p>
            <br />
            <ul className="list-disc pl-5 space-y-2">
              <li>Improving clarity and credibility for weak or outdated online presences.</li>
              <li>Improving structure and clarity for outdated or inconsistent websites.</li>
              <li>Building responsive layouts that work well across devices.</li>
              <li>Designing interfaces that increase engagement and feel intuitive to use.</li>
              <li>Rebuilding slow or poorly structured websites with performance in mind.</li>
              <li>Improving page speed, accessibility, and SEO basics.</li>
              <li>Helping teams align design decisions with actual user and business needs.</li>
              <li>Providing direction when requirements or goals are unclear.</li>
            </ul>

            <p>
              Your digital presence should be a <b className="font-semibold">reliable business asset</b>—
              not just an online placeholder. I focus on building systems that look good,
              work well, and <b className="font-semibold">support meaningful outcomes over time</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeText;
