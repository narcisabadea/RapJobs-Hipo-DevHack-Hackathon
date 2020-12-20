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
        answer: 0,
      },
      {
        text: "Adapt easily to new situations.",
        key: "+",
        answer: 0,
      },
      {
        text: "Can stand criticism.",
        key: "+",
        answer: 0,
      },
      {
        text: "Put down others' proposals.",
        key: "-",
        answer: 0,
      },
      {
        text: "Want to have the last word.",
        key: "-",
        answer: 0,
      },
      {
        text: "Am a bad loser.",
        key: "-",
        answer: 0,
      },
      {
        text: "Don't tolerate critics.",
        key: "-",
        answer: 0,
      },
      {
        text: "Can't stand being contradicted.",
        key: "-",
        answer: 0,
      },
    ],
    understanding: [
      {
        text: "Take others' interests into account.",
        key: "+",
        answer: 0,
      },
      {
        text: "Sympathize with others' feelings.",
        key: "+",
        answer: 0,
      },
      {
        text: "Respect others' feelings.",
        key: "+",
        answer: 0,
      },
      {
        text: "Like to be of service to others.",
        key: "+",
        answer: 0,
      },
      {
        text: "Appreciate the viewpoints of others.",
        key: "+",
        answer: 0,
      },
      {
        text: "Am not interested in other people's problems.",
        key: "-",
        answer: 0,
      },
      {
        text: "Can't be bothered with other's needs.",
        key: "-",
        answer: 0,
      },
      {
        text: "Take no time for others.",
        key: "-",
        answer: 0,
      },
      {
        text: "I am indifferent to the feelings of others.",
        key: "-",
        answer: 0,
      },
      {
        text: "Feel little concern for others.",
        key: "-",
        answer: 0,
      },
    ],
    independence: [
      {
        text: "Don't care what others think.",
        key: "+",
        answer: 0,
      },
      {
        text: "Feel it's OK that some people don't like me.",
        key: "+",
        answer: 0,
      },
      {
        text: "Sail my own course.",
        key: "+",
        answer: 0,
      },
      {
        text: "Don't care about dressing nicely.",
        key: "+",
        answer: 0,
      },
      {
        text: "Want to be liked.",
        key: "-",
        answer: 0,
      },
      {
        text: "Need reassurance.",
        key: "-",
        answer: 0,
      },
      {
        text: "Seek support.",
        key: "-",
        answer: 0,
      },
      {
        text: "Believe appearances are important.",
        key: "-",
        answer: 0,
      },
      {
        text: "Need the approval of others.",
        key: "-",
        answer: 0,
      },
      {
        text: "Love to be complimented.",
        key: "-",
        answer: 0,
      },
    ],
    leadership: [
      {
        text: "Try to lead others.",
        key: "+",
        answer: 0,
      },
      {
        text: "Have a strong need for power.",
        key: "+",
        answer: 0,
      },
      {
        text: "Like having authority over others.",
        key: "+",
        answer: 0,
      },
      {
        text: "Want to be in charge.",
        key: "+",
        answer: 0,
      },
      {
        text: "See myself as a good leader.",
        key: "+",
        answer: 0,
      },
      {
        text: "Find it easy to manipulate others.",
        key: "+",
        answer: 0,
      },
      {
        text: "Wait for others to lead the way.",
        key: "-",
        answer: 0,
      },
      {
        text: "Dislike taking responsibility for making decisions.",
        key: "-",
        answer: 0,
      },
      {
        text: "Dislike having authority over others.",
        key: "-",
        answer: 0,
      },
      {
        text: "Am not highly motivated to succeed.",
        key: "-",
        answer: 0,
      },
    ],
    impulseControl: [
      {
        text: "Keep my emotions under control.",
        key: "+",
        answer: 0,
      },
      {
        text: "Let others finish what they are saying.",
        key: "+",
        answer: 0,
      },
      {
        text: "Talk even when I know I shouldn't.",
        key: "-",
        answer: 0,
      },
      {
        text: "React intensely.",
        key: "-",
        answer: 0,
      },
      {
        text: "Demand attention.",
        key: "-",
        answer: 0,
      },
      {
        text: "Barge in on conversations.",
        key: "-",
        answer: 0,
      },
      {
        text: "Blurt out whatever comes into my mind.",
        key: "-",
        answer: 0,
      },
      {
        text: "Shoot my mouth off.",
        key: "-",
        answer: 0,
      },
      {
        text: "Like to gossip.",
        key: "-",
        answer: 0,
      },
      {
        text: "Often make a fuss.",
        key: "-",
        answer: 0,
      },
      {
        text: "Am easily excited.",
        key: "-",
        answer: 0,
      },
    ],
    sociability: [
      {
        text: "Am skilled in handling social situations.",
        key: "+",
        answer: 0,
      },
      {
        text: "Feel comfortable arounded people.",
        key: "+",
        answer: 0,
      },
      {
        text: "Start conversations.",
        key: "+",
        answer: 0,
      },
      {
        text: "Talk to a lot of different people at parties.",
        key: "+",
        answer: 0,
      },
      {
        text: "Act comfortably with others.",
        key: "+",
        answer: 0,
      },
      {
        text: "Find it difficult to approach others.",
        key: "-",
        answer: 0,
      },
      {
        text: "Often feel uncomfortable arounded others.",
        key: "-",
        answer: 0,
      },
      {
        text: "Have difficulty expressing my feelings.",
        key: "-",
        answer: 0,
      },
      {
        text: "Only feel comfortable with friends.",
        key: "-",
        answer: 0,
      },
      {
        text: "Have little to say.",
        key: "-",
        answer: 0,
      },
    ],
    problemSolving: [
      {
        text: "Enjoy games of strategy.",
        key: "+",
        answer: 0,
      },
      {
        text: "Disliked math in school.",
        key: "-",
        answer: 0,
      },
      {
        text: "Have an eye for detail.",
        key: "+",
        answer: 0,
      },
      {
        text: "Do things in a logical order.",
        key: "+",
        answer: 0,
      },
      {
        text: "Can work under pressure.",
        key: "+",
        answer: 0,
      },
      {
        text: "Like to solve complex problems.",
        key: "+",
        answer: 0,
      },
      {
        text: "Tend to analyze things.",
        key: "+",
        answer: 0,
      },
      {
        text: "Reassure others.",
        key: "-",
        answer: 0,
      },
      {
        text: "Want to know the reasons why.",
        key: "+",
        answer: 0,
      },
      {
        text: "Inquire about others' well-being.",
        key: "-",
        answer: 0,
      },
      {
        text: "Want to see things for myself.",
        key: "+",
        answer: 0,
      },
      {
        text: "Dislike learning.",
        key: "-",
        answer: 0,
      },
    ],
  },
  others:
    "cooperation, creativity/originality, perfectionism, emotion-based decision-making, risk-taking, hope/optimism, responsability, self-discipline, flexibility, patience, unconventionality, curiosity, self-discipline, responsability, interest in self-improvement, science interest, initiative, honesty",
};

export default data;
