import RecommendationCard from "../../../../components/Client/DashBoardComponent/RecommendationCard.jsx"
import {it, expect, describe } from "vitest"
import React from "react"
import { render, screen } from "@testing-library/react";
import { matchesProperty } from "lodash";
const mockProfiles = [
  {
    name: "Teklu Abayneh",
    title: "Full Stack Developer",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    matchPercentage: 92,
    rating: 4.8,
    completedJobs: 27,
    verified: true,
  },
  {
    name: "Sara Johnson",
    title: "UI/UX Designer",
    skills: ["Figma", "Sketch", "Adobe XD"],
    matchPercentage: 85,
    rating: 4.5,
    completedJobs: 19,
    verified: false,
  },
  {
    name: "David Kim",
    title: "Backend Engineer",
    skills: ["Node.js", "Express", "PostgreSQL", "Docker"],
    matchPercentage: 76,
    rating: 4.2,
    completedJobs: 35,
    verified: true,
  },
  {
    name: "Maria Lopez",
    title: "Mobile Developer",
    skills: ["React Native", "Flutter", "Firebase"],
    matchPercentage: 89,
    rating: 4.7,
    completedJobs: 21,
    verified: false,
  },
];
describe("RecommendationCard test", () => {
  it("should render all fields for the first profile", () => {
    render(<RecommendationCard {...mockProfiles[0]} />);

    // Check name
    const name = screen.getByText(mockProfiles[0].name);
    expect(name).toBeInTheDocument();

    // Check title
    const title = screen.getByText(mockProfiles[0].title);
    expect(title).toBeInTheDocument();

    // Check each skill
    mockProfiles[0].skills.forEach(skill => {
      const skillElement = screen.getByText(skill);
      expect(skillElement).toBeInTheDocument();
    });

    // Check matchPercentage (as string with %)
    const match = screen.getByText(`${mockProfiles[0].matchPercentage}%`);
    expect(match).toBeInTheDocument();

    // Check rating (e.g. "4.8 stars")
    const rating = screen.getByText(`${mockProfiles[0].rating}`);
    expect(rating).toBeInTheDocument();

    // Check completedJobs (e.g. "27 jobs completed")
    const jobs = screen.getByText(`${mockProfiles[0].completedJobs} jobs completed`);
    expect(jobs).toBeInTheDocument();

    // Check verified (if shown as text like "Verified" or icon title)
    if (mockProfiles[0].verified) {
      const verified = screen.getByText(/verified/i); // case-insensitive
      expect(verified).toBeInTheDocument();
    }
  });
});

