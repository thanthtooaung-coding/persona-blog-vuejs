<template>
    <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="bg-white rounded-lg shadow-xl overflow-hidden">
          <div class="relative h-80">
            <img 
              src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=1500&auto=format&fit=crop"
              alt="About Me"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end">
              <div class="p-8">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
                <p class="text-xl text-white/80">Full Stack Developer | Tech Enthusiast | Lifelong Learner</p>
              </div>
            </div>
          </div>
          
          <div class="p-8">
            <div class="flex flex-col lg:flex-row gap-8">
              <div class="lg:w-1/3">
                <div class="relative">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop"
                    alt="Profile"
                    class="w-full rounded-lg shadow-md"
                  />
                  <div class="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg w-24 h-24 flex items-center justify-center transform rotate-6">
                    <CodeIcon class="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div class="mt-8 space-y-4">
                  <div class="flex items-center space-x-2">
                    <MapPinIcon class="w-5 h-5 text-indigo-600" />
                    <span class="text-gray-600">Myanmar</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <BriefcaseIcon class="w-5 h-5 text-indigo-600" />
                    <span class="text-gray-600">Full Stack Developer</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <GraduationCapIcon class="w-5 h-5 text-indigo-600" />
                    <span class="text-gray-600">BSc Hons, Computing (Studying)</span>
                  </div>
                </div>
  
                <div class="mt-8">
                  <h3 class="text-xl font-bold text-gray-800 mb-4">Connect with me</h3>
                  <div class="flex space-x-4">
                    <a href="#" class="transform hover:scale-110 transition-transform duration-300">
                      <div class="w-10 h-10 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full flex items-center justify-center">
                        <GithubIcon class="w-5 h-5 text-white" />
                      </div>
                    </a>
                    <a href="#" class="transform hover:scale-110 transition-transform duration-300">
                      <div class="w-10 h-10 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full flex items-center justify-center">
                        <LinkedinIcon class="w-5 h-5 text-white" />
                      </div>
                    </a>
                    <a href="#" class="transform hover:scale-110 transition-transform duration-300">
                      <div class="w-10 h-10 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full flex items-center justify-center">
                        <TwitterIcon class="w-5 h-5 text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="lg:w-2/3">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Hello, I'm Thant Htoo Aung</h2>
                <div class="prose prose-lg text-gray-600">
                  <p>
                    I'm a passionate Full Stack Developer with {{ yearsOfExperience }} years of experience in modern web technologies. 
                    My journey in software development has been an exciting adventure of continuous learning and growth.
                  </p>
                  <p>
                    I specialize in:
                  </p>
                  <ul class="grid grid-cols-2 gap-4 my-4">
                    <li v-for="skill in specialties" :key="skill" class="flex items-center space-x-2">
                      <CheckCircleIcon class="w-5 h-5 text-indigo-600" />
                      <span>{{ skill }}</span>
                    </li>
                  </ul>
                  <p>
                    When I'm not coding, you can find me writing technical blogs, contributing to 
                    open-source projects, or exploring new technologies. I'm always excited to take on 
                    new challenges and push the boundaries of what's possible in web development.
                  </p>
                </div>
                
                <div class="mt-8">
                  <h3 class="text-2xl font-bold text-gray-800 mb-4">Latest Projects</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="project in projects" :key="project.name" 
                         class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h4 class="text-lg font-semibold text-indigo-600">{{ project.name }}</h4>
                      <p class="text-gray-600 mt-2">{{ project.description }}</p>
                      <div class="mt-4 flex space-x-2">
                        <span v-for="tech in project.technologies" :key="tech"
                              class="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                          {{ tech }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Skills Section -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Skills" :skills="frontendSkills" />
          <SkillCategory title="Backend Skills" :skills="backendSkills" />
          <SkillCategory title="Database Skills" :skills="databaseSkills" />
        </div>
  
        <!-- DevOps Section -->
        <div class="mt-12 bg-white rounded-lg shadow-xl p-8">
          <h3 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-6">
            DevOps & Cloud Technologies
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="tech in devOpsTechnologies" :key="tech.name" 
                 class="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <component :is="tech.icon" class="w-12 h-12 text-indigo-600 mb-2" />
              <span class="text-center font-medium text-gray-700">{{ tech.name }}</span>
            </div>
          </div>
        </div>
  
        <!-- Timeline Section -->
        <div class="mt-12 bg-white rounded-lg shadow-xl p-8">
          <h3 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-6">
            My Journey
          </h3>
          <Timeline :events="timelineEvents" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { 
    MapPinIcon, 
    BriefcaseIcon, 
    GraduationCapIcon,
    CodeIcon,
    CheckCircleIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    ServerIcon,
    CloudIcon,
    DatabaseIcon,
    CpuIcon
  } from 'lucide-vue-next'
  import SkillCategory from '../components/SkillCategory.vue'
  import Timeline from '../components/Timeline.vue'
  
  const startYear = 2022
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = computed(() => currentYear - startYear)
  
  const specialties = [
    'Java Spring Boot',
    'Go',
    'Python',    
    'Vue.js & React',
    'Angular',
    'DevOps & Cloud Technologies',
  ]
  
  const projects = [
    {
      name: 'E-learning Platform',
      description: 'A full-stack e-learning solution with real-time chat management.',
      technologies: ['Angular', 'Java Spring Boot', 'MySQL']
    },
    {
      name: 'Work From Home System',
      description: 'A remote work management system with form applying and detail monitoring.',
      technologies: ['Thymeleaf', 'Java Spring Boot', 'PostgreSQL']
    },
    {
      name: 'Real-time Chat Application',
      description: 'A scalable chat application with end-to-end encryption.',
      technologies: ['React', 'Go', 'WebSocket', 'Redis']
    },
    {
      name: 'Attendance Management System',
      description: 'An enterprise-attendance management system with real-time chat management.',
      technologies: ['Python', 'Flask', 'Jinja']
    }
  ]
  
  const frontendSkills = [
    { name: 'Angular', level: 95 },
    { name: 'Vue.js', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 85 },    
    { name: 'CSS & Tailwind CSS', level: 90 },
  ]
  
  const backendSkills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'Go', level: 75 },    
    { name: 'Php', level: 50 },
    { name: 'RESTful APIs', level: 95 }
  ]
  
  const databaseSkills = [
    { name: 'MySQL', level: 90 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'MongoDB', level: 60 },
    { name: 'DynamoDB', level: 45 },
    { name: 'Redis', level: 40 }
  ]
  
  const devOpsTechnologies = [
    { name: 'Docker', icon: ServerIcon },
    { name: 'Kubernetes', icon: ServerIcon },
    { name: 'AWS', icon: CloudIcon },    
    { name: 'CI/CD', icon: CpuIcon },
    { name: 'Apache Tomcat', icon: ServerIcon },
    // { name: 'GitHub Workflows', icon: CloudIcon },    
    { name: 'Supabase', icon: DatabaseIcon },
    // { name: 'RDS', icon: DatabaseIcon }
  ]
  
  const timelineEvents = [
    {
        date: '2022',
        title: 'ITPEC (IP) Certification',
        description: 'Earned IT Passport certification. Learned C++ and pseudo code.'
    },
    {
        date: '2023',
        title: 'ITPEC (FE) Certification',
        description: 'Achieved Fundamental IT Engineer certification. Studied Java web development.'
    },
    {
        date: '2023',
        title: 'Internship at Pearl Yadana Vocational Training Centre',
        description: 'Completed first full-stack project using Thymeleaf and Spring Boot.'
    },
    {
        date: '2024',
        title: 'OJT at DIR-ACE Technology',
        description: 'Gained experience in Spring Framework, VBA, COBOL, and Linux.'
    },
    {
        date: '2024',
        title: 'Junior Programmer',
        description: 'Worked on stock exchange apps using Java Swing, MyBatis, and Shell scripting.'
    }
  ]
  </script>
  
  