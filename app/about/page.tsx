import React from 'react';
import styles from './About.module.css'; // Import the CSS module
import Layout from '../components/Layout/Layout';

const About: React.FC = () => {
    return (
        <Layout>
            <main className="page">
                <div className={`${styles.characterSummary}`}>
                    {/* Overall */}
                    <div className={styles.characterContent}>
                        <div className={styles.characterDescription}>
                            <h2>
                                <span className={styles.characterName}>Salty curmudgeons are people who are irritable, cantankerous and often sarcastic. They are usually older individuals who have lived through many society changes and feel that newer generations don't understand or appreciate the value of their experience. They are quick to criticize and may seem intimidating or unpleasant, but their gruff exterior often hides a wealth of knowledge and wisdom. While dealing with salty curmudgeons can be a challenge, it's important to remember that we can learn a lot from their life lessons and perspectives if we approach them with patience and an open mind.</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className={styles.characterSummary}>
                    {/* Riptide */}
                    <div className={styles.characterContent}>
                        <div className={styles.characterDescription}>
                            <h2>
                                <span className={styles.characterName}>Riptide</span>
                            </h2>
                            <p>
                                Riptide, the Salty Curmudgeon of our story, is like the ocean in a bad mood - unpredictable, sarcastic, and full of salty wisdom. With more experience than a cat has lives (and probably just as many scars), Riptide is our go-to guy when it comes to advice, albeit sometimes controversial. His take on life is a mix of gritty realism and dry humor, making every pearl of wisdom he imparts feel like a comedic punchline. When Riptide speaks, you can bet your last doubloon that you'll laugh and cringe in equal measure, but you'll never forget his hilarious and sometimes dubious advice.
                            </p>
                        </div>
                        <div className={styles.characterImage}>
                            <img
                                src="/cover.png"
                                alt="Riptide"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.characterSummary}>
                    {/* Blaze */}
                    <div className={styles.characterContent}>
                        <div className={styles.characterImage}>
                            <img
                                src="/cover.png"
                                alt="Blaze"
                            />
                        </div>
                        <div className={styles.characterDescription}>
                            <h2>
                                <span className={styles.characterName}>Blaze</span>
                            </h2>
                            <p>
                                Blaze, the enigmatic character of our tale, is the quiet giant with a voice that carries more weight than a cargo ship's anchor. While Riptide storms in with his brash wisdom, Blaze prefers the calm before the storm, and when he finally speaks, the world stands still. His words are few, but they hold the power to shift tides and turn the tide of any debate. In the midst of Riptide's raucous rants, Blaze's quiet utterances often steal the show, leaving everyone hanging on to his every word. He's the silent sage, and when he talks, everyone listens, hoping to catch a glimpse of his profound and intriguing insights.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.characterSummary}>
                    {/* Blaze */}
                    <div className={styles.characterContent}>
                        <div className={styles.characterDescription}>
                            <h2>
                                <span className={styles.characterName}>KillJoy</span>
                            </h2>
                            <p>
                                KillJoy, the relentless buzzkill of our crew, is the raincloud on our parade, the spoiler of joyous moments, and the extinguisher of fireworks - you name it, KillJoy can bring it down. But beneath that dark exterior lies a heart of gold, a heart that often feels a pang of remorse after crashing yet another positive moment. It's as if they were born with a "No Fun Allowed" sign on their forehead and a subscription to the "Misery Monthly" magazine.
                                Picture this: The crew is celebrating finding a hidden treasure chest, and just when everyone's about to do the happy dance, KillJoy chimes in with a gloomy factoid about treasure taxes, the environmental impact of chest excavation, or the existential crisis of gold doubloons. They may be a party pooper, but they're our party pooper, and deep down, they want nothing more than to see their shipmates happy (or at least in a mildly content state).
                                So, in the grand comedy of life on the high seas, KillJoy's the grumbling punchline we all secretly adore, because, let's face it, without them, the journey just wouldn't be as hilariously bittersweet.
                            </p>
                        </div>
                        <div className={styles.characterImage}>
                            <img
                                src="/cover.png"
                                alt="KillJoy"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default About;