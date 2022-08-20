import emoji from "react-easy-emoji";

export const greetings = {
	name: "Eric Wallace",
	title: "Let's create something amazing together!!!",
	description:
		"Ambitious and accomplished software engineering student with an upcoming bachelor’s " +
		"degree and experienced in software development, web development, and IT troubleshooting.  " +
		"Team player that is creative, strategic, and an innovative thinker, with phenomenal communication" +
		"skill and eager to expand skills by working with more experienced software engineers and developers " +
		"in a challenging environment.",
	resumeLink:
		"https://www.dropbox.com/s/t29kot0lusxuicf/ERIC_WALLACE_RESUME_2023.docx?dl=0",
};

export const githubUser = {
	username: "razzledazzle061980",
	bio: "An amateur developer and student passionate about app development. I have a thirst for knowledge with interest in Science and Technology.",
	avatar_url: "https://avatars.githubusercontent.com/u/24510600?s=400&u=3032c44fd52472163bf80465da1a3576f2418d56&v=4",
	location: "United States",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/razzledazzle061980/",
	linkedin: "https://www.linkedin.com/in/eric-wallace-43080850/",
};

export const skillsSection = {
	title: "What I have done!!",
	subTitle:
		"SOFTWARE ENGINEERING STUDENT WHO WANTS TO GAIN EXPERIENCE CREATING APPLICATIONS AND A SEASONED TECHNICAL SUPPORT AGENT",
	data: [
		{
			title: "Software Engineering Student",
			lottieAnimationFile: "/lottie/skills/engineering.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Learned industry standards for writing code in the Java, C++ and Python programming languages."),
				emoji("⚡ Learned the Agile Framework and the requirements of each role."),
				emoji("⚡ Learned Data Structures and the methodologies associated with each in the C++ programming language."),
				emoji("⚡ Learned the proper problem-solving techniques in business applications.  Learned to write code logically in a organized structured manner."),
			],
			softwareSkills: [
				{
					skillName: "C",
					imageName: "C.png",
				},
				{
					skillName: "Python",
					imageName: "Python.png",
				},
				{
					skillName: "Java",
					imageName: "Java.png",
				},
				{
					skillName: "JavaScript",
					imageName: "Javascript.png",
				},
				{
					skillName: "MongoDB",
					imageName: "MongoDB.png",
				}
			],
		},
		{
			title: "Technical Support",
			lottieAnimationFile: "/lottie/skills/customer-support.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Provided technical support on Windows, Linux and Mac OS operating systems."),
				emoji("⚡ Experienced with networking, printer/copier, PC/Server hardware, telecom, and routers/firewalls."),
				emoji("⚡ Provided technical support with products such as Service Now, MS Office/365, MS Teams, and MS OneDrive"),
				emoji("⚡ Have advanced working knowledge of Powershell, Visual Studio 2022, Visual Studio Code, and IntelliJ"),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "Windows",
					imageName: "Windows.png",
				},
				{
					skillName: "Mac OS",
					imageName: "Mac-OS.png",
				},
				{
					skillName: "Linux",
					imageName: "Linux.png",
				},
				{
					skillName: "Office",
					imageName: "Office.png",
				},
				{
					skillName: "Powershell",
					imageName: "Powershell.png",
				},
				{
					skillName: "VS Code",
					imageName: "VSCode.png",
				},
				{
					skillName: "Visual Studio",
					imageName: "VS.png",
				},
				{
					skillName: "MS Teams",
					imageName: "Teams.png",
				},
				{
					skillName: "OneDrive",
					imageName: "OneDrive.png",
				},
				{
					skillName: "IntelliJ",
					imageName: "Intellij.png",
				},
			],
		},
		{
			title: "Personal",
			lottieAnimationFile: "/lottie/skills/freelance.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Self taught React and Redux,Electron, HTML 5, CSS 3, and JavaScript"
				),
				emoji(
					"⚡ Created a personal powershell application for personal use"
				),
				emoji(
					"⚡ Through Udemy learned Flutter and created a personal Flutter application"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML 5",
					imageName: "Html.png",
				},
				{
					skillName: "CSS 3",
					imageName: "Css.png",
				},
				{
					skillName: "Javascript",
					imageName: "Javascript.png",
				},
				{
					skillName: "React",
					imageName: "React.png",
				},
				{
					skillName: "Redux",
					imageName: "Redux.png",
				},
				{
					skillName: "Flutter",
					imageName: "Flutter.png",
				},
				{
					skillName: "Powershell",
					imageName: "Powershell.png",
				},
				{
					skillName: "AngularJS",
					imageName: "Angular.png",
				},
				{
					skillName: "MongoDB",
					imageName: "MongoDB.png",
				}
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Java", //Insert stack or technology you have experience in
		progressPercentage: "75", //Insert relative proficiency in percentage
	},
	{
		Stack: "C++",
		progressPercentage: "60",
	},
	{
		Stack: "Python",
		progressPercentage: "70",
	},
	{
		Stack: "HTML 5",
		progressPercentage: "90",
	},
	{
		Stack: "JavaScript",
		progressPercentage: "85",
	},
	{
		Stack: "CSS 3",
		progressPercentage: "90",
	}
];

export const educationInfo = [
	{
		schoolName: "Southern New Hampshire University",
		subHeader: "Bachelor's in Software Engineering",
		duration: "Jan. 2020 - Present",
		desc: "Obtaining Bachelor's degree, projected completion of March 2023",
		grade: "Grade A",
		descBullets: [
			"Honor Roll Winter 2021",
			"Honor Roll Fall 2021",
			"Honor Roll Spring 2022",
			"Dean's List Summer 2022",
		],
	},
];

export const experience = [];

export const projects = [
	{
		name: "CS-250 Software Development Lifecycle",
		desc: "In this course we learned to examine the characteristics, documentation, and purpose of each stage in the SDLC. We learned the Agile Framework and the principles and best practices of Agile.",
		details: [
			("Learned the Agile Framework and the principles and best practices of Agile."),
			("Took on the role of each member of a development team and learned how to work together to complete a project."),
			("Studied scrum meetings, sprint planning, and sprint retrospectives."),
		],
		github: "https://github.com/razzledazzle061980/Software-Engineering-Portfolio/tree/master/CS-250%20Software%20Development%20Lifecycle",
	},
	{
		name: "CS-360 Mobile Architecture and Programming",
		desc: "In this course I learned the principles and best practices for developing mobile applications on the Android platform. I learned how to use Android Studio to create Android applications " +
			"and the proper techniques to use the most up-to-date components. In this course I created a fully functional Android application that uses the latest Android components and techniques.",
		details: [
			("Learned how to use Android Studio to create Android applications."),
			("Developed a fully functional mobile application using Java and Android Studio."),
			("Implemented device security features by requesting permissions from the user."),
		],
		github: "https://github.com/razzledazzle061980/Software-Engineering-Portfolio/tree/master/CS-360%20Mobile%20Architecture%20%26%20Programming\n",
	},
	{
		name: "CS-350 Emerging Systems Architecture & Technologies",
		desc: "This course solely focused on the C++ programming language and interacting with a Texas Instrument CC3220S development board. For the final project we were task with creating an application " +
			"that would interface with microcontrollers to act as a thermostat.",
		details: [
			("Learned how to use GPIO, timers, interrupts to illuminate LEDs, output message via serial connection and receive button input."),
			("Discovered and utilized state machines and learned how they can be used to maintain the state of various peripherals."),
			("Implemented a task scheduler using timers that would simultaneously execute multiple tasks, using button interrupts the desired temperature of the thermostat could be set and an LED showed the status " +
				"and recreate code for applications. I discovered how fundamental reverse engineering technologies and practices for maintaining and security-related use cases."),
		],
		github: "https://github.com/razzledazzle061980/Software-Engineering-Portfolio/tree/master/CS-350%20Emerging%20Systems%20Architectures%20%26%20Technologies",
	},
	{
		name: "CS-340 Client/Server Development",
		desc: "Learned how to apply database system concepts and principles to develop client/server applications " +
			"that interface client-side code with databases.",
		details: [
			("Created Python CRUD methods to interact with MongoDB."),
			("Implemented the Dash framework in Python to create a dashboard driven by data from a MongoDB."),
			("Used Plotly and Leaflet to incorporate charts and maps into the dashboard."),
		],
		github: "https://github.com/razzledazzle061980/Software-Engineering-Portfolio/tree/master/CS-340%20Client:Server%20Development",
	},
	{
		name: "CS-465 Full Stack Development",
		desc: "Learned and exercised designing and developing full stack applications using programming language frameworks. Created a " +
			"database and developed the code to interface it with an application",
		details: [
			("Used Express to create a static web site and api server."),
			("Created a MongoDB database and interfaced it with admin and client-side application."),
			("Developed a fully function admin site using Angular, MongoDB, and Express."),
		],
		github: "https://github.com/razzledazzle061980/Software-Engineering-Portfolio/tree/master/CS-465%20Full%20Stack%20Development"
	}
];
export const feedbacks = [
	{}
];
