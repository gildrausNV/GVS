import React from 'react';
import './Home.css';

const Home = ({ t }) => {
    const sections = [
        {
            title: 'Our Mission',
            content: 'GVS mission is to create highly dependable electronic systems that are easy to reason about, despite their essential complexity.',
        },
        {
            title: 'Company Overview',
            content: 'Business policy of GVS is openness for all modes of cooperation. GVS products are a result of in-house development based on original and innovative solutions. GVS has product lines for high-volume production of electronic assemblies and equipment for accompanying and field activities. Special attention is paid to work processes, especially quality assurance and development process.',
        },
        {
            title: 'Research and Development',
            content: 'Research & development center has a history as long as GVS itself and deep understanding of distributed systems, time sensitive networks, secure communications, high-efficiency power conversion and many other.',
        },
        {
            title: 'Environment',
            content: 'GVS actively demonstrates its commitment to the environment by selecting ecologically safe technologies and detailed automated inspection of all materials that are transferred from GVS to the environment.',
        },
    ];

    return (
        <div className="home">
            <h1 style={{ color: 'black' }}>{t('GVS')}</h1>
            <div className="carousel">
                {sections.map((section, index) => (
                    <div key={index} className="section">
                        <h2>{t(section.title)}</h2>
                        <p>{t(section.content)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
