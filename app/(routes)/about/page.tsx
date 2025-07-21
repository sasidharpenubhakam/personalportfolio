// app/(routes)/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { skills, SkillCategory } from "@/data/skills";

export default function AboutPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get to know more about my background and skills
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground">
            <p>
              I'm Sasidhar (He/Him), a passionate MERN Stack Developer specializing in crafting robust and scalable web applications. My expertise lies in leveraging React.js, Node.js, MongoDB, and Express.js to transform innovative ideas into engaging and functional web and mobile applications
              </p>
              <p>I am driven by the process of building digital solutions that not only meet technical requirements but also provide exceptional user experiences. With a strong focus on clean code and efficient architecture, I'm dedicated to delivering high-performance applications that bring concepts to life and solve real-world challenges              </p>
              {/* <p>
                I&apos;m particularly interested in the intersection of web development and blockchain technology, where I&apos;ve developed several projects that leverage the power of decentralized systems to create secure and transparent applications.
              </p> */}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id}>
                  <CardHeader className="p-4">
                    <CardTitle>
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        {edu.startDate} - {edu.endDate}
                      </span>
                      <span className="text-muted-foreground">{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <Badge variant="outline" className="mt-2">
                        CGPA: {edu.gpa}
                      </Badge>
                    )}
                    {edu.description && (
                      <p className="mt-2 text-sm">{edu.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            
            {Object.keys(skills).map((category) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-semibold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills[category as SkillCategory].map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}

            {/* <h2 className="text-2xl font-bold mt-8 mb-4">Achievements</h2> */}
            <Card>
              <CardContent className="p-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold"></span>
                    <span>
                      {/* Led University&apos;s Technical Team as Convener, increasing student engagement by 40% through committee formation and industry-aligned website redesigns. */}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold"></span>
                    <span>
                      {/* Served as a Board Member of the APP Design and Development Club, mentoring newcomers and improving skills by 60%. */}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold"></span>
                    <span>
                      {/* Won $1500 Nillion Track Prize at Hacker House Goa 2024. */}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold"></span>
                    <span>
                      {/* Awarded $600 at Move it with Aptos event. */}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold"></span>
                    <span>
                      {/* Received $500 Marbelism Track Prize at HACKSRM 2.0 2024. */}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold"></span>
                    <span>
                      {/* Won $100 at APPATHON 2022. */}
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}