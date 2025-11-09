import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "Task Management",
      description: "Organize your tasks efficiently with our intuitive interface and smart categorization."
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      description: "Never miss a deadline with intelligent notifications and customizable alerts."
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      description: "Monitor your productivity with detailed analytics and insightful reports."
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Work seamlessly with your team through shared projects and real-time updates."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Transform Your Productivity with Our Vital Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;