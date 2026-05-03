import { Card } from "@heroui/react";
import Link from "next/link";
import React from "react";
const learningTips = [
  {
    id: 1,
    title: "Set a Consistent Study Schedule",
    description:
      "Dedicate a fixed time each day to learning. Even 30 minutes of focused study daily is more effective than cramming for hours once a week. Consistency builds habits and accelerates progress.",
    icon: "🕐",
    tip: "Try studying at the same time every day to build a powerful learning routine.",
  },
  {
    id: 2,
    title: "Practice What You Learn Immediately",
    description:
      "Don't just watch or read — apply every concept right away through real projects or exercises. Active practice reinforces memory, deepens understanding, and helps you retain knowledge far longer.",
    icon: "💡",
    tip: "After every lesson, spend at least 15 minutes applying the concept with a hands-on task.",
  },
  {
    id: 3,
    title: "Break Topics into Smaller Chunks",
    description:
      "Avoid overwhelming yourself by breaking large topics into bite-sized lessons. Focus on one concept at a time, master it, then move forward. This method — known as chunking — boosts retention and reduces burnout.",
    icon: "📚",
    tip: "Divide your course into weekly goals and celebrate small wins to stay motivated.",
  },
];

const LearningTipsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 mt-20">
      <h1 className="text-2xl md:text-5xl font-bold">
        Learning <span className="text-blue-500">Tips</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {learningTips.map((tip, index) => {
          return (
            <Card key={index}>
              <h1 className="text-5xl">{tip.icon}</h1>
              <Card.Header>
                <Card.Title> {tip.title} </Card.Title>
                <Card.Description>{tip.description}</Card.Description>
              </Card.Header>
              <Card.Footer>
                <Link
                  aria-label="Go to Acme Creator Hub (opens in new tab)"
                  href="https://heroui.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {tip.tip}
                </Link>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default LearningTipsSection;
