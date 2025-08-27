import { Brain, Database, HardDrive, PanelsTopLeft, Wrench } from "lucide-react";

interface Category {
  name: string;
  color1: string;
  color2: string;
  icon: React.ReactNode;
}

interface Skill {
  category: string;
  name: string;
  percent: number;
}

export default function Skills() {
  const categories: Category[] = [
    { name: "Frontend", color1: "#437FF6", color2: "#A158F7", icon: <PanelsTopLeft size={20}/> },
    { name: "Ciência de Dados", color1: "#10b981", color2: "#3b82f6", icon: <Brain size={20}/> },
    { name: "Backend", color1: "#f59e0b", color2: "#ef4444", icon: <HardDrive size={20}/> },
    { name: "Banco de Dados", color1: "#8b5cf6", color2: "#6366f1", icon: <Database size={20}/> },
    { name: "Outros", color1: "#f472b6", color2: "#facc15", icon: <Wrench size={20}/> },
  ];

  const skills: Skill[] = [
    { category: "Frontend", name: "JavaScript", percent: 75,},
    { category: "Frontend", name: "React", percent: 70,},
    { category: "Frontend", name: "TypeScript", percent: 70,},
    { category: "Frontend", name: "TailwindCSS", percent: 90,},
    { category: "Frontend", name: "Flutter", percent: 55,},
    { category: "Frontend", name: "Next", percent: 50,},

    { category: "Ciência de Dados", name: "Python", percent: 90,},
    { category: "Ciência de Dados", name: "Pandas", percent: 70,},
    { category: "Ciência de Dados", name: "Matplotlib e Seaborn", percent: 60,},
    { category: "Ciência de Dados", name: "Excel", percent: 40,},

    { category: "Backend", name: "FastAPI", percent: 40,},
    { category: "Backend", name: "Node", percent: 20,},

    { category: "Banco de Dados", name: "PostgreSQL", percent: 50,},

    { category: "Outros", name: "Docker", percent: 40,},
    { category: "Outros", name: "Git/GitHub", percent: 90,},
    { category: "Outros", name: "Figma", percent: 60,},
    { category: "Outros", name: "Testes de software", percent: 20,},
  ];
  
  const groupedSkills = skills.reduce((acc: Record<string, Skill[]>, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div id="skills" className="flex flex-col justify-center relative px-6 md:px-16 py-8 gap-8">
      {/* Detalhes Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 z-10 relative">
        {Object.entries(groupedSkills).map(([categoryName, skills]) => {
        const category = categories.find(cat => cat.name === categoryName);

        return (
          <div key={categoryName} className="glass-effect backdrop-blur-md rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-6 gap-2">
              <span style={{background: `linear-gradient(to right, ${category?.color1}, ${category?.color2})`,}}className="p-2 rounded-full text-white">{category?.icon}</span>
              <p className="text-xl font-semibold">{category?.name}</p>
            </div>
            <div className="flex flex-col gap-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <p>{skill.name}</p>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-gray-300"
                      style={{
                        width: `${skill.percent}%`,
                        
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}