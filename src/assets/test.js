const data = {
  answers: {
    "+": [
      {
        text: "Very Inaccurate",
        value: 1,
      },
      {
        text: "Moderately Inaccurate",
        value: 2,
      },
      {
        text: "Neither Inaccurate nor Accurate",
        value: 3,
      },
      {
        text: "Moderately Accurate",
        value: 4,
      },
      {
        text: "Very Accurate",
        value: 5,
      },
    ],
    "-": [
      {
        text: "Very Inaccurate",
        value: 5,
      },
      {
        text: "Moderately Inaccurate",
        value: 4,
      },
      {
        text: "Neither Inaccurate nor Accurate",
        value: 3,
      },
      {
        text: "Moderately Accurate",
        value: 2,
      },
      {
        text: "Very Accurate",
        value: 1,
      },
    ],
  },
  questions: {
    adaptability: [
      {
        text: "Am good at taking advice.",
        key: "+",
        answer: "",
      },
      {
        text: "Adapt easily to new situations.",
        key: "+",
        answer: "",
      },
      {
        text: "Can stand criticism.",
        key: "+",
        answer: "",
      },
      {
        text: "Put down others' proposals.",
        key: "-",
        answer: "",
      },
      {
        text: "Want to have the last word.",
        key: "-",
        answer: "",
      },
      {
        text: "Am a bad loser.",
        key: "-",
        answer: "",
      },
      {
        text: "Don't tolerate critics.",
        key: "-",
        answer: "",
      },
      {
        text: "Can't stand being contradicted.",
        key: "-",
        answer: "",
      },
    ],
    understanding: [
      {
        text: "Take others' interests into account.",
        key: "+",
        answer: "",
      },
      {
        text: "Sympathize with others' feelings.",
        key: "+",
        answer: "",
      },
      {
        text: "Respect others' feelings.",
        key: "+",
        answer: "",
      },
      {
        text: "Like to be of service to others.",
        key: "+",
        answer: "",
      },
      {
        text: "Appreciate the viewpoints of others.",
        key: "+",
        answer: "",
      },
      {
        text: "Am not interested in other people's problems.",
        key: "-",
        answer: "",
      },
      {
        text: "Can't be bothered with other's needs.",
        key: "-",
        answer: "",
      },
      {
        text: "Take no time for others.",
        key: "-",
        answer: "",
      },
      {
        text: "I am indifferent to the feelings of others.",
        key: "-",
        answer: "",
      },
      {
        text: "Feel little concern for others.",
        key: "-",
        answer: "",
      },
    ],
    independence: [
      {
        text: "Don't care what others think.",
        key: "+",
        answer: "",
      },
      {
        text: "Feel it's OK that some people don't like me.",
        key: "+",
        answer: "",
      },
      {
        text: "Sail my own course.",
        key: "+",
        answer: "",
      },
      {
        text: "Don't care about dressing nicely.",
        key: "+",
        answer: "",
      },
      {
        text: "Want to be liked.",
        key: "-",
        answer: "",
      },
      {
        text: "Need reassurance.",
        key: "-",
        answer: "",
      },
      {
        text: "Seek support.",
        key: "-",
        answer: "",
      },
      {
        text: "Believe appearances are important.",
        key: "-",
        answer: "",
      },
      {
        text: "Need the approval of others.",
        key: "-",
        answer: "",
      },
      {
        text: "Love to be complimented.",
        key: "-",
        answer: "",
      },
    ],
    leadership: [
      {
        text: "Try to lead others.",
        key: "+",
        answer: "",
      },
      {
        text: "Have a strong need for power.",
        key: "+",
        answer: "",
      },
      {
        text: "Like having authority over others.",
        key: "+",
        answer: "",
      },
      {
        text: "Want to be in charge.",
        key: "+",
        answer: "",
      },
      {
        text: "See myself as a good leader.",
        key: "+",
        answer: "",
      },
      {
        text: "Find it easy to manipulate others.",
        key: "+",
        answer: "",
      },
      {
        text: "Wait for others to lead the way.",
        key: "-",
        answer: "",
      },
      {
        text: "Dislike taking responsibility for making decisions.",
        key: "-",
        answer: "",
      },
      {
        text: "Dislike having authority over others.",
        key: "-",
        answer: "",
      },
      {
        text: "Am not highly motivated to succeed.",
        key: "-",
        answer: "",
      },
    ],
    "impulse-control": [
      {
        text: "Keep my emotions under control.",
        key: "+",
        answer: "",
      },
      {
        text: "Let others finish what they are saying.",
        key: "+",
        answer: "",
      },
      {
        text: "Talk even when I know I shouldn't.",
        key: "-",
        answer: "",
      },
      {
        text: "React intensely.",
        key: "-",
        answer: "",
      },
      {
        text: "Demand attention.",
        key: "-",
        answer: "",
      },
      {
        text: "Barge in on conversations.",
        key: "-",
        answer: "",
      },
      {
        text: "Blurt out whatever comes into my mind.",
        key: "-",
        answer: "",
      },
      {
        text: "Shoot my mouth off.",
        key: "-",
        answer: "",
      },
      {
        text: "Like to gossip.",
        key: "-",
        answer: "",
      },
      {
        text: "Often make a fuss.",
        key: "-",
        answer: "",
      },
      {
        text: "Am easily excited.",
        key: "-",
        answer: "",
      },
    ],
    sociability: [
      {
        text: "Am skilled in handling social situations.",
        key: "+",
        answer: "",
      },
      {
        text: "Feel comfortable arounded people.",
        key: "+",
        answer: "",
      },
      {
        text: "Start conversations.",
        key: "+",
        answer: "",
      },
      {
        text: "Talk to a lot of different people at parties.",
        key: "+",
        answer: "",
      },
      {
        text: "Act comfortably with others.",
        key: "+",
        answer: "",
      },
      {
        text: "Find it difficult to approach others.",
        key: "-",
        answer: "",
      },
      {
        text: "Often feel uncomfortable arounded others.",
        key: "-",
        answer: "",
      },
      {
        text: "Have difficulty expressing my feelings.",
        key: "-",
        answer: "",
      },
      {
        text: "Only feel comfortable with friends.",
        key: "-",
        answer: "",
      },
      {
        text: "Have little to say.",
        key: "-",
        answer: "",
      },
    ],
    "problem-solving": [
      {
        text: "Enjoy games of strategy.",
        key: "+",
        answer: "",
      },
      {
        text: "Disliked math in school.",
        key: "-",
        answer: "",
      },
      {
        text: "Have an eye for detail.",
        key: "+",
        answer: "",
      },
      {
        text: "Do things in a logical order.",
        key: "+",
        answer: "",
      },
      {
        text: "Can work under pressure.",
        key: "+",
        answer: "",
      },
      {
        text: "Like to solve complex problems.",
        key: "+",
        answer: "",
      },
      {
        text: "Tend to analyze things.",
        key: "+",
        answer: "",
      },
      {
        text: "Reassure others.",
        key: "-",
        answer: "",
      },
      {
        text: "Want to know the reasons why.",
        key: "+",
        answer: "",
      },
      {
        text: "Inquire about others' well-being.",
        key: "-",
        answer: "",
      },
      {
        text: "Want to see things for myself.",
        key: "+",
        answer: "",
      },
      {
        text: "Dislike learning.",
        key: "-",
        answer: "",
      },
    ],
  },
  others:
    "cooperation, creativity/originality, perfectionism, emotion-based decision-making, risk-taking, hope/optimism, responsability, self-discipline, flexibility, patience, unconventionality, curiosity, self-discipline, responsability, interest in self-improvement, science interest, initiative, honesty",
};

export default data;
