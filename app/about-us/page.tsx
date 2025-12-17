export default function AboutUs() {
  const leadership = [
    {
      name: 'Jasmine',
      surname: 'Almezel',
      role: 'Co-Founder & CEO',
      image: '/assets/team1.jpg',
      bio: 'Seasoned technology executive and visionary leader with a proven track record in spearheading national-scale technology deployments and innovation strategies across telecom, finance, and government sectors in Canada. Renowned for leading complex projects to completion, delivering impact, and fostering cross-sector collaboration.'
    },
    {
      name: 'Ali Nasser',
      surname: 'Al Nuaimi',
      role: 'Co-Founder & CFO',
      image: '/assets/team2.JPG',
      bio: 'A distinguished Emirati investor with a remarkable background as a former UAE Air Force Fighter Pilot & Brigadier General Officer, as well as a UAE ambassador to Australia. His investment expertise in AI and technology sectors brings valuable strategic oversight and financial guidance to the company.'
    },
    {
      name: 'Alexander Xavier',
      surname: 'Goby',
      role: 'Co-Founder & CTO',
      image: '/assets/team4.jpg',
      bio: 'The technical architect behind ThakAlذكا, bringing valuable expertise in building AI, knowledge systems and regulatory data infrastructure. His previous successful implementation of similar systems in the Netherlands, including AI across multiple sectors, provides a proven foundation for Black Cloud\'s technological approach.'
    }
  ];

  const team = [
    {
      name: 'Javier',
      surname: 'Arancibia',
      role: 'Senior Front-end Engineer',
      image: '/assets/team8.png',
      bio: 'A senior Front-end developer with more than 4 years of experience designing & building automation and data-heavy dashboards for Commercial & Crypto Fintech in Europe & Latin America. At BSC, he focuses on creating intuitive, reliable interfaces that make AI-driven legal reasoning clear, usable, and effortless for legal teams.'
    },
    {
      name: 'Bryan',
      surname: 'Bishi',
      role: 'Front-End Engineer',
      image: '/assets/team5.png',
      bio: 'A design-driven Front-End Engineer with a strong foundation in modern web technologies, blending creativity and technical precision to craft clean, intuitive user experiences. With a background in Computer Science Engineering, he contributed to shaping ThakAlذكا\'s visual identity and front-end experience.'
    },
    {
      name: 'Mohammed',
      surname: 'Ziyad',
      role: 'Back-End Engineer',
      image: '/assets/team6.jpg',
      bio: 'A Backend Developer with a background in Electronics and Communication Engineering, he later trained himself in software development and continues to sharpen his expertise. Outside of work, he enjoys gaming and exploring new technologies. At ThakAlذكا, he\'s driven by the idea of helping users create complete, compliant legal agreements in minutes instead of months.'
    },
    {
      name: 'Adam Abinsha',
      surname: 'Vahab',
      role: 'Data Scientist',
      image: '/assets/team7.png',
      bio: 'Adam studied robotics and AI engineering and works as a software engineer and data scientist, with six years of experience across business, entertainment, and engineering domains. He enjoys solving problems, learning fast, and blending creativity with technology. Outside of work, Adam is a vocalist in a band and has a big love for guitars. Music is his creative outlet and a balance to his technical life.'
    },
    {
      name: 'Anjima',
      surname: 'Raj',
      role: 'Data Scientist',
      image: '/assets/team9.png',
      bio: 'Anjima is a data scientist with a strong academic foundation in Big Data Analytics and applied mathematics. She works extensively with machine learning and large language models, focusing on intelligent text processing, reinforcement learning for prompt optimization, and AI-driven analytical solutions. Passionate about research and continuous learning, she enjoys building innovative systems that combine statistical reasoning with modern AI techniques.'
    }
  ];

  return (
    <div className="py-24 sm:py-32 px-6 lg:px-12">
      {/* Meet the Leadership Section */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold tracking-tight text-center text-white sm:text-5xl lg:text-6xl mb-16 leading-tight">
          Meet the <span className="text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">Leadership</span>
        </h2>
        <div className="mx-auto max-w-6xl">
          {/* Group Photo - Top */}
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 rounded-3xl p-6 border border-[#D7BC6D]/30 hover:scale-105 transition-all duration-300 max-w-3xl w-full">
              <img src="/assets/leadership.png" alt="Leadership team" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>

          {/* Leadership Cards - Below Group Photo */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-[#D7BC6D]/5 to-[#CBA344]/5 backdrop-blur-sm border border-[#D7BC6D]/30 p-8 rounded-3xl hover:border-[#D7BC6D]/50 hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="mb-5">
                  <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 rounded-2xl p-4 border border-[#D7BC6D]/30 mb-5">
                    <img src={member.image} alt={`${member.name} ${member.surname}`} className="w-full h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                      {member.name} <span className="text-[#D7BC6D] drop-shadow-[0px_0px_20px_rgba(215,188,109,0.6)]">{member.surname}</span>
                    </h3>
                    <p className="text-lg font-bold text-[#D7BC6D] mb-4">{member.role}</p>
                  </div>
                </div>
                <p className="text-base text-gray-300 leading-relaxed text-center" dangerouslySetInnerHTML={{
                  __html: member.bio.replace(/telecom, finance, and government/g, '<span class="text-[#D7BC6D]">telecom, finance, and government</span>')
                    .replace(/fostering cross-sector collaboration/g, '<span class="text-[#D7BC6D]">fostering cross-sector collaboration</span>')
                    .replace(/Seasoned technology executive/g, '<span class="text-[#D7BC6D]">Seasoned technology executive</span>')
                    .replace(/ThakAlذكا/g, '<span class="text-[#D7BC6D]">ThakAlذكا</span>')
                    .replace(/expertise in building AI/g, '<span class="text-[#D7BC6D]">expertise in building AI</span>')
                    .replace(/regulatory data infrastructure/g, '<span class="text-[#D7BC6D]">regulatory data infrastructure</span>')
                    .replace(/AI across multiple sectors/g, '<span class="text-[#D7BC6D]">AI across multiple sectors</span>')
                    .replace(/Emirati investor/g, '<span class="text-[#D7BC6D]">Emirati investor</span>')
                    .replace(/investment expertise in AI and technology/g, '<span class="text-[#D7BC6D]">investment expertise in AI and technology</span>')
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-center text-white sm:text-5xl lg:text-6xl mb-16 leading-tight">
          Meet the <span className="text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">Team</span>
        </h2>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-[#D7BC6D]/5 to-[#CBA344]/5 backdrop-blur-sm border border-[#D7BC6D]/30 p-6 rounded-3xl hover:border-[#D7BC6D]/50 hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="mb-4">
                  <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 rounded-2xl p-3 border border-[#D7BC6D]/30 mb-4">
                    <img src={member.image} alt={`${member.name} ${member.surname}`} className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold tracking-tight text-white mb-1">
                      {member.name} <span className="text-[#D7BC6D] drop-shadow-[0px_0px_20px_rgba(215,188,109,0.6)]">{member.surname}</span>
                    </h3>
                    <p className="text-sm font-bold text-[#D7BC6D] mb-3">{member.role}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed text-center" dangerouslySetInnerHTML={{
                  __html: member.bio.replace(/design-driven Front-End Engineer/g, '<span class="text-[#D7BC6D]">design-driven Front-End Engineer</span>')
                    .replace(/modern web technologies/g, '<span class="text-[#D7BC6D]">modern web technologies</span>')
                    .replace(/Computer Science Engineering/g, '<span class="text-[#D7BC6D]">Computer Science Engineering</span>')
                    .replace(/senior Front-end developer/g, '<span class="text-[#D7BC6D]">senior Front-end developer</span>')
                    .replace(/4 years of experience/g, '<span class="text-[#D7BC6D]">4 years of experience</span>')
                    .replace(/Commercial & Crypto Fintech/g, '<span class="text-[#D7BC6D]">Commercial & Crypto Fintech</span>')
                    .replace(/intuitive, reliable interfaces/g, '<span class="text-[#D7BC6D]">intuitive, reliable interfaces</span>')
                    .replace(/Electronics and Communication Engineering/g, '<span class="text-[#D7BC6D]">Electronics and Communication Engineering</span>')
                    .replace(/software development/g, '<span class="text-[#D7BC6D]">software development</span>')
                    .replace(/complete, compliant legal agreements/g, '<span class="text-[#D7BC6D]">complete, compliant legal agreements</span>')
                    .replace(/robotics and AI engineering/g, '<span class="text-[#D7BC6D]">robotics and AI engineering</span>')
                    .replace(/software engineer and data scientist/g, '<span class="text-[#D7BC6D]">software engineer and data scientist</span>')
                    .replace(/vocalist in a band/g, '<span class="text-[#D7BC6D]">vocalist in a band</span>')
                    .replace(/Big Data Analytics and applied mathematics/g, '<span class="text-[#D7BC6D]">Big Data Analytics and applied mathematics</span>')
                    .replace(/machine learning and large language models/g, '<span class="text-[#D7BC6D]">machine learning and large language models</span>')
                    .replace(/intelligent text processing/g, '<span class="text-[#D7BC6D]">intelligent text processing</span>')
                    .replace(/reinforcement learning for prompt optimization/g, '<span class="text-[#D7BC6D]">reinforcement learning for prompt optimization</span>')
                    .replace(/statistical reasoning with modern AI techniques/g, '<span class="text-[#D7BC6D]">statistical reasoning with modern AI techniques</span>')
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
