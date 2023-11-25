const stringsObject = {
    1: "The art of programming lies in solving problems efficiently and elegantly. It requires patience, creativity, and attention to detail.",
    2: "Learning a new programming language can be both challenging and rewarding. Practice and perseverance are key to mastering it.",
    3: "Software development involves not just writing code but also understanding user needs and creating solutions that make a difference.",
    4: "Collaboration among team members is crucial in software projects. Effective communication and teamwork lead to successful outcomes.",
    5: "Continuous learning is essential in the tech industry. Staying updated with new technologies is important for professional growth.",
    6: "Understanding algorithms is fundamental in computer science. It helps in designing efficient solutions to complex problems.",
    7: "Debugging is a skill every programmer masters over time. It involves patience and systematic error identification.",
    8: "Version control systems like Git are essential tools in managing and tracking changes in software development projects.",
    9: "User experience design focuses on creating intuitive interfaces that enhance how users interact with software applications.",
    10: "Cybersecurity is critical in today's digital age. Protecting data and systems from threats is a constant challenge.",
    11: "Artificial intelligence is revolutionizing industries worldwide, from healthcare to finance and beyond.",
    12: "Machine learning algorithms enable computers to learn patterns and make data-driven predictions.",
    13: "Data structures play a crucial role in organizing and managing information in computer science.",
    14: "Cloud computing offers scalable and flexible solutions for storage, computation, and deployment.",
    0: "The Internet of Things (IoT) connects devices, creating smart and interconnected systems for diverse applications."
};

let randomstring=()=>{
    let value=Math.round(Math.random()*15)
    return stringsObject[value];
}

module.exports=randomstring;