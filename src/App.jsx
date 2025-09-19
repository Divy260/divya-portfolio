/* eslint-disable no-unused-vars */
// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

// --- THEME MANAGEMENT (Simplified for Dark Theme Only) ---
const usePermanentDarkTheme = () => {
    useEffect(() => {
        // This effect runs once on component mount to set the dark theme.
        const root = window.document.documentElement;
        root.classList.remove('light'); // Ensure light mode is never active
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark'); // Keep local storage consistent
    }, []); // Empty dependency array means this runs only once.
};


// --- MAIN APP COMPONENT ---
export default function App() {
    usePermanentDarkTheme();
    const [isLoading, setIsLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('home');
    const sectionsRef = useRef([]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -60% 0px" }
        );

        sectionsRef.current = Array.from(document.querySelectorAll('section[id]'));
        sectionsRef.current.forEach(section => observer.observe(section));

        return () => {
            sectionsRef.current.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, [isLoading]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="dark-theme"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="font-inter bg-gray-950 text-gray-100" // Hardcoded dark theme classes
            >
                <Header activeSection={activeSection} />
                <main className="overflow-x-hidden">
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Achievements />
                    <Contact />
                </main>
                <Footer />
            </motion.div>
        </AnimatePresence>
    );
}