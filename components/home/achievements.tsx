"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  colorClass: string;
}

// ⛔ Empty for now to avoid build errors. Add real data later.
const achievements: Achievement[] = [];

export function Achievements() {
  return (
    <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2> */}
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`${achievement.colorClass} shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{achievement.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <Badge className="mt-10">Let the world know what you’ve achieved!</Badge> */}
      </div>
    </section>
  );
}
